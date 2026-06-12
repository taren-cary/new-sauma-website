import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Crosshair, Tool, TrendingUp, Shield } from 'react-feather';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import TestimonialSlider from '../components/common/TestimonialSlider';
import CTASection from '../components/common/CTASection';
import Button from '../components/common/Button';
import FadeInSection from '../components/common/FadeInSection';
import SectionLabel from '../components/common/SectionLabel';

const VALUES = [
  { icon: Crosshair, title: 'Precision', description: 'We build systems that perform under real-world conditions. Edge cases are engineered for, not swept aside. A system that fails 5% of the time isn\'t a system — it\'s a liability.' },
  { icon: Tool, title: 'Craftsmanship', description: 'Every deployment is built from scratch for the specific business it serves. No templates configured to look like custom work. The difference shows immediately.' },
  { icon: TrendingUp, title: 'Leverage', description: 'We build systems that extend what people can do — not replace the judgment, relationships, and decisions that actually run the business. The goal is leverage, not substitution.' },
  { icon: Shield, title: 'Accountability', description: 'We operate with full clarity on scope, timelines, and outcomes. Nothing is obscured, nothing is oversold. If a system isn\'t performing, we say so and fix it.' },
];

const THESIS = [
  { number: '01', statement: 'Most operational work in a business can be automated completely — not assisted, not partially. The bar most tools set is too low.' },
  { number: '02', statement: 'General-purpose AI tools don\'t solve operational problems. Purpose-built systems do. Configuration isn\'t engineering.' },
  { number: '03', statement: 'The businesses that win this decade will be those that separate human judgment from administrative execution — and act on that separation now.' },
  { number: '04', statement: 'Autonomous AI systems aren\'t a feature or a workflow add-on. They\'re a new category of business infrastructure — and they should be built like one.' },
];

const AboutUsPage = () => (
  <>
    <Helmet>
      <title>About — Sauma AI</title>
      <meta name="description" content="Sauma builds autonomous AI infrastructure — Dodeca for client-facing operations and Icosa for internal systems — deployed from scratch for each business we work with." />
    </Helmet>

    <Navbar />

    <main>
      <HeroSection />
      <FadeInSection><MissionSection /></FadeInSection>
      <FadeInSection><ThesisSection /></FadeInSection>
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
        buttonText="Book a Demo"
        buttonLink="/book-demo"
        showBeams
      />
    </main>

    <Footer />
  </>
);

const HeroSection = () => (
  <HeroContainer>
    <OrbHeroOne />
    <OrbHeroTwo />
    <HeroContent>
      <HeroHeading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        We build the infrastructure layer that businesses run on.
      </HeroHeading>
      <HeroSubheading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Sauma designs and deploys autonomous AI systems that handle the operational and customer-facing work of running a business — completely, continuously, and without supervision.
      </HeroSubheading>
      <ButtonContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button as={Link} to="/dodeca" variant="outline">Explore Dodeca</Button>
        <Button as={Link} to="/icosa" variant="outline">Explore Icosa</Button>
      </ButtonContainer>
    </HeroContent>
  </HeroContainer>
);

const MissionSection = () => (
  <SectionContainer>
    <Container narrow>
      <SectionLabel>Mission</SectionLabel>
      <SectionHeading>Why we exist</SectionHeading>
      <MissionBody>
        <MissionParagraph>
          Most businesses spend enormous operational capacity on work that doesn't require human judgment — answering inquiries, booking appointments, updating records, sending follow-ups, generating reports. This isn't a staffing problem. It's an infrastructure problem.
        </MissionParagraph>
        <MissionParagraph>
          Sauma was built to solve it. We design and deploy two autonomous systems: Dodeca, which handles everything your customers interact with, and Icosa, which handles everything your team depends on internally. Both are built from scratch for each client. Neither is configured from a template.
        </MissionParagraph>
        <MissionParagraph>
          The result is a business that operates with the leverage of a much larger team — without the overhead, the inconsistency, or the dependency on people to execute repeatable work.
        </MissionParagraph>
      </MissionBody>
    </Container>
  </SectionContainer>
);

const ThesisSection = () => (
  <SectionContainer>
    <Container>
      <SectionLabel>Thesis</SectionLabel>
      <SectionHeading>What we believe</SectionHeading>
      <ThesisGrid>
        {THESIS.map((item, i) => (
          <ThesisCard
            key={item.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <ThesisNumber>{item.number}</ThesisNumber>
            <ThesisStatement>{item.statement}</ThesisStatement>
          </ThesisCard>
        ))}
      </ThesisGrid>
    </Container>
  </SectionContainer>
);

const ValuesSection = () => (
  <SectionContainer>
    <Container>
      <SectionLabel>Values</SectionLabel>
      <SectionHeading>How we operate</SectionHeading>
      <ValuesGrid>
        {VALUES.map((value, i) => {
          const Icon = value.icon;
          return (
            <ValueCard
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ValueIconWrapper><Icon size={22} /></ValueIconWrapper>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          );
        })}
      </ValuesGrid>
    </Container>
  </SectionContainer>
);

const HeroContainer = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 120px 2rem 80px;

  @media (max-width: 768px) {
    padding: 110px 1.5rem 60px;
    min-height: auto;
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
  max-width: 820px;
  position: relative;
  z-index: 2;
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
  }
`;

const HeroSubheading = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  color: rgba(250, 250, 250, 0.65);
  max-width: 680px;
  margin: 0 auto 2.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const SectionContainer = styled.section`
  padding: 5rem 0;

  @media (max-width: 768px) { padding: 3.5rem 0; }
`;

const Container = styled.div`
  max-width: ${({ narrow }) => narrow ? '720px' : '1100px'};
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) { padding: 0 1.5rem; }
`;

const SectionHeading = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 2.5rem;
  background: linear-gradient(135deg, #fafafa 20%, #c4b5fd 70%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) { font-size: 1.7rem; }
`;

const MissionBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MissionParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(250, 250, 250, 0.65);
  text-align: center;

  @media (max-width: 768px) { font-size: 1rem; }
`;

const ThesisGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  @media (max-width: 700px) { grid-template-columns: 1fr; }
`;

const ThesisCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
`;

const ThesisNumber = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: rgba(250, 250, 250, 0.18);
  margin-bottom: 1rem;
  line-height: 1;
`;

const ThesisStatement = styled.p`
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1.65;
  color: rgba(250, 250, 250, 0.8);
  letter-spacing: -0.01em;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  @media (max-width: 700px) { grid-template-columns: 1fr; }
`;

const ValueCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
`;

const ValueIconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;

  svg { color: rgba(250, 250, 250, 0.55); }
`;

const ValueTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #fafafa;
  margin-bottom: 0.75rem;
`;

const ValueDescription = styled.p`
  font-size: 0.92rem;
  line-height: 1.7;
  color: rgba(250, 250, 250, 0.55);
`;

export default AboutUsPage;
