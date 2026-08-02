import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
import minimalist_room from '../assets/minimalist_room.jpg';
import minimalist_room2 from '../assets/minimalist_room2.jpg';
import bohemian_room from '../assets/bohemian_room.jpg';
import bohemian_room2 from '../assets/bohemian_room2.jpg';
import industrial_room from '../assets/industrial_room.jpg';
import industrial_room2 from '../assets/industrial_room2.jpg';
import decorative_art_room from '../assets/decorative_art_room.jpg';
import decorative_art_room2 from '../assets/decorative_art_room2.jpg';
import coastal_room from '../assets/coastal_room.jpg';
import coastal_room2 from '../assets/coastal_room2.jpg';

const CarouselCard = ({ images, title, id }) => {
  const [slide, setSlide] = useState(0);
  const length = images.length;
  const location = useLocation();
  const isSelected = location.pathname === `/room/${id}`;
  const previousSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  return (
    <div className='col-span-5 md:col-span-1 row-span-1 border border-gray-200 shadow-md hover:shadow-xl hover:scale-105 duration-300 overflow-hidden flex flex-col bg-white text-left'>
      <div className='relative w-full h-48 group'>
        <BsArrowLeftSquareFill onClick={previousSlide} className='absolute top-[50%] -translate-y-1/2 text-2xl text-white/80 hover:text-white cursor-pointer left-2 z-10 hidden group-hover:block shadow-sm' />
        <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] -translate-y-1/2 text-2xl text-white/80 hover:text-white cursor-pointer right-2 z-10 hidden group-hover:block shadow-sm' />
        {images.map((item, index) => (
          <div key={index} className={index === slide ? 'opacity-100 transition-opacity duration-300' : 'opacity-0 absolute inset-0'}>
              {index === slide && (
                <img className='w-full h-48 object-cover' src={item} alt={`${title} view ${index + 1}`} />
              )}
          </div>
        ))}
      </div>
      <div className='p-4 flex flex-col justify-between flex-grow'>
        <h3 className='font-bold text-gray-800 text-center mb-3'>{title}</h3>
        <Link 
          to={isSelected ? '/' : `/room/${id}`} 
          className={`w-full py-2 transition-colors text-sm font-semibold text-center block rounded ${
            isSelected 
              ? 'bg-black text-white hover:bg-gray-800' 
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          {isSelected ? 'Close Option' : 'Select Option'}
        </Link>
      </div>
    </div>
  );
};
const Accommodations = () => {
  const roomStyles = [
    { id: "minimalist", title: "Minimalist Rooms", images: [minimalist_room, minimalist_room2] },
    { id: "bohemian", title: "Bohemian Rooms", images: [bohemian_room, bohemian_room2] },
    { id: "industrial", title: "Industrial Rooms", images: [industrial_room, industrial_room2] },
    { id: "decorative-art", title: "Decorative Art Rooms", images: [decorative_art_room, decorative_art_room2] },
    { id: "coastal", title: "Coastal Rooms", images: [coastal_room, coastal_room2] },
  ];

  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1 className='py-2 text-3xl font-bold'>Accommodations</h1>
      <p className='py-2 text-black mb-6 text-xl font-light'>Choose your preferred furniture style</p>
      <div className='md:gap-4 lg:grid lg:gap-4'>
        <div className='grid grid-cols-1 grid-rows-5 lg:grid-cols-5 lg:grid-rows-1 gap-5 md:gap-4 lg:gap-4'>
          {roomStyles.map((room, index) => (
            <CarouselCard key={index} id={room.id} images={room.images} title={room.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accommodations