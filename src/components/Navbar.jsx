import React, {useState} from 'react';
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube} from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 fixed z-20 bg-black text-white'>
        <div>
            <h1 className={logo ? 'hidden' : 'block'}>ACCOMMODATE</h1>
        </div>
        <ul className='hidden lg:flex'>
            <li className='lg:text-xl font-light'>Home</li>
            <li className='lg:text-xl font-light'>Accomodations</li>
            <li className='lg:text-xl font-light'>My Bookings</li>
            <li className='lg:text-xl font-light'>About</li>
            <li className='lg:text-xl font-light'>Contact</li>
        </ul>
        <div className='hidden lg:flex'>
            <BsPerson className='mr-1' size={20} />
            <BiSearch className='ml-1' size={20} />
        </div>

        {/* Hamburger */}
        <div onClick={handleNav} className='lg:hidden z-10'>
            {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
        </div>

        {/* Mobile Menu */}
        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
            <div>
                <h1>ACCOMMODATE</h1>
            </div>
            <ul>
                <li className='border-b font-light'>Home</li>
                <li className='border-b font-light'>Accodomodations</li>
                <li className='border-b font-light'>My Bookings</li>
                <li className='border-b font-light'>About</li>
                <li className='border-b font-light'>Contact</li>
                <div className='flex flex-col'>
                    <button className='my-3'>Search</button>
                    <button className='my-3'>Account</button>
                </div>
                <div className='flex justify-between my-3'>
                    <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaTwitter className='icon' />
                    <FaPinterest className='icon' />
                    <FaYoutube className='icon' />
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
