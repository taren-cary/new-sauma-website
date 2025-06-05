import styled from 'styled-components';
import Button from './Button';
import { motion } from 'framer-motion';

const CTAContainer = styled.section`
  padding: 5rem 0;
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

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const Logo = styled.img`
  height: ${props => props.logoSize || '200px'};
  margin-bottom: -1rem;
  margin-top: -1.5rem;
  
  @media (max-width: 768px) {
    height: ${props => props.logoSize ? `calc(${props.logoSize} * 0.75)` : '150px'};
    margin-bottom: -0.7rem;
    margin-top: 1.2rem;
  }
`;

const LimitedBadge = styled(motion.div)`
  position: absolute;
  top: -80px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 6px 15px;
  font-size: 0.8rem;
  font-weight: 500;
  color:rgb(0, 0, 0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 3;
  margin-top: 0.2rem;
  
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 5px 12px;
    top: -80px;
    margin-top: 3.5rem;
    margin-bottom: 3rem;
  }
`;

const CTAHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const TrialText = styled.p`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 0.8rem;
    margin-bottom: 0.1rem;
  }
`;

const CTASection = ({ 
  heading = "Ready To Put Your Business On Autopilot?", 
  text = "Say goodbye to slow follow-ups, missed opportunities, tedious scheduling, and generic outreach—hire our AI workers today and transform the way you grow your business!",
  buttonText = "Get Started",
  buttonLink = "/",
  showLogo = false,
  logoSrc = "/assets/mercury_logo.svg",
  showLimitedBadge = false,
  logoSize = null
}) => {
  return (
    <CTAContainer>
      <BackgroundSVG>
        <img src="/assets/hero-background1.svg" alt="" aria-hidden="true" />
      </BackgroundSVG>
      
      <CTAContent>
        {showLogo && (
          <LogoContainer>
            {showLimitedBadge && (
              <LimitedBadge
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Only 2 slots left this month!
              </LimitedBadge>
            )}
            <Logo src={logoSrc} alt="Logo" logoSize={logoSize} />
          </LogoContainer>
        )}
        <CTAHeading>{heading}</CTAHeading>
        <CTAText>{text}</CTAText>
        <Button as="a" href={buttonLink} fullWidthMobile>{buttonText}</Button>
        <TrialText>7-day risk free trial. No credit card required.</TrialText>
      </CTAContent>
    </CTAContainer>
  );
};

export default CTASection; 