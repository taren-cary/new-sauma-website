import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, CheckCircle, Globe, Zap, Phone, ChevronDown } from 'react-feather';
import { useState } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import SectionLabel from '../components/common/SectionLabel';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import TestimonialSlider from '../components/common/TestimonialSlider';
import Button from '../components/common/Button';
import LogoScroller from '../components/common/LogoScroller';
import VideoSection from '../components/mercury/VideoSection'; // Add this import

// Styled Components
const HeroContainer = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 120px 0 80px;
  
  @media (max-width: 768px) {
    padding-top: 100px;
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
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  max-width: 500px;
  
  @media (max-width: 992px) {
    max-width: 100%;
    text-align: center;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  
  @media (max-width: 992px) {
    width: 100%;
    justify-content: center;
  }
`;

const HeroHeading = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubheading = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  opacity: 0.85;
`;

const BenefitsList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.05rem;
  color: rgba(250, 250, 250, 0.75);

  svg {
    margin-right: 12px;
    flex-shrink: 0;
    color: rgba(250, 250, 250, 0.4);
  }
`;

const CalEmbedWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 600px;

  @media (max-width: 992px) {
    max-width: 100%;
    height: 550px;
  }
`;

const SectionContainer = styled.section`
  padding: 5rem 0;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
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
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
`;

const InfoCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoGlassCard = styled.div`
  ${props => props.theme.glassmorphism};
  padding: 2rem;
  text-align: center;
  border-radius: 15px;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;

  svg {
    color: rgba(250, 250, 250, 0.55);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.8;
`;

const FAQContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  &:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
`;

const FAQQuestion = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 1.25rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  color: #fafafa;
  transition: color 0.2s;

  &:hover {
    color: rgba(250, 250, 250, 0.7);
  }
`;

const FAQChevron = styled(ChevronDown)`
  flex-shrink: 0;
  color: rgba(250, 250, 250, 0.4);
  transition: transform 0.25s ease;
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const FAQAnswer = styled(motion.div)`
  overflow: hidden;
`;

const FAQAnswerInner = styled.div`
  padding-bottom: 1.25rem;
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(250, 250, 250, 0.55);
`;

const BookDemo = () => {
  return (
    <>
      <Helmet>
        <title>Book a Demo — Sauma AI</title>
        <meta name="description" content="See a working demonstration of your AI system in 30 minutes. Submit your details and we'll build it for your business before the call." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <LogoSection>
          <LogoHeading>The businesses running on Sauma</LogoHeading>
          <LogoScroller />
        </LogoSection>
        <DemoInfoSection />
        <VideoSection />
        <TestimonialSection />
        <FAQSection />
      </main>
      
      <Footer />
    </>
  );
};

// Add new styled components for the button container and phone icon
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  margin-top: 2rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PhoneIcon = styled(Phone)`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  vertical-align: middle;
`;

// Add new styled components for the logo scroller section
const LogoSection = styled.section`
  padding: 3rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const LogoHeading = styled.h2`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 2rem;
  color: rgba(250, 250, 250, 0.35);
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
`;

// Hero Section with split design
const HeroSection = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"free-30-minute-discovery-call"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <HeroContainer>
      <OrbHeroOne />
      <OrbHeroTwo />

      <HeroContent>
        <LeftColumn>
          <HeroHeading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Book a free 30-minute discovery call.
          </HeroHeading>

          <HeroSubheading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tell us about your business on the call. We'll figure out if Sauma is a fit and show you what we'd build for you.
          </HeroSubheading>

          <BenefitsList
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <BenefitItem>
              <CheckCircle size={20} />
              <span>30 minutes, no commitment</span>
            </BenefitItem>
            <BenefitItem>
              <CheckCircle size={20} />
              <span>We'll walk you through what AI could look like for your specific business</span>
            </BenefitItem>
            <BenefitItem>
              <CheckCircle size={20} />
              <span>If it's a fit, we'll show you a working demo on a follow-up call</span>
            </BenefitItem>
          </BenefitsList>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ButtonContainer>
              <Button as="a" href="tel:+1-575-651-2233">Call Us <PhoneIcon /></Button>
            </ButtonContainer>
          </motion.div>
        </LeftColumn>

        <RightColumn>
          <CalEmbedWrapper>
            <Cal
              namespace="free-30-minute-discovery-call"
              calLink="sauma-ai/free-30-minute-discovery-call"
              style={{width:"100%",height:"100%",overflow:"scroll"}}
              config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}}
            />
          </CalEmbedWrapper>
        </RightColumn>
      </HeroContent>
    </HeroContainer>
  );
};

// What to expect section
const DemoInfoSection = () => {
  return (
    <SectionContainer>
      <Container>
        <SectionLabel>Deployment</SectionLabel>
        <SectionHeading>How it works</SectionHeading>

        <InfoCardsGrid>
          <InfoGlassCard>
            <IconWrapper>
              <Calendar size={28} />
            </IconWrapper>
            <CardTitle>01 — Book a time</CardTitle>
            <CardDescription>
              Pick a slot that works for you. No forms, no commitments.
            </CardDescription>
          </InfoGlassCard>

          <InfoGlassCard>
            <IconWrapper>
              <Users size={28} />
            </IconWrapper>
            <CardTitle>02 — Tell us about your business</CardTitle>
            <CardDescription>
              On the call, we learn about your workflows, your team, and where AI could make the biggest impact.
            </CardDescription>
          </InfoGlassCard>

          <InfoGlassCard>
            <IconWrapper>
              <Zap size={28} />
            </IconWrapper>
            <CardTitle>03 — See what we'd build</CardTitle>
            <CardDescription>
              If it's a fit, we'll configure a working demo of your system and walk you through it on a follow-up call.
            </CardDescription>
          </InfoGlassCard>
        </InfoCardsGrid>
      </Container>
    </SectionContainer>
  );
};

// Testimonial section
const TestimonialSection = () => {
  return (
    <SectionContainer>
      <Container>
        <SectionLabel>Outcomes</SectionLabel>
        <SectionHeading>What our clients say</SectionHeading>
        <TestimonialSlider />
      </Container>
    </SectionContainer>
  );
};

// FAQ mini-section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const demoFaqs = [
    {
      id: 1,
      question: "How long is the call?",
      answer: "30 minutes. We'll use the time to understand your business and figure out whether Sauma is a good fit."
    },
    {
      id: 2,
      question: "Do I need to prepare anything?",
      answer: "No. Just show up and we'll guide the conversation. It helps to have a rough sense of where your team spends the most time, but it's not required."
    },
    {
      id: 3,
      question: "What happens after the call?",
      answer: "If there's a fit, we'll configure a working demo of your system and schedule a follow-up to walk you through it. Most deployments go live within a week of signing."
    },
    {
      id: 4,
      question: "Is there any cost or commitment?",
      answer: "None. The discovery call is free and there's no obligation to move forward."
    }
  ];

  return (
    <SectionContainer>
      <Container>
        <SectionLabel>FAQ</SectionLabel>
        <SectionHeading>Common questions</SectionHeading>
        <FAQContainer>
          {demoFaqs.map((faq, index) => (
            <FAQItem key={faq.id}>
              <FAQQuestion onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                <span>{faq.question}</span>
                <FAQChevron $isOpen={openIndex === index} size={18} />
              </FAQQuestion>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <FAQAnswer
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <FAQAnswerInner>{faq.answer}</FAQAnswerInner>
                  </FAQAnswer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQContainer>
      </Container>
    </SectionContainer>
  );
};

export default BookDemo; 