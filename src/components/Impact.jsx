import React from 'react'

const Impact = () => {
  return (
    <div className='flex flex-col items-center mt-4'>
        <div className='flex flex-col items-center gap-8 my-10 lg:mt-20 w-[96%] md:w-[90%] lg:w-[96%]'>
            <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-6 w-[90%] lg:w-full'>
                <h3 className='font-bold text-2xl lg:text-3xl tracking-widest'>OUR IMPACT</h3>
                <p className='uppercase text-black/80 text-sm lg:text-base leading-relaxed tracking-wider lg:w-[90%]'>See our footprints across the world</p>
            </div>

            <div className='flex flex-col items-center gap-10 lg:gap-14 py-6 w-[95%] lg:w-full border border-black px-6 lg:py-14'>
                <div className='flex flex-col items-center text-center gap-3 w-full'>
                    <h3 className='font-bold text-2xl lg:text-3xl tracking-widest'>3,200+</h3>
                    <p className='text-black/60 text-xs lg:text-base leading-relaxed tracking-wider'>displaced learners reinstated into formal schooling in Nigeria since 2023</p>

                    <hr className='w-[95%] lg:w-[58%] text-black' />
                </div>

                <div className='flex flex-col items-center text-center gap-3 w-full'>
                    <h3 className='font-bold text-2xl lg:text-3xl tracking-widest'>2,000+</h3>
                    <p className='text-black/60 text-xs lg:text-base leading-relaxed tracking-wider'>returnee migrants in Ghana and Kenya verified for skills placement using EduPass</p>

                    <hr className='w-[90%] lg:w-[65%] text-black' />
                </div>
                
                <div className='flex flex-col items-center text-center gap-3 w-full'>
                    <p className='text-black/60 text-xs lg:text-base leading-relaxed tracking-wider'>National deployment in collaboration with local Ministries of Education across</p>
                    <p className='text-black/60 text-xs lg:text-base leading-relaxed tracking-wider flex items-center gap-2'><span className='font-bold text-2xl lg:text-3xl text-black'>3</span> Nigerian states</p>
                    

                    <hr className='w-[98%] lg:w-[72%] text-black' />
                </div>
                
                <div className='flex flex-col items-center text-center gap-3 w-full'>
                    <p className='text-black/60 text-xs lg:text-base leading-relaxed tracking-wider'>Recognized by European education bodies exploring credential interoperability with Africa</p>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Impact