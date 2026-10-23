import { ChefHat, ChefHatIcon, HouseHeart, Leaf, MoveRight, Utensils } from 'lucide-react'
import React from 'react'
import heroBackground from '../../../assets/heroSection-bg.png'

const HeroSection = () => {
  return (
    <>
    <div
      className="min-h-screen bg-[image:var(--hero-background)] bg-cover bg-center"
      style={{ '--hero-background': `url(${heroBackground})` }}
    >
        <div className="p-3 flex justify-around items-center">
            <div className='flex text-2xl items-center font-bold'><ChefHat className='text-yellow-500 size-10'/><span className='text-amber-50'>Flavour</span> <span className='text-yellow-500'>Hub</span></div>
            <nav>
                <ul className='flex gap-12 text-amber-50'>
                    <li className='hover:text-yellow-500'><a href="/">Home</a></li>
                    <li className='hover:text-yellow-500'><a href="/">Menu</a></li>
                    <li className='hover:text-yellow-500'><a href="/">About</a></li>
                    <li className='hover:text-yellow-500'><a href="/">Gallery</a></li>
                    <li className='hover:text-yellow-500'><a href="/">Contact</a></li>
                    
                </ul>
            </nav>
            <button className='bg-yellow-500 rounded-2xl p-3 active:scale-95'>Reserve a Table</button>
        </div>
        <div className='p-15 ml-8 mt-12'>
            <div className='text-4xl text-yellow-500 font-sans'>Good Food</div>
            <div className='text-7xl mt-2 font-bold text-amber-50 font-serif'>Great Moments</div>
            <div className='text-gray-500 mt-2'>Delicious food, cozy ambiance and unforgettable <br />experiences for you and your loved ones.</div>
            <div className='flex mt-3 gap-4'>
                <button className='flex bg-yellow-500 p-3 rounded-2xl active:scale-95 font-bold'>Explore Menu <MoveRight /></button>
                <button className=' text-amber-50 bg-black p-3 rounded-2xl active:scale-95 font-bold'>Book a Table</button>
            </div>
            
        </div>
    </div>
    <div className='flex gap-13 justify-center p-3 bg-black'>
        <div className='flex items-center '>
            <Utensils className='text-yellow-500 size-10'/>
            <div className='ml-2 '><span className='font-bold text-amber-50  '>Fresh ingrediants</span><p className='text-gray-500'>Always fresh & high Quality</p></div>
        </div>
        
        <div className='flex items-center '>
            <ChefHatIcon className='text-yellow-500 size-12'/>
            <div className='ml-2 '><span className='font-bold text-amber-50'>experienced Chefs</span><p className='text-gray-500'>Delicious & authentic taste</p></div>
        </div>
       
        <div className='flex items-center '>
            <Leaf className='text-yellow-500 size-12'/>
            <div className='ml-2 '><span className='font-bold text-amber-50'>Hygienic Environment</span><p className='text-gray-500'>Clean & safe for everyone</p></div>
        </div>
        
        <div className='flex items-center '>
            <HouseHeart className='text-yellow-500 size-12'/>
            <div className='ml-2 '><span className='font-bold text-amber-50'>Cozy Ambiance</span><p className='text-gray-500'>Perfect for family & friends</p></div>
        </div>
       
    </div>
    </>
  )
}

export default HeroSection