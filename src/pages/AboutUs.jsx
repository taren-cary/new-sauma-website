import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import TestimonialSlider from '../components/common/TestimonialSlider';
import CTASection from '../components/common/CTASection';
import Button from '../components/common/Button';
import TrustSection from '../components/home/TrustSection';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Sauma AI</title>
        <meta name="description" content="Learn about Sauma AI's journey, mission, and the team behind our revolutionary AI workers." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <TrustSection />
        <StorySection />
        <TeamSection />
        <ValuesSection />
        
        <SectionContainer>
          <Container>
            <SectionHeading>What Our Clients Say About Us</SectionHeading>
            <TestimonialSlider />
          </Container>
        </SectionContainer>
        
        <CTASection 
          heading="Ready To Transform Your Business?" 
          text="Join us on our mission to revolutionize the way businesses operate with AI. Let's build the future together."
          buttonText="Get In Touch"
          buttonLink="/contact"
          showLogo={true}
          logoSrc="/assets/sauma_logo.png"
          logoSize="120px"
        />
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
          Building The Future Of Work
        </HeroHeading>
        
        <HeroSubheading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We're on a mission to transform how businesses operate by creating AI workers that handle complex tasks with human-like capabilities.
        </HeroSubheading>
        
        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button as={Link} to="/mercury">Explore AI Workers</Button>
          <Button as={Link} to="/book-demo">Book a Demo</Button>
        </ButtonContainer>
      </HeroContent>
    </HeroContainer>
  );
};

// Our Story Section Component
const StorySection = () => {
  const milestones = [
    {
      year: '2022',
      title: 'Where It All Began',
      description: 'Founded with a vision to create AI workers that could autonomously handle complex tasks, we set out to build something revolutionary.'
    },
    {
      year: '2023',
      title: 'Mercury Is Born',
      description: 'After months of research and development, we launched our first AI worker - Mercury, designed to revolutionize how businesses handle reception and scheduling.'
    },
    {
      year: '2024',
      title: 'Growing Our Impact',
      description: 'Expanded our team and capabilities, helping dozens of businesses transform their operations through AI automation.'
    },
    {
      year: '2025',
      title: 'Looking Ahead',
      description: 'Continuing to push boundaries with new AI workers and capabilities, serving businesses across multiple industries.'
    }
  ];

  return (
    <SectionContainer>
      <BackgroundSVG>
        <img src="/assets/hero-background1.svg" alt="" aria-hidden="true" />
      </BackgroundSVG>
      
      <Container>
        <SectionHeading>Our Journey</SectionHeading>
        
        <TimelineContainer>
          {milestones.map((milestone, index) => (
            <TimelineCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TimelineYear>{milestone.year}</TimelineYear>
              <TimelineTitle>{milestone.title}</TimelineTitle>
              <TimelineDescription>{milestone.description}</TimelineDescription>
            </TimelineCard>
          ))}
        </TimelineContainer>
      </Container>
    </SectionContainer>
  );
};

// Team Section Component
const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Taren Cary',
      role: 'Founder & CEO',
      bio: 'With a passion for computer science and a vision for the future, Taren founded Sauma AI to assist the world in the transition to a more automated future. In addition to his work at Sauma, Taren adds his unique perspective to the fields of blockchain, energy efficiency, biotechnology, and more.',
      image: '/assets/ceologo.png'
    },
  ];

  return (
    <SectionContainer>
      <BackgroundSVG>
        <img src="/assets/hero-background1.svg" alt="" aria-hidden="true" />
      </BackgroundSVG>
      
      <Container>
        <SectionHeading>Meet Our Founder</SectionHeading>
        
        <TeamGrid itemCount={teamMembers.length}>
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TeamImageContainer>
                <TeamImage src={member.image} alt={member.name} />
              </TeamImageContainer>
              <TeamName>{member.name}</TeamName>
              <TeamRole>{member.role}</TeamRole>
              <TeamBio>{member.bio}</TeamBio>
            </TeamCard>
          ))}
        </TeamGrid>
      </Container>
    </SectionContainer>
  );
};

// Values Section Component
const ValuesSection = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of what AI can do, pioneering new approaches that redefine business operations.',
      icon: '🚀'
    },
    {
      title: 'Excellence',
      description: 'We are committed to delivering AI workers that exceed expectations in reliability, intelligence, and performance.',
      icon: '✨'
    },
    {
      title: 'Human-Centered',
      description: 'Our AI enhances human potential rather than replacing it, working alongside people to create better outcomes.',
      icon: '🤝'
    },
    {
      title: 'Integrity',
      description: 'We build trustworthy AI with strong ethical foundations, transparency, and a commitment to data privacy.',
      icon: '🛡️'
    }
  ];

  return (
    <SectionContainer>
      <BackgroundSVG>
        <img src="/assets/hero-background1.svg" alt="" aria-hidden="true" />
      </BackgroundSVG>
      
      <Container>
        <SectionHeading>Our Core Values</SectionHeading>
        
        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ValueIcon>{value.icon}</ValueIcon>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Container>
    </SectionContainer>
  );
};

// Styled Components
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
  color: #000;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

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
    font-size: 2.2rem;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
`;

const HeroSubheading = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: -1.5rem;
  }
`;

// Timeline Styles
const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const TimelineCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const TimelineYear = styled.div`
  display: inline-block;
  background: rgba(108, 99, 255, 0.1);
  color: #6C63FF;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const TimelineDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Team Styles
const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  justify-items: center;
  
  ${props => props.itemCount === 1 && `
    grid-template-columns: 1fr;
    max-width: 350px;
    margin: 0 auto;
  `}
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TeamCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const TeamImageContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const TeamImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TeamName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const TeamRole = styled.div`
  color: #6C63FF;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const TeamBio = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
`;

// Values Styles
const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ValueCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ValueDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

export default AboutUsPage; 