import styled from 'styled-components';
import IntegrationLogoScroller from '../common/IntegrationLogoScroller';
import SectionLabel from '../common/SectionLabel';

const SectionContainer = styled.section`
  padding: 5rem 0;
  background-color: rgba(255,255,255,0.02);
  border-top: 1px solid rgba(255,255,255,0.06);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #fafafa 20%, #c4b5fd 70%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
    margin-top: -2rem;
  }
`;

const IntegrationSection = () => {
  return (
    <SectionContainer>
      <SectionLabel>Integrations</SectionLabel>
      <SectionHeading>Integrated with the platforms you already run on</SectionHeading>
      <IntegrationLogoScroller />
    </SectionContainer>
  );
};

export default IntegrationSection; 