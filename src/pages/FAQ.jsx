import { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'react-feather';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import CTASection from '../components/common/CTASection';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter FAQs based on search and category
  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>FAQ - Sauma AI</title>
        <meta name="description" content="Find answers to frequently asked questions about Sauma AI's revolutionary AI workers and services." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <CategorySection activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
        <SearchSection searchQuery={searchQuery} onSearchChange={handleSearchChange} />
        <FAQListSection faqs={filteredFAQs} />
        
        <CTASection
          heading="Still Have Questions?"
          text="Our team is ready to help you find the right AI solutions for your business needs."
          buttonText="Contact Us"
          buttonLink="/contact"
          showBeams
        />
      </main>
      
      <Footer />
    </>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBackground>
        <img src="/assets/hero-background1.svg" alt="" aria-hidden="true" />
      </HeroBackground>
      
      <HeroContent>
        <HeroHeading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </HeroHeading>
        
        <HeroSubheading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Find answers to common questions about our AI workers and how they can transform your business.
        </HeroSubheading>
      </HeroContent>
    </HeroContainer>
  );
};

// Category Section Component
const CategorySection = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'platform', name: 'Platform' },
    { id: 'pricing', name: 'Pricing' },
    { id: 'integration', name: 'Integration' }
  ];

  return (
    <SectionContainer>
      <Container>
        <CategoryTabs>
          {categories.map(category => (
            <CategoryTab 
              key={category.id}
              isActive={activeCategory === category.id}
              onClick={() => onCategoryChange(category.id)}
            >
              {category.name}
            </CategoryTab>
          ))}
        </CategoryTabs>
      </Container>
    </SectionContainer>
  );
};

// Search Section Component
const SearchSection = ({ searchQuery, onSearchChange }) => {
  return (
    <SearchContainer>
      <Container>
        <SearchInputWrapper>
          <SearchIcon>
            <Search size={20} />
          </SearchIcon>
          <SearchInput 
            type="text" 
            placeholder="Search for answers..." 
            value={searchQuery}
            onChange={onSearchChange}
          />
        </SearchInputWrapper>
      </Container>
    </SearchContainer>
  );
};

// FAQ List Section Component
const FAQListSection = ({ faqs }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <SectionContainer>
      <Container>
        <FAQList>
          {faqs.length > 0 ? (
            faqs.map((faq) => (
              <FAQItem key={faq.id}>
                <FAQQuestion 
                  onClick={() => toggleExpand(faq.id)}
                  isOpen={expandedId === faq.id}
                >
                  {faq.question}
                  <Icon isOpen={expandedId === faq.id}>+</Icon>
                </FAQQuestion>
                <AnimatePresence>
                  {expandedId === faq.id && (
                    <FAQAnswer
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                      {faq.relatedQuestions && faq.relatedQuestions.length > 0 && (
                        <RelatedQuestions>
                          <RelatedTitle>Related Questions:</RelatedTitle>
                          {faq.relatedQuestions.map((relatedId, index) => {
                            const relatedFaq = faqData.find(f => f.id === relatedId);
                            return relatedFaq ? (
                              <RelatedQuestion 
                                key={relatedId}
                                onClick={() => toggleExpand(relatedId)}
                              >
                                {relatedFaq.question}
                              </RelatedQuestion>
                            ) : null;
                          })}
                        </RelatedQuestions>
                      )}
                    </FAQAnswer>
                  )}
                </AnimatePresence>
              </FAQItem>
            ))
          ) : (
            <NoResults>
              <p>No matching questions found. Try adjusting your search or category.</p>
              <Button as={Link} to="/contact">Contact Us For Help</Button>
            </NoResults>
          )}
        </FAQList>
      </Container>
    </SectionContainer>
  );
};

// FAQ Data
const faqData = [
  {
    id: '1',
    question: 'What is Sauma AI?',
    answer: 'Sauma builds autonomous AI infrastructure for businesses — two systems, Dodeca and Icosa, that handle the operational and customer-facing work of running a business completely, continuously, and without supervision. Every deployment is built from scratch for the specific business we\'re working with.',
    category: 'general',
    relatedQuestions: ['2', '3']
  },
  {
    id: '2',
    question: 'What is Dodeca?',
    answer: 'Dodeca is Sauma\'s client-facing AI platform. It handles every interaction between your business and your customers — lead response, qualification, appointment booking, follow-up sequences, and voice calls — built around your specific channels and buyer journey.',
    category: 'platform',
    relatedQuestions: ['3', '5']
  },
  {
    id: '3',
    question: 'What is Icosa?',
    answer: 'Icosa is Sauma\'s internal AI platform. It automates the operational work your team handles internally — CRM maintenance, workflow automation, reporting, document processing, and internal alerts — so your team focuses on judgment, not administration.',
    category: 'platform',
    relatedQuestions: ['2', '5']
  },
  {
    id: '4',
    question: 'Are your systems built from scratch or configured from templates?',
    answer: 'Built from scratch. Every Dodeca and Icosa deployment is engineered for the specific business we\'re working with — the workflows, the channels, the tools, and the edge cases. Configuration isn\'t engineering, and we don\'t sell pre-built templates.',
    category: 'general',
    relatedQuestions: ['1', '6']
  },
  {
    id: '5',
    question: 'What platforms do you integrate with?',
    answer: 'We integrate with HubSpot, GoHighLevel, Google Calendar, and a wide range of CRM and scheduling platforms. Every deployment is configured to fit your existing stack — not the other way around.',
    category: 'integration',
    relatedQuestions: ['2', '3']
  },
  {
    id: '6',
    question: 'How long does deployment take?',
    answer: 'Most systems go live within a week of signing. We handle the full build — architecture, integration, and testing — so your team doesn\'t need to do anything technical.',
    category: 'general',
    relatedQuestions: ['7', '4']
  },
  {
    id: '7',
    question: 'How much does it cost?',
    answer: 'Pricing depends on the scope of the system and which platforms we\'re deploying. Book a demo and we\'ll walk you through exactly what we\'d build and what the investment looks like for your business.',
    category: 'pricing',
    relatedQuestions: ['6', '4']
  },
  {
    id: '8',
    question: 'Do I need technical expertise to work with Sauma?',
    answer: 'No. We handle the full build — architecture, integrations, testing, and deployment. Your team doesn\'t touch anything technical. Once the system is live, it runs without involvement from your side.',
    category: 'general',
    relatedQuestions: ['6', '4']
  },
  {
    id: '9',
    question: 'Is my business data secure?',
    answer: 'Yes. All data is encrypted in transit and at rest. Our systems only access the information required to perform their function, and we don\'t use your business data to train models for other clients.',
    category: 'general',
    relatedQuestions: ['5', '8']
  },
  {
    id: '10',
    question: 'What kinds of businesses do you work with?',
    answer: 'We work with SMBs across a wide range of industries — real estate, law, medspas, HVAC, roofing, dental, veterinary, hospitality, and more. If your business has repeatable customer-facing or internal workflows, Dodeca and Icosa can handle them.',
    category: 'general',
    relatedQuestions: ['1', '2']
  }
];

// Styles
const HeroContainer = styled.section`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  
  @media (max-width: 768px) {
    padding-top: 100px;
    min-height: 40vh;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const HeroHeading = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
`;

const HeroSubheading = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const SectionContainer = styled.section`
  padding: 4rem 0;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const CategoryTab = styled.button`
  background-color: ${props => props.isActive ? 'rgba(108, 99, 255, 0.1)' : 'rgba(255, 255, 255, 0.08)'};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 30px;
  border: 1px solid ${props => props.isActive ? 'rgba(108, 99, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.isActive ? '#6C63FF' : 'inherit'};
  font-weight: ${props => props.isActive ? '600' : '400'};
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(108, 99, 255, 0.08);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

const SearchContainer = styled.section`
  padding: 0 0 2rem;
`;

const SearchInputWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 0.5rem 1.5rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const SearchIcon = styled.div`
  color: rgba(250, 250, 250, 0.4);
  margin-right: 0.75rem;
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: #fafafa;
  font-size: 1rem;
  padding: 0.75rem 0;
  width: 100%;
  outline: none;

  &::placeholder {
    color: rgba(250, 250, 250, 0.35);
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled.div`
  background-color: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
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
  color: ${props => props.isOpen ? '#6C63FF' : 'inherit'};
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1.25rem;
  }
`;

const Icon = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
  margin-left: 1rem;
  flex-shrink: 0;
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 1.5rem 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  
  ul {
    padding-left: 1.5rem;
    margin: 1rem 0;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 0 1.25rem 1.25rem;
  }
`;

const RelatedQuestions = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const RelatedTitle = styled.p`
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const RelatedQuestion = styled.button`
  background: transparent;
  border: none;
  color: #6C63FF;
  text-align: left;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  cursor: pointer;
  display: block;
  width: 100%;
  
  &:hover {
    text-decoration: underline;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem 0;
  
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

export default FAQPage;