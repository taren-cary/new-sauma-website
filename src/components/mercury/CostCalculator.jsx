import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DollarSign, PhoneMissed, PhoneCall } from 'react-feather';
import Button from '../common/Button';

const SectionContainer = styled.section`
  padding: 5rem 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 0;
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
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fafafa 20%, #c4b5fd 70%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
`;

const SectionSubheading = styled.p`
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  color: rgba(250, 250, 250, 0.55);
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const CalculatorCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
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
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(250, 250, 250, 0.7);
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
  height: 6px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 5px;
  appearance: none;
  outline: none;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 18px;
    height: 18px;
    background: #6C63FF;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: #6C63FF;
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }
`;

const StyledInput = styled.input`
  width: 80px;
  padding: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  font-size: 1rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.06);
  color: #fafafa;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
`;

const ResultCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
`;

const ResultLabel = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: rgba(250, 250, 250, 0.5);
`;

const ResultValue = styled.p`
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #c4b5fd 0%, #6C63FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const RiskFreeContainer = styled(motion.div)`
  background: rgba(108, 99, 255, 0.06);
  border: 1px solid rgba(108, 99, 255, 0.2);
  border-radius: 16px;
  padding: 1.5rem 2rem;
  margin-top: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.2rem 1.5rem;
    margin-top: 2rem;
  }
`;

const RiskFreeHeading = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #fafafa;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const RiskFreeText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: rgba(250, 250, 250, 0.6);
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

  useEffect(() => {
    const monthlyRevenueLost = missedCalls * callValue * (conversionRate / 100);
    const yearlyRevenueLost = monthlyRevenueLost * 12;
    const mercuryMonthlyCost = 399;
    const mercuryMonthlyROI = monthlyRevenueLost - mercuryMonthlyCost;
    setMonthlyCost(monthlyRevenueLost);
    setYearlyCost(yearlyRevenueLost);
    setMercuryROI(mercuryMonthlyROI > 0 ? mercuryMonthlyROI : 0);
  }, [missedCalls, callValue, conversionRate]);

  return (
    <SectionContainer>
      <Container>
        <SectionHeading>Calculate The Real Cost Of Missed Calls</SectionHeading>
        <SectionSubheading>
          Every time that phone rings and you can't pick up, that's not just a missed call — it's money walking out the door. Your competitor is just one Google search away.
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
                <InputLabel><PhoneMissed size={16} /> Missed Calls Per Month</InputLabel>
                <InputRow>
                  <SliderContainer>
                    <Slider type="range" min="1" max="50" value={missedCalls} onChange={(e) => setMissedCalls(parseInt(e.target.value))} />
                  </SliderContainer>
                  <StyledInput type="number" value={missedCalls} onChange={(e) => setMissedCalls(parseInt(e.target.value) || 0)} min="1" max="50" />
                </InputRow>
              </InputGroup>

              <InputGroup>
                <InputLabel><DollarSign size={16} /> Average Value Per Call ($)</InputLabel>
                <InputRow>
                  <SliderContainer>
                    <Slider type="range" min="50" max="1000" step="10" value={callValue} onChange={(e) => setCallValue(parseInt(e.target.value))} />
                  </SliderContainer>
                  <StyledInput type="number" value={callValue} onChange={(e) => setCallValue(parseInt(e.target.value) || 0)} min="50" max="1000" />
                </InputRow>
              </InputGroup>

              <InputGroup>
                <InputLabel><PhoneCall size={16} /> Call Conversion Rate (%)</InputLabel>
                <InputRow>
                  <SliderContainer>
                    <Slider type="range" min="1" max="100" value={conversionRate} onChange={(e) => setConversionRate(parseInt(e.target.value))} />
                  </SliderContainer>
                  <StyledInput type="number" value={conversionRate} onChange={(e) => setConversionRate(parseInt(e.target.value) || 0)} min="1" max="100" />
                </InputRow>
              </InputGroup>
            </InputsContainer>

            <ResultsContainer>
              <ResultCard initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <ResultLabel>Monthly Revenue Lost</ResultLabel>
                <ResultValue>${monthlyCost.toLocaleString()}</ResultValue>
              </ResultCard>
              <ResultCard initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }}>
                <ResultLabel>Yearly Revenue Lost</ResultLabel>
                <ResultValue>${yearlyCost.toLocaleString()}</ResultValue>
              </ResultCard>
              <ResultCard initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <ResultLabel>Monthly ROI with Mercury</ResultLabel>
                <ResultValue>${mercuryROI.toLocaleString()}</ResultValue>
              </ResultCard>
            </ResultsContainer>
          </CalculatorGrid>

          <ButtonContainer>
            <Button as={Link} to="/book-demo">Stop Losing Revenue Today</Button>
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
