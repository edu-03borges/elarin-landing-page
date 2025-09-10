import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features section">
      <div className="container">
        <div className="features-content">
          <div className="features-text">
            <h2 className="features-title">Análise Inteligente</h2>
            <p className="features-description">
              Nossa IA com visão computacional analisa seus movimentos em tempo real, fornecendo correções instantâneas para exercícios mais seguros e eficazes.
            </p>
            
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="feature-title">Personalização Total</h3>
                  <p className="feature-description">
                    Configure o software para seu nível de condicionamento, objetivos específicos e preferências de treino—tudo adaptado para você.
                  </p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9L12 6L16 10L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="feature-title">Monitoramento Contínuo</h3>
                  <p className="feature-description">
                    Acompanhe sua evolução, veja como sua técnica está melhorando e quantas lesões você está evitando com nossa tecnologia.
                  </p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8A6 6 0 0 0 6 8C6 15 3 18 3 18H21S18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.73 21A2 2 0 0 1 9.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="feature-title">Alertas de Segurança</h3>
                  <p className="feature-description">
                    Receba alertas imediatos sobre movimentos perigosos, sobrecarga muscular ou riscos de lesão durante seus treinos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="features-image">
            <img 
              src="/5VaJTSr4YBHr.jpg" 
              alt="Elarin app para correção de exercícios" 
              className="app-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

