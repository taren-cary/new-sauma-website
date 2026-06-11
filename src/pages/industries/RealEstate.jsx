import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, Calendar, Home, BarChart2, MessageSquare, Clock, CheckCircle } from 'react-feather';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import Button from '../../components/common/Button';
import CTASection from '../../components/common/CTASection';
import FadeInSection from '../../components/common/FadeInSection';
import SectionLabel from '../../components/common/SectionLabel';

const FEATURES = [
  { icon: Phone, title: 'Outbound Lead Calling', desc: 'Your AI calls every new lead within seconds of them submitting — Zillow, website forms, wherever they come from — using a natural, conversational voice.' },
  { icon: CheckCircle, title: 'Lead Qualification', desc: 'Asks the right questions to score and route every lead: timeline, budget, location, pre-approval status. Only serious buyers reach your calendar.' },
  { icon: Calendar, title: 'Showing Booking', desc: 'Books, reschedules, and cancels property showings directly on your calendar. Sends confirmation and reminder messages automatically.' },
  { icon: Mail, title: 'Email & SMS Follow-Up', desc: 'Sends personalized follow-up emails and texts after every call, every showing, and every no-response — all without you lifting a finger.' },
  { icon: Home, title: 'Live Listings Awareness', desc: 'Reads your active listings in real time from Google Sheets and answers lead questions about available properties accurately and instantly.' },
  { icon: BarChart2, title: 'CRM Integration', desc: 'Automatically creates and updates contacts in HubSpot or GoHighLevel — with notes, lead scores, and pipeline stage — after every interaction.' },
  { icon: MessageSquare, title: 'Inbound SMS Handling', desc: 'Responds to inbound texts from leads immediately, answers questions, qualifies interest, and routes warm leads to booking.' },
  { icon: Clock, title: 'Daily AI Briefings', desc: 'Sends you a morning summary every day via Telegram — pipeline updates, new leads, booked showings, and action items.' },
];

const STEPS = [
  { number: '01', title: 'Lead comes in', body: 'A lead submits from Zillow, your website, or any form. Your AI is notified instantly.' },
  { number: '02', title: 'AI calls within seconds', body: 'An outbound call fires automatically. Your AI introduces itself on your behalf and starts the conversation.' },
  { number: '03', title: 'Qualify & book', body: 'The AI asks qualification questions, checks your calendar for availability, and books a showing on the spot.' },
  { number: '04', title: 'Follow up automatically', body: 'Email and SMS confirmations go out immediately. Reminders fire before the showing. No-shows get a re-engagement sequence.' },
  { number: '05', title: 'CRM stays updated', body: 'Every interaction is logged. Contacts are created, scored, and moved through the pipeline in HubSpot or GoHighLevel.' },
  { number: '06', title: 'You get a daily brief', body: "Every morning your AI sends you a Telegram summary: who's hot, what's booked, what needs your attention." },
];

const RealEstate = () => {
  return (
    <>
      <Helmet>
        <title>Real Estate AI System — Sauma AI</title>
        <meta name="description" content="A purpose-built autonomous system that handles lead qualification, showing scheduling, follow-up, and CRM operations for real estate agents — continuously, without your involvement." />
      </Helmet>

      <Navbar />

      <main>
        <HeroSection />
        <FadeInSection><FeaturesSection /></FadeInSection>
        <FadeInSection><HowItWorksSection /></FadeInSection>
        <CTASection
          heading="Your pipeline, operating autonomously."
          text="Book a demo and we'll walk you through the full system — what we build, how it integrates, and what to expect in the first week."
          buttonText="Book a Demo"
          buttonLink="/book-demo"
          showBeams
        />
      </main>

      <Footer />
    </>
  );
};

const HeroSection = () => (
  <HeroContainer>
    <OrbHeroOne />
    <OrbHeroTwo />
    <HeroContent>
      <IndustryTag
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Real Estate
      </IndustryTag>
      <HeroHeading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        The operating layer for high-performance real estate agents.
      </HeroHeading>
      <HeroSubheading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        A purpose-built system that handles every step of your revenue pipeline — from the first lead contact to the booked showing — operating continuously without your involvement.
      </HeroSubheading>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        <Button as={Link} to="/book-demo">Book a Demo</Button>
        <Button as="a" href="#how-it-works" variant="outline">See How It Works</Button>
      </motion.div>
    </HeroContent>
  </HeroContainer>
);

const FeaturesSection = () => (
  <Section>
    <Container>
      <SectionLabel>Capabilities</SectionLabel>
      <SectionHeading>What the system handles</SectionHeading>
      <SectionSubheading>
        Eight tightly integrated capabilities, engineered to function as a single autonomous operation — not a stack of tools you have to manage.
      </SectionSubheading>
      <FeaturesGrid>
        {FEATURES.map((f, i) => {
          const Icon = f.icon;
          return (
            <FeatureCard
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              viewport={{ once: true }}
            >
              <FeatureIconWrapper><Icon size={22} /></FeatureIconWrapper>
              <FeatureTitle>{f.title}</FeatureTitle>
              <FeatureDesc>{f.desc}</FeatureDesc>
            </FeatureCard>
          );
        })}
      </FeaturesGrid>
    </Container>
  </Section>
);

const HowItWorksSection = () => (
  <Section id="how-it-works">
    <Container>
      <SectionLabel>Deployment</SectionLabel>
      <SectionHeading>How it works</SectionHeading>
      <SectionSubheading>From first contact to a booked showing — every step handled by your AI, without human intervention.</SectionSubheading>
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
  max-width: 820px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const IndustryTag = styled(motion.div)`
  display: inline-block;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(250, 250, 250, 0.5);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 20px;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const HeroHeading = styled(motion.h1)`
  font-size: 3.75rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
  color: #fafafa;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const HeroSubheading = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.7;
  color: rgba(250, 250, 250, 0.65);
  max-width: 680px;
  margin: 0 auto 2.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Section = styled.section`
  padding: 5rem 0;

  @media (max-width: 768px) {
    padding: 3.5rem 0;
  }
`;

const Container = styled.div`
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
  letter-spacing: -0.02em;
  text-align: center;
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
  text-align: center;
  max-width: 580px;
  margin: 0 auto 3rem;
  line-height: 1.7;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
`;

const FeatureIconWrapper = styled.div`
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

const FeatureTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #fafafa;
  margin-bottom: 0.5rem;
`;

const FeatureDesc = styled.p`
  font-size: 0.88rem;
  color: rgba(250, 250, 250, 0.5);
  line-height: 1.6;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
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

export default RealEstate;
