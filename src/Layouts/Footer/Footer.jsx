import { ChefHat, Mail, MapPinCheckInside, Phone } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
  <>
  <div className='p-4 bg-black flex justify-around'>
    <div>
        <div className='flex text-2xl items-center text-white'><ChefHat className='size-10 text-yellow-500'/>Flavour <span className='text-yellow-500'>Hub</span></div>
        <div className='text-gray-500'>Good food, great ambience and memorable <br /> moments. Visit us and experience the difference.</div>
    </div>
    <div>
        <div className='text-lg font-bold text-white'>Quick Links</div>
        <ul className='text-gray-500 mt-2'>
            <li><a href="/">Home</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Gallery</a></li>
            <li><a href="/">Contact</a></li>

        </ul>
    </div>
    <div>
        <div className='text-lg font-bold text-white'>Our Menu</div>
        <ul className='text-gray-500 mt-2'>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Desserts</li>
            <li>Beverages</li>
        </ul>
    </div>
    <div>
        <div  className='text-lg font-bold text-white'>Contact Info</div>
        <div className='text-gray-500 mt-2 flex'><MapPinCheckInside className='text-white mr-4'/>123Food Street,Your City</div>
        <div className='text-gray-500 mt-4 flex'><Phone className='text-white mr-4' />+91 9876543210</div>
        <div className='text-gray-500 mt-4 flex '><Mail className='text-white mr-4' />info@yourwebsite.com</div>
    </div>
  </div>
  </>
  )
}

export default Footer