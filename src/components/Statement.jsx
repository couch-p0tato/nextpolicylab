import React from 'react'

const Statement = () => {
  return (
    <div className='mt-6'>
        <div className='bg-[url("/about-bg-2.jpg")] bg-cover bg-center text-white text-center flex flex-col gap-8 py-8 md:py-10'>
            <h3 className='mt-4 text-xl lg:text-3xl tracking-widest'>WHAT WE STAND FOR</h3>

            <div className='text-white/60 flex flex-col gap-6 lg:gap-8 text-sm lg:text-xl px-6 md:px-12 lg:px-0 lg:w-[70%] lg:self-center md:mb-4'>
                <p>
                    At NextPolicyLab, we explore bold ideas at the intersection of culture, technology, and the humanities. Our mission is to create products and experiences that empower human connection, preserve cultural heritage, and shape the future of how we engage with the world.
                </p>

                <p>
                    We believe innovation isn’t just about technology—it’s about people, stories, and meaning. From education platforms like Edupass to creative tools and research projects, our work bridges disciplines and reimagines what’s possible for the humanities in a digital age.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Statement