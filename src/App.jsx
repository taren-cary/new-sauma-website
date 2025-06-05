import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
