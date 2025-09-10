import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-title">Vehicles</h4>
            <ul className="footer-links">
              <li><a href="#model-s">Model S</a></li>
              <li><a href="#model-3">Model 3</a></li>
              <li><a href="#model-x">Model X</a></li>
              <li><a href="#model-y">Model Y</a></li>
              <li><a href="#cybertruck">Cybertruck</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Energy</h4>
            <ul className="footer-links">
              <li><a href="#solar-panels">Solar Panels</a></li>
              <li><a href="#solar-roof">Solar Roof</a></li>
              <li><a href="#powerwall">Powerwall</a></li>
              <li><a href="#megapack">Megapack</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Charging</h4>
            <ul className="footer-links">
              <li><a href="#charging">Charging</a></li>
              <li><a href="#supercharger">Supercharger</a></li>
              <li><a href="#destination-charging">Destination Charging</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Discover</h4>
            <ul className="footer-links">
              <li><a href="#resources">Resources</a></li>
              <li><a href="#test-drive">Test Drive</a></li>
              <li><a href="#insurance">Insurance</a></li>
              <li><a href="#fleet">Fleet</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Shop</h4>
            <ul className="footer-links">
              <li><a href="#charging">Charging</a></li>
              <li><a href="#vehicle-accessories">Vehicle Accessories</a></li>
              <li><a href="#apparel">Apparel</a></li>
              <li><a href="#lifestyle">Lifestyle</a></li>
            </ul>
          </div>
        </div> */}
        
        <div className="footer-bottom">
          <div className="footer-logo">
            <img src="/images/logo.png" alt="Elarin" className="logo-image" />
          </div>
          
          <div className="footer-legal">
            <ul className="legal-links">
              <li><a href="http://elarin.com.br/" target="_blank">Políticas de Privacidade</a></li>
              <li><a href="http://elarin.com.br/" target="_blank">Contato</a></li>
              <li><a href="http://elarin.com.br/" target="_blank">Carreiras</a></li>
              <li><a href="http://elarin.com.br/" target="_blank">Notícias</a></li>
              <li><a href="http://elarin.com.br/" target="_blank">Engajar</a></li>
              <li><a href="http://elarin.com.br/" target="_blank">Localizações</a></li>
            </ul>
          </div>
          
          <div className="footer-copyright">
            <p>&copy; 2025 Elarin Human Health, Ltda.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

