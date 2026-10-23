import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const Layouts = () => {
  return (
   <>
   <main>
    <Outlet/>
   </main>
   <Footer/>
   </>
  )
}

export default Layouts