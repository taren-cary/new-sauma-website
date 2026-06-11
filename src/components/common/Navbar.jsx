import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronDown } from 'react-feather';

const INDUSTRIES = [
  { name: 'Real Estate', path: '/industries/real-estate' },
  { name: 'Medspas', path: '/industries/medspas' },
  { name: 'Mobile Detailing', path: '/industries/mobile-detailing' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIndustriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setMobileIndustriesOpen(false);
  };

  return (
    <>
      <NavContainer scrolled={scrolled} style={{
        background: scrolled ? 'rgba(9, 9, 11, 0.85)' : 'transparent',
        boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.08)' : 'none'
      }}>
        <NavContent>
          <Link to="/">
            <Logo src="/assets/Sauma Website Logo White.svg" alt="Sauma Logo" />
          </Link>

          <MobileMenuButton onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? '✕' : '☰'}
          </MobileMenuButton>

          <NavLinks isOpen={isOpen}>
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>

            <DropdownTrigger
              ref={dropdownRef}
              role="button"
              tabIndex={0}
              isOpen={industriesOpen}
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIndustriesOpen(v => !v); }}
            >
              Industries <ChevronDown size={14} />
              <DropdownMenu isOpen={industriesOpen}>
                {INDUSTRIES.map((ind) => (
                  <DropdownItem key={ind.path} to={ind.path} onClick={() => setIndustriesOpen(false)}>
                    {ind.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </DropdownTrigger>

            <MobileIndustriesWrapper>
              <MobileIndustriesTrigger onClick={() => setMobileIndustriesOpen((v) => !v)}>
                Industries <ChevronDown size={14} style={{ transform: mobileIndustriesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </MobileIndustriesTrigger>
              {mobileIndustriesOpen && (
                <MobileIndustriesList>
                  {INDUSTRIES.map((ind) => (
                    <NavLink key={ind.path} to={ind.path} onClick={closeMenu} style={{ fontSize: '0.95rem', paddingLeft: '1rem', color: 'rgba(250,250,250,0.6)' }}>
                      {ind.name}
                    </NavLink>
                  ))}
                </MobileIndustriesList>
              )}
            </MobileIndustriesWrapper>

            <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
            <BookDemoButton to="/book-demo" onClick={closeMenu}>Book a Demo</BookDemoButton>
          </NavLinks>
        </NavContent>
      </NavContainer>

      <Overlay isOpen={isOpen} onClick={closeMenu} />
    </>
  );
};

const NavContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  backdrop-filter: ${props => props.scrolled ? 'blur(12px)' : 'none'};
  -webkit-backdrop-filter: ${props => props.scrolled ? 'blur(12px)' : 'none'};
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
  height: 28px;
  transition: opacity 0.3s ease;
  mix-blend-mode: screen;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    height: 24px;
    margin-top: 0.1rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #fafafa;
  padding: 0;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    margin-top: -1rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: baseline;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 260px;
    background: rgba(9, 9, 11, 0.98);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-left: 1px solid rgba(255,255,255,0.08);
    flex-direction: column;
    align-items: flex-start;
    padding: 5rem 2rem 2rem;
    gap: 1.5rem;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease;
    z-index: 1000;
  }
`;

const NavLink = styled(Link)`
  font-weight: 500;
  color: #fafafa;
  position: relative;
  transition: color 0.3s ease;
  font-size: 1rem;
  line-height: 1.5;
  min-height: unset;
  min-width: unset;

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
    &:after { width: 100%; }
  }
`;

const DropdownTrigger = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #fafafa;
  cursor: pointer;
  user-select: none;
  transition: color 0.2s;

  svg {
    transition: transform 0.2s;
    transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 14px);
  left: 50%;
  background: #18181b;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  min-width: 180px;
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transform: ${({ isOpen }) => isOpen
    ? 'translateX(-50%) translateY(0)'
    : 'translateX(-50%) translateY(-8px)'};
  transition: opacity 0.2s, transform 0.2s, visibility 0.2s;
  z-index: 999;

  &:before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #18181b;
  }
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.65rem 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  color: #fafafa;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: rgba(108, 99, 255, 0.15);
    color: ${props => props.theme.colors.primary};
  }
`;

const MobileIndustriesWrapper = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileIndustriesTrigger = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  color: #fafafa;
  cursor: pointer;
  padding: 0;
`;

const MobileIndustriesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.75rem;
  padding-left: 0.5rem;
  border-left: 2px solid rgba(108, 99, 255, 0.4);
`;

const BookDemoButton = styled(Link)`
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(250, 250, 250, 0.9);
  padding: 0.45rem 1.1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  white-space: nowrap;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.35);
    color: #fafafa;
  }

  @media (max-width: 768px) {
    align-self: flex-start;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
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

export default Navbar;
