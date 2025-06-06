import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

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

const HeroHeading = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.6rem;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
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

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: -1rem;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBackground>
        <img src="/assets/hero-background1.svg" alt="Background" />
      </HeroBackground>
      
      <HeroContent>
        <HeroHeading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Be a boss. Hire AI workers.
        </HeroHeading>
        
        <HeroSubheading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Streamline operations, enhance customer engagement, and drive growth with our cutting-edge AI workers.
        </HeroSubheading>
        
        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button as={Link} to="/mercury">Explore AI Workers</Button>
          <Button as={Link} to="/book-demo">Book a Demo</Button>
        </ButtonContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 