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
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 2rem;
  padding: 0 2rem;
  background: linear-gradient(135deg, #fafafa 20%, #c4b5fd 70%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 0 1.5rem;
  }
`;

const GlassPanel = styled(motion.div)`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
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
      <Container>
        <SectionHeading>This One Call Made A Plumbing Business Over $500 In Revenue. Without Mercury It Would've Went To Voicemail</SectionHeading>

        <GlassPanel
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <VideoContainer>
            <video controls poster="/assets/video-thumbnail2.jpg">
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
