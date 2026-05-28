import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, Calendar, Home, BarChart2, MessageSquare, Clock, CheckCircle } from 'react-feather';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import Button from '../../components/common/Button';
import CTASection from '../../components/common/CTASection';

const FEATURES = [
  {
    icon: Phone,
    title: 'Outbound Lead Calling',
    desc: 'Your AI calls every new lead within seconds of them submitting — Zillow, website forms, wherever they come from — using a natural, conversational voice.',
  },
  {
    icon: CheckCircle,
    title: 'Lead Qualification',
    desc: 'Asks the right questions to score and route every lead: timeline, budget, location, pre-approval status. Only serious buyers reach your calendar.',
  },
  {
    icon: Calendar,
    title: 'Showing Booking',
    desc: 'Books, reschedules, and cancels property showings directly on your calendar. Sends confirmation and reminder messages automatically.',
  },
  {
    icon: Mail,
    title: 'Email & SMS Follow-Up',
    desc: 'Sends personalized follow-up emails and texts after every call, every showing, and every no-response — all without you lifting a finger.',
  },
  {
    icon: Home,
    title: 'Live Listings Awareness',
    desc: 'Reads your active listings in real time from Google Sheets and answers lead questions about available properties accurately and instantly.',
  },
  {
    icon: BarChart2,
    title: 'CRM Integration',
    desc: 'Automatically creates and updates contacts in HubSpot or GoHighLevel — with notes, lead scores, and pipeline stage — after every interaction.',
  },
  {
    icon: MessageSquare,
    title: 'Inbound SMS Handling',
    desc: 'Responds to inbound texts from leads immediately, answers questions, qualifies interest, and routes warm leads to booking.',
  },
  {
    icon: Clock,
    title: 'Daily AI Briefings',
    desc: 'Sends you a morning summary every day via Telegram — pipeline updates, new leads, booked showings, and action items.',
  },
];

const RealEstate = () => {
  return (
    <>
      <Helmet>
        <title>Real Estate AI System — Sauma AI</title>
        <meta name="description" content="A fully autonomous AI system that qualifies leads, books showings, and follows up for real estate agents — running 24/7." />
      </Helmet>

      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection
          heading="Ready to automate your pipeline?"
          text="Book a demo and we'll walk you through exactly how the system works for your real estate business."
          buttonText="Book a Demo"
          buttonLink="/book-demo"
          showLogo={true}
          logoSrc="/assets/sauma_logo.png"
          logoSize="110px"
        />
      </main>

      <Footer />
    </>
  );
};

const HeroSection = () => (
  <HeroContainer>
    <HeroBackground>
      <img src="/assets/hero-background1.svg" alt="" aria-hidden="true" />
    </HeroBackground>
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
        Your leads followed up. Your showings booked. Your pipeline managed.
      </HeroHeading>
      <HeroSubheading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        A complete autonomous AI system built for real estate agents — calling leads within seconds, qualifying buyers and sellers, booking property showings, and keeping your CRM updated, all without you having to be available 24/7.
      </HeroSubheading>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        <Button as={Link} to="/book-demo">Book a Demo</Button>
        <Button as="a" href="#how-it-works">See How It Works</Button>
      </motion.div>
    </HeroContent>
  </HeroContainer>
);

const FeaturesSection = () => (
  <Section>
    <Container>
      <SectionHeading>Everything running on autopilot</SectionHeading>
      <SectionSubheading>
        Eight fully integrated capabilities working together as one system — not a collection of disconnected tools.
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

const STEPS = [
  { number: '01', title: 'Lead comes in', body: 'A lead submits from Zillow, your website, or any form. Your AI is notified instantly.' },
  { number: '02', title: 'AI calls within seconds', body: 'An outbound call fires automatically. Your AI introduces itself on your behalf and starts the conversation.' },
  { number: '03', title: 'Qualify & book', body: 'The AI asks qualification questions, checks your calendar for availability, and books a showing on the spot.' },
  { number: '04', title: 'Follow up automatically', body: 'Email and SMS confirmations go out immediately. Reminders fire before the showing. No-shows get a re-engagement sequence.' },
  { number: '05', title: 'CRM stays updated', body: 'Every interaction is logged. Contacts are created, scored, and moved through the pipeline in HubSpot or GoHighLevel.' },
  { number: '06', title: 'You get a daily brief', body: 'Every morning your AI sends you a Telegram summary: who\'s hot, what\'s booked, what needs your attention.' },
];

const HowItWorksSection = () => (
  <Section id="how-it-works" style={{ background: '#fafafa' }}>
    <Container>
      <SectionHeading>How it works</SectionHeading>
      <SectionSubheading>From the moment a lead touches your business to the moment they sign — your AI is handling it.</SectionSubheading>
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

// ── Styled Components ──────────────────────────────────────────────────────────

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

const HeroBackground = styled.div`
  position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;
  img { width: 100%; height: 100%; object-fit: cover; }
`;

const HeroContent = styled.div`
  max-width: 820px;
  margin: 0 auto;
`;

const IndustryTag = styled(motion.div)`
  display: inline-block;
  background: rgba(108, 99, 255, 0.12);
  color: #6C63FF;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 20px;
  margin-bottom: 1.5rem;
`;

const HeroHeading = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubheading = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.7;
  opacity: 0.8;
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
  text-align: center;
  margin-bottom: 1rem;
  color: #111;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const SectionSubheading = styled.p`
  font-size: 1.05rem;
  color: #555;
  text-align: center;
  max-width: 580px;
  margin: 0 auto 3rem;
  line-height: 1.7;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
`;

const FeatureIconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(108, 99, 255, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  svg { color: #6C63FF; }
`;

const FeatureTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 0.5rem;
`;

const FeatureDesc = styled.p`
  font-size: 0.88rem;
  color: #666;
  line-height: 1.6;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled(motion.div)`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 1.75rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
`;

const StepNumber = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #6C63FF;
  opacity: 0.25;
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const StepTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 0.5rem;
`;

const StepBody = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
`;

export default RealEstate;
