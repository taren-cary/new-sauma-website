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
          showLogo={false}
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
    { id: 'ai-workers', name: 'AI Workers' },
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

// Sample FAQ Data
const faqData = [
  {
    id: '1',
    question: 'What is Sauma AI?',
    answer: 'Sauma AI is a company that provides intelligent AI workers to help businesses automate tasks, improve efficiency, and scale operations. Our AI workers can handle a variety of functions like customer service, appointment scheduling, lead qualification, and more.',
    category: 'general',
    relatedQuestions: ['2', '3']
  },
  {
    id: '2',
    question: 'How do your AI workers differ from other AI solutions?',
    answer: 'Our AI workers are designed to perform specific job functions with human-like capabilities. Unlike generic AI tools, our workers are specialized for particular roles, trained on industry-specific data, and can handle complex interactions autonomously. They integrate with your existing tools and continuously learn from interactions to improve over time.',
    category: 'general',
    relatedQuestions: ['1', '4']
  },
  {
    id: '3',
    question: 'What types of AI workers do you offer?',
    answer: 'We currently offer several specialized AI workers including: <ul><li>Mercury - AI receptionist and appointment scheduler</li><li>Apollo - AI sales development representative</li><li>Atlas - AI customer support specialist</li><li>Nova - AI content creator and marketer</li></ul> We\'re continually expanding our workforce with new specialized roles.',
    category: 'ai-workers',
    relatedQuestions: ['5', '6']
  },
  {
    id: '4',
    question: 'How much does it cost to hire an AI worker?',
    answer: 'Our pricing varies based on the AI worker and your specific needs. Generally, our AI workers cost a fraction of what you would pay for a human employee performing the same role - typically starting at $997/month. This includes 24/7 availability, no benefits costs, no turnover, and continuous performance improvements. Contact us for a custom quote based on your requirements.',
    category: 'pricing',
    relatedQuestions: ['10', '11']
  },
  {
    id: '5',
    question: 'What can Mercury, your AI receptionist, do?',
    answer: 'Mercury acts as a full-time receptionist for your business. It can: <ul><li>Answer calls and engage with customers</li><li>Schedule appointments and manage your calendar</li><li>Answer FAQs about your business</li><li>Qualify leads and collect important information</li><li>Follow up with customers</li><li>Integrate with your existing systems</li></ul>',
    category: 'ai-workers',
    relatedQuestions: ['3', '6']
  },
  {
    id: '6',
    question: 'How do I integrate AI workers with my existing systems?',
    answer: 'Our AI workers are designed to integrate seamlessly with popular business tools and software. They work with calendar systems (Google Calendar, Outlook), CRMs (Salesforce, HubSpot), communication platforms (Slack, Teams), and many industry-specific tools. Our team will help set up the necessary integrations during onboarding, ensuring a smooth workflow with your existing systems.',
    category: 'integration',
    relatedQuestions: ['7', '8']
  },
  {
    id: '7',
    question: 'Is my data secure with your AI workers?',
    answer: 'Yes, we take data security very seriously. All data is encrypted both in transit and at rest. We comply with industry standards for data protection and privacy regulations. Our AI workers only access the information they need to perform their functions, and we don\'t use your data to train other systems without permission.',
    category: 'general',
    relatedQuestions: ['8', '9']
  },
  {
    id: '8',
    question: 'Do I need technical expertise to use your AI workers?',
    answer: 'No technical expertise is required. We handle all the complex technical aspects of deployment and maintenance. Our onboarding process is designed to be straightforward, and we provide training for your team on how to interact with and get the most from your AI worker. Our support team is also available to help with any questions.',
    category: 'general',
    relatedQuestions: ['6', '10']
  },
  {
    id: '9',
    question: 'What happens if the AI worker makes a mistake?',
    answer: 'While our AI workers are highly accurate, they can occasionally make mistakes like any employee. We have monitoring systems in place to catch and correct errors quickly. If an issue arises, you can easily flag it for our team, and we\'ll address it promptly. Each interaction helps the AI learn and improve, reducing the likelihood of similar mistakes in the future.',
    category: 'general',
    relatedQuestions: ['7', '8']
  },
  {
    id: '10',
    question: 'How long does it take to get started?',
    answer: 'Most of our AI workers can be deployed within 1-2 weeks. The exact timeline depends on the complexity of your requirements and integrations. We\'ll work with you to gather necessary information, set up integrations, and train the AI on your specific business processes. Once deployed, the AI worker continues to learn and improve its performance over time.',
    category: 'general',
    relatedQuestions: ['4', '11']
  },
  {
    id: '11',
    question: 'Do you offer a trial period?',
    answer: 'Yes, we offer a 7-day risk-free trial for most of our AI workers. This allows you to experience the benefits firsthand and ensure it\'s the right fit for your business. During the trial, you\'ll have access to our support team to help optimize the setup for your specific needs.',
    category: 'pricing',
    relatedQuestions: ['4', '10']
  },
  {
    id: '12',
    question: 'Can AI workers handle industry-specific knowledge?',
    answer: 'Absolutely. Our AI workers can be trained on industry-specific terminology, processes, and regulations. Whether you\'re in healthcare, real estate, legal services, or another specialized field, we can customize the AI worker to understand and operate within your industry\'s unique requirements.',
    category: 'ai-workers',
    relatedQuestions: ['3', '5']
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
  color: rgba(0, 0, 0, 0.5);
  margin-right: 0.75rem;
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: inherit;
  font-size: 1rem;
  padding: 0.75rem 0;
  width: 100%;
  outline: none;
  
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
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