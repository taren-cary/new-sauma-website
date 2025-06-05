import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'react-feather';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import FAQ from '../components/common/FAQ';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Sauma AI</title>
        <meta name="description" content="Get in touch with Sauma AI. We're here to answer your questions and help transform your business with our AI workers." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <ContactSection />
        <FAQSection />
      </main>
      
      <Footer />
    </>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBackground>
        <img src="/assets/hero-background1.svg" alt="" aria-hidden="true" />
      </HeroBackground>
      
      <HeroContent>
        <HeroHeading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </HeroHeading>
        
        <HeroSubheading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We're here to help your business thrive with our AI workers. Let us know how we can assist you.
        </HeroSubheading>
        
        <ButtonContainer 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ marginBottom: -10 }}
        >
          <Button as="a" href="tel:+19039643512">
            <Phone size={18} style={{ marginRight: '8px' }} />
            Call Sauma HQ
          </Button>
        </ButtonContainer>
      </HeroContent>
    </HeroContainer>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <SectionContainer>
      <BackgroundSVG>
        <img src="/assets/gridbackground1.svg" alt="" aria-hidden="true" />
      </BackgroundSVG>
      
      <Container>
        <ContactGrid>
          <ContactFormCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FormHeading>Send Us A Message</FormHeading>
            
            <ContactForm>
              <FormGroup>
                <FormLabel>Full Name</FormLabel>
                <FormInput type="text" placeholder="Your full name" />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Email Address</FormLabel>
                <FormInput type="email" placeholder="your@email.com" />
              </FormGroup>
              
              <FormRow>
                <FormGroup>
                  <FormLabel>Phone Number</FormLabel>
                  <FormInput type="tel" placeholder="+1 (555) 000-0000" />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Company</FormLabel>
                  <FormInput type="text" placeholder="Your company name" />
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <FormLabel>Message</FormLabel>
                <FormTextarea placeholder="How can we help you?" rows={5} />
              </FormGroup>
              
              <Button type="submit" fullWidth>
                <Send size={18} style={{ marginRight: '8px' }} />
                Send Message
              </Button>
            </ContactForm>
          </ContactFormCard>
          
          <ContactInfoCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <InfoHeading>Contact Information</InfoHeading>
            
            <InfoText>
              Ready to transform your business with AI? Reach out to us directly or fill out the form.
            </InfoText>
            
            <ContactInfoList>
              <ContactInfoItem>
                <InfoIcon>
                  <Mail />
                </InfoIcon>
                <InfoContent>
                  <InfoLabel>Email</InfoLabel>
                  <InfoValue as="a" href="mailto:info@sauma.ai">info@sauma.ai</InfoValue>
                </InfoContent>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <InfoIcon>
                  <Phone />
                </InfoIcon>
                <InfoContent>
                  <InfoLabel>Phone</InfoLabel>
                  <InfoValue as="a" href="tel:+19039643512">+1 (903) 964-3512</InfoValue>
                </InfoContent>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <InfoIcon>
                  <MapPin />
                </InfoIcon>
                <InfoContent>
                  <InfoLabel>Location</InfoLabel>
                  <InfoValue>Washington, DC, USA</InfoValue>
                </InfoContent>
              </ContactInfoItem>
            </ContactInfoList>
            
            <SocialLinks>
              <SocialLink href="https://twitter.com/sauma_ai" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </SocialLink>
              <SocialLink href="https://linkedin.com/company/sauma-intelligence-agency" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </SocialLink>
              <SocialLink href="https://instagram.com/sauma.ai" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </SocialLink>
            </SocialLinks>
          </ContactInfoCard>
        </ContactGrid>
      </Container>
    </SectionContainer>
  );
};

// FAQ Section Component
const FAQSection = () => {
  return (
    <SectionContainer>
      <Container>
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <FAQ limit={4} />
      </Container>
    </SectionContainer>
  );
};

// Hero Styles
const HeroContainer = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  
  @media (max-width: 768px) {
    padding-top: 100px;
    min-height: 50vh;
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
  max-width: 800px;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const HeroHeading = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const HeroSubheading = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Section Styles
const SectionContainer = styled.section`
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const BackgroundSVG = styled.div`
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

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

// Contact Form Styles
const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactFormCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormLabel = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FormInput = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  color: #000;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
  
  &:focus {
    outline: none;
    border-color: #6C63FF;
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.2);
  }
  
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  color: #000;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s, box-shadow 0.3s;
  
  &:focus {
    outline: none;
    border-color: #6C63FF;
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.2);
  }
  
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

// Contact Info Styles
const ContactInfoCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const InfoHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const InfoText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(108, 99, 255, 0.1);
  color: #6C63FF;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoLabel = styled.span`
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 0.2rem;
`;

const InfoValue = styled.span`
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  color: #000;
  
  &:hover {
    color: #6C63FF;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 0.3s, transform 0.3s;
  
  &:hover {
    background-color: rgba(108, 99, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export default ContactPage; 