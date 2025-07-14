import React from 'react'

const Projects = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center gap-8 my-10 lg:mt-20 w-[96%] md:w-[90%] lg:w-[96%]'>
            <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-6 w-[90%] lg:w-full'>
                <h3 className='font-bold text-2xl lg:text-3xl tracking-widest'>SEE OUR PROJECTS</h3>
                <p className='uppercase text-black/80 text-sm lg:text-base leading-relaxed tracking-wider lg:w-[90%]'>Exploring bold ideas at the intersection of culture, technology, and the humanities—discover the innovative work shaping our lab</p>
            </div>

            <div className='flex flex-col lg:grid lg:grid-cols-2 text-white gap-2 md:gap-8 lg:gap-3 w-full'>
                <div className='relative h-[500px] md:h-[600px] lg:h-[650px] rounded overflow-hidden'>
                    <div className='element element-2 h-full py-10 px-5 lg:py-12 lg:px-11 flex flex-col justify-between'>
                        <div className='flex flex-col gap-2 lg:gap-4'>
                            <h4 className='font-bold text-xl lg:text-2xl'>Edupass</h4>
                            <p className='text-white/60 lg:text-lg'>Portable Digital Education Passport for Migrants and Refugees</p>
                        </div>

                        <button className='text-white md:text-lg bg-[#353030]/80 py-1.5 md:py-2.5 px-10 border border-white font-light cursor-pointer w-[80%] md:w-[60%] lg:w-[50%]'>
                            <a href="#">OPEN <span className='text-white/60'>PROJECT</span></a>
                        </button>
                    </div>
                </div>

                <div className='relative h-[500px] md:h-[600px] lg:h-[650px] rounded overflow-hidden'>
                    <div className='element element-3 h-full py-10 px-5 lg:py-12 lg:px-11 flex flex-col justify-between'>
                        <div className='flex flex-col gap-2 lg:gap-4'>
                            <h4 className='font-bold text-xl lg:text-2xl'>MobiPolicy</h4>
                            <p className='text-white/60 lg:text-lg'>AI-Powered Policy Simulator for Governments and NGOs</p>
                        </div>

                        <button className='text-white md:text-lg bg-[#353030]/80 py-1.5 md:py-2.5 px-10 border border-white font-light cursor-pointer w-[80%] md:w-[60%] lg:w-[50%]'>
                            <a href="#">OPEN <span className='text-white/60'>PROJECT</span></a>
                        </button>
                    </div>
                </div>

                <div className='relative h-[500px] md:h-[600px] lg:h-[650px] rounded overflow-hidden'>
                    <div className='element element-4 h-full py-10 px-5 lg:py-12 lg:px-11 flex flex-col justify-between'>
                        <div className='flex flex-col gap-2 lg:gap-4'>
                            <h4 className='font-bold text-xl lg:text-2xl'>K-Link</h4>
                            <p className='text-white/60 lg:text-lg'>Language–Workforce–Civic Integration App</p>
                        </div>

                        <button className='text-white md:text-lg bg-[#353030]/80 py-1.5 md:py-2.5 px-10 border border-white font-light cursor-pointer w-[80%] md:w-[60%] lg:w-[50%]'>
                            <a href="#">OPEN <span className='text-white/60'>PROJECT</span></a>
                        </button>
                    </div>
                </div>

                <div className='relative h-[500px] md:h-[600px] lg:h-[650px] rounded overflow-hidden'>
                    <div className='element element-5 h-full py-10 px-5 lg:py-12 lg:px-11 flex flex-col justify-between'>
                        <div className='flex flex-col gap-2 lg:gap-4'>
                            <h4 className='font-bold text-xl lg:text-2xl'>YouthGov360</h4>
                            <p className='text-white/60 lg:text-lg'>Civic Simulation & Policy Training Game</p>
                        </div>

                        <button className='text-white md:text-lg bg-[#353030]/80 py-1.5 md:py-2.5 px-10 border border-white font-light cursor-pointer w-[80%] md:w-[60%] lg:w-[50%]'>
                            <a href="#">OPEN <span className='text-white/60'>PROJECT</span></a>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Projects