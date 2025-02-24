import React, { useEffect } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Sempre rola para o topo ao carregar a página
  }, []);
  return (
    <div className='px-4 sm:px-8 lg:px-12'>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ELITE'} text2={'SURFING'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <div className='w-full max-w-[450px] md:w-1/2'>
          <div className='w-full aspect-square'>
            <img
              className='w-full h-full object-cover rounded-md'
              src={assets.about_img}
              alt='Sobre a Elite Surfing'
            />
          </div>
        </div>

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            A Elite Surfing nasceu da paixão pelo surfe de Orlando Pedrazzoli,
            que em 1999 foi à Austrália para aprender inglês e se aprofundar no
            esporte. Trabalhando em uma renomada marca de acessórios para surfe,
            adquiriu conhecimento técnico e estratégico. Em 2001, trouxe esse
            aprendizado para o Brasil, inicialmente importando produtos, mas
            logo desenvolvendo uma linha nacional de alta qualidade.
          </p>
          <p>
            O sucesso foi imediato, consolidando a marca no mercado. Em 2006,
            Orlando vendeu sua primeira empresa e colaborou com grandes marcas
            até 2011. Com essa experiência, criou a Elite Surfing, focada em
            atender surfistas exigentes com produtos inovadores e de alta
            performance. A marca rapidamente conquistou prestígio e continua
            crescendo, refletindo a dedicação de seu fundador.
          </p>

          <b className='text-gray-800'>Nossa Missão</b>
          <p>
            {' '}
            Respeito ao mar, compromisso com a qualidade e com nossos clientes.
          </p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'PORQUE'} text2={'NOS ESCOLHER'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Garantia de Qualidade:</b>
          <p className='text-gray-600'>
            Cada produto é fabricado com os mais altos padrões de qualidade,
            utilizando materiais premium e técnicas de produção avançadas.
            Trabalhamos apenas com fornecedores confiáveis, garantindo que
            nossos acessórios atendam às expectativas dos surfistas mais
            exigentes.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Praticidade:</b>
          <p className='text-gray-600'>
            Entendemos que a vida de um surfista é dinâmica e cheia de
            aventuras, por isso, nossos produtos foram pensados para oferecer
            praticidade em cada detalhe, tornando sua experiência ainda mais
            agradável.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Atendimento Excepcional:</b>
          <p className='text-gray-600'>
            Acreditamos que o atendimento vai além de resolver problemas; é
            sobre criar uma experiência única e satisfatória para nossos
            clientes. Estamos aqui para oferecer o melhor suporte, garantir que
            suas necessidades sejam atendidas e proporcionar uma jornada
            tranquila do início ao fim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
