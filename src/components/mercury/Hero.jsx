import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { Phone } from 'react-feather';

// Create a styled component for the SVG background
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

const HeroContainer = styled.section`
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  
  
  @media (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 40px;
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

const LogoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -25px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    margin-bottom: -25px;
    margin-top: 5px;
  }
`;

const Logo = styled(motion.img)`
  height: 200px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    height: 140px;
    margin-top: 30px;
  }
`;

const LocationBadge = styled(motion.div)`
  position: absolute;
  top: -15px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 6px 15px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 3;
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 5px 12px;
    top: -12px;
  }
`;

const HeroHeading = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
`;

const HeroSubheading = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

// Add a ButtonContainer to create space between buttons
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
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

// Add this styled component for the trial text
const TrialText = styled.p`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 0.8rem;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBackground>
        <img src="/assets/hero-background1.svg" alt="" aria-hidden="true" />
      </HeroBackground>
      
      <HeroContent>
        <LogoContainer>
          <LocationBadge
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Proudly Serving DC, Maryland, & Virginia
          </LocationBadge>
          <Logo
            src="/assets/mercury_logo.svg"
            alt="Mercury Logo"
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
          Every Call. Every Booking. Answered. <span>Automatically.</span>
        </HeroHeading>
        
        <HeroSubheading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Let our AI receptionist handle your front desk 24/7 — so you never miss a client, stress about scheduling, or lose money to voicemail again.
        </HeroSubheading>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ButtonContainer>
            <Button as={Link} to="/book-demo">Stop Missing Calls</Button>
            <Button as="a" href="tel:+1-575-651-2233">Talk To Mercury <PhoneIcon /></Button>
          </ButtonContainer>
          <TrialText>7-day risk free trial. No credit card required.</TrialText>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 