import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; 
import Navbar from './components/Navbar'; 
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Freelance from './components/Freelance';
import Testimonials from './components/Testimonials';
import ViewportHandler from './components/ViewportHandler';

function App() {
  return (
    <Router>
      <ViewportHandler />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/freelance" element={<Freelance />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
