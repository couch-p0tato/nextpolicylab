import React, { useState, useEffect } from 'react';
import Hero from './components/Hero'
import Statement from './components/Statement'
import Projects from './components/Projects'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import Impact from './components/Impact'
import LoadAnim from './components/LoadAnim';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const handlePageLoad = () => {
        setIsLoading(false);
      };

      if (document.readyState === 'complete') {
        handlePageLoad();
      } else {
        window.addEventListener('load', handlePageLoad);
      }

      return () => window.removeEventListener('load', handlePageLoad);
    }, []);

  //  useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setIsLoading(false);
  //     }, 6000);

  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <LoadAnim />
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
