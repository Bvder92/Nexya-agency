import React, { useState } from 'react';
import '../App.css';

function ServicesPage() {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  return (
    <div className={`App ${isHeaderHovered ? 'header-hovered' : ''}`}>
      <header 
        className="header"
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
      >
        <div className="logo-container">
          <img src="/Nexya.png" alt="Nexya Agency" className="logo" />
        </div>
        <nav className="nav">
          <a href="#offre" className="nav-link">Notre offre</a>
          <a href="#projets" className="nav-link">Nos projets</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#about" className="nav-link">A propos</a>
        </nav>
      </header>
      
      <main className="main-content">
        {/* Contenu vierge pour l'instant */}
      </main>
    </div>
  );
}

export default ServicesPage;

