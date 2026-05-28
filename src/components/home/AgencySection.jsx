import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Activity, Truck, ArrowRight } from 'react-feather';

const INDUSTRIES = [
  {
    icon: Home,
    name: 'Real Estate',
    path: '/industries/real-estate',
    description:
      'A fully autonomous system that qualifies inbound leads, books property showings, follows up by call, SMS, and email, and updates your CRM — around the clock.',
    status: 'live',
  },
  {
    icon: Activity,
    name: 'Medspas',
    path: '/industries/medspas',
    description:
      'AI that handles consultation bookings, lead nurturing, appointment reminders, and client follow-ups so your staff can stay focused on patient care.',
    status: 'coming-soon',
  },
  {
    icon: Truck,
    name: 'Mobile Detailing',
    path: '/industries/mobile-detailing',
    description:
      'Automated lead capture, job booking, route-based scheduling, and follow-up — built specifically for mobile detailing operations.',
    status: 'coming-soon',
  },
];

const AgencySection = () => {
  return (
    <SectionContainer id="industries">
      <BackgroundSVG>
        <img src="/assets/hero-background1.svg" alt="" aria-hidden="true" />
      </BackgroundSVG>

      <ContentContainer>
        <SectionHeading>Built for your industry</SectionHeading>
        <SectionSubheading>
          Every system is custom-built from the ground up for the specific workflows, lead types, and tools your industry uses. No templates. No one-size-fits-all.
        </SectionSubheading>

        <Grid>
          {INDUSTRIES.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <IndustryCard
                key={industry.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                as={industry.status === 'live' ? Link : 'div'}
                to={industry.status === 'live' ? industry.path : undefined}
                isLive={industry.status === 'live'}
              >
                <CardTop>
                  <IconWrapper>
                    <Icon size={26} />
                  </IconWrapper>
                  {industry.status === 'coming-soon' && (
                    <Badge>Coming Soon</Badge>
                  )}
                </CardTop>

                <IndustryName>{industry.name}</IndustryName>
                <IndustryDesc>{industry.description}</IndustryDesc>

                {industry.status === 'live' && (
                  <LearnMore>
                    Learn more <ArrowRight size={15} />
                  </LearnMore>
                )}
              </IndustryCard>
            );
          })}
        </Grid>
      </ContentContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 5rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3.5rem 0;
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

const ContentContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const SectionSubheading = styled.p`
  font-size: 1.1rem;
  color: #444;
  max-width: 620px;
  margin: 0 auto 3rem;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
  }
`;

const IndustryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 2rem;
  text-align: left;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
  transition: transform 0.25s, box-shadow 0.25s;
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: ${({ isLive }) => isLive ? 'pointer' : 'default'};

  &:hover {
    transform: ${({ isLive }) => isLive ? 'translateY(-4px)' : 'none'};
    box-shadow: ${({ isLive }) => isLive ? '0 12px 32px rgba(108, 99, 255, 0.15)' : '0 4px 20px rgba(0, 0, 0, 0.07)'};
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;

const IconWrapper = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(108, 99, 255, 0.12) 0%, rgba(118, 75, 162, 0.12) 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #6C63FF;
  }
`;

const Badge = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  background: rgba(108, 99, 255, 0.1);
  color: #6C63FF;
  padding: 4px 10px;
  border-radius: 20px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

const IndustryName = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 0.75rem;
`;

const IndustryDesc = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.65;
  margin-bottom: 1.25rem;
`;

const LearnMore = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #6C63FF;

  svg {
    transition: transform 0.2s;
  }

  ${IndustryCard}:hover & svg {
    transform: translateX(4px);
  }
`;

export default AgencySection;
