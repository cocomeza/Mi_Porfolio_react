import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiHome, 
  FiUser, 
  FiFolder, 
  FiBriefcase, 
  FiCode, 
  FiMail,
  FiSun,
  FiMoon,
  FiMenu,
  FiX
} from "react-icons/fi";
import './Navbar.css';

const navItems = [
  { path: '/', label: 'Inicio', icon: FiHome },
  { path: '/about', label: 'Sobre Mí', icon: FiUser },
  { path: '/projects', label: 'Proyectos', icon: FiFolder },
  { path: '/freelance', label: 'Freelance', icon: FiBriefcase },
  { path: '/skills', label: 'Habilidades', icon: FiCode },
  { path: '/contact', label: 'Contacto', icon: FiMail },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header 
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      >
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <motion.div
              className="logo-wrapper"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="logo-text">MM</span>
              <span className="logo-subtitle">Portfolio</span>
            </motion.div>
          </Link>

          <nav className="navbar-desktop">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  <motion.div
                    className="nav-link-content"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <Icon className="nav-icon" />
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        className="nav-indicator"
                        layoutId="navbar-indicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          <div className="navbar-actions">
            <motion.button
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === 'light' ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMoon />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiSun />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.a
              href="/Maximiliano_Meza_CV_Dev.pdf"
              download
              className="download-cv-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Descargar CV</span>
              <svg className="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" />
              </svg>
            </motion.a>

            <button
              className="mobile-menu-btn"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {!isMenuOpen ? (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            <motion.nav
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="mobile-menu-header">
                <h3>Menú</h3>
                <button
                  className="mobile-theme-toggle"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? <FiMoon /> : <FiSun />}
                </button>
              </div>
              
              <div className="mobile-menu-links">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                        onClick={closeMenu}
                      >
                        <Icon className="mobile-nav-icon" />
                        <span>{item.label}</span>
                        {isActive && (
                          <motion.div
                            className="mobile-nav-indicator"
                            layoutId="mobile-indicator"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.a
                href="/Maximiliano_Meza_CV_Dev.pdf"
                download
                className="mobile-download-btn"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={closeMenu}
              >
                Descargar CV
              </motion.a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}