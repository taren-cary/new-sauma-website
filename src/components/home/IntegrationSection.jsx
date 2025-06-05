import styled from 'styled-components';
import IntegrationLogoScroller from '../common/IntegrationLogoScroller';

const SectionContainer = styled.section`
  padding: 5rem 0;
  background-color: rgba(245, 245, 247, 0.5);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  
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
      <SectionHeading>Seamlessly Integrate With Your Favorite Platforms</SectionHeading>
      <IntegrationLogoScroller />
    </SectionContainer>
  );
};

export default IntegrationSection; 