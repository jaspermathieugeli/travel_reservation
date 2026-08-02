import React from 'react';
import home from '../assets/home.jpg';
import { AiOutlineSearch } from 'react-icons/ai';

const Home = () => {
  return (
    <div className='w-full h-screen relative'>
      <img className='w-full h-full object-cover' src={home} alt='' />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/45'>
      </div>
      <div className='absolute w-full h-full top-0 flex flex-col justify-center text-center text-white p-4'>
        <h1 className='py-2'>Discover Your Popular Accommodation</h1>
        <h2 className='py-2 font-thin text-2xl'>Discover popular accommodations globally</h2>
        <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
            <div>
                <input className='bg-transparent w-[300px] sm:w-[400px] font-[Inter] focus:outline-none' type='text' placeholder='Search Accommodations' />
            </div>
            <div>
                <button><AiOutlineSearch size={20} className='icon' style={{color: '#ffffff'}} /></button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Home
