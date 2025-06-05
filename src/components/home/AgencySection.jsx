import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const SectionContainer = styled.section`
  padding: 3rem 0;
  text-align: center;
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

const GlassPanel = styled.div`
  color: #000;
  margin: 40px auto;
  background-color: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  width: 100%;
  max-width: 800px;
  border-radius: 15px;
  padding: 32px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 24px;
    margin: 20px auto;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #000;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const Logo = styled.img`
  height: 180px;
  margin-bottom: 1px;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  
  @media (max-width: 768px) {
    height: 120px;
    margin-bottom: 0px;
  }
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const SubHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const AgencySection = () => {
  return (
    <SectionContainer>
      <BackgroundSVG>
        <img src="/assets/hero-background1.svg" alt="" aria-hidden="true" />
      </BackgroundSVG>
      
      <ContentContainer>
        <SectionHeading>The Agency</SectionHeading>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <GlassPanel>
            <Logo src="/assets/mercury_logo.svg" alt="Mercury Logo" />
            <SubHeading>Mercury AI Sales Development Receptionist</SubHeading>
            <Description>
            Let our AI receptionist handle your front desk 24/7 — so you never miss a client, stress about scheduling, or lose money to voicemail again.
            </Description>
            <Button as="a" href="/mercury" fullWidthMobile>Meet Mercury</Button>
          </GlassPanel>
        </motion.div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default AgencySection; 