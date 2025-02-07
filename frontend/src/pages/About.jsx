import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className='px-4 sm:px-8 lg:px-12'>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ELITE'} text2={'SURFING'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img
          className='w-full md:max-w-[450px]'
          src={assets.about_img}
          alt=''
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            A jornada da Elite Surfing começou em 1999, quando Orlando
            Pedrazzoli, natural de São Paulo, decidiu embarcar para a Austrália
            com o objetivo de aprender inglês e se dedicar à sua grande paixão:
            o surfe. Escolhendo a costa oeste australiana, conhecida por suas
            ondas excepcionais, Orlando se conectou profundamente com o universo
            do esporte. Foi lá que ele teve a oportunidade de trabalhar em uma
            renomada fábrica de acessórios de surfe chamada Wet Dreams. Durante
            dois anos, Orlando mergulhou no dia a dia da produção de
            equipamentos de alta qualidade, adquirindo todo o conhecimento
            técnico e estratégico do setor. Em 2001, ele decidiu trazer a marca
            para o Brasil, iniciando uma ousada empreitada em um mercado ainda
            em desenvolvimento no país. No início, os produtos da Wet Dreams
            eram todos importados, mas com o tempo, Orlando começou a
            desenvolver, junto a fornecedores de matérias-primas de alta
            qualidade, uma linha de produtos 100% nacional.
          </p>
          <p>
            Essa estratégia trouxe ao Brasil acessórios de qualidade equivalente
            – ou até superior – aos importados, consolidando a marca no mercado.
            Com muita dedicação, Orlando formou uma ampla rede de representantes
            e distribuidores ao longo de toda a costa brasileira, além de marcar
            presença nas principais feiras e eventos de surfe do país. Em 2006,
            após construir uma marca sólida e de grande sucesso, Orlando vendeu
            a Wet Dreams e passou a colaborar com a PLP, empresa responsável por
            marcas icônicas como FCS, Bullys, Creatures e X-Trak. Essa parceria
            durou até 2011, gerando grandes frutos e fortalecendo ainda mais o
            nome de Orlando no mercado. Foi nesse momento que Orlando decidiu
            transformar sua vasta experiência e relacionamentos no setor em um
            sonho próprio. Nascia assim a Elite Surfing, uma marca criada para
            atender às demandas dos surfistas mais exigentes, oferecendo
            produtos de qualidade superior e inovação contínua. Desde o início,
            a Elite Surfing conquistou prestígio e cresceu rapidamente, reflexo
            do talento, do conhecimento e da paixão de seu fundador.
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
