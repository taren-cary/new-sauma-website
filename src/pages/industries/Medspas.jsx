import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Calendar, MessageSquare, Clock, Star, RefreshCw, Send, BarChart2 } from 'react-feather';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import Button from '../../components/common/Button';
import CTASection from '../../components/common/CTASection';
import FadeInSection from '../../components/common/FadeInSection';
import SectionLabel from '../../components/common/SectionLabel';

const FEATURES = [
  { icon: Phone, title: 'Instant Lead Response', desc: "Every inquiry from Google, Instagram, or your website gets an immediate AI call or text — before they move on to the next medspa down the street." },
  { icon: Calendar, title: 'Consultation & Treatment Booking', desc: 'Books consultations and follow-up treatment appointments directly on your calendar. Handles rescheduling and cancellations without staff involvement.' },
  { icon: MessageSquare, title: 'Lead Qualification', desc: "Asks about the treatment they're interested in, prior experience, any contraindications, and budget — so providers show up to consultations fully informed." },
  { icon: Send, title: 'Pre & Post Care Instructions', desc: 'Automatically sends treatment-specific prep instructions before appointments and aftercare guidance after — reducing complications and support calls.' },
  { icon: Clock, title: 'No-Show Reduction', desc: 'Multi-step reminder sequences fire at 48 hours, 24 hours, and 2 hours before every appointment. No-show rates drop significantly from day one.' },
  { icon: Star, title: 'Review Collection', desc: 'After every appointment, your AI follows up and asks satisfied clients to leave a Google review — the single biggest driver of new medspa business.' },
  { icon: RefreshCw, title: 'Client Re-engagement', desc: "Automatically reaches out to clients who haven't booked in 60–90 days with personalized messages and seasonal promotions to bring them back." },
  { icon: BarChart2, title: 'CRM & Treatment History', desc: 'Logs every interaction, tracks treatment history, and keeps client profiles updated in your CRM so nothing falls through the cracks between visits.' },
];

const STEPS = [
  { number: '01', title: 'Inquiry comes in', body: 'A lead submits through Google, Instagram, your website, or a referral. Your AI is notified instantly — no matter the time of day.' },
  { number: '02', title: 'AI calls within seconds', body: 'Your AI places an outbound call immediately, introduces itself on behalf of your practice, and starts a natural conversation about what the client is looking for.' },
  { number: '03', title: 'Qualify & educate', body: 'The AI asks about the treatment of interest, prior experience, skin concerns, timeline, and budget — and answers common questions about your services.' },
  { number: '04', title: 'Book the consultation', body: 'Once qualified, the AI checks your calendar and books the consultation on the spot. Confirmation and pre-care instructions go out immediately.' },
  { number: '05', title: 'Reminders & follow-ups', body: 'Automated reminders fire at 48h, 24h, and 2h before every appointment. After the visit, a follow-up sequence collects reviews and books the next treatment.' },
  { number: '06', title: 'Keep clients coming back', body: "Clients who go quiet get a re-engagement sequence. Seasonal promotions go out automatically. Your chair stays full without your staff making a single call." },
];

const Medspas = () => {
  return (
    <>
      <Helmet>
        <title>Medspa AI System — Sauma AI</title>
        <meta name="description" content="A purpose-built autonomous system that handles every client touchpoint for medspas — from first inquiry to returning visit — continuously, without staff involvement." />
      </Helmet>

      <Navbar />

      <main>
        <HeroSection />
        <FadeInSection><FeaturesSection /></FadeInSection>
        <FadeInSection><HowItWorksSection /></FadeInSection>
        <FadeInSection><TestimonialSection /></FadeInSection>
        <CTASection
          heading="Your practice, operating at full capacity."
          text="Book a demo and we'll walk you through the full system — built specifically for your medspa, integrated with your calendar, and deployed in days."
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
        Medspas
      </IndustryTag>
      <HeroHeading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        The operating layer for practices that can't afford to miss a lead.
      </HeroHeading>
      <HeroSubheading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        A purpose-built system that handles every client touchpoint — from the first inquiry to the returning visit — running continuously without staff involvement.
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
        Eight tightly integrated capabilities, engineered to function as a single autonomous operation across the entire client lifecycle.
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
      <SectionSubheading>
        From first inquiry to returning client — every touchpoint handled by your AI, without staff involvement.
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

const TestimonialSection = () => (
  <Section>
    <Container>
      <SectionLabel>Outcomes</SectionLabel>
      <SectionHeading>What our clients say</SectionHeading>
      <TestimonialCard
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <QuoteText>
          "With Mercury, our clients can't even tell they're talking to an AI. Our jobs are booked 24/7 and my team is freed up to focus on high-value tasks and providing great service."
        </QuoteText>
        <TestimonialAuthor>
          <AuthorAvatar src="/assets/testimonials/person2.svg" alt="Micah Mentis" />
          <AuthorInfo>
            <AuthorName>Micah Mentis</AuthorName>
            <AuthorTitle>Director of Operations, Nu Pathway Health &amp; Wellness</AuthorTitle>
          </AuthorInfo>
        </TestimonialAuthor>
      </TestimonialCard>
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

const TestimonialCard = styled(motion.div)`
  max-width: 720px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(108, 99, 255, 0.08);
  position: relative;

  &:before {
    content: '"';
    position: absolute;
    top: 1.25rem;
    left: 2rem;
    font-size: 5rem;
    line-height: 1;
    color: #6C63FF;
    opacity: 0.2;
    font-family: Georgia, serif;
  }
`;

const QuoteText = styled.p`
  font-size: 1.1rem;
  line-height: 1.75;
  color: rgba(250, 250, 250, 0.85);
  margin-bottom: 1.75rem;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  filter: brightness(0) invert(1);
  opacity: 0.8;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  font-weight: 700;
  font-size: 1rem;
  color: #fafafa;
`;

const AuthorTitle = styled.div`
  font-size: 0.875rem;
  color: rgba(250, 250, 250, 0.5);
  margin-top: 2px;
`;

export default Medspas;
