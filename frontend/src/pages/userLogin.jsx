import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Logo from '../assets/traxo-logo.png'

const userLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler=(e)=>{
    e.preventDefault();
    setUserData({
      email:email,
      password:password
    })
    console.log(userData);
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-25 mb-10' src={Logo} alt="" />
        <form onSubmit={(e)=>{submitHandler(e)}}>
            <h3 className='text-xl font-medium mb-2'>What is your Email</h3>
            <input 
            required 
            className=' bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            type="email" 
            placeholder='email.example.com' 
            />

            <h3 className='text-xl font-medium mb-2'>Enter Your Password</h3>
            <input 
            required 
            className=' bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            type="password" 
            placeholder='password'
            />

            <button className=' bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</button>
        </form>
          <p className='text-center'>New Here? <Link to='/signup' className='text-blue-600'>Create New Account</Link> </p> 
        </div>
        <div>
        <Link to='/captain-login' className=' bg-[#10b461] text-white flex items-center justify-center font-semibold mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Sign in As Captain</Link>
        </div>
    </div>
  )
}

export default userLogin