import React from 'react'
import '../styles/hero.css'

function Hero() {
  return (
    <section
        id="home"
        className="hero relative z-10 overflow-hidden  pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className='font-bold'>
        this is the hero section
      </div>
    </section>
  )
}

export default Hero
