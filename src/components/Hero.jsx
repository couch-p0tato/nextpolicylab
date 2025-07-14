import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='h-screen'>
        <nav className='w-full bg-white flex flex-col lg:flex-row justify-center lg:justify-between items-center h-[10%] lg:px-5'>
            <div className='w-[65%] md:w-[50%] lg:w-[20%]'>
                <img src={assets.logo_v1} alt="" className='w-full' />
            </div>

            <button className='hidden lg:block text-black bg-transparent py-1.5 px-10 border border-black font-light cursor-pointer'>
                <a href="#">CONTACT US</a>
            </button>
        </nav>

        <div className='h-[90%] relative overflow-hidden'>
            <div className='h-full element'>
            </div>

            <div className='absolute inset-0 top-[30%] md:top-[35%] z-10 flex items-center justify-center flex-col gap-10 h-fit'>
                <h3 className='md:hidden text-center text-white text-4xl font-bold leading-normal'>Innovating <br /> Policy <br /> Solutions Together</h3>
                <h3 className='hidden md:block text-center text-white text-5xl leading-normal font-bold'>Innovating Policy <br /> Solutions Together</h3>

                <button className='text-white md:text-lg bg-[#353030]/80 py-1.5 px-10 border border-white font-light cursor-pointer'>
                    <a href="#">JOIN US</a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero