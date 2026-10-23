import React from 'react'
import about from '../../../assets/about.png'
import { Soup, Star, UserGroup } from 'lucide-react'

const About = () => {
  return (
    <>
    <div className='flex bg-black'>
        <div>
            <img src={about} alt="ambience image" className='h-90 w-150' />
        </div>
        <div className=' p-6 ml-3 mt-5'>
            <div className='text-xl text-yellow-500 font-bold'>ABOUT US ⎯</div>
            <div className='text-3xl font-bold text-white mt-2'>A Place Where <br /> Food Bring <span className='text-yellow-500'>People Together</span></div>
            <div className='mt-2 text-gray-500'>
                We are passionate about serving delicious food made from <br />
                fresh ingredients. Our restraurant is a perfect place to enjoy <br />
                great food with family and friends in a warm and cozy atmoshphere.
            </div>
            <div className='flex mt-8'>
                <div className='flex items-center  '>
                    <Soup className='text-yellow-500 size-12' />
                    <div className='text-white text-[13px] '>Authentic taste <p className='text-gray-500'>Traditional & modern recipes</p></div>
                </div>
                <div className='flex items-center ml-3'>
                    <UserGroup className='text-yellow-500 size-12' />
                    <div className='text-white text-[13px]'>Family friendly <p className='text-gray-500'>perfect for all ages</p></div>
                </div>
                <div className='flex items-center ml-3 '>
                    <Star className='text-yellow-500 size-12' />
                    <div className='text-white text-[13px]'>Memorable Experience <p className='text-gray-500'>More than just food</p></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About