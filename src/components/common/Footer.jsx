import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterStatement = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 4rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem 3rem;
  }
`;

const StatementText = styled.p`
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: linear-gradient(135deg, #fafafa 20%, #c4b5fd 70%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`;

const FooterContainer = styled.footer`
  background-color: #0d0d10;
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 4rem 0 2rem;

  @media (max-width: 768px) {
    padding: 3rem 0 1.5rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1.5rem;
    gap: 2rem;
  }
`;

const FooterLogo = styled.img`
  height: 26px;
  margin-bottom: 1rem;
  mix-blend-mode: screen;
`;

const FooterAbout = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const FooterDescription = styled.p`
  color: rgba(250,250,250,0.45);
  margin-bottom: 1.5rem;
  max-width: 300px;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const FooterColumn = styled.div``;

const FooterHeading = styled.h3`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(250,250,250,0.4);
  margin-bottom: 1.25rem;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.75rem;

  a {
    color: rgba(250,250,250,0.6);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s ease;

    &:hover {
      color: #fafafa;
    }
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem 0;
  border-top: 1px solid rgba(255,255,255,0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem 1.5rem 0;
    text-align: center;
  }
`;

const FooterCopyright = styled.p`
  color: rgba(250,250,250,0.35);
  font-size: 0.85rem;
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: rgba(250,250,250,0.4);
  font-size: 1.2rem;
  transition: color 0.2s ease;

  &:hover {
    color: #fafafa;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterStatement>
        <StatementText>The infrastructure your business runs on.</StatementText>
      </FooterStatement>
      <FooterContent>
        <FooterAbout>
          <Link to="/">
            <FooterLogo src="/assets/Sauma Website Logo White.svg" alt="Sauma Logo" />
          </Link>
          <FooterDescription>
            Autonomous AI systems built for real estate, medspas, and mobile detailing businesses.
          </FooterDescription>
        </FooterAbout>

        <FooterColumn>
          <FooterHeading>Industries</FooterHeading>
          <FooterLinks>
            <FooterLink><Link to="/industries/real-estate">Real Estate</Link></FooterLink>
            <FooterLink><Link to="/industries/medspas">Medspas</Link></FooterLink>
            <FooterLink><Link to="/industries/mobile-detailing">Mobile Detailing</Link></FooterLink>
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <FooterHeading>Company</FooterHeading>
          <FooterLinks>
            <FooterLink><Link to="/about">About Us</Link></FooterLink>
            <FooterLink><Link to="/careers">Careers</Link></FooterLink>
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <FooterHeading>Resources</FooterHeading>
          <FooterLinks>
            <FooterLink><Link to="/faq">FAQ</Link></FooterLink>
            <FooterLink><Link to="/contact">Contact</Link></FooterLink>
          </FooterLinks>
        </FooterColumn>
      </FooterContent>

      <FooterBottom>
        <FooterCopyright>
          © {currentYear} Sauma Intelligence Agency. All rights reserved.
        </FooterCopyright>

        <FooterSocial>
          <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </SocialIcon>
          <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </SocialIcon>
          <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </SocialIcon>
        </FooterSocial>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
