import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Cart from '../pages/Cart';

const CartModal = () => {
  const { isCartModalOpen, setIsCartModalOpen, navigate } =
    useContext(ShopContext);

  if (!isCartModalOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white p-6 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto'>
        {/* Cabeçalho do Modal */}
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold'>Carrinho de Compras</h2>
          <div className='flex items-center gap-4'>
            {/* Botão "Continuar Comprando" */}
            <button
              onClick={() => setIsCartModalOpen(false)} // Fecha o modal
              className='bg-gray-300 text-black px-4 py-2 text-sm rounded-lg hover:bg-gray-400 transition-colors'
            >
              Continuar Comprando
            </button>
            {/* Botão de Fechar (×) */}
            <button
              onClick={() => setIsCartModalOpen(false)}
              className='text-gray-500 hover:text-black text-4xl'
            >
              &times;
            </button>
          </div>
        </div>

        {/* Conteúdo do Carrinho */}
        <Cart />
      </div>
    </div>
  );
};

export default CartModal;
