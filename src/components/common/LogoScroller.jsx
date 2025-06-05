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
  max-height: 60px;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all 0.3s ease;
  
  &:hover {
    filter: grayscale(0);
    opacity: 1;
  }
`;

const LogoScroller = () => {
  // Array of logos with consistent paths
  const logos = [
    { id: 1, src: '/assets/clientlogos/clientlogo1.svg', alt: 'Company 1' },
    { id: 2, src: '/assets/clientlogos/clientlogo2.svg', alt: 'Company 2' },
    { id: 3, src: '/assets/clientlogos/clientlogo3.svg', alt: 'Company 3' },
    { id: 4, src: '/assets/clientlogos/clientlogo4.svg', alt: 'Company 5' },
    { id: 5, src: '/assets/clientlogos/clientlogo5.svg', alt: 'Company 5' }
  ];

  // Simplified fallback function that doesn't rely on path parsing
  const getLogoSrc = (src) => {
    // For development, provide a fallback
    if (process.env.NODE_ENV === 'development') {
      // Extract just the company number for the placeholder
      const match = src.match(/clientlogo(\d+)/);
      const number = match ? match[1] : '0';
      return `https://via.placeholder.com/160x60?text=Company${number}`;
    }
    return src;
  };

  return (
    <LogoScrollerContainer>
      <LogoTrack>
        {/* First set of logos */}
        {logos.map(logo => (
          <LogoItem key={`first-${logo.id}`}>
            <Logo 
              src={logo.src} 
              alt={logo.alt}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://via.placeholder.com/160x60?text=${logo.alt}`;
              }}
            />
          </LogoItem>
        ))}
        
        {/* Second set of logos (for seamless looping) */}
        {logos.map(logo => (
          <LogoItem key={`second-${logo.id}`}>
            <Logo 
              src={logo.src} 
              alt={logo.alt}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://via.placeholder.com/160x60?text=${logo.alt}`;
              }}
            />
          </LogoItem>
        ))}
      </LogoTrack>
    </LogoScrollerContainer>
  );
};

export default LogoScroller; 