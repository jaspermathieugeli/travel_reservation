import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div className='sm:flex text-center justify-between items-center py-8'>
                <h1>ACCOMMODATE</h1>
                <div className='flex justify-between w-full sm:max-w-[280px]'>
                    <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaTwitter className='icon' />
                    <FaPinterest className='icon' />
                    <FaYoutube className='icon' />
                </div>
            </div>
            <div className='flex justify-between'>
                <ul className='text-left lg:flex'>
                    <li className='py-1 cursor-pointer transition-colors text-base'>Privacy Policy</li>
                    <li className='py-1 cursor-pointer transition-colors text-base'>Terms of Service</li>
                    <li className='py-1 cursor-pointer transition-colors text-base'>Careers</li>
                    <li className='py-1 cursor-pointer transition-colors text-base'>Newsroom</li>
                    <li className='py-1 cursor-pointer transition-colors text-base'>FAQ</li>
                </ul>
                <ul className='text-right lg:flex'>
                    <li className='py-1 cursor-pointer transition-colors text-base'>Home</li>
                    <li className='py-1 cursor-pointer transition-colors text-base'>Accommodations</li>
                    <li className='py-1 cursor-pointer transition-colors text-base'>My Bookings</li>
                    <li className='py-1 cursor-pointer transition-colors text-base'>About</li>
                    <li className='py-1 cursor-pointer transition-colors text-base'>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
