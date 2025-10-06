import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/mercury/Hero';
import TrustSection from '../components/home/TrustSection';
import VideoSection from '../components/mercury/VideoSection';
import FeaturesSection from '../components/mercury/FeaturesSection';
import ComparisonSection from '../components/mercury/ComparisonSection';
import TestimonialSlider from '../components/common/TestimonialSlider';
import FAQ from '../components/common/FAQ';
import CTASection from '../components/common/CTASection';
import LogoScroller from '../components/common/LogoScroller';

const SectionContainer = styled.section`
  padding: 5rem 0;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
    margin-top: -2rem;
  }
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  text-align: left;
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin: 0.25rem 0 1rem 0;
`;

const Tier = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  color: #666;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
`;

const FeatureItem = styled.li`
  padding: 0.4rem 0;
  border-bottom: 1px solid rgba(0,0,0,0.06);
`;

const AddOns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

function MercuryPricing() {
  return (
    <>
      <Helmet>
        <title>Mercury Pricing - AI Voice Receptionist by Sauma AI</title>
        <meta name="description" content="Transparent pricing for Mercury, the AI voice receptionist that answers calls 24/7, books appointments, qualifies leads, and integrates with your CRM." />
      </Helmet>

      <Navbar />

      <main>
        {/* Overview hero from Mercury so first-time visitors get context */}
        <Hero />
        <TrustSection />
        <VideoSection />

        <SectionContainer>
          <Container>
            <SectionHeading>Simple, Transparent Pricing</SectionHeading>
            <PricingGrid>
              <Card>
                <Tier>Inbound Entry Level</Tier>
                <Price>$299 / month</Price>
                <FeatureList>
                  <FeatureItem>Custom Inbound AI Voice Receptionist</FeatureItem>
                  <FeatureItem>AI Phone Number</FeatureItem>
                  <FeatureItem>100 inbound calls / month ($0.32 per call after)</FeatureItem>
                  <FeatureItem>24/7 inbound call answering</FeatureItem>
                  <FeatureItem>Basic lead qualification</FeatureItem>
                  <FeatureItem>Basic Google Calendar appointment scheduling</FeatureItem>
                  <FeatureItem>Intelligent call transfer capabilities</FeatureItem>
                  <FeatureItem>Custom knowledge base</FeatureItem>
                  <FeatureItem>Monthly performance report</FeatureItem>
                  <FeatureItem>Hosting & maintenance</FeatureItem>
                </FeatureList>
              </Card>

              <Card>
                <Tier>Inbound Experienced Level</Tier>
                <Price>$499 / month</Price>
                <FeatureList>
                  <FeatureItem>Custom Inbound AI Voice Receptionist</FeatureItem>
                  <FeatureItem>AI Phone Number</FeatureItem>
                  <FeatureItem>300 inbound calls / month ($0.30 per call after)</FeatureItem>
                  <FeatureItem>24/7 inbound call answering</FeatureItem>
                  <FeatureItem>Basic lead qualification</FeatureItem>
                  <FeatureItem>Custom knowledge base</FeatureItem>
                  <FeatureItem>Basic Google Calendar OR appointment scheduling</FeatureItem>
                  <FeatureItem>Intelligent call transfer capabilities</FeatureItem>
                  <FeatureItem>AI lead capturing into your CRM</FeatureItem>
                  <FeatureItem>CRM integration from our native integrations</FeatureItem>
                  <FeatureItem>24/7 tech support</FeatureItem>
                  <FeatureItem>Monthly performance report + suggestions</FeatureItem>
                  <FeatureItem>Hosting & maintenance</FeatureItem>
                </FeatureList>
              </Card>

              <Card>
                <Tier>Inbound Senior Level</Tier>
                <Price>$799 / month</Price>
                <FeatureList>
                  <FeatureItem>Custom Inbound AI Voice Receptionist</FeatureItem>
                  <FeatureItem>Voice cloning</FeatureItem>
                  <FeatureItem>AI Phone Number</FeatureItem>
                  <FeatureItem>600 inbound calls / month ($0.25 per call after)</FeatureItem>
                  <FeatureItem>24/7 inbound call answering</FeatureItem>
                  <FeatureItem>Custom knowledge base</FeatureItem>
                  <FeatureItem>Google Calendar OR appointment scheduling via native integrations</FeatureItem>
                  <FeatureItem>Intelligent call transfer capabilities</FeatureItem>
                  <FeatureItem>AI lead capturing into your CRM OR custom CRM</FeatureItem>
                  <FeatureItem>CRM integration via native integrations OR custom CRM built for you</FeatureItem>
                  <FeatureItem>24/7 tech support</FeatureItem>
                  <FeatureItem>Monthly performance report + suggestions</FeatureItem>
                  <FeatureItem>Hosting & maintenance</FeatureItem>
                </FeatureList>
              </Card>
            </PricingGrid>

            <SectionHeading style={{ marginTop: '3rem' }}>Add-ons</SectionHeading>
            <AddOns>
              <Card>
                <Tier>Connect via SIP Trunking</Tier>
                <Price>$20 / month</Price>
              </Card>
              <Card>
                <Tier>SMS</Tier>
                <Price>$100 / month + $0.05 per text</Price>
              </Card>
              <Card>
                <Tier>Extra Call Bundles</Tier>
                <FeatureList>
                  <FeatureItem>+100 calls ($50 / month)</FeatureItem>
                  <FeatureItem>+300 calls ($100 / month)</FeatureItem>
                  <FeatureItem>+500 calls ($150 / month)</FeatureItem>
                </FeatureList>
              </Card>
            </AddOns>
          </Container>
        </SectionContainer>

        <FeaturesSection />
        <ComparisonSection />

        <SectionContainer>
          <Container>
            <SectionHeading>Don't Take Our Word For It</SectionHeading>
            <TestimonialSlider />
          </Container>
        </SectionContainer>

        <SectionContainer>
          <Container>
            <SectionHeading>Businesses That Trust Mercury</SectionHeading>
            <LogoScroller />
          </Container>
        </SectionContainer>

        <SectionContainer>
          <Container>
            <SectionHeading>Frequently Asked Questions</SectionHeading>
            <FAQ />
          </Container>
        </SectionContainer>

        <CTASection 
          heading="Ready To Put Your Business On Autopilot?" 
          text="Say goodbye to slow follow-ups, missed opportunities, tedious scheduling, and generic outreach—hire our AI workers today and transform the way you grow your business!"
          buttonText="Hire Mercury"
          buttonLink="/book-demo"
          showLogo={true}
          logoSrc="/assets/mercury_logo.svg"
          showLimitedBadge={true}
        />
      </main>

      <Footer />
    </>
  );
}

export default MercuryPricing;


