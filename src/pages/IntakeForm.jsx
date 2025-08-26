import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Calendar, Upload, Clock, Phone, Mail, User, Home, CheckCircle, AlertCircle } from 'react-feather';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import { saveClientCalendar, uploadLeadsFile } from '../services/supabase';

// Styled Components
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

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 10px;
  font-size: 1rem;
  background: white;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #667eea;
  }
  
  input:checked + span {
    color: #667eea;
    font-weight: 600;
  }
`;

const TimeGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const UploadSection = styled.div`
  text-align: center;
  padding: 2rem;
  border: 2px dashed #e1e5e9;
  border-radius: 15px;
  margin: 1rem 0;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #667eea;
    background: rgba(102, 126, 234, 0.05);
  }
`;

const UploadButton = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
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

const TrialInfo = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
`;

const TrialTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TrialList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const TrialItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
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

const Alert = styled.div`
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  
  &.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`;

const IntakeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: 'Sauma AI', // Pre-filled
    phone: '',
    email: '',
    service: '',
    workingDays: [],
    startTime: '',
    endTime: '',
    timezone: '',
    appointmentDuration: '',
    customDuration: '',
    qualificationQuestions: '',
    leadsFile: null,
    googleCalendarConnected: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);
  const [googleTokens, setGoogleTokens] = useState(null);

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timezones = [
    'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
    'America/Phoenix', 'America/Anchorage', 'America/Honolulu', 'Europe/London',
    'Europe/Paris', 'Europe/Berlin', 'Asia/Tokyo', 'Asia/Shanghai', 'Australia/Sydney'
  ];

  // Handle Google OAuth callback
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
      // Handle the OAuth callback
      handleGoogleCallback(code);
    }
  }, []);

  const handleGoogleCallback = async (code) => {
    try {
      // In a real implementation, you'd exchange the code for tokens on your backend
      // For now, we'll simulate this
      setGoogleTokens({
        access_token: 'simulated_access_token',
        refresh_token: 'simulated_refresh_token',
        expires_at: new Date(Date.now() + 3600000).toISOString() // 1 hour from now
      });
      
      setFormData(prev => ({
        ...prev,
        googleCalendarConnected: true
      }));
      
      setAlert({ type: 'success', message: 'Google Calendar connected successfully!' });
    } catch (error) {
      setAlert({ type: 'error', message: 'Failed to connect Google Calendar.' });
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDayToggle = (day) => {
    setFormData(prev => ({
      ...prev,
      workingDays: prev.workingDays.includes(day)
        ? prev.workingDays.filter(d => d !== day)
        : [...prev.workingDays, day]
    }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
      setFormData(prev => ({
        ...prev,
        leadsFile: file
      }));
      setAlert({ type: 'success', message: 'CSV file uploaded successfully!' });
    } else {
      setAlert({ type: 'error', message: 'Please upload a valid CSV file.' });
    }
  };

  const connectGoogleCalendar = () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
    
    const scope = 'https://www.googleapis.com/auth/calendar';
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code&access_type=offline&prompt=consent`;
    
    window.open(authUrl, '_blank', 'width=500,height=600');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAlert(null);

    try {
      // Upload leads file if provided
      if (formData.leadsFile) {
        await uploadLeadsFile(formData.leadsFile);
      }

      // Save to client_calendars table
      const result = await saveClientCalendar(formData, googleTokens);
      
      setAlert({ 
        type: 'success', 
        message: `Your free trial has been set up successfully! Your client ID is: ${result.clientId}. We'll contact you shortly.` 
      });
      
      // Reset form
      setFormData({
        name: '',
        businessName: 'Sauma AI',
        phone: '',
        email: '',
        service: '',
        workingDays: [],
        startTime: '',
        endTime: '',
        timezone: '',
        appointmentDuration: '',
        customDuration: '',
        qualificationQuestions: '',
        leadsFile: null,
        googleCalendarConnected: false
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
        <title>7-Day Mercury AI Voice Appointment Setter - Free Trial Setup | Sauma AI</title>
        <meta name="description" content="Set up your free 7-day trial of Mercury AI Voice Appointment Setter. Get free inbound call answering & outbound lead outreach." />
      </Helmet>
      
      <PageContainer>
        <Navbar />
        
        <FormContainer>
          <FormCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FormTitle>7-Day Mercury AI Voice Appointment Setter</FormTitle>
            <FormSubtitle>
              Free Trial Setup - Includes free inbound call answering & free outbound lead outreach
            </FormSubtitle>

            {alert && (
              <Alert className={alert.type}>
                {alert.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                {alert.message}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              {/* Basic Contact Information */}
              <Section>
                <SectionTitle>
                  <User size={24} />
                  Basic Contact Information
                </SectionTitle>
                
                <FormGroup>
                  <Label>Your Name *</Label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Business Name</Label>
                  <Input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Best Phone Number *</Label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Email Address *</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </FormGroup>
              </Section>

              {/* Implementation Details */}
              <Section>
                <SectionTitle>
                  <Home size={24} />
                  Implementation Details
                </SectionTitle>

                <FormGroup>
                  <Label>Service</Label>
                  <TextArea
                    placeholder="Which service will you be scheduling appointments for?"
                    value={formData.service}
                    onChange={(e) => handleInputChange('service', e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>What days do you perform this service?</Label>
                  <CheckboxGroup>
                    {daysOfWeek.map(day => (
                      <CheckboxLabel key={day}>
                        <input
                          type="checkbox"
                          checked={formData.workingDays.includes(day)}
                          onChange={() => handleDayToggle(day)}
                        />
                        <span>{day}</span>
                      </CheckboxLabel>
                    ))}
                  </CheckboxGroup>
                </FormGroup>

                <FormGroup>
                  <Label>What are your service hours?</Label>
                  <TimeGroup>
                    <div>
                      <Label>Start time</Label>
                      <Input
                        type="time"
                        value={formData.startTime}
                        onChange={(e) => handleInputChange('startTime', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label>End time</Label>
                      <Input
                        type="time"
                        value={formData.endTime}
                        onChange={(e) => handleInputChange('endTime', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label>Time zone</Label>
                      <Select
                        value={formData.timezone}
                        onChange={(e) => handleInputChange('timezone', e.target.value)}
                        required
                      >
                        <option value="">Select timezone</option>
                        {timezones.map(tz => (
                          <option key={tz} value={tz}>{tz.replace('_', ' ')}</option>
                        ))}
                      </Select>
                    </div>
                  </TimeGroup>
                </FormGroup>

                <FormGroup>
                  <Label>How long are your typical appointments?</Label>
                  <CheckboxGroup>
                    {['15 minutes', '30 minutes', '45 minutes', '1 hour'].map(duration => (
                      <CheckboxLabel key={duration}>
                        <input
                          type="radio"
                          name="appointmentDuration"
                          value={duration}
                          checked={formData.appointmentDuration === duration}
                          onChange={(e) => handleInputChange('appointmentDuration', e.target.value)}
                        />
                        <span>{duration}</span>
                      </CheckboxLabel>
                    ))}
                    <CheckboxLabel>
                      <input
                        type="radio"
                        name="appointmentDuration"
                        value="custom"
                        checked={formData.appointmentDuration === 'custom'}
                        onChange={(e) => handleInputChange('appointmentDuration', e.target.value)}
                      />
                      <span>Other:</span>
                      <Input
                        type="text"
                        placeholder="Specify duration"
                        value={formData.customDuration}
                        onChange={(e) => handleInputChange('customDuration', e.target.value)}
                        style={{ width: '120px', marginLeft: '0.5rem' }}
                      />
                    </CheckboxLabel>
                  </CheckboxGroup>
                </FormGroup>

                <FormGroup>
                  <Label>Lead Qualification Questions (Optional)</Label>
                  <TextArea
                    placeholder="Any specific questions the AI should ask before booking? (e.g., budget range, timeline, specific service interest)"
                    value={formData.qualificationQuestions}
                    onChange={(e) => handleInputChange('qualificationQuestions', e.target.value)}
                  />
                </FormGroup>
              </Section>

              {/* Upload Leads */}
              <Section>
                <SectionTitle>
                  <Upload size={24} />
                  Upload Your List Of Leads (50 maximum)
                </SectionTitle>
                <p style={{ color: '#666', marginBottom: '1rem' }}>
                  These leads must have already opted in to being called by you.
                </p>
                
                <UploadSection>
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                    id="leads-upload"
                  />
                  <UploadButton htmlFor="leads-upload">
                    <Upload size={20} />
                    Upload CSV
                  </UploadButton>
                  {formData.leadsFile && (
                    <p style={{ marginTop: '1rem', color: '#667eea' }}>
                      ✓ {formData.leadsFile.name}
                    </p>
                  )}
                </UploadSection>
              </Section>

              {/* Calendar Integration */}
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

              {/* Trial Expectations */}
              <TrialInfo>
                <TrialTitle>
                  <CheckCircle size={24} />
                  Trial Expectations
                </TrialTitle>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>During your 7-day trial:</strong>
                </p>
                <TrialList>
                  <TrialItem>
                    <CheckCircle size={16} />
                    AI will handle incoming appointment requests
                  </TrialItem>
                  <TrialItem>
                    <CheckCircle size={16} />
                    Qualified leads will be automatically scheduled
                  </TrialItem>
                  <TrialItem>
                    <CheckCircle size={16} />
                    No setup fees or commitments
                  </TrialItem>
                </TrialList>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                  <strong>Questions?</strong> Text/call us at <a href="tel:+1234567890" style={{ color: 'white', textDecoration: 'underline' }}>+1 (234) 567-890</a>
                </p>
              </TrialInfo>

              <p style={{ textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '2rem' }}>
                By submitting this form, you agree to our 7-day free trial terms. No payment required to start.
              </p>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Setting up your trial...' : 'START MY FREE TRIAL'}
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
