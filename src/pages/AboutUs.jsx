import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import TestimonialSlider from '../components/common/TestimonialSlider';
import CTASection from '../components/common/CTASection';
import Button from '../components/common/Button';
import TrustSection from '../components/home/TrustSection';
import FadeInSection from '../components/common/FadeInSection';
import SectionLabel from '../components/common/SectionLabel';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <>
      <Helmet>
        <title>About — Sauma AI</title>
        <meta name="description" content="Sauma AI builds autonomous systems that handle the operational work of running a business — purpose-built for real estate, medspas, and mobile detailing." />
      </Helmet>

      <Navbar />

      <main>
        <HeroSection />

        <FadeInSection><TrustSection /></FadeInSection>
        <FadeInSection><StorySection /></FadeInSection>
        <FadeInSection><ValuesSection /></FadeInSection>

        <FadeInSection>
          <SectionContainer>
            <Container>
              <SectionLabel>Outcomes</SectionLabel>
        <SectionHeading>What our clients say</SectionHeading>
              <TestimonialSlider />
            </Container>
          </SectionContainer>
        </FadeInSection>

        <CTASection
          heading="Work with Sauma."
          text="If you're running a serious business and want to understand what autonomous operations could look like for your workflows, let's talk."
          buttonText="Get In Touch"
          buttonLink="/contact"
          showBeams
        />
      </main>

      <Footer />
    </>
  );
};

const HeroSection = () => {
  return (
    <HeroContainer>
      <OrbHeroOne />
      <OrbHeroTwo />
      <HeroContent>
        <HeroHeading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We build the systems businesses run on.
        </HeroHeading>

        <HeroSubheading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Sauma was founded to do one thing: build autonomous AI systems that handle the operational work of running a business, so the people behind it can focus on what only they can do.
        </HeroSubheading>

        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button as={Link} to="/industries/real-estate">View our systems</Button>
          <Button as={Link} to="/book-demo">Book a Demo</Button>
        </ButtonContainer>
      </HeroContent>
    </HeroContainer>
  );
};

const StorySection = () => {
  const milestones = [
    { year: '2022', title: 'The founding', description: 'Sauma is incorporated with a single thesis: the operational overhead of running a business is a solvable problem — with the right autonomous systems.' },
    { year: '2023', title: 'First system deployed', description: 'Mercury goes live — handling inbound calls, lead qualification, and appointment booking for real businesses in real industries.' },
    { year: '2024', title: 'Expanding across industries', description: 'Purpose-built systems deployed across real estate, medspas, and mobile detailing. Each engineered from the ground up for its industry.' },
    { year: '2025', title: 'Building what\'s next', description: 'Expanding the system portfolio, deepening integrations, and building the infrastructure layer that growing businesses will run on.' },
  ];

  return (
    <SectionContainer>
      <Container>
        <SectionLabel>Trajectory</SectionLabel>
        <SectionHeading>Our trajectory</SectionHeading>
        <TimelineContainer>
          {milestones.map((milestone, index) => (
            <TimelineCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TimelineYear>{milestone.year}</TimelineYear>
              <TimelineTitle>{milestone.title}</TimelineTitle>
              <TimelineDescription>{milestone.description}</TimelineDescription>
            </TimelineCard>
          ))}
        </TimelineContainer>
      </Container>
    </SectionContainer>
  );
};


const ValuesSection = () => {
  const values = [
    { title: 'Precision', description: 'We build systems that perform reliably under real-world conditions. Edge cases are engineered for, not swept aside.', icon: '🚀' },
    { title: 'Craftsmanship', description: 'Every deployment is built from the ground up for its specific industry. No templates. No configuration that passes for engineering.', icon: '✨' },
    { title: 'Leverage', description: 'We build systems that extend what people can do — not replace the judgment and relationships that run the business.', icon: '🤝' },
    { title: 'Transparency', description: 'We operate with full clarity on scope, timelines, and performance. Nothing obscured, nothing oversold.', icon: '🛡️' },
  ];

  return (
    <SectionContainer>
      <Container>
        <SectionLabel>Values</SectionLabel>
        <SectionHeading>How we operate</SectionHeading>
        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ValueIcon>{value.icon}</ValueIcon>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Container>
    </SectionContainer>
  );
};

// ── Styled Components ──────────────────────────────────────────────────────────

const HeroContainer = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 100px;
    min-height: 60vh;
  }
`;

const OrbHeroOne = styled.div`
  position: absolute;
  width: 700px;
  height: 700px;
  top: -250px;
  right: -200px;
  background: radial-gradient(circle, rgba(108, 99, 255, 0.13) 0%, transparent 65%);
  border-radius: 50%;
  pointer-events: none;
  filter: blur(80px);
  z-index: 0;
`;

const OrbHeroTwo = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  bottom: -200px;
  left: -150px;
  background: radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 65%);
  border-radius: 50%;
  pointer-events: none;
  filter: blur(80px);
  z-index: 0;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const HeroHeading = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #fafafa;

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
`;

const HeroSubheading = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.7;
  color: rgba(250, 250, 250, 0.65);

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: -1.5rem;
  }
`;

const SectionContainer = styled.section`
  padding: 5rem 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
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
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #fafafa 20%, #c4b5fd 70%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const TimelineCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const TimelineYear = styled.div`
  display: inline-block;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(250, 250, 250, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.4rem 1rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 0.75rem;
  color: #fafafa;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const TimelineDescription = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(250, 250, 250, 0.55);

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;


const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ValueCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #fafafa;
  margin-bottom: 0.75rem;
`;

const ValueDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.65;
  color: rgba(250, 250, 250, 0.55);
`;

export default AboutUsPage;
