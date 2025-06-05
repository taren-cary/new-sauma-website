import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const FAQItem = styled.div`
  ${props => props.theme.glassmorphism};
  margin-bottom: 1rem;
  overflow: hidden;
`;

const FAQQuestion = styled.button`
  width: 100%;
  text-align: left;
  padding: 1.5rem;
  background: transparent;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 1.5rem 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
`;

const Icon = styled.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
`;

// Sample FAQ items - replace with actual FAQs
const faqItems = [
  {
    id: 1,
    question: "What is Sauma AI?",
    answer: "Sauma AI is a platform that provides AI-powered workforce solutions for businesses. We offer AI workers like Mercury, our AI Sales Development Receptionist, that can handle tasks autonomously with human-like emotion."
  },
  {
    id: 2,
    question: "How does Mercury work?",
    answer: "Mercury is an AI receptionist that can answer inbound calls, book appointments, gather information, and make deeper connections with your leads. It works 24/7 and integrates with your existing systems to provide a seamless experience."
  },
  {
    id: 3,
    question: "What platforms do you integrate with?",
    answer: "We integrate with a wide range of CRM systems, calendar applications, and communication platforms to ensure Mercury fits seamlessly into your existing workflow."
  },
  {
    id: 4,
    question: "How much can I save by using Sauma AI?",
    answer: "Our clients typically save thousands in lead acquisition costs and generate significant additional revenue through improved appointment booking rates. The exact savings depend on your business size and needs."
  },
  {
    id: 5,
    question: "Is there a setup fee?",
    answer: "We offer flexible pricing plans with transparent costs. Contact our sales team for detailed information about setup fees and monthly subscriptions tailored to your business needs."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      {faqItems.map((item, index) => (
        <FAQItem key={item.id}>
          <FAQQuestion onClick={() => toggleFAQ(index)}>
            {item.question}
            <Icon isOpen={openIndex === index}>+</Icon>
          </FAQQuestion>
          <AnimatePresence>
            {openIndex === index && (
              <FAQAnswer
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.answer}
              </FAQAnswer>
            )}
          </AnimatePresence>
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ; 