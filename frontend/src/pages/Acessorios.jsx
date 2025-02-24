import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import Title from '../components/Title';

const Acessorios = () => {
  const navigate = useNavigate(); // Hook para navegação
  useEffect(() => {
    window.scrollTo(0, 0); // Sempre rola para o topo ao carregar a página
  }, []);

  // Array de categorias e subcategorias com IDs e URLs das imagens
  const categoriesWithIds = [
    {
      id: '14',
      name: 'Acessórios',
      subCategories: [
        {
          id: '14.1',
          name: 'Alça Sup',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738098355/cczif4vtspabaxt3zw16.jpg',
        },
        {
          id: '14.2',
          name: 'Racks Bastão 65cm',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738099927/g3u2yqc17u39zjdsyq60.jpg',
        },
        {
          id: '14.3',
          name: 'Racks Bastão 90cm',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738100384/qr1lwwl2uy13iz9rclsj.jpg',
        },
        {
          id: '14.4',
          name: 'Fita Rack (5M par)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738102127/tuekr12daspy0isbpojm.jpg',
        },
        {
          id: '14.5',
          name: 'Fita Rack P/B (5M par)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738101859/ksdydh1zulkuebmfsgmz.jpg',
        },
        {
          id: '14.6',
          name: 'Fita Rack Azul (5M par)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738101980/phxngokw9mfow9hbpusc.jpg',
        },
        {
          id: '14.7',
          name: 'Fita Rack (8M)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738101702/pckn1upfrsvjvcu9bupn.jpg',
        },
        {
          id: '14.8',
          name: 'Protetor Eva Squash',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738098956/dm3ba8m10p2jg3etoepi.jpg',
        },
        {
          id: '14.9',
          name: 'Protetor Eva Round',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738098888/wq1qwtjatqpnnrhe1x1k.jpg',
        },
        {
          id: '14.10',
          name: 'Protetor Eva Swallow',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738098810/hpvg9o0o6xzaxzdyaooq.jpg',
        },
        {
          id: '14.11',
          name: 'Wetsuit Bag',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738099284/saozjw5kxbpkhohexjwx.jpg',
        },
      ],
    },
  ];

  // Função para redirecionar para a coleção com o ID da categoria e subcategoria
  const handleImageClick = (categoryId, subCategoryName) => {
    // Encontrar a subcategoria com base no nome e na categoria
    const category = categoriesWithIds.find(cat => cat.id === categoryId);
    if (category) {
      const subCategory = category.subCategories.find(
        subCat => subCat.name === subCategoryName
      );
      if (subCategory) {
        navigate('/collection', {
          state: { categoryId: category.id, subCategoryId: subCategory.id },
        });
      } else {
        console.error('Subcategoria não encontrada:', subCategoryName);
      }
    } else {
      console.error('Categoria não encontrada:', categoryId);
    }
  };

  return (
    <section>
      <div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-4'>
        {categoriesWithIds.map(category => (
          <div key={category.id}>
            <header className='text-center'>
              <Title
                text1={category.name.toUpperCase()}
                text2={'COLEÇÃO 2025'}
              />
            </header>

            {/* Grid responsiva */}
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 px-4 sm:px-6 md:px-8 lg:px-12 mt-10'>
              {category.subCategories.map(subCat => (
                <li key={subCat.id} className='w-full'>
                  <div
                    onClick={() => handleImageClick(category.id, subCat.name)}
                    className='relative group cursor-pointer w-full'
                  >
                    {/* Garantindo que a div seja quadrada e responsiva */}
                    <div className='relative w-full pb-[100%] overflow-hidden'>
                      <img
                        src={subCat.imageUrl}
                        alt=''
                        className='absolute top-0 left-0 w-full h-full object-cover'
                      />
                      <div className='absolute inset-0 flex items-center justify-center bg-black/30 transition duration-300'>
                        <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                          {subCat.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Acessorios;
