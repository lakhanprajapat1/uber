import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/traxo-logo.png'

const Home = () => {
  return (
    <div>
      <div className= 'bg-cover bg-center bg-[url(./assets/home-bg.jpg)] h-screen pt-8  flex justify-between flex-col w-full '>
        <img className='w-25 ml-8 ' src={Logo} alt="" />
        <div className='bg-white py-4 px-4 pb-7'>
          <h2 className='text-3xl font-bold'>Get Start With Traxo</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home