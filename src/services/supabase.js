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
