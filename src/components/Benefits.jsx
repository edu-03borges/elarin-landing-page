import React, { useState } from 'react';
import './Benefits.css';

const Benefits = () => {
  const [activeDialog, setActiveDialog] = useState(null);

  const openDialog = (id) => setActiveDialog(id);
  const closeDialog = () => setActiveDialog(null);
  const handleAdquirir = () => {
    window.open('http://elarin.com.br/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="benefits-container">
      <BenefitBlock
        className="benefit-card-main"
        title="Elarin AI"
        description="Software inteligente que utiliza Inteligência Artificial Generativa para analisar e corrigir, em tempo real, os movimentos durante os treinos. <br/> Oferecemos uma experiência segura, eficiente e personalizada, reduzindo riscos de lesões."
        imgSrc="images/move.png"
        imgAlt="Elarin AI"
        imgStyle={{ width: '100%', maxWidth: 900, marginBottom: 20, borderRadius: 10 }}
        onSaibaMais={() => openDialog('elarin')}
        onAdquirir={handleAdquirir}
      />

      <div className="benefits-group">
        <BenefitBlock
          className="benefit-card-secondary"
          title="Análise em Tempo Real"
          description="Nossa IA analisa seus movimentos instantaneamente, fornecendo feedback imediato sobre a execução correta dos exercícios. Interface intuitiva e fácil de usar."
          imgSrc="images/woman.png"
          imgAlt="Análise em Tempo Real"
          imgStyle={{ width: '100%', maxWidth: 380 }}
          onSaibaMais={() => openDialog('analise')}
          onAdquirir={handleAdquirir}
        />

        <BenefitBlock
          className="benefit-card-secondary"
          title="Elarin | Personalização"
          description="Nosso software se adapta ao seu nível de condicionamento e objetivos, oferecendo treinos personalizados e correções específicas para cada tipo de exercício."
          imgSrc="images/sys.png"
          imgAlt="Logo Elarin"
          imgStyle={{ width: '70%', maxWidth: 380, marginBottom: 20, borderRadius: 10 }}
          onSaibaMais={() => openDialog('personalizacao')}
          onAdquirir={handleAdquirir}
        />
      </div>

      <div className="benefit-card-overlay with-background">
        <div className="overlay-content">
          <h3 className="benefit-title">Soluções | IA</h3>
          <p className="benefit-description">
            Software inteligente com IA Generativa para correção de exercícios em tempo real.<br />
            A Elarin é pioneira no mercado brasileiro com tecnologia de visão computacional.
          </p>
          <div className="benefit-actions">
            <button className="btn btn-primary-s" onClick={() => openDialog('solucoes')}>
              Saiba mais
            </button>
            <button className="btn btn-outline-s" onClick={handleAdquirir}>
              Adquirir
            </button>
          </div>
        </div>
      </div>

      <BenefitDialog
        isOpen={activeDialog === 'elarin'}
        title="Mais sobre o Elarin AI"
        description="O Elarin AI é a solução definitiva para correção de exercícios com IA, oferecendo análise em tempo real dos movimentos e feedback personalizado para reduzir riscos de lesões e melhorar a performance."
        onClose={closeDialog}
      />
      <BenefitDialog
        isOpen={activeDialog === 'analise'}
        title="Mais sobre a Análise em Tempo Real"
        description="Nossa tecnologia de visão computacional analisa cada movimento instantaneamente, detectando desvios na execução e fornecendo correções precisas para garantir a segurança e eficácia dos exercícios."
        onClose={closeDialog}
      />
      <BenefitDialog
        isOpen={activeDialog === 'personalizacao'}
        title="Elarin | Personalização"
        description="Nosso software se adapta completamente ao seu perfil: nível de condicionamento, objetivos, limitações físicas e preferências de treino. 
          A IA aprende com seus padrões de movimento e oferece correções cada vez mais precisas e personalizadas. 
          Como o Elarin funciona na nuvem, você pode treinar com segurança em qualquer lugar, sempre com acompanhamento inteligente!"
        onClose={closeDialog}
      />
      <BenefitDialog
        isOpen={activeDialog === 'solucoes'}
        title="Soluções e Produtos Elarin"
        description="
          Software de IA com visão computacional; <br />
          Análise em tempo real dos movimentos; <br /> 
          Correção instantânea de exercícios; <br /> 
          Treinos personalizados por IA; <br /> 
          Redução de riscos de lesões; <br /> 
          Interface intuitiva e fácil de usar; <br /> 
          Compatível com diversos dispositivos;"
        onClose={closeDialog}
      />
    </section>
  );
};

const BenefitBlock = ({ className, title, description, imgSrc, imgAlt, imgStyle, onSaibaMais, onAdquirir }) => (
  <div className={className}>
    <div className="benefit-content">
      <h3 className="benefit-title">{title}</h3>
      <p
        className="benefit-description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      <div className="benefit-actions">
        <button className="btn btn-primary-s" onClick={onSaibaMais}>Saiba mais</button>
        <button className="btn btn-outline-s" onClick={onAdquirir}>Adquirir</button>
      </div>
      <img src={imgSrc} alt={imgAlt} className="benefit-image" style={imgStyle} />
    </div>
  </div>
);

const BenefitDialog = ({ isOpen, title, description, onClose }) => (
  isOpen ? (
    <div className="benefit-dialog-overlay">
      <div className="benefit-dialog-content">
        <h2>{title}</h2>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <button className="btn btn-outline-s" style={{ marginTop: 20 }} onClick={onClose}>Fechar</button>
      </div>
    </div>
  ) : null
);

export default Benefits;
