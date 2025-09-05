import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, CheckCircle, Globe, Zap, Phone } from 'react-feather';
import { useState } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import TestimonialSlider from '../components/common/TestimonialSlider';
import Button from '../components/common/Button';
import LogoScroller from '../components/common/LogoScroller';
import VideoSection from '../components/mercury/VideoSection'; // Add this import
import { supabase } from '../services/supabase';

// Styled Components
const HeroContainer = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 120px 0 80px;
  
  @media (max-width: 768px) {
    padding-top: 100px;
    min-height: auto;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  max-width: 500px;
  
  @media (max-width: 992px) {
    max-width: 100%;
    text-align: center;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  
  @media (max-width: 992px) {
    width: 100%;
    justify-content: center;
  }
`;

const HeroHeading = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubheading = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  opacity: 0.85;
`;

const BenefitsList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  
  svg {
    margin-right: 12px;
    color: ${props => props.theme.colors.primary};
  }
`;

const FormGlassCard = styled.div`
  ${props => props.theme.glassmorphism};
  padding: 2rem;
  width: 100%;
  max-width: 450px;
  border-radius: 15px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const FormTitle = styled.h3`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: auto;
`;

const SuccessMessage = styled.div`
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #22c55e;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.div`
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 1rem;
`;

const CalendarButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const CalendarTitle = styled.h4`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`;

const CalendarDescription = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  opacity: 0.8;
  line-height: 1.6;
`;

const CalendarContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CalWrapper = styled.div`
  flex: 1;
  min-height: 400px;
  
  /* Ensure Cal.com embed fits properly */
  & > div {
    height: 100% !important;
  }
`;

const SectionContainer = styled.section`
  padding: 5rem 0;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
`;

const InfoCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoGlassCard = styled.div`
  ${props => props.theme.glassmorphism};
  padding: 2rem;
  text-align: center;
  border-radius: 15px;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  
  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.8;
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  ${props => props.theme.glassmorphism};
  margin-bottom: 1rem;
  border-radius: 10px;
  overflow: hidden;
`;

const FAQQuestion = styled.h3`
  padding: 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
`;

const FAQAnswer = styled.div`
  padding: 0 1.5rem 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.8;
`;

const BookDemo = () => {
  return (
    <>
      <Helmet>
        <title>Book a Demo - Sauma AI</title>
        <meta name="description" content="Get your custom AI demo in just 15 minutes. Simply share your website and we'll create a personalized AI agent for your business." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <LogoSection>
          <LogoHeading>Businesses That Trust Sauma AI</LogoHeading>
          <LogoScroller />
        </LogoSection>
        <DemoInfoSection />
        <VideoSection />
        <TestimonialSection />
        <FAQSection />
      </main>
      
      <Footer />
    </>
  );
};

// Add new styled components for the button container and phone icon
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  margin-top: 2rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PhoneIcon = styled(Phone)`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  vertical-align: middle;
`;

// Add new styled components for the logo scroller section
const LogoSection = styled.section`
  padding: 3rem 0;
  background-color: rgba(245, 245, 247, 0.5);
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const LogoHeading = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
`;

// Hero Section with split design
const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    websiteUrl: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [demoScheduled, setDemoScheduled] = useState(false); // Add this state

  // Initialize Cal.com popup functionality
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"free-mercury-demo-30-min"});
      cal("ui", {
        "theme":"light",
        "cssVarsPerTheme":{
          "light":{
            "cal-brand":"#f88734"
          }
        },
        "hideEventTypeDetails":false,
        "layout":"month_view"
      });
    })();
  }, []);

  // Listen for status changes in Supabase using polling
  useEffect(() => {
    if (submittedData?.email && !demoScheduled) {
      console.log('Starting polling for email:', submittedData.email);
      
      const pollForStatus = async () => {
        try {
          const { data, error } = await supabase
            .from('demo_leads')
            .select('status')
            .eq('email', submittedData.email)
            .single();
            
          console.log('Polling result:', data);
          
          if (data && data.status === 'demo_scheduled') {
            console.log('Demo scheduled found via polling!');
            setDemoScheduled(true);
          }
        } catch (err) {
          console.log('Polling error:', err);
        }
      };

      // Poll every 3 seconds
      const interval = setInterval(pollForStatus, 3000);
      
      // Also poll immediately
      pollForStatus();

      return () => {
        console.log('Cleaning up polling');
        clearInterval(interval);
      };
    }
  }, [submittedData?.email, demoScheduled]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formatPhoneNumber = (phone) => {
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    
    // If it starts with 1 and is 11 digits, it's already in US format
    if (cleaned.length === 11 && cleaned.startsWith('1')) {
      return `+${cleaned}`;
    }
    
    // If it's 10 digits, assume it's a US number and add +1
    if (cleaned.length === 10) {
      return `+1${cleaned}`;
    }
    
    // If it already starts with +, return as is
    if (phone.startsWith('+')) {
      return phone;
    }
    
    // For other cases, try to add +1 if it looks like a US number
    if (cleaned.length >= 10) {
      return `+1${cleaned}`;
    }
    
    // Fallback: return the original phone number
    return phone;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { error } = await supabase
        .from('demo_leads')
        .insert([{
          name: formData.name,
          email: formData.email,
          lead_phone: formData.phone,  // Changed from phone to lead_phone
          company_name: formData.companyName,
          website_url: formData.websiteUrl,
          status: 'pending_booking',
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;
      
      // Store the submitted data for Cal.com prefilling
      setSubmittedData({
        name: formData.name,
        email: formData.email
      });
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', companyName: '', websiteUrl: '' });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an error submitting your request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <HeroContainer>
      <HeroBackground>
        <img src="/assets/hero-background1.svg" alt="" aria-hidden="true" />
      </HeroBackground>
      
      <HeroContent>
        <LeftColumn>
          <HeroHeading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Custom AI Demo in Just 15 Minutes
          </HeroHeading>
          
          <HeroSubheading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Share your website and we'll create a personalized AI agent tailored to your business. See it in action at your chosen time.
          </HeroSubheading>
          
          <BenefitsList
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <BenefitItem>
              <CheckCircle size={20} />
              <span>We analyze your website and create a custom AI</span>
            </BenefitItem>
            <BenefitItem>
              <CheckCircle size={20} />
              <span>Book a time that works for your schedule</span>
            </BenefitItem>
            <BenefitItem>
              <CheckCircle size={20} />
              <span>See your AI in action during the demo</span>
            </BenefitItem>
          </BenefitsList>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ButtonContainer>
              <Button as="a" href="tel:+1-575-651-2233">Talk To Mercury <PhoneIcon /></Button>
            </ButtonContainer>
          </motion.div>
        </LeftColumn>
        
        <RightColumn>
          <FormGlassCard>
            {!isSubmitted ? (
              <>
                <FormTitle>Apply for Demo</FormTitle>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="websiteUrl">Website URL *</Label>
                    <Input
                      type="url"
                      id="websiteUrl"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleInputChange}
                      placeholder="https://yourcompany.com"
                      required
                    />
                  </FormGroup>
                  
                  <SubmitButton type="submit" disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Apply for Demo'}
                  </SubmitButton>
                  
                  {error && <ErrorMessage>{error}</ErrorMessage>}
                </Form>
              </>
            ) : demoScheduled ? (
              <>
                <PlainSuccessMessage>
                  <h4>Demo Scheduled Successfully! 🎉</h4>
                  <p>Thank you for booking your demo! We'll call you at your scheduled time to show you your custom AI in action.</p>
                </PlainSuccessMessage>
                
                <CalendarTitle>What's Next?</CalendarTitle>
                <CalendarDescription>
                  We'll analyze your website and create your custom AI before your demo. You'll receive a confirmation email with all the details.
                </CalendarDescription>
              </>
            ) : (
              <>
                <PlainSuccessMessage>
                  <h4>Perfect! 🎉</h4>
                  <p>We've received your information and will create your custom AI. Now book your demo time:</p>
                </PlainSuccessMessage>
                
                <CalendarTitle>Ready to Book Your Demo?</CalendarTitle>
                <CalendarDescription>
                  Click the button below to open our calendar and choose a time that works for you.
                </CalendarDescription>
                
                <CalendarButton
                  data-cal-namespace="free-mercury-demo-30-min"
                  data-cal-link="sauma-ai/free-mercury-demo-30-min"
                  data-cal-config={`{"layout":"month_view","theme":"light","name":"${submittedData?.name || ''}","email":"${submittedData?.email || ''}"}`}
                >
                  📅 Book Your Demo Time
                </CalendarButton>
              </>
            )}
          </FormGlassCard>
        </RightColumn>
      </HeroContent>
    </HeroContainer>
  );
};

// What to expect section
const DemoInfoSection = () => {
  return (
    <SectionContainer>
      <Container>
        <SectionHeading>How Your Custom AI Demo Works</SectionHeading>
        
        <InfoCardsGrid>
          <InfoGlassCard>
            <IconWrapper>
              <Globe size={28} />
            </IconWrapper>
            <CardTitle>1. Share Your Website</CardTitle>
            <CardDescription>
              Simply provide your website URL and we'll analyze your business to understand your needs.
            </CardDescription>
          </InfoGlassCard>
          
          <InfoGlassCard>
            <IconWrapper>
              <Zap size={28} />
            </IconWrapper>
            <CardTitle>2. We Build Your AI</CardTitle>
            <CardDescription>
              Our team creates a personalized AI agent specifically designed for your business operations.
            </CardDescription>
          </InfoGlassCard>
          
          <InfoGlassCard>
            <IconWrapper>
              <Calendar size={28} />
            </IconWrapper>
            <CardTitle>3. Book & Demo</CardTitle>
            <CardDescription>
              Choose a time that works for you and see your custom AI in action during the demo.
            </CardDescription>
          </InfoGlassCard>
        </InfoCardsGrid>
      </Container>
    </SectionContainer>
  );
};

// Testimonial section
const TestimonialSection = () => {
  return (
    <SectionContainer>
      <Container>
        <SectionHeading>What Our Clients Say About Their Custom AI Demo</SectionHeading>
        <TestimonialSlider />
      </Container>
    </SectionContainer>
  );
};

// FAQ mini-section
const FAQSection = () => {
  const demoFaqs = [
    {
      id: 1,
      question: "How long does it take to create my custom AI?",
      answer: "We typically create your custom AI within 24-48 hours after receiving your website information. This ensures we have enough time to analyze your business and build something truly personalized."
    },
    {
      id: 2,
      question: "What information do you need from my website?",
      answer: "We analyze your website content, services, target audience, and business processes to understand how an AI agent can best serve your specific needs. No additional information needed!"
    },
    {
      id: 3,
      question: "Can I reschedule my demo if needed?",
      answer: "Absolutely! You can reschedule your demo up to 2 hours before the scheduled time using the calendar link we provide."
    },
    {
      id: 4,
      question: "What happens after the demo?",
      answer: "After your demo, we'll provide you with a detailed proposal including pricing, implementation timeline, and next steps to get your AI agent up and running."
    }
  ];
  
  return (
    <SectionContainer>
      <Container>
        <SectionHeading>Common Questions About Our Custom AI Demos</SectionHeading>
        <FAQContainer>
          {demoFaqs.map(faq => (
            <FAQItem key={faq.id}>
              <FAQQuestion>{faq.question}</FAQQuestion>
              <FAQAnswer>{faq.answer}</FAQAnswer>
            </FAQItem>
          ))}
        </FAQContainer>
      </Container>
    </SectionContainer>
  );
};

export default BookDemo; 