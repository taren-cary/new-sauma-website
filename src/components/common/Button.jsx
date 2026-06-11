import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.size === 'large' ? '0.9rem 2.25rem' : '0.65rem 1.5rem'};
  border-radius: 50px;
  font-family: inherit;
  font-size: ${props => props.size === 'large' ? '1.05rem' : '0.95rem'};
  font-weight: 600;
  letter-spacing: -0.01em;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  ${props => props.variant === 'outline' ? `
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.18);
    color: rgba(250, 250, 250, 0.75);

    &:hover {
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(255, 255, 255, 0.35);
      color: #fafafa;
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  ` : `
    background: linear-gradient(135deg, #6C63FF 0%, #8B5CF6 100%);
    border: 1px solid transparent;
    color: #fafafa;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 24px rgba(108, 99, 255, 0.45), 0 8px 20px rgba(0, 0, 0, 0.3);
    }

    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: ${props => props.fullWidthMobile ? '100%' : 'auto'};
    padding: ${props => props.size === 'large' ? '0.85rem 2rem' : '0.6rem 1.25rem'};
    font-size: ${props => props.size === 'large' ? '1rem' : '0.9rem'};
  }
`;

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidthMobile = false,
  as,
  to,
  href,
  ...props
}) => {
  const linkProps = to ? { to } : href ? { href } : {};

  return (
    <StyledButton
      as={as}
      variant={variant}
      size={size}
      fullWidthMobile={fullWidthMobile}
      {...linkProps}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
