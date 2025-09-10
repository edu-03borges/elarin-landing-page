import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="images/logo.png" alt="Elarin" className="logo-image" />
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="http://elarin.com.br/" target="_blank" className="nav-link">Software</a>
          <a href="http://elarin.com.br/" target="_blank" className="nav-link">Benefícios</a>
          <a href="http://elarin.com.br/" target="_blank" className="nav-link">Sobre</a>
          <a href="http://elarin.com.br/" target="_blank" className="nav-link">Fale Conosco</a>
          <a href="http://elarin.com.br/" target="_blank" className="nav-link mobile-only">Suporte</a>
          <a href="http://elarin.com.br/" target="_blank" className="nav-link mobile-only">Conta</a>
        </nav>

        <div className="header-actions">
          <a href="http://elarin.com.br/" target="_blank" className="nav-link desktop-only">Suporte</a>
          <a href="http://elarin.com.br/" target="_blank" className="nav-link desktop-only">Conta</a>
          <button 
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
