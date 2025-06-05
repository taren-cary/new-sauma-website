import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledButton = styled.button`
  display: inline-block;
  padding: ${props => props.size === 'large' ? '1rem 2.5rem' : '0.75rem 1.5rem'};
  background-color: ${props => props.variant === 'outline' ? 'transparent' : '#6C63FF'};
  color: ${props => props.variant === 'outline' ? '#6C63FF' : 'white'};
  border: 2px solid #6C63FF;
  border-radius: 50px;
  font-size: ${props => props.size === 'large' ? '1.1rem' : '1rem'};
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  min-width: 150px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    width: ${props => props.fullWidthMobile ? '100%' : 'auto'};
    padding: ${props => props.size === 'large' ? '0.9rem 2rem' : '0.7rem 1.25rem'};
    font-size: ${props => props.size === 'large' ? '1rem' : '0.9rem'};
  }
`;

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  fullWidthMobile = false,
  ...props 
}) => {
  return (
    <StyledButton 
      variant={variant} 
      size={size}
      fullWidthMobile={fullWidthMobile}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button; 