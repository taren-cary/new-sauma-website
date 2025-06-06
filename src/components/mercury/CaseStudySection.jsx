import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const SectionContainer = styled.section`
  padding: 5rem 0;
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

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 0.1rem;
  color: #000;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    margin-top: -0.5rem;
  }
`;

const CaseStudyCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 3rem;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const CaseStudyHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const ClientLogo = styled.img`
  height: 120px;
  margin-right: 2rem;
  
  @media (max-width: 768px) {
    height: 60px;
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
`;

const CaseStudyTitle = styled.h3`
  font-size: 1.8rem;
  color: #000;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ResultItem = styled.div`
  text-align: center;
`;

const ResultValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #3498db;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ResultLabel = styled.p`
  font-size: 1.1rem;
  line-height: 1.4;
  color: #000;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Quote = styled.blockquote`
  font-size: 1.2rem;
  font-style: italic;
  line-height: 1.6;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin: 2rem 0;
  color: #000;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 1.5rem 0;
    padding: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CaseStudySection = () => {
  return (
    <SectionContainer>
      <BackgroundSVG>
        <img src="/assets/gridbackground1.svg" alt="" aria-hidden="true" />
      </BackgroundSVG>
      
      <Container>
        <SectionHeading>See How This Medspa Stopped Missing After-Hours Calls & Started Crushing Their Competition</SectionHeading>
        
        <CaseStudyCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <CaseStudyHeader>
            <ClientLogo src="/assets/nu-pathway-logo.png" alt="Nu Pathway Health & Wellness Logo" />
            <CaseStudyTitle>How Mercury Transformed Nu Pathway Health & Wellness in Bowie, MD</CaseStudyTitle>
          </CaseStudyHeader>
          
          <ResultsGrid>
            <ResultItem>
              <ResultValue>83%</ResultValue>
              <ResultLabel>reduction in missed appointment calls</ResultLabel>
            </ResultItem>
            <ResultItem>
              <ResultValue>28%</ResultValue>
              <ResultLabel>increase in new patient bookings</ResultLabel>
            </ResultItem>
            <ResultItem>
              <ResultValue>$4,700</ResultValue>
              <ResultLabel>monthly savings vs. traditional staffing</ResultLabel>
            </ResultItem>
          </ResultsGrid>
          
          <Quote>
          "We haven't missed a single call since bringing in Mercury. Clients get the same warm, high-touch experience — but now, our team is free to focus 100% on care. It's like having a flawless front desk that never clocks out."
          </Quote>
          
          <ButtonContainer>
            <Button as={Link} to="/book-demo">See How Mercury Can Help You</Button>
          </ButtonContainer>
        </CaseStudyCard>
      </Container>
    </SectionContainer>
  );
};

export default CaseStudySection; 