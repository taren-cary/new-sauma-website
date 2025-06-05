import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, CheckCircle } from 'react-feather';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import TypeformEmbed from '../components/common/TypeformEmbed';
import TestimonialSlider from '../components/common/TestimonialSlider';
import Button from '../components/common/Button';

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
  padding: 0;
  width: 100%;
  max-width: 500px;
  border-radius: 15px;
  overflow: hidden;
  
  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const FormTitle = styled.h3`
  text-align: center;
  padding: 1.5rem;
  margin: 0;
  font-size: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const TypeformContainer = styled.div`
  height: 550px;
  
  /* These styles ensure the Typeform fits properly */
  & > div,
  & > div > div {
    height: 100% !important;
  }
  
  iframe {
    height: 100% !important;
    width: 100% !important;
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
        <meta name="description" content="Schedule a personalized demo to see how Sauma AI's intelligent workers can transform your business operations and boost your efficiency." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <DemoInfoSection />
        <TestimonialSection />
        <FAQSection />
      </main>
      
      <Footer />
    </>
  );
};

// Hero Section with split design
const HeroSection = () => {
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
            20 Minutes That Can Change Your Business Forever
          </HeroHeading>
          
          <HeroSubheading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            See our AI workers in action and discover how they can transform your business operations.
          </HeroSubheading>
          
          <BenefitsList
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <BenefitItem>
              <CheckCircle size={20} />
              <span>See live demonstrations of our AI workers</span>
            </BenefitItem>
            <BenefitItem>
              <CheckCircle size={20} />
              <span>Get customized solutions for your business</span>
            </BenefitItem>
            <BenefitItem>
              <CheckCircle size={20} />
              <span>Learn about implementation and ROI</span>
            </BenefitItem>
          </BenefitsList>
        </LeftColumn>
        
        <RightColumn>
          <FormGlassCard>
            <FormTitle>Book Your Demo</FormTitle>
            <TypeformContainer>
              <TypeformEmbed formId="01JHNFS3R736X86KR323F3FZ5Z" height="100%" />
            </TypeformContainer>
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
        <SectionHeading>What to Expect in Your Demo</SectionHeading>
        
        <InfoCardsGrid>
          <InfoGlassCard>
            <IconWrapper>
              <Clock size={28} />
            </IconWrapper>
            <CardTitle>Just 20 Minutes</CardTitle>
            <CardDescription>
              Our demos are concise and focused on your specific needs, respecting your valuable time.
            </CardDescription>
          </InfoGlassCard>
          
          <InfoGlassCard>
            <IconWrapper>
              <Users size={28} />
            </IconWrapper>
            <CardTitle>Perfect For</CardTitle>
            <CardDescription>
              Business owners, operations managers, and decision-makers looking to optimize their workflow.
            </CardDescription>
          </InfoGlassCard>
          
          <InfoGlassCard>
            <IconWrapper>
              <Calendar size={28} />
            </IconWrapper>
            <CardTitle>What You'll See</CardTitle>
            <CardDescription>
              Live demonstrations of our AI workers handling real-world scenarios tailored to your industry.
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
        <SectionHeading>What Our Clients Say About Their Demo Experience</SectionHeading>
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
      question: "How long is the demo?",
      answer: "Our demos typically last about 20 minutes, but we're happy to extend the time if you have additional questions."
    },
    {
      id: 2,
      question: "Do I need to prepare anything?",
      answer: "No preparation is needed! Just come with your questions and we'll guide you through everything."
    },
    {
      id: 3,
      question: "Can I invite my team members?",
      answer: "Absolutely! We encourage you to invite team members who would be working with our AI workers."
    }
  ];
  
  return (
    <SectionContainer>
      <Container>
        <SectionHeading>Common Questions About Our Demos</SectionHeading>
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