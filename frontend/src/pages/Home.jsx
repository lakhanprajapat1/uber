import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className= 'bg-cover bg-center bg-[url(./assets/home-bg.jpg)] h-screen pt-8  flex justify-between flex-col w-full bg-red-400'>
        <img className='w-20 ml-8' src="https://freelogopng.com/images/all_img/1659768779uber-logo-white.png" alt="" />
        <div className='bg-white py-4 px-4 pb-7'>
          <h2 className='text-3xl font-bold'>Get Start With Uber</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home