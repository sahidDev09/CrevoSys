import React from 'react'

function Navbar() {
  return (

    <div>
        <div className='flex justify-around items-center '>
            <img className='w-60 h-32' src="logo.png" alt="" srcset="" />
            <div className='flex gap-10 cursor-pointer items-center justify-center text-white'>
                <a href="">Home</a>
                <a href="">Blog</a>
                <a href="">About Us</a>
                <a href="">Team</a>
            </div>
            <button className='bg-transparent border-white text-white'>
                <a href="">Contact Us</a>
            </button>
        </div>
    </div>
  )
}

export default Navbar