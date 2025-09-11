import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Add validation to ensure environment variables are loaded
if (!supabaseUrl) {
  throw new Error('VITE_SUPABASE_URL is required. Please check your .env file.');
}

if (!supabaseAnonKey) {
  throw new Error('VITE_SUPABASE_ANON_KEY is required. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const saveClientCalendar = async (formData, tokens) => {
  try {
    // Generate a unique client ID
    const clientId = `client_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Prepare availability data
    const availabilityData = {
      service: formData.service,
      workingDays: formData.workingDays,
      startTime: formData.startTime,
      endTime: formData.endTime,
      timezone: formData.timezone,
      appointmentDuration: formData.appointmentDuration,
      customDuration: formData.customDuration,
      qualificationQuestions: formData.qualificationQuestions,
      leadsFile: formData.leadsFile?.name || null,
      trialStartDate: new Date().toISOString(),
      trialEndDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days from now
    };

    const { data, error } = await supabase
      .from('client_calendars')
      .insert([
        {
          client_id: clientId,
          client_name: formData.name,
          business_name: formData.businessName,
          phone: formData.phone,
          email: formData.email,
          availability_data: availabilityData,
          access_token: tokens?.access_token || '',
          refresh_token: tokens?.refresh_token || '',
          token_expires_at: tokens?.expires_at ? new Date(tokens.expires_at) : null
        }
      ])
      .select();

    if (error) throw error;
    return { success: true, data, clientId };
  } catch (error) {
    console.error('Error saving client calendar:', error);
    throw error;
  }
};

export const uploadLeadsFile = async (file) => {
  try {
    const fileName = `leads/${Date.now()}_${file.name}`;
    const { data, error } = await supabase.storage
      .from('intake-files')
      .upload(fileName, file);

    if (error) throw error;
    return { success: true, url: data.path };
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

export const saveIntakeSubmission = async (formData, tokens) => {
  try {
    console.log('Saving intake submission...', { email: formData.email, company: formData.companyName });

    const submissionPayload = {
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      company_name: formData.companyName,
      website_url: formData.websiteUrl,
      call_transfer_number: formData.callTransferNumber,
      agent_id: null,
      access_token: tokens?.access_token || null,
      refresh_token: tokens?.refresh_token || null,
      token_expires_at: tokens?.expires_at ? new Date(tokens.expires_at).toISOString() : null
    };

    const { data: submissionRow, error: submissionErr } = await supabase
      .from('intake_submissions')
      .insert([submissionPayload])
      .select('id')
      .single();

    if (submissionErr) {
      console.error('Error inserting submission:', submissionErr);
      throw submissionErr;
    }

    const submissionId = submissionRow.id;
    console.log('Submission created with ID:', submissionId);

    // Insert services if they exist
    const services = (formData.services || [])
      .filter(s => s.name && s.price && s.description && s.durationMinutes)
      .map(s => ({
        submission_id: submissionId,
        name: s.name,
        price: parseFloat(s.price),
        description: s.description,
        duration_minutes: parseInt(s.durationMinutes, 10)
      }));

    if (services.length > 0) {
      console.log(`Inserting ${services.length} services...`);
      const { error: servicesErr } = await supabase
        .from('intake_services')
        .insert(services);
      
      if (servicesErr) {
        console.error('Error inserting services:', servicesErr);
        throw servicesErr;
      }
      console.log('Services inserted successfully');
    }

    // Call the edge function to initialize LLM/agent
    console.log('Calling edge function to initialize LLM...');
    
    try {
      const fnUrl = import.meta.env.VITE_SUPABASE_INIT_LLM_URL;
      
      if (fnUrl) {
        console.log('Making request to:', fnUrl);
        
        const response = await fetch(fnUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY
          },
          body: JSON.stringify({ submissionId })
        });

        console.log('Response status:', response.status);

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Edge function HTTP error:', response.status, errorText);
        } else {
          const result = await response.json();
          console.log('Edge function response:', result);
        }
      } else {
        console.warn('VITE_SUPABASE_INIT_LLM_URL not configured in environment variables');
      }
    } catch (fetchErr) {
      console.error('Edge function fetch failed:', fetchErr);
      // Don't throw here - let the submission complete even if LLM setup fails
    }

    return { success: true, submissionId };
  } catch (error) {
    console.error('Error saving intake submission:', error);
    throw error;
  }
};