import { Helmet } from 'react-helmet';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/mercury/Hero';
import TrustSection from '../components/home/TrustSection';
import VideoSection from '../components/mercury/VideoSection';
import VideoSection2 from '../components/mercury/VideoSection2';
import CaseStudySection from '../components/mercury/CaseStudySection';
import FeaturesSection from '../components/mercury/FeaturesSection';
import ComparisonSection from '../components/mercury/ComparisonSection';
import IntegrationSection from '../components/home/IntegrationSection';
import TestimonialSlider from '../components/common/TestimonialSlider';
import FAQ from '../components/common/FAQ';
import CTASection from '../components/common/CTASection';
import LogoScroller from '../components/common/LogoScroller';
import FadeInSection from '../components/common/FadeInSection';
import styled from 'styled-components';
import CostCalculator from '../components/mercury/CostCalculator';

const SectionContainer = styled.section`
  padding: 5rem 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
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

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
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

const Mercury = () => {
  return (
    <>
      <Helmet>
        <title>Mercury - AI Receptionist by Sauma AI</title>
        <meta name="description" content="Mercury will book you more appointments, enrich more of your leads, & make deeper connections, all with human-like emotion - autonomously." />
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '758182653800031');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=758182653800031&ev=PageView&noscript=1" />'
          }}
        />
      </Helmet>

      <Navbar />

      <main>
        <Hero />

        <FadeInSection><TrustSection /></FadeInSection>
        <FadeInSection><VideoSection /></FadeInSection>
        <FadeInSection><CaseStudySection /></FadeInSection>
        <FadeInSection><CostCalculator /></FadeInSection>
        <FadeInSection><FeaturesSection /></FadeInSection>
        <FadeInSection><VideoSection2 /></FadeInSection>
        <FadeInSection><ComparisonSection /></FadeInSection>
        <FadeInSection><IntegrationSection /></FadeInSection>

        <FadeInSection>
          <SectionContainer>
            <Container>
              <SectionHeading>Don't Take Our Word For It, Here's What Our Clients Say</SectionHeading>
              <TestimonialSlider />
            </Container>
          </SectionContainer>
        </FadeInSection>

        <FadeInSection>
          <SectionContainer>
            <Container>
              <SectionHeading>Frequently Asked Questions</SectionHeading>
              <FAQ />
            </Container>
          </SectionContainer>
        </FadeInSection>

        <FadeInSection>
          <SectionContainer>
            <Container>
              <SectionHeading>Businesses That Trust Mercury To Get It Done</SectionHeading>
              <LogoScroller />
            </Container>
          </SectionContainer>
        </FadeInSection>

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
};

export default Mercury;
