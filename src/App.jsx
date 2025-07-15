import React from 'react'
import Hero from './components/Hero'
import Statement from './components/Statement'
import Projects from './components/Projects'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import Impact from './components/Impact'

const App = () => {
  return (
    <div className='main-font overflow-hidden'>
      <Hero />
      <Statement />
      <Impact />
      <Projects />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App