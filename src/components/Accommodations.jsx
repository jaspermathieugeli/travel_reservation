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

// Helper component to build the card while keeping your grid sizing
const OptionCard = ({ image, title }) => (
  <div className='col-span-5 md:col-span-1 row-span-1 border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:scale-105 duration-300 cursor-pointer overflow-hidden flex flex-col bg-white text-left'>
    <img className='w-full h-48 object-cover' src={image} alt={title} />
    <div className='p-4 flex flex-col justify-between flex-grow'>
      <h3 className='font-bold text-gray-800 text-center mb-3'>{title}</h3>
      <button className='w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-semibold'>
        Select Option
      </button>
    </div>
  </div>
);

const Accommodations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1 className='py-2 text-3xl font-bold'>Accommodations</h1>
      <p className='py-2 text-gray-600 mb-6'>Choose your preferred furniture style</p>
      
      {/* Your preserved outer layout wrapper */}
      <div className='md:flex md:gap-4 lg:grid lg:gap-4'>
        
        {/* Your preserved Row 1 wrapper */}
        <div className='grid grid-cols-1 grid-rows-5 lg:grid-cols-5 lg:grid-rows-1 gap-5 md:gap-4 lg:gap-4'>
          <OptionCard image={minimalist_room} title="Minimalist Room #1" />
          <OptionCard image={bohemian_room} title="Bohemian Room #1" />
          <OptionCard image={industrial_room} title="Industrial Room #1" />
          <OptionCard image={decorative_art_room} title="Decorative Art Room #1" />
          <OptionCard image={coastal_room} title="Coastal Room #1" />
        </div>
        
        {/* Your preserved Row 2 wrapper */}
        <div className='grid grid-cols-1 grid-rows-5 lg:grid-cols-5 lg:grid-rows-1 gap-5 md:gap-4 lg:gap-4'>
          <OptionCard image={minimalist_room2} title="Minimalist Room #2" />
          <OptionCard image={bohemian_room2} title="Bohemian Room #2" />
          <OptionCard image={industrial_room2} title="Industrial Room #2" />
          <OptionCard image={decorative_art_room2} title="Decorative Art Room #2" />
          <OptionCard image={coastal_room2} title="Coastal Room #2" />
        </div>
        
      </div>
    </div>
  )
}

export default Accommodations