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
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleAddToCart = () => {
    addToCart(productData._id, size || null);
    toast.success('Product added to cart'); // Show toast notification
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
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
            <div
              id='imageZoom'
              style={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                height: 'auto',
                '--display': 'none',
                '--zoom-x': '0%',
                '--zoom-y': '0%',
              }}
              onMouseMove={event => {
                const zoomElement = document.getElementById('imageZoom');
                zoomElement.style.setProperty('--display', 'block');
                const pointer = {
                  x:
                    (event.nativeEvent.offsetX * 100) / zoomElement.offsetWidth,
                  y:
                    (event.nativeEvent.offsetY * 100) /
                    zoomElement.offsetHeight,
                };
                zoomElement.style.setProperty('--zoom-x', pointer.x + '%');
                zoomElement.style.setProperty('--zoom-y', pointer.y + '%');
              }}
              onMouseLeave={() => {
                const zoomElement = document.getElementById('imageZoom');
                zoomElement.style.setProperty('--display', 'none'); // Use onMouseLeave to reset
              }}
            >
              <img
                src={image}
                alt=''
                className='w-full h-auto transition-transform duration-300'
                style={{
                  objectFit: 'cover',
                  objectPosition: '0 0',
                  transform: 'scale(1.0)', // Adjust the scale for zoom effect
                }}
              />
              <div
                style={{
                  display: 'var(--display)',
                  content: '""',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'black',
                  backgroundImage: `url(${image})`,
                  backgroundSize: '200%',
                  backgroundPosition: 'var(--zoom-x) var(--zoom-y)',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                }}
              />
            </div>
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

      {/* ---------- Modal for Fullscreen Image ------------- */}
      {isModalOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center'
          onClick={handleModalToggle}
        >
          <img
            src={image}
            alt=''
            className='w-auto h-auto max-w-full max-h-full'
          />
        </div>
      )}

      {/* ---------- Description & Review Section ------------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>{productData.description2}</p>
        </div>
      </div>

      {/* --------- display related products ---------- */}
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
