import styled from 'styled-components';
import LogoLoop from './LogoLoop';

const logos = [
  { src: '/assets/clientlogos/clientlogo1.svg', alt: 'Company 1' },
  { src: '/assets/clientlogos/clientlogo2.svg', alt: 'Company 2' },
  { src: '/assets/clientlogos/clientlogo3.svg', alt: 'Company 3' },
  { src: '/assets/clientlogos/clientlogo4.svg', alt: 'Company 4' },
  { src: '/assets/clientlogos/clientlogo5.svg', alt: 'Company 5' },
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

const LogoScroller = () => (
  <Wrapper>
    <LogoLoop
      logos={logos}
      speed={80}
      direction="left"
      logoHeight={44}
      gap={64}
      fadeOut
      fadeOutColor="#09090b"
      ariaLabel="Client logos"
    />
  </Wrapper>
);

export default LogoScroller;
