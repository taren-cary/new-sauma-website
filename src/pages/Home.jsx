import { Helmet } from 'react-helmet';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/home/Hero';
import TrustSection from '../components/home/TrustSection';
import AgencySection from '../components/home/AgencySection';
import IntegrationSection from '../components/home/IntegrationSection';
import TestimonialSlider from '../components/common/TestimonialSlider';
import FAQ from '../components/common/FAQ';
import CTASection from '../components/common/CTASection';
import FadeInSection from '../components/common/FadeInSection';
import SectionLabel from '../components/common/SectionLabel';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 5rem 0;
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(135deg, #fafafa 20%, #c4b5fd 70%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sauma AI — Autonomous Systems for Business Operations</title>
        <meta name="description" content="Sauma builds and deploys autonomous AI systems that handle the revenue-critical operations your business runs on — continuously, without supervision." />
      </Helmet>

      <Navbar />

      <main>
        <Hero />

        <FadeInSection>
          <TrustSection />
        </FadeInSection>

        <FadeInSection>
          <AgencySection />
        </FadeInSection>

        <FadeInSection>
          <IntegrationSection />
        </FadeInSection>

        <FadeInSection>
          <SectionContainer>
            <div className="container">
              <SectionLabel>Outcomes</SectionLabel>
              <SectionHeading>What our clients say</SectionHeading>
              <TestimonialSlider buttonText="Get Started" buttonLink="/book-demo" />
            </div>
          </SectionContainer>
        </FadeInSection>

        <FadeInSection>
          <SectionContainer>
            <div className="container">
              <SectionLabel>FAQ</SectionLabel>
              <SectionHeading>Common questions</SectionHeading>
              <FAQ />
            </div>
          </SectionContainer>
        </FadeInSection>

        <CTASection showBeams />
      </main>

      <Footer />
    </>
  );
};

export default Home;
