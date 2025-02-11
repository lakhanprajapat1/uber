import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/traxo-logo.png'

const captainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})  

    const submitHandler=(e)=>{
      e.preventDefault();
      setCaptainData({
        email:email,
        password:password
      })
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
          <p className='text-center'>Join A Fleet? <Link to='/captain-signup' className='text-blue-600'>Register As A Captain</Link> </p> 
        </div>
        <div>
        <Link to='/login' className=' bg-[#ed5610] text-white flex items-center justify-center font-semibold mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Sign in As User</Link>
        </div>
    </div>
  )
}

export default captainLogin