import styled from 'styled-components';
import { motion } from 'framer-motion';
import LogoScroller from '../common/LogoScroller';
import CountUp from '../common/CountUp';
import SectionLabel from '../common/SectionLabel';

const TrustSection = () => {
  return (
    <SectionContainer>
      <OrbOne />
      <OrbTwo />
      <SectionLabel>Performance</SectionLabel>
      <SectionHeading>The businesses running on Sauma</SectionHeading>

      <LogoScroller />

      <StatsContainer>
        <StatItem
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <StatValue>
            <CountUp from={0} to={99.9} duration={2.5} />%
          </StatValue>
          <StatLabel>Uptime Guaranteed</StatLabel>
        </StatItem>

        <StatItem
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <StatValue>
            $<CountUp from={0} to={100} duration={2} separator="," />K+
          </StatValue>
          <StatLabel>Saved In Hiring Costs</StatLabel>
        </StatItem>

        <StatItem
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <StatValue>
            <CountUp from={0} to={10} duration={1.8} delay={0.3} />x
          </StatValue>
          <StatLabel>Faster Than Human Response</StatLabel>
        </StatItem>
      </StatsContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 5rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const OrbOne = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  top: -120px;
  right: -80px;
  background: radial-gradient(circle, rgba(108, 99, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  filter: blur(60px);
`;

const OrbTwo = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  bottom: -100px;
  left: -80px;
  background: radial-gradient(circle, rgba(79, 70, 229, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  filter: blur(60px);
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 3rem;
  margin-top: 0.2rem;
  background: linear-gradient(135deg, #fafafa 20%, #c4b5fd 70%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
    margin-top: -0.5rem;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 900px;
  margin: 4rem auto 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #c4b5fd 0%, #6C63FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: rgba(250, 250, 250, 0.55);

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export default TrustSection;
