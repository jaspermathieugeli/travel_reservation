import React, {useState} from 'react'
import keywest from '../assets/keywest.jpg';
import borabora from '../assets/borabora.jpg';
import borabora2 from '../assets/borabora2.jpg';
import maldives from '../assets/maldives.jpg';
import maldives2 from '../assets/maldives2.jpg';
import maldives3 from '../assets/maldives3.jpg';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [keywest, borabora, borabora2, maldives, maldives2, maldives3];

const Carousel = () => {
    const [slide, setSlide] = useState(0);
    const length = sliderData.length;

    const previousSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1)
    }
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1)
    }

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill onClick={previousSlide} className='absolute top-[50%] -translate-y-1/2 text-3xl text-white cursor-pointer left-8 z-10' />
        <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] -translate-y-1/2 text-3xl text-white cursor-pointer right-8 z-10' />
      {sliderData.map((item, index) => (
        <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
            {index === slide && (<img className='w-full aspect-video object-cover rounded-md' src={item} alt='/' />)}
        </div>
      ))}
    </div>
  )
}

export default Carousel
