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
  const [category, setCategory] = useState('Capas');
  const [subCategory, setSubCategory] = useState('Topwear');
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
      image5 && formData.append('image5', image5);

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
        setImage5(false);
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
          <label htmlFor='image5'>
            <img
              className='w-20'
              src={!image5 ? assets.upload_area : URL.createObjectURL(image5)}
              alt=''
            />
            <input
              onChange={e => setImage5(e.target.files[0])}
              type='file'
              id='image5'
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
            <option value='Capas'>Capas</option>
            <option value='Decks'>Decks</option>
            <option value='LeashPremium'>Leash Premium</option>
            <option value='LeashInjetado'>Leash Injetado</option>
            <option value='LeashNo'>Leash Nó</option>
            <option value='Sarcofagos'>Sarcófagos</option>
            <option value='Acessórios'>Acessórios</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Sub category</p>
          <select
            onChange={e => setSubCategory(e.target.value)}
            className='w-full px-3 py-2'
          >
            <option value='RefletivaCombate'>Refletiva Combate</option>
            <option value='RefletivaPremium'>Refletiva Premium</option>
            <option value='RefletivaTermica'>Refletiva Térmica</option>
            <option value='CapaToalha'>Toalha</option>
            <option value='Sarcofago'>Sarcófago</option>
            <option value='CapaSkate'>Skake</option>
            <hr />
            <option value='DeckSaquarema'>Saquarema</option>
            <option value='DeckNoronha'>Noronha</option>
            <option value='DeckJBay'>J-Bay</option>
            <option value='DeckJBayCnc'>J-Bay Cnc</option>
            <option value='DeckFijiClassic'>Fiji Classic</option>
            <option value='DeckFijiCnc'>Fiji Cnc</option>
            <option value='DeckHawaii'> Hawaii</option>
            <option value='DeckPeniche'>Peniche</option>
            <option value='DeckTahiti'>Tahiti</option>
            <option value='DeckCombate'>Combate</option>
            <option value='DeckFrontal'>Frontal</option>
            <option value='DeckLongboard'>Longboard</option>
            <option value='DeckStandUp'>Stand Up</option>
            <hr />
            <option value='LeashSuperComp'>Super Comp</option>
            <option value='LeashCompetição'>Competição</option>
            <option value='LeashRegular'>Regular</option>
            <option value='LeashPipeline'>Pipeline</option>
            <option value='LeashLongTornozelo'>Long. Tornoz</option>
            <option value='LeashLongCalfKnee'>Long. Calf Knee</option>
            <option value='LeashLongboard'>Longboard</option>
            <option value='LeashStandUp'>Stand Up</option>
            <option value='LeashStandUpEspiral'>Stand Up Espiral</option>
            <option value='LeashBody'>Bodyboard</option>
            <hr />
            <option value='Racks'>Racks</option>
            <option value='ProtetorEva'>Protetor EVA</option>
            <option value='WetsuitBag'>Wetsuit Bag</option>
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
