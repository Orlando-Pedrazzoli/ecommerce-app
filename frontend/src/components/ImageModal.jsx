// ImageModal.jsx
import React from 'react';

const ImageModal = ({ isOpen, image, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80'
      onClick={onClose}
    >
      <img src={image} alt='' className='max-w-full max-h-full' />
    </div>
  );
};

export default ImageModal;
