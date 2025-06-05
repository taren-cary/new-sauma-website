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
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 5rem 0;
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sauma AI - Be a boss. Hire AI workers.</title>
        <meta name="description" content="Hire our AI workforce & unleash your company's profit potential. Sauma AI provides intelligent AI workers to transform your business." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Hero />
        <TrustSection />
        <AgencySection />
        <IntegrationSection />
        
        <SectionContainer>
          <div className="container">
            <SectionHeading>Don't Take Our Word For It, Here's What Our Customers Say</SectionHeading>
            <TestimonialSlider buttonText="Get Started" buttonLink="/book-demo" />
          </div>
        </SectionContainer>
        
        <SectionContainer>
          <div className="container">
            <SectionHeading>Frequently Asked Questions</SectionHeading>
            <FAQ />
          </div>
        </SectionContainer>
        
        <CTASection />
      </main>
      
      <Footer />
    </>
  );
};

export default Home; 