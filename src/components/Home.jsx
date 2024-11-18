import React from 'react'
import Navbar from './Navbar'

export default function 
() {
  return (
    <div className='bg-gradient-to-t from-[#070707] to-[#221f35] h-screen'>
        <Navbar/>
        <div className='flex mb-5 items-center justify-center'>
            <div className=' rounded-full bg-gradient-to-r from-[#D9D9D9] to-[#737373] items-center justify-center'>
                <div className="flex items-center gap-3 justify-center py-2 px-3">
                    <img className='w-[30px] h-[30px] rounded-2xl' src="star.png" alt="" />
                    <h1 className="text-black font-semibold">Your #1 Platform for IT solution</h1>
                </div>
            </div>  
        </div>
        <div className='flex mt-3 items-center justify-center'>
            <h1 className='text-white text-7xl font-semibold'>Cretivity Sparks <br /> <span className='mt-3 items-center justify-center flex'>Revolution</span> </h1>
        </div>
        <div className='flex mt-3 items-center justify-center'>
            <p className='text-gray-400'>Revolutionising businesses with modern IT <br /> <span className='items-center justify-center flex'>solutions and world-class design.</span></p>
        </div>
        <div className='flex mt-10 items-center justify-center'>
             <div className='rounded-full bg-gradient-to-r from-[#FFB16B] to-[#996A40] px-3 py-2'>
                <p className='font-semibold'>Meet Our Awsome Team</p>
             </div>
        </div>
    </div>
  )
}
