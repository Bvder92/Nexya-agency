import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import ServicesPage from './pages/ServicesPage';

function HomePage() {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate('/services');
  };

  return (
    <div className={`App ${isHeaderHovered ? 'header-hovered' : ''}`}>
      <div className="background-pattern"></div>
      <header 
        className="header fade-in"
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
      >
        <div className="logo-container">
          <img src="/Nexya.png" alt="Nexya Agency" className="logo" />
        </div>
        <nav className="nav">
          <a 
            href="#contact" 
            className="nav-link"
          >
            Contactez-nous
          </a>
          <a 
            href="#about" 
            className="nav-link"
          >
            A propos
          </a>
        </nav>
      </header>
      
      <main className="main-content">
        <h1 className="main-title">
          <span className="title-line fade-in-delay-1">
            Optez pour la{' '}
          </span>
          <span className="title-line title-highlight fade-in-delay-2">
            transition technologique
          </span>
        </h1>
        <p className="subtitle fade-in-delay-3">
          Accélérez votre transformation digitale avec des solutions innovantes. 
          <br />
          Gagnez en efficacité et propulsez votre entreprise vers l'avenir.
        </p>
        <button className="cta-button fade-in-delay-4" onClick={handleDiscoverClick}>
          Accéder à l'outil
          <span className="arrow">→</span>
        </button>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

