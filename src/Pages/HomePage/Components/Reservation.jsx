import { MoveRight } from 'lucide-react'
import React from 'react'
import reservationBackground from '../../../assets/reservation-Bg.jpg'

const Reservation = () => {
  return (
   <>
   <div
    className='p-5 flex justify-around bg-[image:var(--reservation-background)] bg-cover bg-center'
    style={{ '--reservation-background': `url(${reservationBackground})` }}
   >
    <div className=''>
        <div className='text-xl font-bold text-gray-600'>RESERVATION</div>
        <div className='text-4xl font-bold mt-2'>Book Your Table</div>
        <div className='text-gray-500 mt-2'>plan your visit and enjoy a wonderful dining experience <br />with your loved ones.</div>
    </div>
    <div>
        <form>
        <input type="text" name="name" id="name" placeholder='Your Name' className='border' />
        <input type="text" name="phone" id="phone" placeholder='Phone Number' className='border ml-3' />
        <br />
        <br />
        <input type="date" name="date" id=" date" className='border' />
        <input type="time" name="" id=""className='border ml-13'/>
        <br />
        <br />
        <input type="number" name="people" id="people" placeholder='Number of people' className='border' />
        <button className='bg-yellow-500 ml-3 p-2 text-lg rounded-lg'>Book Now </button>

        </form>
    </div>
   </div>
   </>
  )
}

export default Reservation