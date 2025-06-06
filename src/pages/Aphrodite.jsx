import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Layers, TrendingUp, BarChart2, Calendar } from 'react-feather';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';

const Aphrodite = () => {
  return (
    <>
      <Helmet>
        <title>Aphrodite - AI Social Media Manager by Sauma AI</title>
        <meta name="description" content="Coming soon: Aphrodite, the AI Social Media Manager that creates content, engages with your audience, and provides analytics - all autonomously." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <WaitlistSection />
        <FAQSection />
      </main>
      
      <Footer />
    </>
  );
};

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBackground>
        <img src="/assets/hero-background1.svg" alt="" aria-hidden="true" />
      </HeroBackground>
      
      <HeroContent>
        <LogoContainer>
          <ComingSoonBadge
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Coming Soon
          </ComingSoonBadge>
          <Logo
            src="/assets/aphrodite_logo.svg" // Create this asset
            alt="Aphrodite Logo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
        </LogoContainer>
        
        <HeroHeading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform Your Social Media Presence Automatically.
        </HeroHeading>
        
        <HeroSubheading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Meet Aphrodite, your AI Social Media Manager that creates engaging content, responds to your audience, and analyzes performance - all while you focus on running your business.
        </HeroSubheading>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ButtonContainer>
            <Button as="a" href="#waitlist">Join the Waitlist</Button>
            <Button as="a" href="#features">Learn More</Button>
          </ButtonContainer>
          <LaunchText>Launching Summer 2025. Limited beta spots available.</LaunchText>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

const FeaturesSection = () => {
  return (
    <SectionContainer id="features">
      <Container>
        <SectionHeading>Why Choose Aphrodite?</SectionHeading>
        
        <FeaturesGrid>
          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <IconWrapper>
              <Layers size={28} />
            </IconWrapper>
            <FeatureTitle>Content Creation</FeatureTitle>
            <FeatureDescription>
              Generates engaging posts, captions, and hashtags tailored to your brand voice and audience preferences.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <IconWrapper>
              <TrendingUp size={28} />
            </IconWrapper>
            <FeatureTitle>Audience Engagement</FeatureTitle>
            <FeatureDescription>
              Responds to comments, messages, and mentions with human-like understanding and personality.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <IconWrapper>
              <BarChart2 size={28} />
            </IconWrapper>
            <FeatureTitle>Performance Analytics</FeatureTitle>
            <FeatureDescription>
              Tracks engagement metrics and provides actionable insights to optimize your social media strategy.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <IconWrapper>
              <Calendar size={28} />
            </IconWrapper>
            <FeatureTitle>Content Calendar</FeatureTitle>
            <FeatureDescription>
              Plans and schedules posts across multiple platforms to maximize reach and engagement.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </Container>
    </SectionContainer>
  );
};

const WaitlistSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your email collection logic here
    alert('Thank you for joining our waitlist!');
    e.target.reset();
  };

  return (
    <SectionContainer id="waitlist">
      <Container>
        <SectionHeading>Be First in Line</SectionHeading>
        
        <WaitlistCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <WaitlistHeading>Join the Aphrodite Waitlist</WaitlistHeading>
          <WaitlistText>
            Be among the first to experience the future of social media management. 
            Early access members will receive exclusive benefits and special pricing.
          </WaitlistText>
          
          <WaitlistForm onSubmit={handleSubmit}>
            <WaitlistInput 
              type="email" 
              placeholder="Enter your email address" 
              required 
            />
            <Button type="submit">Join Waitlist</Button>
          </WaitlistForm>
          
          <LimitedSpots>Limited beta spots available. Expected launch: Summer 2025.</LimitedSpots>
        </WaitlistCard>
      </Container>
    </SectionContainer>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: "How does Aphrodite create content?",
      answer: "Aphrodite uses advanced AI to understand your brand voice, industry trends, and audience preferences to create engaging, relevant content. It can generate captions, hashtags, and even suggest image concepts."
    },
    {
      id: 2,
      question: "Which social media platforms will Aphrodite support?",
      answer: "At launch, Aphrodite will support Instagram, Facebook, Twitter, and LinkedIn. Additional platforms will be added based on user feedback and demand."
    },
    {
      id: 3,
      question: "How much will Aphrodite cost?",
      answer: "Pricing details will be announced closer to launch. Waitlist members will receive early access to special pricing plans and exclusive features."
    }
  ];
  
  return (
    <SectionContainer>
      <Container>
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <FAQContainer>
          {faqs.map(faq => (
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

// Styled Components
const HeroContainer = styled.section`
  min-height: 100vh;
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
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const LogoContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
`;

const Logo = styled(motion.img)`
  height: 200px;
  margin-bottom: -3rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    height: 160px;
  }
`;

const ComingSoonBadge = styled(motion.div)`
  position: absolute;
  top: -10px;
  right: 49px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    top: -8px;
    right: 36px;
    font-size: 0.7rem;
    padding: 4px 10px;
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

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const LaunchText = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  opacity: 0.7;
`;

const SectionContainer = styled.section`
  padding: 5rem 0;
  position: relative;
  
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  ${props => props.theme.glassmorphism};
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
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

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.8;
`;

const WaitlistCard = styled(motion.div)`
  ${props => props.theme.glassmorphism};
  max-width: 600px;
  margin: 0 auto;
  padding: 3rem;
  border-radius: 15px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const WaitlistHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const WaitlistText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

const WaitlistForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const WaitlistInput = styled.input`
  flex: 1;
  padding: 0.8rem 1.2rem;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  outline: none;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }
`;

const LimitedSpots = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
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

export default Aphrodite;
