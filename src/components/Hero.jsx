import { useState } from 'react';
import './Hero.css';
import Header from './Header';
import ReactGA from 'react-ga4'; 

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="hero">
      <div className="hero-header-wrapper">
        <Header />
      </div>

      <div className="hero-background" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {!isVideoLoaded && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'black',
              zIndex: 1,
            }}
          />
        )}

        <video
          className="hero-video"
          src="videos/video-clip.mp4"
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={() => setIsVideoLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isVideoLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        />

        <div
          className="video-overlay"
          style={{
            position: 'absolute',
            inset: 0,
          }}
        />
      </div>

      <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-text">
          <h1 className="hero-title">CORREÇÃO INTELIGENTE</h1>
          <p className="hero-subtitle">IA com Visão Computacional para Exercícios Seguros</p>
        </div>

      <div className="hero-actions">
        <a
          href="http://wa.me/554197890787"
          target="_blank"
          className="btn btn-primary"
          onClick={() => {
            ReactGA.event({
              category: 'Botão Hero',
              action: 'Clique no WhatsApp',
              label: 'Entre em Contato'
            });
          }}
        >
          Entre em Contato
        </a>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScMvDQ7ifLiYIJ51jqW7NBxkpuhGjjpOcc-8WUVsbISYz3NPA/viewform?usp=sharing&ouid=106221566675210606121"
          target="_blank"
          className="btn btn-secondary"
          onClick={() => {
            ReactGA.event({
              category: 'Botão Hero',
              action: 'Clique no Teste Grátis',
              label: 'Teste Grátis'
            });
          }}
        >
          Teste Grátis
        </a>
      </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
