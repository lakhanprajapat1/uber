import banner from '../assets/banner.png'
import logo from '../assets/logo.white.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
       <div
    className='bg-cover bg-center h-screen pt-8 flex justify-between flex-col w-full'
    style={{ backgroundImage: `url(${banner})` }}
  >
        <img className='w-24 ml-8' src={logo} alt="logo" />
        <div className='bg-white pb-8 py-4 px-4'>
          <h2 className='text-[30px] font-semibold'>Get Started with TRAXO</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start