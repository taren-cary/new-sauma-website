import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Database, GitBranch, BarChart2, Bell, FileText, Cpu } from 'react-feather';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import CTASection from '../components/common/CTASection';
import FadeInSection from '../components/common/FadeInSection';
import SectionLabel from '../components/common/SectionLabel';

const CAPABILITIES = [
  { icon: Database, title: 'CRM Automation', desc: 'Contact records updated, pipeline stages advanced, and follow-up tasks created automatically — your CRM stays current without anyone touching it.' },
  { icon: GitBranch, title: 'Workflow Automation', desc: 'Repetitive internal processes — approvals, handoffs, task routing, status updates — automated end-to-end so your team stops doing administrative work.' },
  { icon: BarChart2, title: 'Reporting & Dashboards', desc: 'Automated reports and live dashboards generated without human involvement — the numbers your team needs, always current, always accurate.' },
  { icon: Bell, title: 'Internal Alerts & Routing', desc: 'The right information gets to the right person at the right time — automatically. No missed follow-ups, no dropped handoffs, no manual notifications.' },
  { icon: FileText, title: 'Document Processing', desc: 'Intake forms, contracts, and paperwork processed, categorized, and filed automatically — from submission to your system without manual handling.' },
  { icon: Cpu, title: 'Process Intelligence', desc: 'AI that monitors your operations continuously, surfaces bottlenecks before they compound, and identifies where your team\'s time is being lost.' },
];

const STEPS = [
  { number: '01', title: 'We audit your operations', body: 'We map how your team actually works — the tools, the handoffs, the recurring tasks, and where time is being lost. Every Icosa deployment starts with a clear picture of your internal reality.' },
  { number: '02', title: 'We identify what to automate', body: 'Not everything should be automated. We identify the high-frequency, rules-based work that consumes your team\'s time and design a system around eliminating it.' },
  { number: '03', title: 'We build and integrate', body: 'Your Icosa system is built to fit your existing stack — connecting to the tools your team already uses, not replacing them. We handle the full build and integration.' },
  { number: '04', title: 'Icosa runs your operations', body: 'From this point, your internal operations run on autopilot. Your team works on problems that require judgment. The rest is handled.' },
];

const Icosa = () => (
  <>
    <Helmet>
      <title>Icosa — Internal AI Platform | Sauma AI</title>
      <meta name="description" content="Icosa is Sauma's internal AI platform — autonomous systems that run your operations, CRM, workflows, and reporting without your team's involvement." />
    </Helmet>

    <Navbar />

    <main>
      <HeroSection />
      <FadeInSection><CapabilitiesSection /></FadeInSection>
      <FadeInSection><HowItWorksSection /></FadeInSection>
      <CTASection
        heading="Your operations, automated."
        text="Book a demo and we'll map exactly where Icosa would eliminate the manual work inside your business — built around your team, your tools, and your workflow."
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
      <HeroSymbol
        src="/assets/IcosahedronWhite.png"
        alt="Icosa"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
      <PlatformTag
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Internal AI Platform
      </PlatformTag>
      <HeroHeading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Icosa
      </HeroHeading>
      <HeroSubheading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
      >
        The autonomous system running your internal operations — CRM, workflows, reporting, and process automation — so your team focuses exclusively on work that requires human judgment.
      </HeroSubheading>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        <Button as={Link} to="/book-demo">Book a Demo</Button>
        <Button as="a" href="#capabilities" variant="outline">See Capabilities</Button>
      </motion.div>
    </HeroContent>
  </HeroContainer>
);

const CapabilitiesSection = () => (
  <Section id="capabilities">
    <Container>
      <SectionLabel>Capabilities</SectionLabel>
      <SectionHeading>What Icosa handles</SectionHeading>
      <SectionSubheading>
        Six integrated capabilities that eliminate the administrative work consuming your team's time — from CRM maintenance to process monitoring.
      </SectionSubheading>
      <CapabilitiesGrid>
        {CAPABILITIES.map((cap, i) => {
          const Icon = cap.icon;
          return (
            <CapabilityCard
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              viewport={{ once: true }}
            >
              <IconWrapper><Icon size={22} /></IconWrapper>
              <CapTitle>{cap.title}</CapTitle>
              <CapDesc>{cap.desc}</CapDesc>
            </CapabilityCard>
          );
        })}
      </CapabilitiesGrid>
    </Container>
  </Section>
);

const HowItWorksSection = () => (
  <Section>
    <Container>
      <SectionLabel>Deployment</SectionLabel>
      <SectionHeading>How Icosa is deployed</SectionHeading>
      <SectionSubheading>
        Every Icosa system is built around your actual operations — not a generic automation template.
      </SectionSubheading>
      <StepsGrid>
        {STEPS.map((step, i) => (
          <StepCard
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <StepNumber>{step.number}</StepNumber>
            <StepTitle>{step.title}</StepTitle>
            <StepBody>{step.body}</StepBody>
          </StepCard>
        ))}
      </StepsGrid>
    </Container>
  </Section>
);

const HeroContainer = styled.section`
  min-height: 90vh;
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
  background: radial-gradient(circle, rgba(108, 99, 255, 0.14) 0%, transparent 65%);
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
  background: radial-gradient(circle, rgba(79, 70, 229, 0.11) 0%, transparent 65%);
  border-radius: 50%;
  pointer-events: none;
  filter: blur(80px);
  z-index: 0;
`;

const HeroContent = styled.div`
  max-width: 780px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroSymbol = styled(motion.img)`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 2rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    margin-bottom: 1.5rem;
  }
`;

const PlatformTag = styled(motion.div)`
  display: inline-block;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(250, 250, 250, 0.5);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 20px;
  margin-bottom: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const HeroHeading = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fafafa 20%, #c4b5fd 70%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const HeroSubheading = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.7;
  color: rgba(250, 250, 250, 0.65);
  max-width: 640px;
  margin: 0 auto 2.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Section = styled.section`
  padding: 5rem 0;

  @media (max-width: 768px) { padding: 3.5rem 0; }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) { padding: 0 1.5rem; }
`;

const SectionHeading = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fafafa 20%, #c4b5fd 70%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) { font-size: 1.7rem; }
`;

const SectionSubheading = styled.p`
  font-size: 1.05rem;
  color: rgba(250, 250, 250, 0.5);
  text-align: center;
  max-width: 560px;
  margin: 0 auto 3rem;
  line-height: 1.7;
`;

const CapabilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;

const CapabilityCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
`;

const IconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  svg { color: rgba(250, 250, 250, 0.55); }
`;

const CapTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #fafafa;
  margin-bottom: 0.5rem;
`;

const CapDesc = styled.p`
  font-size: 0.88rem;
  color: rgba(250, 250, 250, 0.5);
  line-height: 1.6;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const StepCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.75rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
`;

const StepNumber = styled.div`
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: rgba(250, 250, 250, 0.18);
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const StepTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: #fafafa;
  margin-bottom: 0.5rem;
`;

const StepBody = styled.p`
  font-size: 0.9rem;
  color: rgba(250, 250, 250, 0.5);
  line-height: 1.6;
`;

export default Icosa;
