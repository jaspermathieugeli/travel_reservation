import React from 'react';
import {RiCustomerService2Fill} from 'react-icons/ri';
import {MdOutlineTravelExplore} from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
            <h2 className='py-2'>Beaches</h2>
            <p className='py-2'>
            </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
            <div className='flex flex-col lg:flex-row items-center text-center'>
                <button>
                    <RiCustomerService2Fill size={50} />
                </button>
                <div className='w-full'>
                    <h3 className='py-2'></h3>
                    <p className='py-1'></p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center text-center'>
                <button>
                    <MdOutlineTravelExplore size={50} />
                </button>
                <div className='w-full'>
                    <h3 className='py-2'></h3>
                    <p className='py-1'></p>
                </div>
            </div>
        </div>
      </div>
      <div>
        <div className='border text-center'>
            <p className='py-1'></p>
            <p className='py-1'></p>
            <p className='py-1 bg-gray-800 text-gray-200'></p>
        </div>
        <form className='w-full'>
            <div className='flex flex-col my-2'>
                <label>Beach</label>
                <select className='border rounded-md py-2'>
                    <option>Keywest</option>
                    <option>Bora Bora</option>
                    <option>Maldives</option>
                </select>
            </div>
            <div className='flex flex-col my-2'>
                <label>Check-in</label>
                <input className='border rounded-md py-2' type='date' />
            </div>
            <div className='flex flex-col my-2'>
                <label>Check-in</label>
                <input className='border rounded-md py-2' type='date' />
            </div>
            <button className='w-full my-4'></button>
        </form>
      </div>
    </div>
  )
}

export default Search
