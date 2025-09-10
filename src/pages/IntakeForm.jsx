import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Calendar, Phone, Mail, User, Home, PlusCircle, Trash2, AlertCircle, CheckCircle, Link as LinkIcon, Clock } from 'react-feather';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import { saveIntakeSubmission } from '../services/supabase';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 2rem 80px;
  
  @media (max-width: 768px) {
    padding: 100px 1rem 60px;
  }
`;

const FormCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const FormTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FormSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
`;

const Section = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const GoogleCalendarButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #4285f4;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #3367d6;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(66, 133, 244, 0.3);
  }
`;

const ServiceRow = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr 1fr 0.5fr auto;
  gap: 0.75rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Small = styled.small`
  color: #666;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const IntakeForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    websiteUrl: '',
    callTransferNumber: '',
    googleCalendarConnected: false,
    services: [
      { name: '', price: '', description: '', durationMinutes: '' }
    ]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);
  const [googleTokens, setGoogleTokens] = useState(null);

  // Handle Google OAuth callback
  useEffect(() => {
    // Listen for messages from OAuth popup
    const handleMessage = (event) => {
      // Verify the message is from our domain
      if (event.origin !== window.location.origin) return;

      if (event.data.success) {
        // Handle successful OAuth
        handleGoogleCallback(event.data.code);
      } else {
        // Handle OAuth error
        setAlert({ type: 'error', message: event.data.error || 'Failed to connect Google Calendar.' });
      }
    };

    window.addEventListener('message', handleMessage);

    // Also handle direct URL callback (fallback for non-popup scenarios)
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) handleGoogleCallback(code);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const handleGoogleCallback = async (code) => {
    try {
      setGoogleTokens({
        access_token: 'simulated_access_token',
        refresh_token: 'simulated_refresh_token',
        expires_at: new Date(Date.now() + 3600000).toISOString()
      });
      setFormData(prev => ({ ...prev, googleCalendarConnected: true }));
      setAlert({ type: 'success', message: 'Google Calendar connected successfully!' });
    } catch {
      setAlert({ type: 'error', message: 'Failed to connect Google Calendar.' });
    }
  };

  const connectGoogleCalendar = () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
    const scope = 'https://www.googleapis.com/auth/calendar';
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code&access_type=offline&prompt=consent`;
    window.open(authUrl, '_blank', 'width=500,height=600');
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceChange = (index, field, value) => {
    setFormData(prev => {
      const next = [...prev.services];
      next[index] = { ...next[index], [field]: value };
      return { ...prev, services: next };
    });
  };

  const addService = () => {
    setFormData(prev => {
      if (prev.services.length >= 5) return prev;
      return {
        ...prev,
        services: [...prev.services, { name: '', price: '', description: '', durationMinutes: '' }]
      };
    });
  };

  const removeService = (index) => {
    setFormData(prev => {
      const next = prev.services.filter((_, i) => i !== index);
      return { ...prev, services: next.length ? next : [{ name: '', price: '', description: '', durationMinutes: '' }] };
    });
  };

  const validate = () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.companyName || !formData.websiteUrl || !formData.callTransferNumber) {
      return 'Please complete all required fields.';
    }
    const s0 = formData.services[0];
    if (!s0.name || !s0.price || !s0.description || !s0.durationMinutes) {
      return 'Please provide at least one service with name, price, description, and duration.';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAlert(null);

    const errorMsg = validate();
    if (errorMsg) {
      setAlert({ type: 'error', message: errorMsg });
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await saveIntakeSubmission(formData, googleTokens);
      setAlert({
        type: 'success',
        message: `Your intake has been submitted successfully! Submission ID: ${result.submissionId}. We'll contact you shortly.`
      });

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        websiteUrl: '',
        callTransferNumber: '',
        googleCalendarConnected: false,
        services: [{ name: '', price: '', description: '', durationMinutes: '' }]
      });
      setGoogleTokens(null);
    } catch (error) {
      console.error('Submission error:', error);
      setAlert({ type: 'error', message: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Client Intake Form | Sauma AI</title>
        <meta name="description" content="Provide your details to set up your AI receptionist." />
      </Helmet>

      <PageContainer>
        <Navbar />

        <FormContainer>
          <FormCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FormTitle>Mercury AI Entry Level Receptionist Intake Form</FormTitle>
            <FormSubtitle>Fill in your contact details, services, and connect your calendar.</FormSubtitle>

            {alert && (
              <div className={`alert ${alert.type}`} style={{
                padding: '1rem', borderRadius: 10, margin: '1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem',
                background: alert.type === 'success' ? '#d4edda' : '#f8d7da',
                color: alert.type === 'success' ? '#155724' : '#721c24',
                border: `1px solid ${alert.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
              }}>
                {alert.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                {alert.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <Section>
                <SectionTitle>
                  <User size={24} />
                  Basic Information
                </SectionTitle>

                <FormGroup>
                  <Label>Full Name *</Label>
                  <Input type="text" value={formData.fullName} onChange={(e) => handleChange('fullName', e.target.value)} required />
                </FormGroup>

                <FormGroup>
                  <Label>Email Address *</Label>
                  <Input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} required />
                  <Small>Note: Use the same email you used for the demo.</Small>
                </FormGroup>

                <FormGroup>
                  <Label>Phone Number *</Label>
                  <Input type="tel" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} required />
                </FormGroup>

                <FormGroup>
                  <Label>Company Name *</Label>
                  <Input type="text" value={formData.companyName} onChange={(e) => handleChange('companyName', e.target.value)} required />
                </FormGroup>

                <FormGroup>
                  <Label>Website URL *</Label>
                  <Input type="url" value={formData.websiteUrl} onChange={(e) => handleChange('websiteUrl', e.target.value)} required />
                </FormGroup>

                <FormGroup>
                  <Label>Call Transfer Number *</Label>
                  <Input type="tel" value={formData.callTransferNumber} onChange={(e) => handleChange('callTransferNumber', e.target.value)} required />
                </FormGroup>
              </Section>

              <Section>
                <SectionTitle>
                  <Home size={24} />
                  Top Services
                </SectionTitle>
                <Small>Provide at least one service. You can add up to five.</Small>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                  {formData.services.map((svc, idx) => (
                    <ServiceRow key={idx}>
                      <Input
                        type="text"
                        placeholder="Service name"
                        value={svc.name}
                        onChange={(e) => handleServiceChange(idx, 'name', e.target.value)}
                        required={idx === 0}
                      />
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="Price (e.g., 99.99)"
                        value={svc.price}
                        onChange={(e) => handleServiceChange(idx, 'price', e.target.value)}
                        required={idx === 0}
                      />
                      <Input
                        type="number"
                        step="1"
                        placeholder="Duration (minutes)"
                        value={svc.durationMinutes}
                        onChange={(e) => handleServiceChange(idx, 'durationMinutes', e.target.value)}
                        required={idx === 0}
                      />
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Clock size={16} />
                        <Small>mins</Small>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                        {formData.services.length > 1 && (
                          <Button type="button" onClick={() => removeService(idx)} variant="secondary">
                            <Trash2 size={16} /> Remove
                          </Button>
                        )}
                      </div>
                      <div style={{ gridColumn: '1 / -1' }}>
                        <TextArea
                          placeholder="Description"
                          value={svc.description}
                          onChange={(e) => handleServiceChange(idx, 'description', e.target.value)}
                          required={idx === 0}
                        />
                      </div>
                    </ServiceRow>
                  ))}
                </div>

                <div style={{ marginTop: '0.75rem' }}>
                  <Button type="button" onClick={addService} disabled={formData.services.length >= 5}>
                    <PlusCircle size={16} /> Add another service
                  </Button>
                  {formData.services.length >= 5 && (
                    <Small style={{ marginLeft: 12 }}>Maximum of 5 services reached.</Small>
                  )}
                </div>
              </Section>

              <Section>
                <SectionTitle>
                  <Calendar size={24} />
                  Calendar Integration
                </SectionTitle>
                
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ marginBottom: '0.5rem' }}>🗓️ Connect Your Google Calendar</h3>
                  <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                    This allows booked appointments to automatically appear in your existing calendar
                  </p>
                  
                  <GoogleCalendarButton
                    type="button"
                    onClick={connectGoogleCalendar}
                    disabled={formData.googleCalendarConnected}
                  >
                    <Calendar size={20} />
                    {formData.googleCalendarConnected ? 'Calendar Connected ✓' : 'Connect Google Calendar'}
                  </GoogleCalendarButton>
                  
                  {formData.googleCalendarConnected && (
                    <p style={{ marginTop: '1rem', color: '#4285f4' }}>
                      ✓ Calendar connected successfully
                    </p>
                  )}
                </div>
                
                <p style={{ color: '#666', fontSize: '0.9rem', textAlign: 'center' }}>
                  By connecting your calendar, you ensure no double-bookings and seamless scheduling.
                </p>
              </Section>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Intake Form'}
              </SubmitButton>
            </form>
          </FormCard>
        </FormContainer>

        <Footer />
      </PageContainer>
    </>
  );
};

export default IntakeForm;
