import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
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
  height: 40px;
  margin-bottom: 1rem;
`;

const FooterAbout = styled.div`
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const FooterDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  max-width: 300px;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const FooterColumn = styled.div``;

const FooterHeading = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.75rem;
  
  a {
    color: #666;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #6C63FF;
    }
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem 0;
  border-top: 1px solid #eee;
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
  color: #666;
  font-size: 0.9rem;
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: #666;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #6C63FF;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterAbout>
          <Link to="/">
            <FooterLogo src="/assets/sauma_logo.png" alt="Sauma Logo" />
          </Link>
          <FooterDescription>
            Sauma AI provides intelligent AI workers to transform your business operations and drive growth.
          </FooterDescription>
        </FooterAbout>
        
        <FooterColumn>
          <FooterHeading>Products</FooterHeading>
          <FooterLinks>
            <FooterLink><Link to="/mercury">Mercury</Link></FooterLink>
            <FooterLink><a href="/aphrodite">Aphrodite-Coming Soon</a></FooterLink>
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