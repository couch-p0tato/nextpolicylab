import React from 'react'
import { assets } from '../assets/assets'

const Testimonial = () => {
  return (
    <div className='mt-6'>
        <div className='bg-[url("/test-bg.jpg")] bg-cover bg-center text-black flex flex-col lg:items-center gap-8 py-8 lg:pb-24 md:py-10'>
            <div className='flex flex-col items-center gap-8 lg:gap-16 md:gap-14 md:mt-5 lg:w-[88%]'>
                <h3 className='font-bold text-2xl lg:text-3xl tracking-widest text-center lg:text-left lg:self-start'>WHAT PEOPLE SAY ABOUT US</h3>

                {/* Cards */}
                <div className='flex flex-col items-center gap-10 lg:gap-16 w-[85%] md:w-[75%] lg:w-full'>
                    <div className='bg-white flex flex-col lg:flex-row items-center lg:self-start py-5 lg:px-8 md:py-10 gap-6 lg:w-[60%] side-style shadow-2xl'>
                        <div className='w-[85%] md:w-[80%] lg:w-[30%]'>
                            <img src={assets.person_1} alt="" className='w-full rounded' />
                        </div>

                        <div className='w-[85%] md:w-[80%] text-sm flex flex-col gap-4'>
                            <p className='text-black/60 lg:text-xl'>"EduPass has played a critical role in enabling reintegration of displaced children returning from Northern Nigeria. Its digital record verification system ensures appropriate school placement without delay or bureaucratic exclusion." </p>

                            <div>
                                <h5 className='font-bold lg:text-base'>Dr. Kehinde Omotosho,</h5>

                                <p className='uppercase text-black/60 font-bold text-xs mt-1.5'>Oyo State Ministry of Education</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white flex flex-col lg:flex-row items-center lg:self-end py-5 lg:px-8 md:py-10 gap-6 lg:w-[60%] side-style shadow-2xl'>
                        <div className='w-[85%] md:w-[80%] lg:w-[30%]'>
                            <img src={assets.person_2} alt="" className='w-full rounded' />
                        </div>

                        <div className='w-[85%] md:w-[80%] text-sm flex flex-col gap-4'>
                            <p className='text-black/60 lg:text-xl'>"We have found EduPass to be a viable solution for connecting informal learners and IDP youth with formal vocational training pipelines. Its data architecture aligns with our ongoing digitization effort under the Skills for Jobs program."</p>

                            <div>
                                <h5 className='font-bold lg:text-base'>Engr. Musa Bala,</h5>

                                <p className='uppercase text-black/60 font-bold text-xs mt-1.5'>Federal Ministry of Education (TVET)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial