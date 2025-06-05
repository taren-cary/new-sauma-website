// src/components/mercury/CostCalculator.jsx
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DollarSign, PhoneMissed, PhoneCall, Clock } from 'react-feather';
import Button from '../common/Button';

const SectionContainer = styled.section`
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  background-color: white;
  
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
  margin-bottom: 1rem;
  color: #000;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    margin-top: -0.5rem;
  }
`;

const SectionSubheading = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const CalculatorCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 3rem;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const CalculatorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InputRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const SliderContainer = styled.div`
  flex: 1;
`;

const Slider = styled.input`
  width: 100%;
  height: 8px;
  background: #ddd;
  border-radius: 5px;
  appearance: none;
  outline: none;
  
  &::-webkit-slider-thumb {
    appearance: none;
    width: 18px;
    height: 18px;
    background: #3498db;
    border-radius: 50%;
    cursor: pointer;
  }
  
  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: #3498db;
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }
`;

const StyledInput = styled.input`
  width: 80px;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
`;

const ResultCard = styled(motion.div)`
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid #eee;
`;

const ResultLabel = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #555;
`;

const ResultValue = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #3498db;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const RiskFreeContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 1.5rem 2rem;
  margin-top: 3rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 1.2rem 1.5rem;
    margin-top: 2rem;
  }
`;

const RiskFreeHeading = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #6C63FF;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.4rem;
  }
`;

const RiskFreeText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const CostCalculator = () => {
  const [missedCalls, setMissedCalls] = useState(10);
  const [callValue, setCallValue] = useState(200);
  const [conversionRate, setConversionRate] = useState(30);
  
  const [monthlyCost, setMonthlyCost] = useState(0);
  const [yearlyCost, setYearlyCost] = useState(0);
  const [mercuryROI, setMercuryROI] = useState(0);
  
  // Calculate costs when inputs change
  useEffect(() => {
    const monthlyRevenueLost = missedCalls * callValue * (conversionRate / 100);
    const yearlyRevenueLost = monthlyRevenueLost * 12;
    const mercuryMonthlyCost = 399; // Assumed monthly cost of Mercury
    const mercuryMonthlyROI = monthlyRevenueLost - mercuryMonthlyCost;
    
    setMonthlyCost(monthlyRevenueLost);
    setYearlyCost(yearlyRevenueLost);
    setMercuryROI(mercuryMonthlyROI > 0 ? mercuryMonthlyROI : 0);
  }, [missedCalls, callValue, conversionRate]);
  
  return (
    <SectionContainer>
      <BackgroundSVG>
        <img src="/assets/gridbackground1.svg" alt="" aria-hidden="true" />
      </BackgroundSVG>
      
      <Container>
        <SectionHeading>Calculate The Real Cost Of Missed Calls</SectionHeading>
        <SectionSubheading>
        Every time that phone rings and you can't pick up, that's not just a missed call—it's money walking out the door. Your competitor is just one Google search away, and customers who can't reach you will find someone who answers.
        </SectionSubheading>
        
        <CalculatorCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <CalculatorGrid>
            <InputsContainer>
              <InputGroup>
                <InputLabel><PhoneMissed size={18} /> Missed Calls Per Month</InputLabel>
                <InputRow>
                  <SliderContainer>
                    <Slider 
                      type="range" 
                      min="1" 
                      max="50" 
                      value={missedCalls} 
                      onChange={(e) => setMissedCalls(parseInt(e.target.value))}
                    />
                  </SliderContainer>
                  <StyledInput 
                    type="number" 
                    value={missedCalls} 
                    onChange={(e) => setMissedCalls(parseInt(e.target.value) || 0)}
                    min="1"
                    max="50"
                  />
                </InputRow>
              </InputGroup>
              
              <InputGroup>
                <InputLabel><DollarSign size={18} /> Average Value Per Call ($)</InputLabel>
                <InputRow>
                  <SliderContainer>
                    <Slider 
                      type="range" 
                      min="50" 
                      max="1000" 
                      step="10"
                      value={callValue} 
                      onChange={(e) => setCallValue(parseInt(e.target.value))}
                    />
                  </SliderContainer>
                  <StyledInput 
                    type="number" 
                    value={callValue} 
                    onChange={(e) => setCallValue(parseInt(e.target.value) || 0)}
                    min="50"
                    max="1000"
                  />
                </InputRow>
              </InputGroup>
              
              <InputGroup>
                <InputLabel><PhoneCall size={18} /> Call Conversion Rate (%)</InputLabel>
                <InputRow>
                  <SliderContainer>
                    <Slider 
                      type="range" 
                      min="1" 
                      max="100" 
                      value={conversionRate} 
                      onChange={(e) => setConversionRate(parseInt(e.target.value))}
                    />
                  </SliderContainer>
                  <StyledInput 
                    type="number" 
                    value={conversionRate} 
                    onChange={(e) => setConversionRate(parseInt(e.target.value) || 0)}
                    min="1"
                    max="100"
                  />
                </InputRow>
              </InputGroup>
            </InputsContainer>
            
            <ResultsContainer>
              <ResultCard
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ResultLabel>Monthly Revenue Lost</ResultLabel>
                <ResultValue>${monthlyCost.toLocaleString()}</ResultValue>
              </ResultCard>
              
              <ResultCard
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ResultLabel>Yearly Revenue Lost</ResultLabel>
                <ResultValue>${yearlyCost.toLocaleString()}</ResultValue>
              </ResultCard>
              
              <ResultCard
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <ResultLabel>Monthly ROI with Mercury</ResultLabel>
                <ResultValue>${mercuryROI.toLocaleString()}</ResultValue>
              </ResultCard>
            </ResultsContainer>
          </CalculatorGrid>
          
          <ButtonContainer>
            <Button as="a" href="/book-demo">Stop Losing Revenue Today</Button>
          </ButtonContainer>
        </CalculatorCard>
        
        <RiskFreeContainer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <RiskFreeHeading>7-Day Risk-Free Trial</RiskFreeHeading>
          <RiskFreeText>
            If Mercury doesn't book more appointments for your business within the first 7 days, you don't pay. No questions asked.
          </RiskFreeText>
        </RiskFreeContainer>
      </Container>
    </SectionContainer>
  );
};

export default CostCalculator;