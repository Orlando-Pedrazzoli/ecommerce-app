import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [image5, setImage5] = useState(false);

  const [name, setName] = useState('');
  const [cod, setCod] = useState('');
  const [description, setDescription] = useState('');
  const [description2, setDescription2] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Capa Combate');
  const [subCategory, setSubCategory] = useState(
    'Refletiva Fish & Evolution 5`10'
  );
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async e => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append('name', name);
      formData.append('cod', cod);
      formData.append('description', description);
      formData.append('description2', description2);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('bestseller', bestseller);
      formData.append('sizes', JSON.stringify(sizes));

      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);

      const response = await axios.post(
        backendUrl + '/api/product/add',
        formData,
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setName('');
        setCod('');
        setDescription('');
        setDescription2('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);

        setPrice('');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex flex-col w-full items-start gap-3'
    >
      <div>
        <p className='mb-2'>Upload Image</p>

        <div className='flex gap-2'>
          <label htmlFor='image1'>
            <img
              className='w-20'
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt=''
            />
            <input
              onChange={e => setImage1(e.target.files[0])}
              type='file'
              id='image1'
              hidden
            />
          </label>
          <label htmlFor='image2'>
            <img
              className='w-20'
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt=''
            />
            <input
              onChange={e => setImage2(e.target.files[0])}
              type='file'
              id='image2'
              hidden
            />
          </label>
          <label htmlFor='image3'>
            <img
              className='w-20'
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt=''
            />
            <input
              onChange={e => setImage3(e.target.files[0])}
              type='file'
              id='image3'
              hidden
            />
          </label>
          <label htmlFor='image4'>
            <img
              className='w-20'
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt=''
            />
            <input
              onChange={e => setImage4(e.target.files[0])}
              type='file'
              id='image4'
              hidden
            />
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product name</p>
        <input
          onChange={e => setName(e.target.value)}
          value={name}
          className='w-full max-w-[500px] px-3 py-2'
          type='text'
          placeholder='Type here'
          required
        />
      </div>
      <div className='w-full'>
        <p className='mb-2'>Código do produto</p>
        <input
          onChange={e => setCod(e.target.value)}
          value={cod}
          className='w-full max-w-[500px] px-3 py-2'
          type='text'
          placeholder='Type code here'
          required
        />
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product description</p>
        <textarea
          onChange={e => setDescription(e.target.value)}
          value={description}
          className='w-full max-w-[500px] px-3 py-2'
          type='text'
          placeholder='Write content here'
          required
        />
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product description 2</p>
        <textarea
          onChange={e => setDescription2(e.target.value)}
          value={description2}
          className='w-full max-w-[500px] px-3 py-2'
          type='text'
          placeholder='Write content here'
          required
        />
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product category</p>
          <select
            onChange={e => setCategory(e.target.value)}
            className='w-full px-3 py-2'
          >
            <option value='Capa Combate'>Capa Combate</option>
            <option value='Capa Premium'>Capa Premium</option>
            <option value='Capa Stand Up'>Capa Stand Up</option>
            <option value='Capa Toalha'>Capa Toalha</option>
            <option value='Decks'>Decks</option>
            <option value='Leash Premium'>Leash Premium</option>
            <option value='Leash Nó'>Leash Nó</option>
            <option value='Sarcófagos'>Sarcófagos</option>
            <option value='Sarcófagos/Rodas'>Sarcófago/Rodas</option>
            <option value='Acessórios'>Acessórios</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Sub category</p>
          <select
            onChange={e => setSubCategory(e.target.value)}
            className='w-full px-3 py-2'
          >
            <option value='Refletiva Premium Mini Simmons 6`0'>
              Mini Simmons & MiniTank 6'0
            </option>
            <option value='Refletiva Fish & Evolution 5`10'>
              Fish & Evolution 5'10
            </option>
            <option value='Refletiva Fish & Evolution 6`2'>
              Fish & Evolution 6'2
            </option>
            <option value='Refletiva Fish & Evolution 6`4'>
              Fish & Evolution 6'4
            </option>
            <option value='Refletiva Fish & Evolution 6`8'>
              Fish & Evolution 6'8
            </option>
            <option value='Refletiva Fish & Evolution 7`2'>
              Fish & Evolution 7'2
            </option>
            <option value='Refletiva MiniTank 6`0'>Mini Tank 6'0</option>
            <option value='Refletiva short 5`10'>Short-Prancha 5'10</option>
            <option value='Refletiva short 6`0'>Short-Prancha 6'0</option>
            <option value='Refletiva short 6`3'>Short-Prancha 6'3</option>
            <option value='Refletiva short 6`6'>Short-Prancha 6'6</option>
            <option value='Refletiva Funboard 7`2'>Funboard 7'2</option>
            <option value='Refletiva Funboard 7`6'>Funboard 7'6</option>
            <option value='Refletiva Funboard 8`0'>Funboard 8'0</option>
            <option value='Refletiva Minilong 7`0'>Mini long 7'0</option>
            <option value='Refletiva Minilong 8`0'>Mini long 8'0</option>
            <option value='Refletiva Longboard 9`2'>Longboard 9'2</option>
            <option value='Refletiva Longboard 9`6'>Longboard 9'6</option>
            <option value='Refletiva Longboard 10`'>Longboard 10'</option>
            <option value='Refletiva Bodyboard`'>Bodyboard'</option>
            <option value='Refletiva SUP Remo'>Remo SUP'</option>
            <option value='Refletiva SUP Wave 8`5'>SUP Wave 8'5'</option>
            <option value='Refletiva SUP Wave 9`0'>SUP Wave 9'0'</option>
            <option value='Refletiva SUP 9`2'>SUP 9'2'</option>
            <option value='Refletiva SUP 9`6'>SUP 9'6'</option>
            <option value='Refletiva SUP 10`'>SUP 10'</option>
            <option value='Refletiva SUP 10`5'>SUP 10'5'</option>
            <option value='Refletiva SUP 11`'>SUP 11'</option>
            <option value='Refletiva SUP 11`6'>SUP 11'6</option>
            <option value='Refletiva SUP RACE 12`6'>SUP RACE 12'6</option>
            <option value='Refletiva SUP RACE 14`'>SUP RACE 14'</option>
            <hr />
            <option value='Toalha Fish 5`10-6`0'>Toalha Fish 5'10-6'0</option>
            <option value='Toalha Fish 6`1-6`4'>Toalha Fish 6'1-6'4</option>
            <option value='Toalha Short 5`10-6`0'>Toalha Short 5'10-6'0</option>
            <option value='Toalha Short 6`1-6`4'>Toalha Short 6'1-6'4</option>
            <option value='Toalha Short 6`5-6`8'>Toalha Short 6'5-6'8</option>
            <option value='Toalha Fun 7`2-7`5'>Toalha Fun 7'2-7'5</option>
            <option value='Toalha Long 9`2-9`5'>Toalha Long 9'2-9'5</option>
            <hr />
            <hr />
            <option value='Sarcófago Dupla 6`3'>Sarcófago Dupla 6'3</option>
            <option value='Sarcófago Dupla 6`6'>Sarcófago Dupla 6'6</option>
            <option value='Sarcófago Dupla 7`0'>Sarcófago Dupla 7'0</option>
            <option value='Sarcófago Tripla 6`3'>Sarcófago Tripla 6'3</option>
            <option value='Sarcófago Tripla 6`6'>Sarcófago Tripla 6'6</option>
            <option value='Sarcófago Tripla 7`0'>Sarcófago Tripla 7'0</option>
            <option value='Sarcófago Tripla 8`0'>Sarcófago Tripla 8'0</option>
            <option value='Sarcófago Quadrupla 6`8'>
              Sarcófago Quadrupla 6'8
            </option>
            <option value='Sarcófago Quadrupla 7`2'>
              Sarcófago Quadrupla 7'2
            </option>
            <option value='Sarcófago Longboard Dupla'>
              Sarcófago Longboard Dupla
            </option>
            <option value='Sarcófago Longboard Tripla'>
              Sarcófago Longboard Tripla
            </option>
            <option value='Sarcófago Tripla 6`3 Com Rodas'>
              Sarcófago Tripla 6'3 Com Rodas
            </option>
            <option value='Sarcófago Tripla 6`6 Com Rodas'>
              Sarcófago Tripla 6'6 Com Rodas
            </option>
            <option value='Sarcófago Tripla 7`0 Com Rodas'>
              Sarcófago Tripla 7'0 Com Rodas
            </option>
            <option value='Sarcófago Tripla 8`0 Com Rodas'>
              Sarcófago Tripla 8'0 Com Rodas
            </option>
            <option value='Sarcófago Quadrupla 6`8 Com Rodas'>
              Sarcófago Quadrupla 6'8 Com Rodas
            </option>
            <option value='Sarcófago Quadrupla 7`2 Com Rodas'>
              Sarcófago Quadrupla 7'2 Com Rodas
            </option>
            <option value='Sarcófago Longboard Dupla Com Rodas'>
              Sarcófago Longboard Dupla Com Rodas
            </option>
            <option value='Sarcófago Longboard Tripla Com Rodas'>
              Sarcófago Longboard Tripla Com Rodas
            </option>
            <hr />
            <option value='Deck Saquarema'>Saquarema</option>
            <option value='Deck Saquarema Marine'>Saquarema Marine</option>
            <option value='Deck Noronha'>Noronha</option>
            <option value='Deck Noronha Marine'>Noronha Marine</option>
            <option value='Deck J-Bay'>J-Bay</option>
            <option value='Deck J-Bay Cnc'>J-Bay Cnc</option>
            <option value='Deck Fiji Classic'>Fiji Classic</option>
            <option value='Deck Fiji Cnc'>Fiji Cnc</option>
            <option value='Deck Hawaii'> Hawaii</option>
            <option value='Deck Peniche'>Peniche</option>
            <option value='Deck Tahiti'>Tahiti</option>
            <option value='Deck Combate'>Combate</option>
            <option value='Deck Frontal'>Frontal</option>
            <option value='Deck Longboard'>Longboard</option>
            <option value='Deck StandUp'>Stand Up</option>
            <hr />
            <option value='Super Comp (6"x 5mm)'>Super Comp</option>
            <option value='Competição (6"x 6mm)'>Competição</option>
            <option value='Regular (6.6"x 7mm)'>Regular</option>
            <option value='Pipeline (8"x 7mm)'>Pipeline</option>
            <option value='Long Tornozelo (9"x 7mm)'>Long. Tornoz</option>
            <option value='Long Calf Knee (9"x 7mm)'>Long. Calf Knee</option>
            <option value='Longboard (10"x 7mm)'>Longboard</option>
            <option value='StandUp (10"x 8mm)'>Stand Up</option>
            <option value='StandUp Espiral (7mm)'>Stand Up Espiral</option>
            <option value='Bodyboard (6mm)'>Bodyboard</option>
            <hr />
            <option value='Racks'>Racks</option>
            <option value='Protetor Eva'>Protetor EVA</option>
            <option value='Wetsuit Bag'>Wetsuit Bag</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product price</p>
          <input
            onChange={e => setPrice(e.target.value)}
            value={price}
            className='w-full px-3 py-2 sm:w-[120px]'
            type='number'
            placeholder='R$'
          />
        </div>
      </div>
      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          <div
            onClick={() =>
              setSizes(prev =>
                prev.includes('Preto/Cinza')
                  ? prev.filter(item => item !== 'Preto/Cinza')
                  : [...prev, 'Preto/Cinza']
              )
            }
          >
            <p
              className={`${
                sizes.includes('Preto/Cinza') ? 'bg-pink-200' : 'bg-slate-200'
              } px-3 py-1 cursor-pointer`}
            >
              Preto/Cinza
            </p>
          </div>
          <div
            onClick={() =>
              setSizes(prev =>
                prev.includes('Preto/Azul')
                  ? prev.filter(item => item !== 'Preto/Azul')
                  : [...prev, 'Preto/Azul']
              )
            }
          >
            <p
              className={`${
                sizes.includes('Preto/Azul') ? 'bg-pink-200' : 'bg-slate-200'
              } px-3 py-1 cursor-pointer`}
            >
              Preto/Azul
            </p>
          </div>
          <div
            onClick={() =>
              setSizes(prev =>
                prev.includes('Preto/Amarelo')
                  ? prev.filter(item => item !== 'Preto/Amarelo')
                  : [...prev, 'Preto/Amarelo']
              )
            }
          >
            <p
              className={`${
                sizes.includes('Preto/Amarelo') ? 'bg-pink-200' : 'bg-slate-200'
              } px-3 py-1 cursor-pointer`}
            >
              Preto/Amarelo
            </p>
          </div>
          <div
            onClick={() =>
              setSizes(prev =>
                prev.includes('Preto/Verde')
                  ? prev.filter(item => item !== 'Preto/Verde')
                  : [...prev, 'Preto/Verde']
              )
            }
          >
            <p
              className={`${
                sizes.includes('Preto/Verde') ? 'bg-pink-200' : 'bg-slate-200'
              } px-3 py-1 cursor-pointer`}
            >
              Preto/Verde
            </p>
          </div>
          <div
            onClick={() =>
              setSizes(prev =>
                prev.includes('Preto/Rosa')
                  ? prev.filter(item => item !== 'Preto/Rosa')
                  : [...prev, 'Preto/Rosa']
              )
            }
          >
            <p
              className={`${
                sizes.includes('Preto/Rosa') ? 'bg-pink-200' : 'bg-slate-200'
              } px-3 py-1 cursor-pointer`}
            >
              Preto/Rosa
            </p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input
          onChange={() => setBestseller(prev => !prev)}
          checked={bestseller}
          type='checkbox'
          id='bestseller'
        />
        <label className='cursor-pointer' htmlFor='bestseller'>
          Add to bestseller
        </label>
      </div>

      <button type='submit' className='w-28 py-2 mt-4 bg-black text-white'>
        ADD
      </button>
    </form>
  );
};

export default Add;
