import React from 'react'
import HeroSection from './Components/HeroSection'
import Menu from './Components/Menu'
import About from './Components/About'
import Reservation from './Components/Reservation'
import Gallery from './Components/Gallery'


const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <Menu/>
    <About/>
    <Reservation/>
    <Gallery/>

    </>
  )
}

export default HomePage