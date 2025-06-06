import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import Mercury from './pages/Mercury';
import BookDemo from './pages/BookDemo';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import Aphrodite from './pages/Aphrodite';

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
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/aphrodite" element={<Aphrodite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
