import React, { useState, useEffect } from 'react';
import Hero from './components/Hero'
import Statement from './components/Statement'
import Projects from './components/Projects'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import Impact from './components/Impact'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 6000);

      return () => clearTimeout(timer);
    }, []);

  return (
    <>
      {isLoading ? (
        <div className={`fixed inset-0 bg-white flex justify-center items-center z-50 transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <DotLottieReact
            src="https://lottie.host/86312fde-a5fb-4064-ba6b-b0faf02c244d/J4NalnfRaA.lottie"
            loop
            autoplay
            style={{ height: '300px', width: '300px' }}
          />
        </div>
      ) : (
        <div className='main-font overflow-hidden'>
          <Hero />
          <Statement />
          <Impact />
          <Projects />
          <Team />
          <Testimonial />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
