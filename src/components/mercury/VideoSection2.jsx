import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled.section`
  padding: 5rem 0;
  text-align: center;
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
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 0rem;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  color: #000;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    margin-top: -0.5rem;
    padding: 0 1.5rem;
  }
`;

const GlassPanel = styled(motion.div)`
  color: #000;
  background-color: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
  border-radius: 12px;
  
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const VideoSection2 = () => {
  return (
    <SectionContainer>
      <BackgroundSVG>
        <img src="/assets/gridbackground1.svg" alt="" aria-hidden="true" />
      </BackgroundSVG>
      
      <Container>
        <SectionHeading>This One Call Made A Plumbing Business Over $500 In Revenue. Without Mercury It Would've Went To Voicemail</SectionHeading>
        
        <GlassPanel
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <VideoContainer>
            <video 
              controls
              poster="/assets/video-thumbnail.jpg"
            >
              <source src="/assets/PeakPlumbingDemo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </VideoContainer>
        </GlassPanel>
      </Container>
    </SectionContainer>
  );
};

export default VideoSection2; 