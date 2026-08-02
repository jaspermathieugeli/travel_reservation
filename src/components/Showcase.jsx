import React from 'react';
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

const Showcase = () => {
  return (
    <div className='w-full py-16 px-4 text-center bg-light'>
      <h1 className='py-2'>Showcase</h1>
      <p className='py-2'></p>
      <div className='max-w-[1240px] mx-auto md:flex md:gap-4 lg:grid lg:gap-4'>
        <div className='grid grid-cols-1 grid-rows-5 lg:grid-cols-5 lg:grid-rows-1 gap-5 md:gap-4 lg:gap-4'>
          <img className='w-full h-full object-cover col-span-5 md:col-span-1 row-span-1' src={minimalist_room} alt='/' />
          <img className='w-full h-full object-cover col-span-5 md:col-span-1 row-span-1' src={bohemian_room} alt='/' />
          <img className='w-full h-full object-cover col-span-5 md:col-span-1 row-span-1' src={industrial_room} alt='/' />
          <img className='w-full h-full object-cover col-span-5 md:col-span-1 row-span-1' src={decorative_art_room} alt='/' />
          <img className='w-full h-full object-cover col-span-5 md:col-span-1 row-span-1' src={coastal_room} alt='/' />
        </div>
        <div className='grid grid-cols-1 grid-rows-5 lg:grid-cols-5 lg:grid-rows-1 gap-5 md:gap-4 lg:gap-4'>
          <img className='w-full h-full object-cover col-span-5 md:col-span-1 row-span-1' src={minimalist_room2} alt='/' />
          <img className='w-full h-full object-cover col-span-5 md:col-span-1 row-span-1' src={bohemian_room2} alt='/' />
          <img className='w-full h-full object-cover col-span-5 md:col-span-1 row-span-1' src={industrial_room2} alt='/' />
          <img className='w-full h-full object-cover col-span-5 md:col-span-1 row-span-1' src={decorative_art_room2} alt='/' />
          <img className='w-full h-full object-cover col-span-5 md:col-span-1 row-span-1' src={coastal_room2} alt='/' />
        </div>
      </div>
    </div>
  )
}

export default Showcase
