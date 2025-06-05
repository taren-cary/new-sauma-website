import styled from 'styled-components';
import { motion } from 'framer-motion';
import LogoScroller from '../common/LogoScroller';

const SectionContainer = styled.section`
  padding: 5rem 0;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  margin-top: 0.2rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
    margin-top: -0.5rem;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #6C63FF;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TrustSection = () => {
  return (
    <SectionContainer>
      <SectionHeading>Businesses That Trust Our Agents To Get It Done</SectionHeading>
      
      <LogoScroller />
      
      <StatsContainer>
        <StatItem
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <StatValue>$12K</StatValue>
          <StatLabel>Saved In Lead Acquisition Cost</StatLabel>
        </StatItem>
        
        <StatItem
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <StatValue>$45K</StatValue>
          <StatLabel>Made From Booked Appointments</StatLabel>
        </StatItem>
        
        <StatItem
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <StatValue>24/7</StatValue>
          <StatLabel>Work Hours</StatLabel>
        </StatItem>
      </StatsContainer>
    </SectionContainer>
  );
};

export default TrustSection; 