import styled from 'styled-components';
import LogoLoop from './LogoLoop';

const logos = [
  { src: '/assets/clientlogos/clientlogo6.png', alt: 'Integration 1' },
  { src: '/assets/clientlogos/clientlogo7.png', alt: 'Integration 2' },
  { src: '/assets/clientlogos/clientlogo8.png', alt: 'Integration 3' },
  { src: '/assets/clientlogos/clientlogo9.png', alt: 'Integration 4' },
  { src: '/assets/clientlogos/clientlogo10.png', alt: 'Integration 5' },
];

const Wrapper = styled.div`
  padding: 2rem 0;

  .logoloop__item img {
    filter: brightness(0) invert(1);
    opacity: 0.45;
    transition: opacity 0.3s ease;
  }

  .logoloop__item:hover img {
    opacity: 0.9;
  }
`;

const IntegrationLogoScroller = () => (
  <Wrapper>
    <LogoLoop
      logos={logos}
      speed={80}
      direction="left"
      logoHeight={44}
      gap={64}
      fadeOut
      fadeOutColor="#09090b"
      ariaLabel="Integration logos"
    />
  </Wrapper>
);

export default IntegrationLogoScroller;
