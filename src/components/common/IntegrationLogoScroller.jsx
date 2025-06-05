import styled, { keyframes } from 'styled-components';

// Define the scroll animation
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-200px * 5));
  }
`;

const LogoScrollerContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
  position: relative;
  
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    z-index: 2;
  }
  
  &::before {
    left: 0;
    background: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0));
  }
  
  &::after {
    right: 0;
    background: linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0));
  }
`;

const LogoTrack = styled.div`
  display: flex;
  width: calc(200px * 10);
  animation: ${scroll} 30s linear infinite;
`;

const LogoItem = styled.div`
  width: 200px;
  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100px;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all 0.3s ease;
  
  &:hover {
    filter: grayscale(0);
    opacity: 1;
  }
`;

const IntegrationLogoScroller = () => {
  // Use the same pattern as the client logos but with different files
  const logos = [
    { id: 1, src: '/assets/clientlogos/clientlogo6.png', alt: 'Integration 1' },
    { id: 2, src: '/assets/clientlogos/clientlogo7.png', alt: 'Integration 2' },
    { id: 3, src: '/assets/clientlogos/clientlogo8.png', alt: 'Integration 3' },
    { id: 4, src: '/assets/clientlogos/clientlogo9.png', alt: 'Integration 4' },
    { id: 5, src: '/assets/clientlogos/clientlogo10.png', alt: 'Integration 5' }
  ];

  return (
    <LogoScrollerContainer>
      <LogoTrack>
        {/* First set of logos */}
        {logos.map(logo => (
          <LogoItem key={`first-${logo.id}`}>
            <Logo 
              src={logo.src} 
              alt={logo.alt}
            />
          </LogoItem>
        ))}
        
        {/* Second set of logos (for seamless looping) */}
        {logos.map(logo => (
          <LogoItem key={`second-${logo.id}`}>
            <Logo 
              src={logo.src} 
              alt={logo.alt}
            />
          </LogoItem>
        ))}
      </LogoTrack>
    </LogoScrollerContainer>
  );
};

export default IntegrationLogoScroller; 