import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import Mercury from './pages/Mercury';
import MercuryPricing from './pages/MercuryPricing';
import BookDemo from './pages/BookDemo';
import IntakeForm from './pages/IntakeForm';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import Aphrodite from './pages/Aphrodite';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RealEstateIntakeForm from './pages/RealEstateIntakeForm';
import RealEstate from './pages/industries/RealEstate';
import Medspas from './pages/industries/Medspas';
import MobileDetailing from './pages/industries/MobileDetailing';
import { useEffect } from 'react';

// 404 Component
const NotFound = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '100vh',
    textAlign: 'center',
    padding: '2rem'
  }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>404</h1>
    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#666' }}>Page Not Found</h2>
    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
      The page you're looking for doesn't exist.
    </p>
    <Link 
      to="/" 
      style={{ 
        padding: '0.75rem 1.5rem', 
        backgroundColor: '#6C63FF', 
        color: 'white', 
        textDecoration: 'none', 
        borderRadius: '50px',
        fontSize: '1rem',
        fontWeight: '500'
      }}
    >
      Go Home
    </Link>
  </div>
);

// OAuth Callback Component
const OAuthCallback = () => {
  useEffect(() => {
    // Get the authorization code from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const error = urlParams.get('error');

    if (error) {
      // Send error message to parent window and close popup
      if (window.opener) {
        window.opener.postMessage({ 
          success: false, 
          error: urlParams.get('error_description') || 'OAuth authorization failed' 
        }, window.location.origin);
        window.close();
      }
    } else if (code) {
      // Send success message to parent window and close popup
      if (window.opener) {
        window.opener.postMessage({ 
          success: true, 
          code: code 
        }, window.location.origin);
        window.close();
      }
    } else {
      // No code or error - something went wrong
      if (window.opener) {
        window.opener.postMessage({ 
          success: false, 
          error: 'No authorization code received' 
        }, window.location.origin);
        window.close();
      }
    }
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      textAlign: 'center',
      padding: '2rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ color: '#6C63FF', marginBottom: '1rem' }}>Completing Connection...</h2>
        <p style={{ color: '#666' }}>Please wait while we finish connecting your Google Calendar.</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mercury" element={<Mercury />} />
          <Route path="/mercury-pricing" element={<MercuryPricing />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/intake-form" element={<IntakeForm />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/aphrodite" element={<Aphrodite />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/real-estate-intake" element={<RealEstateIntakeForm />} />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          <Route path="/industries/medspas" element={<Medspas />} />
          <Route path="/industries/mobile-detailing" element={<MobileDetailing />} />
          <Route path="/auth/google/callback" element={<OAuthCallback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
