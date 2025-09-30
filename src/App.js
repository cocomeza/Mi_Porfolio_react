import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './components/Home'; 
import Navbar from './components/Navbar'; 
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Freelance from './components/Freelance';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Analytics from './components/Analytics';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Analytics />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <Footer />
        <ThemeToggle />
        <ScrollToTopButton />
      </Router>
    </ThemeProvider>
  );
}

export default App;
