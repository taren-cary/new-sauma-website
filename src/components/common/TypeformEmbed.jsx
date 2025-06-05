import { useEffect } from 'react';
import styled from 'styled-components';

const TypeformContainer = styled.div`
  width: 100%;
  height: 600px;
`;

const TypeformEmbed = ({ formId = "01JHNFS3R736X86KR323F3FZ5Z" }) => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    
    // Add script to document
    document.body.appendChild(script);
    
    // Clean up on unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <TypeformContainer data-tf-live={formId}></TypeformContainer>
  );
};

export default TypeformEmbed; 