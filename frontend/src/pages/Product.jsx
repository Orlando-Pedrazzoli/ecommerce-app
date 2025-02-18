import React, { useContext, useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import CartModal from '../components/CartModal';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('original');
  const zoomRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Estado da subcategoria que foi passado ao navegar para esta página
  const subCategory = location.state?.subCategory;

  const fetchProductData = async () => {
    products.map(item => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  const handleMouseMove = event => {
    const rect = zoomRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    zoomRef.current.style.setProperty('--display', 'block');
    zoomRef.current.style.setProperty('--zoom-x', `${x}%`);
    zoomRef.current.style.setProperty('--zoom-y', `${y}%`);
  };

  const handleMouseOut = () => {
    zoomRef.current.style.setProperty('--display', 'none');
  };

  // Função para voltar para a subcategoria
  const handleGoBack = () => {
    navigate('/collection', { state: { subCategory } });
  };

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='px-4 sm:px-6 lg:px-10'>
        {/* Botão VOLTAR */}
        <button
          onClick={handleGoBack}
          className='bg-gray-300 text-black px-4 py-2 mb-4 text-sm rounded-lg hover:bg-gray-400 transition-colors'
        >
          VOLTAR
        </button>

        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                  alt=''
                />
              ))}
            </div>
            <div
              ref={zoomRef}
              className='w-full sm:w-[80%] relative'
              onMouseMove={handleMouseMove}
              onMouseOut={handleMouseOut}
              style={{
                '--url': `url(${image})`,
                '--zoom-x': '0%',
                '--zoom-y': '0%',
                '--display': 'none',
              }}
            >
              <div
                className='absolute inset-0'
                style={{
                  backgroundImage: `var(--url)`,
                  backgroundSize: '200%',
                  backgroundPosition: 'var(--zoom-x) var(--zoom-y)',
                  display: 'var(--display)',
                }}
              ></div>
              <img className='w-full h-auto' src={image} alt='' />
            </div>
          </div>

          <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <h1 className='font-medium text-xl mt-2'>{productData.cod}</h1>
            <div className='flex items-center gap-1 mt-2'>
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={assets.star_icon}
                  alt=''
                  className='w-3 5'
                />
              ))}
              <p className='pl-2'>(0)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>
              {currency}
              {(Number(productData.price) || 0).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p className='mt-5 text-gray-500 md:w-4/5'>
              {productData.description}
            </p>
            <div className='flex flex-col gap-4 my-8'>
              <div className='flex gap-2'>
                {productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`border py-2 px-4 bg-gray-100 ${
                      item === size ? 'border-orange-500' : ''
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => addToCart(productData._id, size)}
              className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
            >
              ADICIONAR AO CARRINHO
            </button>

            <div className='text-sm text-gray-500 -mt-10  flex flex-col gap-1'>
              <RelatedProducts
                category={productData.category}
                subCategory={productData.subCategory}
              />
            </div>
          </div>
        </div>
        <div className='mt-20'>
          <div className='flex'>
            <b className='border px-5 py-3 text-sm'>INFORMAÇÕES DO PRODUTO</b>
            <p className='border px-5 py-3 text-sm'>AVALIAÇÕES (0)</p>
          </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>{productData.description2}</p>
          </div>
        </div>
      </div>

      {/* Modal do Carrinho */}
      <CartModal />
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
