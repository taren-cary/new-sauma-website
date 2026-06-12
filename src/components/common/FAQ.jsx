import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'react-feather';

const faqItems = [
  {
    id: 1,
    question: "What is Sauma AI?",
    answer: "Sauma builds autonomous AI infrastructure for businesses — two systems, Dodeca and Icosa, that handle the operational and customer-facing work of running a business completely, continuously, and without supervision. Every deployment is built from scratch for the specific business we're working with."
  },
  {
    id: 2,
    question: "What is Dodeca?",
    answer: "Dodeca is Sauma's client-facing AI platform. It handles every interaction between your business and your customers — lead response, qualification, appointment booking, follow-up sequences, and voice calls — built around your specific channels and buyer journey."
  },
  {
    id: 3,
    question: "What is Icosa?",
    answer: "Icosa is Sauma's internal AI platform. It automates the operational work your team handles internally — CRM maintenance, workflow automation, reporting, document processing, and internal alerts — so your team focuses on judgment, not administration."
  },
  {
    id: 4,
    question: "Are your systems built from scratch or configured from templates?",
    answer: "Built from scratch. Every Dodeca and Icosa deployment is engineered for the specific business we're working with — the workflows, the channels, the tools, and the edge cases. Configuration isn't engineering, and we don't sell pre-built templates."
  },
  {
    id: 5,
    question: "What platforms do you integrate with?",
    answer: "We integrate with HubSpot, GoHighLevel, Google Calendar, and a wide range of CRM and scheduling platforms. Every deployment is configured to fit your existing stack — not the other way around."
  },
  {
    id: 6,
    question: "How much does it cost?",
    answer: "Pricing depends on the scope of the system and which platforms we're deploying. Book a demo and we'll walk you through exactly what we'd build and what the investment looks like for your business."
  },
  {
    id: 7,
    question: "How long does deployment take?",
    answer: "Most systems go live within a week of signing. We handle the full build — architecture, integration, and testing — so your team doesn't need to do anything technical."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <Container>
      {faqItems.map((item, index) => (
        <Item key={item.id} isFirst={index === 0}>
          <Question onClick={() => toggle(index)}>
            <span>{item.question}</span>
            <Chevron isOpen={openIndex === index} size={18} />
          </Question>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <Answer
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <AnswerInner>{item.answer}</AnswerInner>
              </Answer>
            )}
          </AnimatePresence>
        </Item>
      ))}
    </Container>
  );
};

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

const Item = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  &:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
`;

const Question = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 1.25rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  color: #fafafa;
  transition: color 0.2s;

  &:hover {
    color: rgba(250, 250, 250, 0.7);
  }
`;

const Chevron = styled(ChevronDown)`
  flex-shrink: 0;
  color: rgba(250, 250, 250, 0.4);
  transition: transform 0.25s ease;
  transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const Answer = styled(motion.div)`
  overflow: hidden;
`;

const AnswerInner = styled.div`
  padding-bottom: 1.25rem;
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(250, 250, 250, 0.55);
`;

export default FAQ;
