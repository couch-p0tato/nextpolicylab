import React from 'react'
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center gap-8 mb-10 lg:mt-12 w-[96%] md:w-[90%] lg:w-[96%]'>
            <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-6 w-[90%] lg:w-full'>
                <h3 className='font-bold text-2xl lg:text-3xl tracking-widest'>MEET OUR TEAM</h3>
                <p className='uppercase text-black/80 text-sm lg:text-base leading-relaxed tracking-wider lg:w-[90%]'>Bringing together thinkers, makers, and visionaries to shape the future of culture, technology, and the humanities.</p>
            </div>

            <div className='flex flex-col lg:flex-row text-white gap-3 md:gap-8 lg:gap-3 w-full'>
                <div className='relative h-[600px] md:h-[700px] rounded overflow-hidden'>
                    <div className='element element-6 h-full py-10 px-5 lg:py-12 lg:px-11 flex flex-col gap-8 md:gap-12 justify-end'>
                        <div className='flex flex-col gap-2 lg:gap-4'>
                            <h4 className='font-bold text-xl lg:text-2xl'>Gift Iyioku</h4>
                            <p className='text-white/60 lg:text-lg'>Gift Iyioku is an academic focused on translating academic research into actionable government policies. She earned...</p>
                        </div>

                        <button className='text-white flex flex-row items-center justify-center gap-3 md:text-lg bg-[#353030]/80 py-1.5 md:py-2.5 border border-white font-light cursor-pointer w-[60%]'>
                            <FaLinkedin />
                            <a href="#">LINKED<span className='text-white/60'>IN</span></a>
                        </button>
                    </div>
                </div>

                <div className='relative h-[600px] md:h-[700px] rounded overflow-hidden'>
                    <div className='element element-7 h-full py-10 px-5 lg:py-12 lg:px-11 flex flex-col gap-8 md:gap-12 justify-end'>
                        <div className='flex flex-col gap-2 lg:gap-4'>
                            <h4 className='font-bold text-xl lg:text-2xl'>Oluwakemisola Adeusi</h4>
                            <p className='text-white/60 lg:text-lg'>Gift Iyioku is an academic focused on translating academic research into actionable government policies. She earned...</p>
                        </div>

                        <button className='text-white flex flex-row items-center justify-center gap-3 md:text-lg bg-[#353030]/80 py-1.5 md:py-2.5 border border-white font-light cursor-pointer w-[60%]'>
                            <FaLinkedin />
                            <a href="#">LINKED<span className='text-white/60'>IN</span></a>
                        </button>
                    </div>
                </div>

                {/* <div className='relative h-[600px] md:h-[700px] rounded overflow-hidden'>
                    <div className='element element-8 h-full py-10 px-5 lg:py-12 lg:px-11 flex flex-col gap-8 md:gap-12 justify-end'>
                        <div className='flex flex-col gap-2 lg:gap-4'>
                            <h4 className='font-bold text-xl lg:text-2xl'>Isaac Mattuma</h4>
                            <p className='text-white/60 lg:text-lg'>Gift Iyioku is an academic focused on translating academic research into actionable government policies. She earned...</p>
                        </div>

                        <button className='text-white flex flex-row items-center justify-center gap-3 md:text-lg bg-[#353030]/80 py-1.5 md:py-2.5 border border-white font-light cursor-pointer w-[60%]'>
                            <FaLinkedin />
                            <a href="#">LINKED<span className='text-white/60'>IN</span></a>
                        </button>
                    </div>
                </div> */}

            </div>
        </div>
    </div>
  )
}

export default Team