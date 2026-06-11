import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-feather';
import BorderGlow from '../common/BorderGlow';
import SectionLabel from '../common/SectionLabel';

const INDUSTRIES = [
  {
    number: '01',
    name: 'Real Estate',
    path: '/industries/real-estate',
    description:
      'Autonomous lead qualification, showing scheduling, multi-channel follow-up, and CRM operations — running continuously without your involvement.',
    status: 'live',
  },
  {
    number: '02',
    name: 'Medspas',
    path: '/industries/medspas',
    description:
      'End-to-end consultation scheduling, lead nurturing, and appointment management — so your team stays focused on patient outcomes.',
    status: 'live',
  },
  {
    number: '03',
    name: 'Mobile Detailing',
    path: '/industries/mobile-detailing',
    description:
      'Lead capture, job booking, route scheduling, and automated follow-up — a complete operations layer built for mobile detailing businesses.',
    status: 'live',
  },
];

const AgencySection = () => {
  return (
    <SectionContainer id="industries">
      <OrbOne />
      <OrbTwo />
      <ContentContainer>
        <SectionLabel>Systems</SectionLabel>
        <SectionHeading>Purpose-built for your industry</SectionHeading>
        <SectionSubheading>
          Every deployment is engineered from the ground up for the specific tools, workflows, and lead dynamics of your industry. Not configured — built.
        </SectionSubheading>

        <Grid>
          {INDUSTRIES.map((industry, index) => (
            <CardWrapper
              key={industry.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              isLive={industry.status === 'live'}
            >
              {industry.status === 'live' ? (
                <CardLink to={industry.path}>
                  <BorderGlow
                    backgroundColor="rgba(255,255,255,0.04)"
                    borderRadius={20}
                    colors={['#6C63FF', '#a78bfa', '#4F46E5']}
                    glowColor="258 60 65"
                    glowIntensity={1.2}
                    edgeSensitivity={28}
                  >
                    <CardInner>
                      <CardTop>
                        <NumberTag>{industry.number}</NumberTag>
                      </CardTop>
                      <IndustryName>{industry.name}</IndustryName>
                      <IndustryDesc>{industry.description}</IndustryDesc>
                      <LearnMore>
                        Explore system <ArrowRight size={14} />
                      </LearnMore>
                    </CardInner>
                  </BorderGlow>
                </CardLink>
              ) : (
                <BorderGlow
                  backgroundColor="rgba(255,255,255,0.04)"
                  borderRadius={20}
                  colors={['#6C63FF', '#a78bfa', '#4F46E5']}
                  glowColor="258 60 65"
                  glowIntensity={1.2}
                  edgeSensitivity={28}
                >
                  <CardInner>
                    <CardTop>
                      <NumberTag>{industry.number}</NumberTag>
                      <Badge>Coming Soon</Badge>
                    </CardTop>
                    <IndustryName>{industry.name}</IndustryName>
                    <IndustryDesc>{industry.description}</IndustryDesc>
                  </CardInner>
                </BorderGlow>
              )}
            </CardWrapper>
          ))}
        </Grid>
      </ContentContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 6rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const OrbOne = styled.div`
  position: absolute;
  width: 700px;
  height: 700px;
  top: -200px;
  right: -200px;
  background: radial-gradient(circle, rgba(108, 99, 255, 0.12) 0%, transparent 65%);
  border-radius: 50%;
  pointer-events: none;
  filter: blur(70px);
`;

const OrbTwo = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  bottom: -150px;
  left: -120px;
  background: radial-gradient(circle, rgba(79, 70, 229, 0.09) 0%, transparent 65%);
  border-radius: 50%;
  pointer-events: none;
  filter: blur(70px);
`;

const ContentContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fafafa 20%, #c4b5fd 70%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const SectionSubheading = styled.p`
  font-size: 1.05rem;
  color: rgba(250, 250, 250, 0.5);
  max-width: 580px;
  margin: 0 auto 3.5rem;
  line-height: 1.75;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
  }
`;

const CardWrapper = styled(motion.div)`
  transition: transform 0.25s;
  cursor: ${({ isLive }) => isLive ? 'pointer' : 'default'};

  &:hover {
    transform: ${({ isLive }) => isLive ? 'translateY(-4px)' : 'none'};
  }
`;

const CardLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const CardInner = styled.div`
  padding: 2rem;
  text-align: left;
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const NumberTag = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: rgba(250, 250, 250, 0.18);
  line-height: 1;
  font-variant-numeric: tabular-nums;
`;

const Badge = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(250, 250, 250, 0.45);
  padding: 4px 10px;
  border-radius: 20px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const IndustryName = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #fafafa;
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
`;

const IndustryDesc = styled.p`
  font-size: 0.9rem;
  color: rgba(250, 250, 250, 0.5);
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const LearnMore = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #6C63FF;

  svg {
    transition: transform 0.2s;
  }

  ${CardWrapper}:hover & svg {
    transform: translateX(4px);
  }
`;

export default AgencySection;
