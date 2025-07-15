import React from 'react'
import { assets } from '../assets/assets'

const Testimonial = () => {
  return (
    <div className='mt-6'>
        <div className='bg-[url("/test-bg.jpg")] bg-cover bg-center text-black flex flex-col lg:items-center gap-8 py-8 lg:pb-24 md:py-10'>
            <div className='flex flex-col items-center gap-8 lg:gap-16 md:gap-14 md:mt-5 lg:w-[88%]'>
                <h3 className='font-bold text-2xl lg:text-3xl tracking-widest text-center lg:text-left lg:self-start'>WHAT PEOPLE SAY ABOUT US</h3>

                {/* Cards */}
                {/* 1 */}
                <div className='flex flex-col items-center gap-10 lg:gap-16 w-[85%] md:w-[75%] lg:w-full'>
                    <div className='bg-white flex flex-col lg:flex-row items-center lg:self-start py-5 lg:px-8 md:py-10 gap-6 lg:w-[60%] side-style shadow-2xl'>
                        <div className='w-[85%] md:w-[80%] text-sm flex flex-col gap-4'>
                            <p className='text-black/60 lg:text-xl'>"EduPass has played a critical role in enabling reintegration of displaced children returning from Northern Nigeria. Its digital record verification system ensures appropriate school placement without delay or bureaucratic exclusion." </p>

                            <div>
                                <h5 className='font-bold lg:text-base'>Dr. Kehinde Omotosho,</h5>

                                <p className='uppercase text-black/60 font-bold text-xs mt-1.5'>Oyo State Ministry of Education</p>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className='bg-white flex flex-col lg:flex-row items-center lg:self-end py-5 lg:px-8 md:py-10 gap-6 lg:w-[60%] side-style shadow-2xl'>
                        <div className='w-[85%] md:w-[80%] text-sm flex flex-col gap-4'>
                            <p className='text-black/60 lg:text-xl'>"We have found EduPass to be a viable solution for connecting informal learners and IDP youth with formal vocational training pipelines. Its data architecture aligns with our ongoing digitization effort under the Skills for Jobs program."</p>

                            <div>
                                <h5 className='font-bold lg:text-base'>Engr. Musa Bala,</h5>

                                <p className='uppercase text-black/60 font-bold text-xs mt-1.5'>Federal Ministry of Education (TVET)</p>
                            </div>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className='bg-white flex flex-col lg:flex-row items-center lg:self-start py-5 lg:px-8 md:py-10 gap-6 lg:w-[60%] side-style shadow-2xl'>
                        <div className='w-[85%] md:w-[80%] text-sm flex flex-col gap-4'>
                            <p className='text-black/60 lg:text-xl'>"Using MobiPolicy, we were able to simulate and test multiple civic engagement models and scale the most impactful one. This innovation is now embedded in our 2023–2025 Civic Development Plan."</p>

                            <div>
                                <h5 className='font-bold lg:text-base'>Mrs. Funmi Ojo, Hon. Commissioner (2023)</h5>

                                <p className='uppercase text-black/60 font-bold text-xs mt-1.5'>Osun State Ministry of Youth and Civic Engagement</p>
                            </div>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className='bg-white flex flex-col lg:flex-row items-center lg:self-end py-5 lg:px-8 md:py-10 gap-6 lg:w-[60%] side-style shadow-2xl'>
                        <div className='w-[85%] md:w-[80%] text-sm flex flex-col gap-4'>
                            <p className='text-black/60 lg:text-xl'>"For our refugee learning strategy, MobiPolicy allowed us to assess the risks of three curriculum adoption models. Its built-in metrics and AI-based recommendations were decisive in final policy design."</p>

                            <div>
                                <h5 className='font-bold lg:text-base'>Ahmed Danladi,</h5>

                                <p className='uppercase text-black/60 font-bold text-xs mt-1.5'>Director of Education Programs, GRA Kaduna (2023)</p>
                            </div>
                        </div>
                    </div>

                    {/* 5 */}
                    <div className='bg-white flex flex-col lg:flex-row items-center lg:self-start py-5 lg:px-8 md:py-10 gap-6 lg:w-[60%] side-style shadow-2xl'>
                        <div className='w-[85%] md:w-[80%] text-sm flex flex-col gap-4'>
                            <p className='text-black/60 lg:text-xl'>"We integrated MobiPolicy into our Masters in Public Policy coursework. It allowed students to interact with real-world education and migration scenarios—bridging theory and implementation."</p>

                            <div>
                                <h5 className='font-bold lg:text-base'>Prof. Tolu Adegbite (2024)</h5>

                                <p className='uppercase text-black/60 font-bold text-xs mt-1.5'>Department of Political Science, University of Ibadan</p>
                            </div>
                        </div>
                    </div>

                    {/* 6 */}
                    <div className='bg-white flex flex-col lg:flex-row items-center lg:self-end py-5 lg:px-8 md:py-10 gap-6 lg:w-[60%] side-style shadow-2xl'>
                        <div className='w-[85%] md:w-[80%] text-sm flex flex-col gap-4'>
                            <p className='text-black/60 lg:text-xl'>"K-Link has equipped hundreds of returnee migrants with the practical language and civic skills needed to rejoin the workforce and participate meaningfully in their communities."</p>

                            <div>
                                <h5 className='font-bold lg:text-base'>Dr. Tunde Onabanjo,</h5>

                                <p className='uppercase text-black/60 font-bold text-xs mt-1.5'>Executive Director, LASDA (2024)</p>
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