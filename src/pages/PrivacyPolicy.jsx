import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, Users, Mail, Phone, Globe } from 'react-feather';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding-top: 80px;
`;

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const PolicyCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const PolicyHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PolicyTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PolicySubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const LastUpdated = styled.p`
  font-size: 0.9rem;
  color: #888;
  font-style: italic;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SectionContent = styled.div`
  line-height: 1.7;
  color: #555;
  
  p {
    margin-bottom: 1rem;
  }
  
  ul, ol {
    margin: 1rem 0;
    padding-left: 2rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  strong {
    color: #333;
    font-weight: 600;
  }
  
  a {
    color: #6C63FF;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactInfo = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  border-left: 4px solid #6C63FF;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
`;

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Sauma AI</title>
        <meta name="description" content="Learn how Sauma AI protects your privacy and handles your personal information in compliance with privacy laws." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <PageContainer>
        <Navbar />

        <ContentContainer>
          <PolicyCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PolicyHeader>
              <PolicyTitle>Privacy Policy</PolicyTitle>
              <PolicySubtitle>
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </PolicySubtitle>
              <LastUpdated>Last updated: December 2024</LastUpdated>
            </PolicyHeader>

            <Section>
              <SectionTitle>
                <Shield size={24} />
                Introduction
              </SectionTitle>
              <SectionContent>
                <p>
                  Sauma AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI receptionist services, website, and related applications.
                </p>
                <p>
                  By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </SectionContent>
            </Section>

            <Section>
              <SectionTitle>
                <Database size={24} />
                Information We Collect
              </SectionTitle>
              <SectionContent>
                <h3>Personal Information</h3>
                <p>We may collect the following types of personal information:</p>
                <ul>
                  <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address</li>
                  <li><strong>Business Information:</strong> Company name, job title, website URL, and business description</li>
                  <li><strong>Communication Data:</strong> Records of your interactions with our AI receptionist and customer service</li>
                  <li><strong>Account Information:</strong> Username, password, and account preferences</li>
                </ul>

                <h3>Technical Information</h3>
                <ul>
                  <li><strong>Usage Data:</strong> Information about how you use our services, including call logs, duration, and frequency</li>
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
                  <li><strong>Website Data:</strong> Pages visited, time spent, and interactions with our website</li>
                  <li><strong>Cookies and Tracking:</strong> Data collected through cookies and similar technologies</li>
                </ul>

                <h3>AI Training Data</h3>
                <p>
                  To improve our AI receptionist services, we may collect and analyze:
                </p>
                <ul>
                  <li>Call recordings and transcripts (with your consent)</li>
                  <li>Customer service interactions</li>
                  <li>Website content and business information you provide</li>
                  <li>Feedback and performance metrics</li>
                </ul>
              </SectionContent>
            </Section>

            <Section>
              <SectionTitle>
                <Eye size={24} />
                How We Use Your Information
              </SectionTitle>
              <SectionContent>
                <p>We use your information for the following purposes:</p>
                <ul>
                  <li><strong>Service Delivery:</strong> To provide and maintain our AI receptionist services</li>
                  <li><strong>AI Training:</strong> To improve and customize our AI models for your business needs</li>
                  <li><strong>Communication:</strong> To respond to your inquiries and provide customer support</li>
                  <li><strong>Account Management:</strong> To manage your account and process transactions</li>
                  <li><strong>Service Improvement:</strong> To analyze usage patterns and enhance our services</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                  <li><strong>Marketing:</strong> To send you promotional materials (with your consent)</li>
                </ul>
              </SectionContent>
            </Section>

            <Section>
              <SectionTitle>
                <Users size={24} />
                Information Sharing and Disclosure
              </SectionTitle>
              <SectionContent>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                
                <h3>Service Providers</h3>
                <p>We may share information with trusted third-party service providers who assist us in:</p>
                <ul>
                  <li>Cloud hosting and data storage</li>
                  <li>AI model training and processing</li>
                  <li>Customer support and communication</li>
                  <li>Payment processing</li>
                  <li>Analytics and performance monitoring</li>
                </ul>

                <h3>Legal Requirements</h3>
                <p>We may disclose your information if required by law or in response to:</p>
                <ul>
                  <li>Valid legal requests from government authorities</li>
                  <li>Court orders or subpoenas</li>
                  <li>Protection of our rights and property</li>
                  <li>Prevention of fraud or illegal activities</li>
                </ul>

                <h3>Business Transfers</h3>
                <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</p>
              </SectionContent>
            </Section>

            <Section>
              <SectionTitle>
                <Lock size={24} />
                Data Security
              </SectionTitle>
              <SectionContent>
                <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
                <ul>
                  <li><strong>Encryption:</strong> Data is encrypted in transit and at rest using industry-standard protocols</li>
                  <li><strong>Access Controls:</strong> Strict access controls and authentication mechanisms</li>
                  <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                  <li><strong>Staff Training:</strong> Regular privacy and security training for all employees</li>
                  <li><strong>Incident Response:</strong> Procedures for handling security breaches</li>
                </ul>
                
                <HighlightBox>
                  <p><strong>Note:</strong> While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.</p>
                </HighlightBox>
              </SectionContent>
            </Section>

            <Section>
              <SectionTitle>
                <Globe size={24} />
                Your Rights and Choices
              </SectionTitle>
              <SectionContent>
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul>
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                  <li><strong>Objection:</strong> Object to processing for marketing purposes</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
                </ul>
                
                <p>To exercise these rights, please contact us using the information provided in the Contact section below.</p>
              </SectionContent>
            </Section>

            <Section>
              <SectionTitle>
                <Database size={24} />
                Data Retention
              </SectionTitle>
              <SectionContent>
                <p>We retain your personal information for as long as necessary to:</p>
                <ul>
                  <li>Provide our services to you</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Improve our AI models and services</li>
                </ul>
                <p>When personal information is no longer needed, we will securely delete or anonymize it in accordance with our data retention policies.</p>
              </SectionContent>
            </Section>

            <Section>
              <SectionTitle>
                <Globe size={24} />
                International Data Transfers
              </SectionTitle>
              <SectionContent>
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards, including:
                </p>
                <ul>
                  <li>Standard Contractual Clauses approved by relevant authorities</li>
                  <li>Adequacy decisions by data protection authorities</li>
                  <li>Certification schemes and codes of conduct</li>
                </ul>
              </SectionContent>
            </Section>

            <Section>
              <SectionTitle>
                <Eye size={24} />
                Cookies and Tracking Technologies
              </SectionTitle>
              <SectionContent>
                <p>We use cookies and similar technologies to:</p>
                <ul>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve our services and user experience</li>
                </ul>
                <p>You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our services.</p>
              </SectionContent>
            </Section>

            <Section>
              <SectionTitle>
                <Shield size={24} />
                Children's Privacy
              </SectionTitle>
              <SectionContent>
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                </p>
              </SectionContent>
            </Section>

            <Section>
              <SectionTitle>
                <Shield size={24} />
                Changes to This Privacy Policy
              </SectionTitle>
              <SectionContent>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
                <p>
                  Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </SectionContent>
            </Section>

            <Section>
              <SectionTitle>
                <Mail size={24} />
                Contact Us
              </SectionTitle>
              <SectionContent>
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                
                <ContactInfo>
                  <ContactItem>
                    <Mail size={16} />
                    <span>Email: privacy@sauma.ai</span>
                  </ContactItem>
                  <ContactItem>
                    <Phone size={16} />
                    <span>Phone: +1 (575) 651-2233</span>
                  </ContactItem>
                  <ContactItem>
                    <Globe size={16} />
                    <span>Website: https://www.sauma.ai</span>
                  </ContactItem>
                </ContactInfo>
                
                <p>
                  For data protection inquiries, you may also contact our Data Protection Officer at dpo@sauma.ai.
                </p>
              </SectionContent>
            </Section>
          </PolicyCard>
        </ContentContainer>

        <Footer />
      </PageContainer>
    </>
  );
};

export default PrivacyPolicy;
