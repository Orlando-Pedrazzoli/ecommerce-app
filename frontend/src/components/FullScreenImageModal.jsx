import React from 'react';

const FullScreenImageModal = ({ image, onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={onClose} // Fecha o modal ao clicar fora da imagem
    >
      <div
        style={{
          maxWidth: '90vw', // Nunca ultrapassa 90% da largura da tela
          maxHeight: '90vh', // Nunca ultrapassa 90% da altura da tela
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={e => e.stopPropagation()} // Evita fechar ao clicar dentro
      >
        <img
          src={image}
          alt='Full Screen'
          style={{
            maxWidth: '80%',
            maxHeight: '80%',
            objectFit: 'contain', // Mantém a proporção da imagem
            cursor: 'pointer',
          }}
          onClick={onClose} // Fecha ao clicar na imagem
        />
      </div>
    </div>
  );
};

export default FullScreenImageModal;
