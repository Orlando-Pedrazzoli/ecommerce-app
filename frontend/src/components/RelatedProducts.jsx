import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter(item => category === item.category);
      productsCopy = productsCopy.filter(
        item => subCategory === item.subCategory
      );

      setRelated(productsCopy.slice(0, 12));
    }
  }, [products]);
  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'OPÇÃO DE'} text2={'CORES'} />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-1 gap-y-6'>
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            onlyImage={true}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
