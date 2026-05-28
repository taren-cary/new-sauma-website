import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Phone, Calendar, MessageSquare, Clock,
  Star, RefreshCw, MapPin, BarChart2
} from 'react-feather';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import Button from '../../components/common/Button';
import CTASection from '../../components/common/CTASection';

const FEATURES = [
  {
    icon: Phone,
    title: 'Instant Lead Response',
    desc: 'Every quote request or inquiry from Google, your website, or social media gets an immediate response — before the lead moves on to your competitor.',
  },
  {
    icon: MessageSquare,
    title: 'Quote & Service Qualification',
    desc: 'Asks about vehicle type, size, condition, and desired services to provide accurate quote guidance and set proper expectations before booking.',
  },
  {
    icon: Calendar,
    title: 'Job Booking & Scheduling',
    desc: 'Books jobs directly on your calendar with vehicle details, service package, and exact location captured upfront — no back-and-forth needed.',
  },
  {
    icon: MapPin,
    title: 'Area-Based Scheduling',
    desc: 'Groups jobs by geographic area to minimize drive time between stops. Your AI understands your schedule and fills in nearby slots efficiently.',
  },
  {
    icon: Clock,
    title: 'Confirmation & Prep Reminders',
    desc: 'Sends booking confirmations with prep instructions (move the car, clear the driveway) and a reminder the day before to reduce no-shows and wasted trips.',
  },
  {
    icon: Star,
    title: 'Review Collection',
    desc: 'After every completed job, your AI follows up and guides satisfied clients to leave a Google review — the #1 source of new detailing customers.',
  },
  {
    icon: RefreshCw,
    title: 'Rebooking Campaigns',
    desc: 'Automatically reaches out to past clients at 30, 60, or 90-day intervals with a personalized message to bring them back before their car needs it.',
  },
  {
    icon: BarChart2,
    title: 'Client History Tracking',
    desc: 'Tracks vehicle details, services performed, and client preferences in your CRM so every interaction feels personal and informed.',
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Lead comes in',
    body: 'Someone finds you on Google, clicks your website, or messages you on social. Your AI picks it up instantly — no matter the hour.',
  },
  {
    number: '02',
    title: 'AI qualifies the job',
    body: 'Your AI asks about the vehicle (make, size, condition), which services they want, and where the car is located — everything needed to quote and schedule accurately.',
  },
  {
    number: '03',
    title: 'Book the job',
    body: 'The AI checks your calendar, suggests an available time near their area, and locks in the booking. Address, vehicle info, and service package are all captured.',
  },
  {
    number: '04',
    title: 'Confirmation & prep',
    body: 'A confirmation goes out immediately with prep instructions — move the car outside, make sure there\'s water access, clear the area. Reduces friction on arrival.',
  },
  {
    number: '05',
    title: 'Day-before reminder',
    body: 'A reminder fires the afternoon before with the time, address, and service summary. Clients confirm or reschedule — you never show up to an empty driveway.',
  },
  {
    number: '06',
    title: 'Follow-up & rebook',
    body: 'After the job, a thank-you message goes out with a review request. 30–90 days later, they get a rebooking nudge before their car needs attention again.',
  },
];

const MobileDetailing = () => {
  return (
    <>
      <Helmet>
        <title>Mobile Detailing AI System — Sauma AI</title>
        <meta name="description" content="A fully autonomous AI system for mobile detailing businesses — handling leads, bookings, reminders, reviews, and rebooking around the clock." />
      </Helmet>

      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection
          heading="Ready to fill your schedule on autopilot?"
          text="Book a demo and we'll show you exactly how the system works for your detailing business."
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
        Mobile Detailing
      </IndustryTag>
      <HeroHeading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Your schedule filled. Your clients rebooking. Your reviews growing.
      </HeroHeading>
      <HeroSubheading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        A complete autonomous AI system built for mobile detailers — responding to every lead instantly, qualifying jobs, booking appointments with location and vehicle details captured, sending reminders, collecting reviews, and bringing clients back automatically.
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
        Eight integrated capabilities working as one system — from the first inquiry to the fifth rebook.
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
        From the first message to a repeat client who never stops coming back — your AI handles every step.
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

export default MobileDetailing;
