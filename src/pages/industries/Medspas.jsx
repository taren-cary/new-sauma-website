import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Phone, Calendar, MessageSquare, Clock,
  Star, RefreshCw, Send, BarChart2
} from 'react-feather';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import Button from '../../components/common/Button';
import CTASection from '../../components/common/CTASection';

const FEATURES = [
  {
    icon: Phone,
    title: 'Instant Lead Response',
    desc: 'Every inquiry from Google, Instagram, or your website gets an immediate AI call or text — before they move on to the next medspa down the street.',
  },
  {
    icon: Calendar,
    title: 'Consultation & Treatment Booking',
    desc: 'Books consultations and follow-up treatment appointments directly on your calendar. Handles rescheduling and cancellations without staff involvement.',
  },
  {
    icon: MessageSquare,
    title: 'Lead Qualification',
    desc: 'Asks about the treatment they\'re interested in, prior experience, any contraindications, and budget — so providers show up to consultations fully informed.',
  },
  {
    icon: Send,
    title: 'Pre & Post Care Instructions',
    desc: 'Automatically sends treatment-specific prep instructions before appointments and aftercare guidance after — reducing complications and support calls.',
  },
  {
    icon: Clock,
    title: 'No-Show Reduction',
    desc: 'Multi-step reminder sequences fire at 48 hours, 24 hours, and 2 hours before every appointment. No-show rates drop significantly from day one.',
  },
  {
    icon: Star,
    title: 'Review Collection',
    desc: 'After every appointment, your AI follows up and asks satisfied clients to leave a Google review — the single biggest driver of new medspa business.',
  },
  {
    icon: RefreshCw,
    title: 'Client Re-engagement',
    desc: 'Automatically reaches out to clients who haven\'t booked in 60–90 days with personalized messages and seasonal promotions to bring them back.',
  },
  {
    icon: BarChart2,
    title: 'CRM & Treatment History',
    desc: 'Logs every interaction, tracks treatment history, and keeps client profiles updated in your CRM so nothing falls through the cracks between visits.',
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Inquiry comes in',
    body: 'A lead submits through Google, Instagram, your website, or a referral. Your AI is notified instantly — no matter the time of day.',
  },
  {
    number: '02',
    title: 'AI calls within seconds',
    body: 'Your AI places an outbound call immediately, introduces itself on behalf of your practice, and starts a natural conversation about what the client is looking for.',
  },
  {
    number: '03',
    title: 'Qualify & educate',
    body: 'The AI asks about the treatment of interest, prior experience, skin concerns, timeline, and budget — and answers common questions about your services.',
  },
  {
    number: '04',
    title: 'Book the consultation',
    body: 'Once qualified, the AI checks your calendar and books the consultation on the spot. Confirmation and pre-care instructions go out immediately.',
  },
  {
    number: '05',
    title: 'Reminders & follow-ups',
    body: 'Automated reminders fire at 48h, 24h, and 2h before every appointment. After the visit, a follow-up sequence collects reviews and books the next treatment.',
  },
  {
    number: '06',
    title: 'Keep clients coming back',
    body: 'Clients who go quiet get a re-engagement sequence. Seasonal promotions go out automatically. Your chair stays full without your staff making a single call.',
  },
];

const Medspas = () => {
  return (
    <>
      <Helmet>
        <title>Medspa AI System — Sauma AI</title>
        <meta name="description" content="A fully autonomous AI system for medspas — handling bookings, reminders, follow-ups, and re-engagement around the clock." />
      </Helmet>

      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection
          heading="Ready to keep your chairs full?"
          text="Book a demo and we'll walk you through exactly how the system works for your medspa."
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
        Medspas
      </IndustryTag>
      <HeroHeading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Your consultations booked. Your clients coming back. Your chairs full.
      </HeroHeading>
      <HeroSubheading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        A complete autonomous AI system built for medspas — responding to every inquiry in seconds, qualifying leads, booking consultations, sending reminders, collecting reviews, and re-engaging lapsed clients, all without your staff having to pick up the phone.
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
        Eight integrated capabilities working as one system — from the first inquiry to the fifth return visit.
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
  <Section id="how-it-works" style={{ background: '#fafafa' }}>
    <Container>
      <SectionHeading>How it works</SectionHeading>
      <SectionSubheading>
        From the first inquiry to a loyal returning client — your AI handles every step of the journey.
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

export default Medspas;
