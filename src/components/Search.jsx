import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
            <h2 className='text-3xl font-bold py-2'>Booking</h2>
            <p className='py-2 text-gray-600'>
                Choose from popular furniture styles in our accommodations to book to find the perfect fit for your stay.
            </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
            <div className='flex flex-col lg:flex-row items-center text-center lg:text-left gap-4'>
                <button className='p-3 rounded-md bg-black transition-colors'>
                    <RiCustomerService2Fill size={50} className='text-white' />
                </button>
                <div className='w-full'>
                    <h3 className='font-bold py-2'>24/7 Customer Service</h3>
                    <p className='text-sm text-gray-600'>We are here to assist you around the clock.</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center text-center lg:text-left gap-4'>
                <button className='p-3 rounded-md bg-black transition-colors'>
                    <MdOutlineTravelExplore size={50} className='text-white' />
                </button>
                <div className='w-full'>
                    <h3 className='font-bold py-2'>Explore Options</h3>
                    <p className='text-sm text-gray-600'>Find the exact style and comfort you need.</p>
                </div>
            </div>
        </div>
      </div>
      <div>
        <div className='border text-center rounded-md overflow-hidden mb-6 shadow-sm'>
            <p className='py-2 text-black font-bold'>GET AN ADDITIONAL 10% OFF</p>
            <p className='py-2 text-black font-bold'>12 HOURS LEFT</p>
            <p className='py-2 text-black font-bold'>BOOK NOW AND SAVE</p>
        </div>
        
        <form className='w-full'>
            <div className='flex flex-col my-2'>
                <label htmlFor='accommodation-select' className='font-semibold mb-1'>Accommodations</label>
                <select id='accommodation-select' className='border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option>&lt; Select Room &gt;</option>
                    <option>Minimalist Room</option>
                    <option>Bohemian Room</option>
                    <option>Industrial Room</option>
                    <option>Decorative Art Room</option>
                    <option>Coastal Room</option>
                </select>
            </div>
            <div className='flex flex-col my-2'>
                <label htmlFor='check-in' className='font-semibold mb-1'>Check-in</label>
                <input id='check-in' className='border rounded-md py-2 px-3 focus:outline-none focus:ring-2' type='date' />
            </div>
            <div className='flex flex-col my-2'>
                <label htmlFor='check-out' className='font-semibold mb-1'>Check-out</label>
                <input id='check-out' className='border rounded-md py-2 px-3 focus:outline-none focus:ring-2' type='date' />
            </div>
            <button type='submit' className='w-full my-4 py-3 bg-black text-white rounded-md transition-colors font-bold'>
                Book
            </button>
        </form>
      </div>
    </div>
  )
}

export default Search;