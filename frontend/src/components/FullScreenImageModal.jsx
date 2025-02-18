import React from 'react';

const FullScreenImageModal = ({ image, onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={onClose} // Close modal when clicking the overlay
    >
      <div
        style={{
          maxWidth: '90%',
          maxHeight: '90%',
          overflow: 'auto',
        }}
        onClick={e => e.stopPropagation()} // Prevent inner clicks from closing
      >
        <img
          src={image}
          alt='Full Screen'
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            cursor: 'pointer',
          }}
          onClick={onClose} // Close modal when clicking the image
        />
      </div>
    </div>
  );
};

export default FullScreenImageModal;
