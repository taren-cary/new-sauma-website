import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  Mic, 
  Volume2, 
  Phone, 
  Book, 
  FileText, 
  Calendar, 
  Briefcase, 
  Bell, 
  BarChart2, 
  RefreshCw, 
  Tool, 
  Smartphone 
} from 'react-feather'; // Using react-feather for sleek, modern icons

const SectionContainer = styled.section`
  padding: 4rem 0;
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

const SectionHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 0rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    margin-top: -0.5rem;
    padding: 0 1rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1.5rem;
  }
`;

const FeatureCard = styled(motion.div)`
  color: #000;
  background-color: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 15px;
  padding: 32px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 0 auto;
    max-width: 100%;
    width: 100%;
  }
`;

const FeatureIcon = styled.div`
  margin-bottom: 1.5rem;
  color: #3498db;
  display: flex;
  justify-content: center;
  
  svg {
    width: 48px;
    height: 48px;
    stroke-width: 1.5px; /* Thinner lines for a more elegant look */
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  }
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;

  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

// Map of feature titles to their corresponding React Feather icons
const iconMap = {
  "Custom AI Voice Receptionist": Mic,
  "Voice Cloning": Volume2,
  "24/7 Inbound Call Answering": Phone,
  "Custom Knowledge Base": Book,
  "Information Gathering": FileText,
  "24/7 Appointment Scheduling": Calendar,
  "Pro CRM Integration": Briefcase,
  "Lead Capture & Alerts": Bell,
  "Analytics Dashboard": BarChart2,
  "Third Party App Integration": RefreshCw,
  "24/7 Tech Support": Tool,
  "Appointments Outlook": Smartphone
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Custom AI Voice Receptionist",
      description: "Personalized AI receptionist that represents your brand with a unique voice and personality."
    },
    {
      title: "Voice Cloning",
      description: "Create a digital twin of your voice for a truly personalized customer experience."
    },
    {
      title: "24/7 Inbound Call Answering",
      description: "Never miss a call with round-the-clock availability, ensuring every lead is captured."
    },
    {
      title: "Custom Knowledge Base",
      description: "Train Mercury with your specific business information to answer questions accurately."
    },
    {
      title: "Information Gathering",
      description: "Collect essential details from callers for efficient human follow-up when needed."
    },
    {
      title: "24/7 Appointment Scheduling",
      description: "Automated scheduling with email notifications to keep everyone informed."
    },
    {
      title: "Pro CRM Integration",
      description: "Complete with call logs, summaries, and transcripts for comprehensive lead management."
    },
    {
      title: "Lead Capture & Alerts",
      description: "Instant notifications for high-priority leads requiring immediate attention."
    },
    {
      title: "Analytics Dashboard",
      description: "Track call trends and appointment metrics to optimize your business performance."
    },
    {
      title: "Third Party App Integration",
      description: "Seamlessly connect with your existing tools and software ecosystem."
    },
    {
      title: "24/7 Tech Support",
      description: "Round-the-clock technical assistance to ensure Mercury is always performing at its best."
    },
    {
      title: "Appointments Outlook",
      description: "Comprehensive view of your upcoming appointments for better schedule management."
    }
  ];

  return (
    <SectionContainer>
      <BackgroundSVG>
        <img src="/assets/hero-background1.svg" alt="" aria-hidden="true" />
      </BackgroundSVG>
      
      <SectionHeading>Here's What Mercury Will Bring To Your Front Desk Team</SectionHeading>
      <FeaturesGrid>
        {features.map((feature, index) => {
          const IconComponent = iconMap[feature.title];
          
          return (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>
                <IconComponent />
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          );
        })}
      </FeaturesGrid>
    </SectionContainer>
  );
};

export default FeaturesSection;