import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
  
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    width: 100%;
  }
  
  #root {
    overflow-x: hidden;
    width: 100%;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  button, a {
    touch-action: manipulation;
  }
  
  /* Fix for iOS input zoom */
  input, select, textarea {
    font-size: 16px;
  }
  
  /* Fix for mobile 100vh issue */
  .vh100 {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
  }
  
  /* Improve mobile tap targets */
  a, button {
    min-height: 44px;
    min-width: 44px;
  }
  
  /* Prevent content from being hidden under fixed headers */
  section {
    scroll-margin-top: 80px;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.primary};
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    letter-spacing: -0.02em;
  }
  
  h2 {
    font-size: clamp(1.8rem, 4vw, 3rem);
    letter-spacing: -0.01em;
  }
  
  h3 {
    font-size: clamp(1.3rem, 3vw, 2rem);
  }
  
  p {
    font-family: ${props => props.theme.fonts.secondary};
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 2vw, 1.1rem);
  }
  
  /* Text gradient for important headings */
  .gradient-text {
    background: linear-gradient(90deg, #6366F1 0%, #EC4899 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    cursor: pointer;
    font-family: ${props => props.theme.fonts.primary};
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  section {
    padding: 5rem 0;
  }
  
  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #6C63FF 0%, #4F46E5 100%);
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #4F46E5 0%, #3730A3 100%);
  }
`;

export default GlobalStyles; 