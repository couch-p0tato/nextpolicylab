import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='relative mt-8'>
        <div className='bg-[url("/footer-bg.jpg")] bg-cover bg-center lg:h-[550px] lg:justify-between flex flex-col items-center py-8 lg:py-10 lg:px-8 gap-24 md:gap-32'>
            <div className='flex flex-col lg:flex-row lg:w-full lg:justify-between gap-10 md:gap-5 items-center'>
                <h3 className='font-bold text-2xl lg:text-3xl text-white text-center lg:text-left lg:w-[27%]'>Crafting Policy with innovation</h3>

                <button className='text-white md:text-lg bg-[#111010]/50 py-1.5 px-10 border-[0.5px] border-white font-light cursor-pointer'>
                    <a href="#">CONTACT US</a>
                </button>
            </div>

            <div className='flex flex-col items-center gap-5 lg:w-full'>
                <div className='w-[80%] lg:w-[20%] lg:self-start'>
                    <img src={assets.logo_v3} alt="" className='w-full' />
                </div>

                <div className='text-white/60 flex flex-col lg:flex-row lg:justify-between lg:w-full items-center text-xs gap-3 lg:gap-0 text-center'>
                    <p className='lg:order-2'>Terms & Conditions | Privacy Policy | Legal Notice</p>

                    <p className='lg:order-1'>© 2025 Humanities Lab. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer