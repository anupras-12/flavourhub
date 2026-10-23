import React from 'react'
import gallery1 from '../../../assets/gallery1.jpg'
import gallery2 from '../../../assets/gallery2.jpg'
import gallery3 from '../../../assets/gallery3.jpg'
import gallery4 from '../../../assets/gallery4.jpg'
import gallery5 from '../../../assets/gallery5.jpg'

const Gallery = () => {
  return (
    <>
    <div className='p-10 bg-black '>
        <div className='text-xl font-bold text-yellow-500 text-center'>⎯  GALLERY ⎯</div>
        <div className='text-4xl font-bold text-center mt-2 text-white'>A Glimpse Of Our <span className='text-yellow-500'>Restaurant</span></div>
        <div className='flex gap-4 mt-5 '>
            <div className=''>
                <img src={gallery1} alt="gallery1 img" className='h-60 w-80 rounded-2xl' />
            </div>
            <div>
                <img src={gallery2} alt="gallery2 img" className='h-60 w-80 rounded-2xl' />
            </div>
            <div>
                <img src={gallery3} alt="gallery3 img" className='h-60 w-80 rounded-2xl' />
            </div>
            <div>
                <img src={gallery4} alt="gallery4 img" className='h-60 w-80 rounded-2xl' />
            </div>
            <div>
                <img src={gallery5} alt="gallery5 img" className='h-60 w-80 rounded-2xl' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Gallery