import styled, { css } from 'styled-components';
import Button from './Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Beams from './Beams';

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

const BeamsBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 2;

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
  color: #fafafa;
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

const darkTextStyles = css`
  color: #fff;
`;

const CTAHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  ${({ dark }) => dark && darkTextStyles}

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  ${({ dark }) => dark && darkTextStyles}

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const TrialText = styled.p`
  font-size: 0.8rem;
  color: ${({ dark }) => dark ? 'rgba(255,255,255,0.7)' : 'rgba(250,250,250,0.5)'};
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
  logoSize = null,
  showBeams = false,
}) => {
  const isInternalLink = buttonLink.startsWith('/') && !buttonLink.includes('://');

  return (
    <CTAContainer>
      {showBeams ? (
        <BeamsBackground>
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={14}
            lightColor="#ffffff"
            speed={1.5}
            noiseIntensity={1.5}
            scale={0.18}
            rotation={0}
          />
        </BeamsBackground>
      ) : null}

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
        <CTAHeading dark={showBeams}>{heading}</CTAHeading>
        <CTAText dark={showBeams}>{text}</CTAText>
        {isInternalLink ? (
          <Button as={Link} to={buttonLink} fullWidthMobile>{buttonText}</Button>
        ) : (
          <Button as="a" href={buttonLink} fullWidthMobile>{buttonText}</Button>
        )}
      </CTAContent>
    </CTAContainer>
  );
};

export default CTASection;
