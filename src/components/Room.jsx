import React from 'react';
import { BsBoxArrowInRight, BsBoxArrowRight, BsCupHot, BsDroplet, BsSlashCircle, BsSnow, BsStars, BsTv, BsVolumeMute, BsWifi } from 'react-icons/bs';

const Room = ({ roomName, description, images }) => {
  const maxAdults = 10;
  const maxKids = 9;

  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col mx-8'>
        <div>
            <h2 className='text-3xl font-bold py-2'>{roomName}</h2>
            <p className='py-2 text-black leading-relaxed text-xl font-light'>
                {description}
            </p>
            <div className='grid grid-cols-2 grid-rows-1'>
                <img className='h-full object-cover px-4 py-4 col-span-1 row-span-1' src={images[0]} alt={`${roomName} view 1`} />
                <img className='h-full object-cover px-4 py-4 col-span-1 row-span-1' src={images[1]} alt={`${roomName} view 2`} />
            </div>
        </div>
        <div className='py-6'>
            <h3 className='text-xl font-bold py-2 border-b border-gray-200 mb-4'>Room Facilities</h3>
            <ul className='grid sm:grid-cols-2 gap-3 text-gray-700'>
                <li className='flex items-center gap-2'><BsWifi className='text-4xl text-black' /> High-Speed Wi-Fi</li>
                <li className='flex items-center gap-2'><BsSnow className='text-4xl text-black' /> Air Conditioning</li>
                <li className='flex items-center gap-2'><BsTv className='text-4xl text-black' /> Flat-screen Smart TV</li>
                <li className='flex items-center gap-2'><BsDroplet className='text-4xl text-black' /> En-suite Bathroom</li>
                <li className='flex items-center gap-2'><BsCupHot className='text-4xl text-black' /> Coffee & Tea Maker</li>
                <li className='flex items-center gap-2'><BsStars className='text-4xl text-black' /> Daily Housekeeping</li>
            </ul>
        </div>
      </div>
      <div className=''>
        <div className='bg-gray-200 px-4 py-6 self-start shadow-sm'>
            <div className='bg-gray-400 border text-center overflow-hidden mb-6 shadow-sm'>
                <p className='py-2 text-black font-bold text-xl'>GET AN ADDITIONAL 10% OFF</p>
                <p className='py-2 text-black font-bold text-xl'>12 HOURS LEFT</p>
                <p className='py-2 text-black font-bold text-xl'>BOOK NOW AND SAVE</p>
            </div>
            <form className='w-full'>
                <div className='flex flex-col mb-3'>
                    <label htmlFor='adult-select' className='font-semibold mb-1 text-sm'>Adults:</label>
                    <select id='adult-select' className='border py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                        {Array.from({ length: maxAdults }, (_, i) => i + 1).map((num) => (
                            <option key={num} value={num}>
                                {num} Adult{num > 1 ? 's' : ''}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col mb-3'>
                    <label htmlFor='kid-select' className='font-semibold mb-1 text-sm'>Kids:</label>
                    <select id='kid-select' className='border py-1.5 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'>
                        <option value="0">No Kids</option>
                        {Array.from({ length: maxKids }, (_, i) => i + 1).map((num) => (
                            <option key={num} value={num}>
                                {num} Kid{num > 1 ? 's' : ''}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col mb-3'>
                    <label htmlFor='check-in' className='font-semibold mb-1 text-sm'>Check-in</label>
                    <input id='check-in' className='border py-1.5 px-3 rounded focus:outline-none focus:ring-2' type='date' />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='check-out' className='font-semibold mb-1 text-sm'>Check-out</label>
                    <input id='check-out' className='border py-1.5 px-3 rounded focus:outline-none focus:ring-2' type='date' />
                </div>
                <button type='submit' className='w-full mb-2 py-3 bg-black text-white rounded transition-colors font-bold hover:bg-gray-800 text-xl'>
                    Book
                </button>
            </form>
        </div>
            <div className='border-t border-gray-300 pt-4 mt-4'>
                <h3 className='font-bold text-gray-800 mb-3'>Room Rules</h3>
                <ul className='text-sm text-gray-700 space-y-2'>
                    <li className='flex items-center gap-2'>
                        <BsBoxArrowInRight className='text-4xl text-black' />
                        <span><span className='font-semibold'>Check-in:</span> 2:00 PM - 10:00 PM</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <BsBoxArrowRight className='text-4xl text-black' />
                        <span><span className='font-semibold'>Check-out:</span> Until 11:00 AM</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <BsSlashCircle className='text-4xl text-black' />
                        <span>No smoking inside the room</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <BsSlashCircle className='text-4xl text-black' />
                        <span>Pets are not allowed</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <BsVolumeMute className='text-4xl text-black' />
                        <span>Quiet hours: 10:00 PM to 7:00 AM</span>
                    </li>
                </ul>
            </div>
      </div>
    </div>
  )
}

export default Room