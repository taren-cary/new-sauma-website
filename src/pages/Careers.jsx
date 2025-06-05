import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Briefcase, DollarSign, TrendingUp, Users } from 'react-feather';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import TypeformEmbed from '../components/common/TypeformEmbed';
import Button from '../components/common/Button';

const CareersPage = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Sauma AI</title>
        <meta name="description" content="Join the Sauma AI team and be part of our mission to revolutionize business operations with AI workers. Explore commission opportunities." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <ProgramSection />
        <BenefitsSection />
        <ProcessSection />
        <ApplicationSection />
      </main>
      
      <Footer />
    </>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBackground>
        <img src="/assets/hero-background1.svg" alt="" aria-hidden="true" />
      </HeroBackground>
      
      <HeroContent>
        <HeroHeading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Make Money With AI
        </HeroHeading>
        
        <HeroSubheading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join our commission program and help businesses transform with AI workers while building your own income stream.
        </HeroSubheading>
        
        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button as="a" href="#apply">Apply Now</Button>
          <Button as="a" href="#program">Learn More</Button>
        </ButtonContainer>
      </HeroContent>
    </HeroContainer>
  );
};

// Program Section Component
const ProgramSection = () => {
  return (
    <SectionContainer id="program">
      <BackgroundSVG>
        <img src="/assets/gridbackground1.svg" alt="" aria-hidden="true" />
      </BackgroundSVG>
      
      <Container>
        <SectionHeading>Our Commission Program</SectionHeading>
        
        <ProgramCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ProgramCardContent>
            <p>
              At Sauma AI, we're looking for passionate individuals to help us expand our reach and bring our innovative AI workers to more businesses. Our commission program offers a lucrative opportunity for sales professionals, business consultants, and entrepreneurs.
            </p>
            <p>
              With our tiered commission structure, you can earn significant income while helping businesses transform their operations with cutting-edge AI technology.
            </p>
            <h3>Commission Structure</h3>
            <CommissionTable>
              <thead>
                <tr>
                  <th>Sales Volume</th>
                  <th>Commission Rate</th>
                  <th>Additional Bonuses</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First 5 clients</td>
                  <td>15%</td>
                  <td>$500 onboarding bonus</td>
                </tr>
                <tr>
                  <td>6-15 clients</td>
                  <td>20%</td>
                  <td>$1,000 milestone bonus</td>
                </tr>
                <tr>
                  <td>16+ clients</td>
                  <td>25%</td>
                  <td>Exclusive partner benefits</td>
                </tr>
              </tbody>
            </CommissionTable>
            <p>
              <strong>Recurring Revenue:</strong> Earn commissions not just on initial sales, but on recurring monthly subscriptions for as long as the client remains active.
            </p>
          </ProgramCardContent>
        </ProgramCard>
      </Container>
    </SectionContainer>
  );
};

// Benefits Section Component
const BenefitsSection = () => {
  return (
    <SectionContainer>
      <Container>
        <SectionHeading>Why Partner With Us</SectionHeading>
        
        <BenefitsGrid>
          <BenefitCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <BenefitIcon>
              <DollarSign size={28} />
            </BenefitIcon>
            <BenefitTitle>Lucrative Commissions</BenefitTitle>
            <BenefitDescription>
              Earn up to 25% commission on every sale with additional performance bonuses and recurring revenue.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <BenefitIcon>
              <Briefcase size={28} />
            </BenefitIcon>
            <BenefitTitle>Cutting-Edge Product</BenefitTitle>
            <BenefitDescription>
              Represent innovative AI technology that provides real value and transforms how businesses operate.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <BenefitIcon>
              <TrendingUp size={28} />
            </BenefitIcon>
            <BenefitTitle>Growth Opportunity</BenefitTitle>
            <BenefitDescription>
              Join a rapidly expanding company in the booming AI sector with unlimited earning potential.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <BenefitIcon>
              <Users size={28} />
            </BenefitIcon>
            <BenefitTitle>Comprehensive Support</BenefitTitle>
            <BenefitDescription>
              Get marketing materials, training, and dedicated support to maximize your success.
            </BenefitDescription>
          </BenefitCard>
        </BenefitsGrid>
      </Container>
    </SectionContainer>
  );
};

// Process Section Component
const ProcessSection = () => {
  return (
    <SectionContainer>
      <BackgroundSVG>
        <img src="/assets/hero-background1.svg" alt="" aria-hidden="true" />
      </BackgroundSVG>
      
      <Container>
        <SectionHeading>How It Works</SectionHeading>
        
        <ProcessTimeline>
          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ProcessNumber>1</ProcessNumber>
            <ProcessContent>
              <ProcessTitle>Apply</ProcessTitle>
              <ProcessDescription>
                Fill out our application form and tell us about your experience and why you're interested in partnering with Sauma AI.
              </ProcessDescription>
            </ProcessContent>
          </ProcessStep>
          
          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ProcessNumber>2</ProcessNumber>
            <ProcessContent>
              <ProcessTitle>Interview</ProcessTitle>
              <ProcessDescription>
                If your application is selected, we'll schedule a call to discuss the partnership in detail and answer any questions.
              </ProcessDescription>
            </ProcessContent>
          </ProcessStep>
          
          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ProcessNumber>3</ProcessNumber>
            <ProcessContent>
              <ProcessTitle>Onboarding</ProcessTitle>
              <ProcessDescription>
                Complete our comprehensive training program to learn about our products, sales strategies, and tools.
              </ProcessDescription>
            </ProcessContent>
          </ProcessStep>
          
          <ProcessStep
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <ProcessNumber>4</ProcessNumber>
            <ProcessContent>
              <ProcessTitle>Start Selling</ProcessTitle>
              <ProcessDescription>
                Begin promoting Sauma AI products with full support from our team, and earn commissions on every sale.
              </ProcessDescription>
            </ProcessContent>
          </ProcessStep>
        </ProcessTimeline>
      </Container>
    </SectionContainer>
  );
};

// Application Section Component
const ApplicationSection = () => {
  return (
    <SectionContainer id="apply">
      <BackgroundSVG>
        <img src="/assets/gridbackground1.svg" alt="" aria-hidden="true" />
      </BackgroundSVG>
      
      <Container>
        <SectionHeading>Apply to Join Our Team</SectionHeading>
        
        <ApplicationCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <TypeformEmbed formId="01JWKFR0VF8Q3YSS3E57SVES9K" height="600px" />
        </ApplicationCard>
      </Container>
    </SectionContainer>
  );
};

// Hero Styles
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

const HeroBackground = styled.div`
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
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const HeroSubheading = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
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

// Section Styles
const SectionContainer = styled.section`
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
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
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

// Program Section Styles
const ProgramCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ProgramCardContent = styled.div`
  padding: 2.5rem;
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CommissionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
  
  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  th {
    background-color: rgba(108, 99, 255, 0.1);
    font-weight: 600;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    
    th, td {
      padding: 0.5rem;
    }
  }
`;

// Benefits Section Styles
const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const BenefitCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const BenefitIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(108, 99, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #6C63FF;
`;

const BenefitTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const BenefitDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

// Process Section Styles
const ProcessTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ProcessStep = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const ProcessNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(108, 99, 255, 0.8);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const ProcessContent = styled.div`
  background-color: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  flex-grow: 1;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProcessTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ProcessDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Application Section Styles
const ApplicationCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export default CareersPage; 