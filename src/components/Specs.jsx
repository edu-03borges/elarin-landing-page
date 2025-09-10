import React from 'react';
import './Specs.css';

const Specs = () => {
  return (
    <section className="specs section">
      <div className="container">
        <h2 className="section-title">Especificações Técnicas do Elarin AI</h2>
        
        <div className="specs-grid">
          <div className="spec-category">
            <h3 className="spec-category-title">Tecnologia</h3>
            
            <div className="spec-item">
              <h4 className="spec-title">Visão Computacional</h4>
              <p className="spec-value">Análise de movimentos em tempo real<br/>Detecção de 30+ pontos corporais</p>
            </div>
            
            <div className="spec-item">
              <h4 className="spec-title">IA Generativa</h4>
              <p className="spec-value">Modelo de deep learning especializado<br/>Processamento em tempo real</p>
            </div>
            
            <div className="spec-item">
              <h4 className="spec-title">Compatibilidade</h4>
              <p className="spec-value">Funciona em smartphones, tablets e computadores com câmera</p>
            </div>
          </div>
          
          <div className="spec-category">
            <h3 className="spec-category-title">Recursos</h3>
            
            <div className="spec-item">
              <h4 className="spec-title">Exercícios Suportados</h4>
              <p className="spec-value">Mais de 100 exercícios diferentes<br/>Musculação, cardio e funcional</p>
            </div>
            
            <div className="spec-item">
              <h4 className="spec-title">Precisão da Análise</h4>
              <p className="spec-value">95% de precisão na detecção<br/>Feedback em menos de 0.5 segundos</p>
            </div>
            
            <div className="spec-item">
              <h4 className="spec-title">Certificações</h4>
              <p className="spec-value">LGPD compliant, ISO 27001, Certificação médica em desenvolvimento</p>
            </div>
          </div>
          
          <div className="spec-category">
            <h3 className="spec-category-title">Suporte</h3>
            
            <div className="spec-item">
              <h4 className="spec-title">Garantia</h4>
              <p className="spec-value">30 dias de teste gratuito<br/>Suporte técnico 24/7</p>
            </div>
            
            <div className="spec-item">
              <h4 className="spec-title">Atualizações</h4>
              <p className="spec-value">Atualizações automáticas mensais<br/>Novos exercícios constantemente</p>
            </div>
          </div>
        </div>
        
        <div className="specs-image">
          <img 
            src="/I49KfLx1h2J3.jpg" 
            alt="Elarin AI - Software de correção de exercícios" 
            className="panel-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Specs;

