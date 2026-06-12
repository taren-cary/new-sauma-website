import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, CheckCircle, Globe, Zap, Phone, ChevronDown } from 'react-feather';
import { useState } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import SectionLabel from '../components/common/SectionLabel';
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

const OrbHeroOne = styled.div`
  position: absolute;
  width: 700px;
  height: 700px;
  top: -250px;
  right: -200px;
  background: radial-gradient(circle, rgba(108, 99, 255, 0.13) 0%, transparent 65%);
  border-radius: 50%;
  pointer-events: none;
  filter: blur(80px);
  z-index: 0;
`;

const OrbHeroTwo = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  bottom: -200px;
  left: -150px;
  background: radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 65%);
  border-radius: 50%;
  pointer-events: none;
  filter: blur(80px);
  z-index: 0;
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
  font-size: 1.05rem;
  color: rgba(250, 250, 250, 0.75);

  svg {
    margin-right: 12px;
    flex-shrink: 0;
    color: rgba(250, 250, 250, 0.4);
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

const PlainSuccessMessage = styled.div`
  color: #22c55e;
  padding: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  
  h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
  }
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
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #fafafa 20%, #c4b5fd 70%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

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
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;

  svg {
    color: rgba(250, 250, 250, 0.55);
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
  max-width: 720px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  &:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
`;

const FAQQuestion = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 1.25rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  color: #fafafa;
  transition: color 0.2s;

  &:hover {
    color: rgba(250, 250, 250, 0.7);
  }
`;

const FAQChevron = styled(ChevronDown)`
  flex-shrink: 0;
  color: rgba(250, 250, 250, 0.4);
  transition: transform 0.25s ease;
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const FAQAnswer = styled(motion.div)`
  overflow: hidden;
`;

const FAQAnswerInner = styled.div`
  padding-bottom: 1.25rem;
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(250, 250, 250, 0.55);
`;

const BookDemo = () => {
  return (
    <>
      <Helmet>
        <title>Book a Demo — Sauma AI</title>
        <meta name="description" content="See a working demonstration of your AI system in 30 minutes. Submit your details and we'll build it for your business before the call." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <LogoSection>
          <LogoHeading>The businesses running on Sauma</LogoHeading>
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
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const LogoHeading = styled.h2`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 2rem;
  color: rgba(250, 250, 250, 0.35);
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 0.85rem;
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
      <OrbHeroOne />
      <OrbHeroTwo />
      
      <HeroContent>
        <LeftColumn>
          <HeroHeading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            See your AI system in action. Built for your business before the call.
          </HeroHeading>
          
          <HeroSubheading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Submit your details and we'll build a working demonstration of your AI system before the call — so you see exactly what you're deploying, not a generic walkthrough.
          </HeroSubheading>
          
          <BenefitsList
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <BenefitItem>
              <CheckCircle size={20} />
              <span>We review your business and build a working demo before the call</span>
            </BenefitItem>
            <BenefitItem>
              <CheckCircle size={20} />
              <span>Choose a time that works for your schedule</span>
            </BenefitItem>
            <BenefitItem>
              <CheckCircle size={20} />
              <span>See your actual system running — not a slide deck</span>
            </BenefitItem>
          </BenefitsList>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ButtonContainer>
              <Button as="a" href="tel:+1-575-651-2233">Call Us <PhoneIcon /></Button>
            </ButtonContainer>
          </motion.div>
        </LeftColumn>
        
        <RightColumn>
          <FormGlassCard>
            {!isSubmitted ? (
              <>
                <FormTitle>Request your demo</FormTitle>
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
                    {isLoading ? 'Submitting...' : 'Request demo'}
                  </SubmitButton>
                  
                  {error && <ErrorMessage>{error}</ErrorMessage>}
                </Form>
              </>
            ) : demoScheduled ? (
              <>
                <PlainSuccessMessage>
                  <h4>Demo confirmed.</h4>
                  <p>Your demo is scheduled. We'll have a working version of your system built before the call.</p>
                </PlainSuccessMessage>

                <CalendarTitle>What's next</CalendarTitle>
                <CalendarDescription>
                  We'll review your business details and build a working demonstration of your system before the call. A confirmation has been sent to your email.
                </CalendarDescription>
              </>
            ) : (
              <>
                <PlainSuccessMessage>
                  <h4>Request received.</h4>
                  <p>We have your details. Select a time below and we'll have your system demo ready before the call.</p>
                </PlainSuccessMessage>

                <CalendarTitle>Select a time</CalendarTitle>
                <CalendarDescription>
                  Choose a time that works for you. We'll build your system demo before the call.
                </CalendarDescription>

                <CalendarButton
                  data-cal-namespace="free-mercury-demo-30-min"
                  data-cal-link="sauma-ai/free-mercury-demo-30-min"
                  data-cal-config={`{"layout":"month_view","theme":"light","name":"${submittedData?.name || ''}","email":"${submittedData?.email || ''}"}`}
                >
                  Book your time
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
        <SectionLabel>Deployment</SectionLabel>
        <SectionHeading>How it works</SectionHeading>

        <InfoCardsGrid>
          <InfoGlassCard>
            <IconWrapper>
              <Globe size={28} />
            </IconWrapper>
            <CardTitle>01 — Submit your details</CardTitle>
            <CardDescription>
              Share your website URL and business details. We use this to build a working demo of your system before you ever get on a call.
            </CardDescription>
          </InfoGlassCard>

          <InfoGlassCard>
            <IconWrapper>
              <Zap size={28} />
            </IconWrapper>
            <CardTitle>02 — We build your demo</CardTitle>
            <CardDescription>
              Our team configures a real, working version of your AI system — calibrated to your industry, your business, and your workflows.
            </CardDescription>
          </InfoGlassCard>

          <InfoGlassCard>
            <IconWrapper>
              <Calendar size={28} />
            </IconWrapper>
            <CardTitle>03 — See it in action</CardTitle>
            <CardDescription>
              In a 30-minute call, we walk you through exactly what we built — live, not a slide deck — and show you how it would run for your business.
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
        <SectionLabel>Outcomes</SectionLabel>
        <SectionHeading>What our clients say</SectionHeading>
        <TestimonialSlider />
      </Container>
    </SectionContainer>
  );
};

// FAQ mini-section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const demoFaqs = [
    {
      id: 1,
      question: "How long does it take to build my demo?",
      answer: "We build your demo within 24 hours of receiving your details. By the time you get on the call, you're seeing a configured version of the system — not a generic walkthrough."
    },
    {
      id: 2,
      question: "What do you need from me before the call?",
      answer: "Your business name, website URL, and contact details are enough to get started. We'll review your business and configure the system before the call."
    },
    {
      id: 3,
      question: "Can I reschedule if something comes up?",
      answer: "Yes. You can reschedule using the calendar link in your confirmation email up to 2 hours before the scheduled time."
    },
    {
      id: 4,
      question: "What happens after the demo?",
      answer: "If the system is a fit, we'll walk you through scope, timeline, and pricing. Most deployments go live within a week of signing."
    }
  ];

  return (
    <SectionContainer>
      <Container>
        <SectionLabel>FAQ</SectionLabel>
        <SectionHeading>Common questions</SectionHeading>
        <FAQContainer>
          {demoFaqs.map((faq, index) => (
            <FAQItem key={faq.id}>
              <FAQQuestion onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                <span>{faq.question}</span>
                <FAQChevron $isOpen={openIndex === index} size={18} />
              </FAQQuestion>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <FAQAnswer
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <FAQAnswerInner>{faq.answer}</FAQAnswerInner>
                  </FAQAnswer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQContainer>
      </Container>
    </SectionContainer>
  );
};

export default BookDemo; 