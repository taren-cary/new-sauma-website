import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled.section`
  padding: 5rem 0;
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #fafafa 20%, #c4b5fd 70%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`;

const ComparisonContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ComparisonTable = styled.div`
  ${props => props.theme.glassmorphism};
  border-radius: 10px;
  overflow: hidden;
`;

const ComparisonHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  background: rgba(255, 255, 255, 0.06);
  padding: 1.5rem;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const ComparisonRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  &:last-child {
    border-bottom: none;
  }

  &:nth-child(odd) {
    background: rgba(255, 255, 255, 0.03);
  }
`;

const FeatureCell = styled.div`
  font-weight: 500;
  color: rgba(250, 250, 250, 0.8);
`;

const ComparisonCell = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckIcon = styled.span`
  color: #4ade80;
  font-size: 1.5rem;
`;

const CrossIcon = styled.span`
  color: rgba(250, 250, 250, 0.25);
  font-size: 1.5rem;
`;

const comparisonData = [
  { feature: "24/7 Availability", mercury: true, traditional: false },
  { feature: "No Sick Days or Time Off", mercury: true, traditional: false },
  { feature: "Consistent Performance", mercury: true, traditional: false },
  { feature: "Handles Multiple Calls Simultaneously", mercury: true, traditional: false },
  { feature: "Automatic Call Transcription", mercury: true, traditional: false },
  { feature: "Instant CRM Updates", mercury: true, traditional: false },
  { feature: "Multilingual Support", mercury: true, traditional: false },
  { feature: "Zero Training Time", mercury: true, traditional: false },
  { feature: "Predictable Monthly Cost", mercury: true, traditional: false },
];

const ComparisonSection = () => {
  return (
    <SectionContainer>
      <SectionHeading>Why Choosing Mercury Is The Best Decision For Your Business</SectionHeading>
      <ComparisonContainer>
        <ComparisonTable>
          <ComparisonHeader>
            <div>Feature</div>
            <div>Mercury</div>
            <div>Traditional Methods</div>
          </ComparisonHeader>

          {comparisonData.map((item, index) => (
            <ComparisonRow
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
            >
              <FeatureCell>{item.feature}</FeatureCell>
              <ComparisonCell>
                {item.mercury ? <CheckIcon>✓</CheckIcon> : <CrossIcon>✗</CrossIcon>}
              </ComparisonCell>
              <ComparisonCell>
                {item.traditional ? <CheckIcon>✓</CheckIcon> : <CrossIcon>✗</CrossIcon>}
              </ComparisonCell>
            </ComparisonRow>
          ))}
        </ComparisonTable>
      </ComparisonContainer>
    </SectionContainer>
  );
};

export default ComparisonSection;
