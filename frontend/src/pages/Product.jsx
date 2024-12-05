import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { toast } from 'react-toastify'; // Import toast

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('original');
  const [quantity, setQuantity] = useState(1); // Estado para quantidade
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para buscar os dados do produto
  const fetchProductData = () => {
    const foundProduct = products.find(item => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  // Função para adicionar ao carrinho
  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(productData._id, size || null, quantity); // Envia a quantidade para o carrinho
      toast.success(`${quantity} item(s) added to cart`); // Show toast notification
    } else {
      toast.error('Please select a valid quantity.');
    }
  };

  // Função para abrir e fechar o modal de zoom da imagem
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Funções de incremento e decremento da quantidade
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1)); // Evita quantidade menor que 1
  };

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*----------- Product Data-------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/*---------- Product Images------------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex flex-wrap sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full gap-3'>
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className='w-[30%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt=''
              />
            ))}
          </div>
          <div
            className='w-full sm:w-[80%] cursor-zoom relative'
            onClick={handleModalToggle}
          >
            <img
              src={image}
              alt=''
              className='w-full h-auto transition-transform duration-300'
            />
          </div>
        </div>

        {/* -------- Product Info ---------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <h1 className='font-medium text-xl mt-2'>{productData.cod}</h1>
          <div className='flex items-center gap-1 mt-4'>
            <img src={assets.star_icon} alt='' className='w-3 5' />
            <img src={assets.star_icon} alt='' className='w-3 5' />
            <img src={assets.star_icon} alt='' className='w-3 5' />
            <img src={assets.star_icon} alt='' className='w-3 5' />
            <img src={assets.star_icon} alt='' className='w-3 5' />
            <p className='pl-2'>(123)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>
            {currency}
            {productData.price}
          </p>
          <p className='mt-5 text-gray-500 md:w-4/5'>
            {productData.description}
          </p>

          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size (Optional)</p>
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

          {/* Increment/Decrement Input */}
          <div className='flex items-center gap-4 mb-4'>
            <button
              onClick={decrementQuantity}
              className='border px-4 py-2 bg-gray-100 hover:bg-gray-200'
            >
              -
            </button>
            <span className='text-lg'>{quantity}</span>
            <button
              onClick={incrementQuantity}
              className='border px-4 py-2 bg-gray-100 hover:bg-gray-200'
            >
              +
            </button>
          </div>

          {/* ADD TO CART Button */}
          <button
            onClick={handleAddToCart}
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
          >
            ADD TO CART
          </button>

          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
