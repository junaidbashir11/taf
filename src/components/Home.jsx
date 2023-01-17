import React from 'react'
import home_bg from "../assets/image/homeBg.jpg"
import graphic1 from "../assets/image/graphic1.png"
import Navbar from './Navbar'
import Hero from './Hero'
import Transition from './Transition'
import bg from "../assets/image/bgHome.png"
function Home() {
  return (
    <>
    <Transition>
      <div className='px-6 h-full w-full bg-cover object-cover' style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
        <Hero />
      </div>
      </Transition>
    </>
  )
}

export default Home