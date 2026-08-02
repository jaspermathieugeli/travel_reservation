import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const RoomBookingTemplate = ({ roomName, description, images }) => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly mx-8'>
        <div>
            <h2 className='text-3xl font-bold py-2'>{roomName}</h2>
            <p className='py-2 text-gray-600'>
                {description}
            </p>
            <div className='grid grid-cols-2 grid-rows-1'>
                <img className='h-full object-cover px-4 py-4 col-span-1 row-span-1' src={images[0]} alt={`${roomName} view 1`} />
                <img className='h-full object-cover px-4 py-4 col-span-1 row-span-1' src={images[1]} alt={`${roomName} view 2`} />
            </div>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
            <div className='flex flex-col lg:flex-row items-center text-center lg:text-left gap-4'>
                <button className='p-3 bg-black transition-colors'>
                    <RiCustomerService2Fill size={50} className='text-white' />
                </button>
                <div className='w-full'>
                    <h3 className='font-bold py-2'>24/7 Customer Service</h3>
                    <p className='text-sm text-gray-600'>We are here to assist you around the clock.</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center text-center lg:text-left gap-4'>
                <button className='p-3 bg-black transition-colors'>
                    <MdOutlineTravelExplore size={50} className='text-white' />
                </button>
                <div className='w-full'>
                    <h3 className='font-bold py-2'>Explore Options</h3>
                    <p className='text-sm text-gray-600'>Find the exact style and comfort you need.</p>
                </div>
            </div>
        </div>
      </div>
      <div className='bg-gray-200 px-4 py-4'>
        <div>
            <div className='bg-gray-400 border text-center overflow-hidden mb-6 shadow-sm'>
                <p className='py-2 text-black font-bold'>GET AN ADDITIONAL 10% OFF</p>
                <p className='py-2 text-black font-bold'>12 HOURS LEFT</p>
                <p className='py-2 text-black font-bold'>BOOK NOW AND SAVE</p>
            </div>
            <form className='w-full'>
                <div className='flex flex-col my-2'>
                    <label htmlFor='adult-select' className='font-semibold mb-1'>Adults:</label>
                    <select id='adult-select' className='border py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                        <option>1 Adult</option>
                        <option>2 Adults</option>
                        <option>3 Adults</option>
                        <option>4 Adults</option>
                        <option>5 Adults</option>
                        <option>6 Adults</option>
                    </select>
                </div>
                <div className='flex flex-col my-2'>
                    <label htmlFor='kid-select' className='font-semibold mb-1'>Kids:</label>
                    <select id='kid-select' className='border py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                        <option>No Kids</option>
                        <option>1 Kid</option>
                        <option>2 Kids</option>
                        <option>3 Kids</option>
                        <option>4 Kids</option>
                        <option>5 Kids</option>
                    </select>
                </div>
                <div className='flex flex-col my-2'>
                    <label htmlFor='check-in' className='font-semibold mb-1'>Check-in</label>
                    <input id='check-in' className='border py-2 px-3 focus:outline-none focus:ring-2' type='date' />
                </div>
                <div className='flex flex-col my-2'>
                    <label htmlFor='check-out' className='font-semibold mb-1'>Check-out</label>
                    <input id='check-out' className='border py-2 px-3 focus:outline-none focus:ring-2' type='date' />
                </div>
                <button type='submit' className='w-full my-4 py-3 bg-black text-white transition-colors font-bold'>
                    Book
                </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default RoomBookingTemplate