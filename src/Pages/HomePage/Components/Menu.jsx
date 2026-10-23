
import React from 'react'
import burger from '../../../assets/burger.png'
import pizza from '../../../assets/pizza.png'
import pasta from '../../../assets/pasta.png'
import cake from '../../../assets/cake.png'

const Menu = () => {
  return (
   <>
   <div className='p-4'>
    <div className='font-bold text-xl text-center'><span className='text-yellow-500 mr-1'>⎯</span> OUR MENU <span className='text-yellow-500 ml-1'>⎯</span></div>
    <div className='font-bold text-3xl text-center mt-2'>Our <span className='text-yellow-500 font-bold'>Popular</span> Dishes </div>
    <div className='text-gray-500 mt-2 text-center'>Taste our most loved dishes, made with fresh ingredients and authentic flavours.</div>

    <div className='flex gap-5 p-4 justify-center'>
        <div className='border rounded-2xl'>
            <img src={burger} alt="Burger img" className='h-52 w-70 rounded-2xl' />
            <div className='p-2'>
                <div className='font-bold text-xl '>Classic Burger</div>
            <div className='text-gray-500 mt-2'>Juicy patty with fresh veggies <br />and special sauce.</div>
            <div className='mt-2 items-center'><span className='text-yellow-500 text-xl font-bold'>₹249</span><button className='ml-30 bg-yellow-500 text-amber-50 p-1 rounded-xl active:scale-95'>Order Now</button></div>
            </div>
        </div>
        <div className='border rounded-2xl'>
            <img src={pizza} alt="Burger img" className='h-52 w-70 rounded-2xl' />
            <div className='p-2'>
                <div className='font-bold text-xl '>Margherita Pizza</div>
            <div className='text-gray-500 mt-2'>Loaded with fresh tomatoes <br />morzzarella and basil.</div>
            <div className='mt-2 items-center'><span className='text-yellow-500 text-xl font-bold'>₹399</span><button className='ml-30 bg-yellow-500 text-amber-50 p-1 rounded-xl active:scale-95'>Order Now</button></div>
            </div>
        </div>
        <div className='border rounded-2xl '>
            <img src={pasta} alt="Burger img" className='h-52 w-70 rounded-2xl' />
            <div className='p-2'>
                <div className='font-bold text-xl '>Pasta Alfredo</div>
            <div className='text-gray-500 mt-2'>Creamy pasta with rich cheese<br />and herbs.</div>
            <div className='mt-2 items-center'><span className='text-yellow-500 text-xl font-bold'>₹299</span><button className='ml-30 bg-yellow-500 text-amber-50 p-1 rounded-xl active:scale-95'>Order Now</button></div>
            </div>
        </div>
        <div className='border rounded-2xl'>
            <img src={cake} alt="Burger img" className='h-52 w-70 rounded-2xl' />
            <div className='p-2'>
                <div className='font-bold text-xl '>Choco Lava Cake</div>
            <div className='text-gray-500 mt-2'>Warm chocolate cake with <br />a molten center.</div>
            <div className='mt-2 items-center'><span className='text-yellow-500 text-xl font-bold'>₹199</span><button className='ml-30 bg-yellow-500 text-amber-50 p-1 rounded-xl active:scale-95'>Order Now</button></div>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Menu