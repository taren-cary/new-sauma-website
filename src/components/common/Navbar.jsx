import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  -webkit-backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const Logo = styled.img`
  height: 40px;
  
  @media (max-width: 768px) {
    height: 32px;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  padding: 0;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    margin-top: -1.0rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 5rem 2rem 2rem;
    gap: 1.5rem;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease;
    box-shadow: ${({ isOpen }) => isOpen ? '-5px 0 15px rgba(0,0,0,0.1)' : 'none'};
    z-index: 1000;
  }
`;

const NavLink = styled(Link)`
  font-weight: 500;
  color: #333;
  position: relative;
  transition: color 0.3s ease;
  font-size: 1rem;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    
    &:after {
      width: 100%;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 999;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {  // Changed from 50 to 10 for quicker response
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  // Close menu when clicking outside
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <>
      <NavContainer scrolled={scrolled} style={{ 
        background: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        boxShadow: scrolled ? '0 8px 32px 0 rgba(31, 38, 135, 0.17)' : 'none'
      }}>
        <NavContent>
          <Link to="/">
            <Logo src="/assets/sauma_logo.png" alt="Sauma Logo" />
          </Link>
          
          <MobileMenuButton 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </MobileMenuButton>
          
          <NavLinks isOpen={isOpen}>
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/mercury" onClick={closeMenu}>Mercury</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
            <NavLink to="/book-demo" onClick={closeMenu}>Book a Demo</NavLink>
          </NavLinks>
        </NavContent>
      </NavContainer>
      
      <Overlay isOpen={isOpen} onClick={closeMenu} />
    </>
  );
};

export default Navbar; 