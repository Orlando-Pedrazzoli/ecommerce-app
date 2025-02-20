import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import Title from '../components/Title';

const Decks = () => {
  const navigate = useNavigate(); // Hook para navegação

  // Função para redirecionar para a coleção com a subcategoria
  const handleImageClick = subCategory => {
    navigate('/collection', { state: { subCategory } });
  };
  return (
    <section>
      <div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-4'>
        <header className='text-center'>
          <Title text1={'DECKS'} text2={'COLEÇÃO 2025'} />

          <p className='mx-auto mt-4 max-w-md text-gray-500'>
            Produzidos com EVA de alta qualidade, garantem durabilidade, tração
            e um design moderno. Com inovações em texturas e cortes anatômicos,
            nossos decks oferecem precisão nas manobras e desempenho no surf.
          </p>
        </header>

        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 px-4 sm:px-6 md:px-8 lg:px-12 mt-10'>
          <li>
            <div
              onClick={() => handleImageClick('Deck Saquarema')} // Passa a subcategoria
              className='relative block overflow-hidden group cursor-pointer'
            >
              {/* Fundo escuro e texto sempre visíveis */}
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/30'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold'>
                  SAQUAREMA
                </h3>
              </div>

              {/* Imagem sem efeito de hover */}
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1734099253/q0czusipe72xnqcrriew.jpg'
                alt=''
                className='h-[300px] sm:h-[250px] md:h-[300px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
          <li>
            <a href='#' className='relative block overflow-hidden group'>
              {/* Fundo escuro e texto sempre visíveis */}
              <div
                onClick={() => handleImageClick('Deck Noronha')}
                className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/30'
              >
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold'>
                  NORONHA
                </h3>
              </div>

              {/* Imagem sem efeito de hover */}
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1734650738/pqcz3d3slxajjqt2h2so.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </a>
          </li>
          <li>
            <a href='#' className='relative block overflow-hidden group'>
              {/* Fundo escuro e texto sempre visíveis */}
              <div
                onClick={() => handleImageClick('Deck J-Bay')}
                className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/30'
              >
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold'>
                  J-BAY
                </h3>
              </div>

              {/* Imagem sem efeito de hover */}
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739394981/DECK_J-BAY_CINZA1_fpsbkk.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </a>
          </li>
          <li>
            <a href='#' className='relative block overflow-hidden group'>
              {/* Fundo escuro e texto sempre visíveis */}
              <div
                onClick={() => handleImageClick('Deck Fiji Classic')}
                className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/30'
              >
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold'>
                  FIJI CLASSIC
                </h3>
              </div>

              {/* Imagem sem efeito de hover */}
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739718145/FIJI_CLASSIC_PRETO-BRANCOnew_yqz9uo.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </a>
          </li>
          <li>
            <a href='#' className='relative block overflow-hidden group'>
              {/* Fundo escuro e texto sempre visíveis */}
              <div
                onClick={() => handleImageClick('Deck Hawaii')}
                className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/30'
              >
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold'>
                  HAWAII
                </h3>
              </div>

              {/* Imagem sem efeito de hover */}
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739370069/DECK_HAWAII_VERDEmusgo_gsiwat.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </a>
          </li>
          <li>
            <a href='#' className='relative block overflow-hidden group'>
              {/* Fundo escuro e texto sempre visíveis */}
              <div
                onClick={() => handleImageClick('Deck Peniche')}
                className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/30'
              >
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold'>
                  PENICHE
                </h3>
              </div>

              {/* Imagem sem efeito de hover */}
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739598118/DECK_PENICHE_PRETO-VERDEnew_rolwan.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </a>
          </li>
          <li>
            <a href='#' className='relative block overflow-hidden group'>
              {/* Fundo escuro e texto sempre visíveis */}
              <div
                onClick={() => handleImageClick('Deck Tahiti')}
                className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/30'
              >
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold'>
                  TAHITI
                </h3>
              </div>

              {/* Imagem sem efeito de hover */}
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1732629510/apx7m5o4flwpvw2n9djo.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </a>
          </li>
          <li>
            <a href='#' className='relative block overflow-hidden group'>
              {/* Fundo escuro e texto sempre visíveis */}
              <div
                onClick={() => handleImageClick('Deck Longboard')}
                className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/30'
              >
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold'>
                  LONGBOARD
                </h3>
              </div>

              {/* Imagem sem efeito de hover */}
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1732572321/gmwbltgsc8bgw2wq70hi.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </a>
          </li>
          <li>
            <a href='#' className='relative block overflow-hidden group'>
              {/* Fundo escuro e texto sempre visíveis */}
              <div
                onClick={() => handleImageClick('Deck Frontal')}
                className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/30'
              >
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold'>
                  FRONTAL
                </h3>
              </div>

              {/* Imagem sem efeito de hover */}
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1732628376/mq2bhv9imueyiwkarbvt.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </a>
          </li>
          <li>
            <a href='#' className='relative block overflow-hidden group'>
              {/* Fundo escuro e texto sempre visíveis */}
              <div
                onClick={() => handleImageClick('Deck J-Bay Cnc')}
                className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/30'
              >
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold'>
                  J-BAY - CNC
                </h3>
              </div>

              {/* Imagem sem efeito de hover */}
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739718252/DECK_J-BAY_CNC_PRETO-BRANCO1_fqgdep.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </a>
          </li>
          <li>
            <a href='#' className='relative block overflow-hidden group'>
              {/* Fundo escuro e texto sempre visíveis */}
              <div
                onClick={() => handleImageClick('Deck Fiji Cnc')}
                className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/30'
              >
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold'>
                  FIJI - CNC
                </h3>
              </div>

              {/* Imagem sem efeito de hover */}
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739793749/FIJI_CNC_PRETO-AZUL2_adhbzr.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </a>
          </li>
          <li>
            <a href='#' className='relative block overflow-hidden group'>
              {/* Fundo escuro e texto sempre visíveis */}
              <div
                onClick={() => handleImageClick('Deck Saquarema Marine')}
                className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/30'
              >
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold text-center'>
                  SAQUAREMA <br />
                  MARINE
                </h3>
              </div>

              {/* Imagem sem efeito de hover */}
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1734096576/etpcmbrjvhpl33jmrxeq.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </a>
          </li>
          <li>
            <a href='#' className='relative block overflow-hidden group'>
              {/* Fundo escuro e texto sempre visíveis */}
              <div
                onClick={() => handleImageClick('Deck Noronha Marine')}
                className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/30'
              >
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold text-center'>
                  NORONHA <br />
                  MARINE
                </h3>
              </div>

              {/* Imagem sem efeito de hover */}
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1734119557/wavghckwtxiueopfzpcy.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </a>
          </li>
          <li>
            <a href='#' className='relative block overflow-hidden group'>
              {/* Fundo escuro e texto sempre visíveis */}
              <div
                onClick={() => handleImageClick('Deck StandUp')}
                className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/30'
              >
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold text-center'>
                  STAND UP <br />
                  SUP
                </h3>
              </div>

              {/* Imagem sem efeito de hover */}
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1735856062/znaidq8k2p7hkzdda3f2.jpg'
                alt=''
                className='h-300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Decks;
