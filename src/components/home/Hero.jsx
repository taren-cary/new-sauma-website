import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import TextType from '../common/TextType';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBackground>
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/assets/Sauma%20Website%20Homepage%20Hero%20Video(1).mp4"
        />
        <VideoOverlay />
      </HeroBackground>

      <HeroContent>
        <HeroHeading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Autonomous AI systems.<br />
          Built for{' '}
          <TextType
            as="span"
            text={["real estate.", "medspas.", "mobile detailing."]}
            typingSpeed={65}
            deletingSpeed={35}
            pauseDuration={2200}
            showCursor={true}
            cursorCharacter="|"
            style={{
              background: 'linear-gradient(135deg, #c4b5fd 0%, #818cf8 50%, #6C63FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          />
        </HeroHeading>

        <HeroSubheading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We build the infrastructure layer that handles the revenue-critical operations your business depends on — lead response, appointment booking, follow-up, and CRM — running continuously, without supervision.
        </HeroSubheading>

        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button as="a" href="#industries">Explore Industries</Button>
          <Button as={Link} to="/book-demo">Book a Demo</Button>
        </ButtonContainer>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.52);
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
    padding-top: 60px;
    padding-bottom: 40px;
  }
`;

const HeroContent = styled.div`
  max-width: 860px;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const HeroHeading = styled(motion.h1)`
  font-size: 4.75rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2.6rem;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
`;

const HeroSubheading = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);

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

export default Hero;
