import React from 'react'
import keywest from '../assets/keywest.jpg';
import borabora from '../assets/borabora.jpg';
import borabora2 from '../assets/borabora2.jpg';
import maldives from '../assets/maldives.jpg';
import maldives2 from '../assets/maldives2.jpg';
import maldives3 from '../assets/maldives3.jpg';

const Beaches = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1 className='py-2'>Beaches</h1>
      <p className='py-2'></p>
      <div className='grid grid-rows-none  grid-cols-6 md:grid-cols-6 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-6 md:col-span-3 row-span-2' src={keywest} alt='/' />
        <img className='w-full h-full object-cover col-span-3 md:col-span-3' src={borabora} alt='/' />
        <img className='w-full h-full object-cover col-span-3 md:col-span-3' src={borabora2} alt='/' />
        <img className='w-full h-full object-cover col-span-2 md:col-span-2' src={maldives} alt='/' />
        <img className='w-full h-full object-cover col-span-2 md:col-span-2' src={maldives2} alt='/' />
        <img className='w-full h-full object-cover col-span-2 md:col-span-2' src={maldives3} alt='/' />
      </div>
    </div>
  )
}

export default Beaches
