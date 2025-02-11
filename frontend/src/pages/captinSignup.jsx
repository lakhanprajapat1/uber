import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Logo from '../assets/traxo-logo.png'

const captinSignup = () => {
    const [email, setEmail] = useState('')
    const [paasword, setPaasword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})
  
    const submitHandler=(e)=>{
      e.preventDefault()
      setUserData({
        fullName:{
          firstName:firstName,
          lastName:lastName },
        email:email,
        paasword:paasword
      })
      setEmail('')
      setFirstName('')
      setLastName('')
      setPaasword('')
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-25 mb-10' src={Logo} alt="" />
        <form onSubmit={(e)=>{submitHandler(e)}}>
        <h3 className='text-xl font-medium mb-2'>What's Our Captain's Name</h3>
        <div className='flex gap-4  mb-6'>
            <input 
            required 
            className=' bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
            type="text" 
            value={firstName}
            onChange={(e)=>{setFirstName(e.target.value)}}
            placeholder='first name' 
            />
            <input 
            required 
            className=' bg-[#eeeeee] rounded px-4 py-2 w-1/2 border text-lg placeholder:text-base'
            type="text" 
            value={lastName}
            onChange={(e)=>{setLastName(e.target.value)}}
            placeholder='last name' 
            />
        </div>
            <h3 className='text-xl font-medium mb-2'>What's Our Captain's Email</h3>
            <input 
            required 
            className=' bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" 
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            placeholder='example@email.com' 
            />

            <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
            <input 
            required 
            className=' bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password" 
            value={paasword}
            onChange={(e)=>{setPaasword(e.target.value)}}
            placeholder='password'
            />

            <button className=' bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</button>
        </form>
          <p className='text-center'>Already Have An Account? <Link to='/login' className='text-blue-600'>Log-In Here</Link> </p> 
        </div>
        <div>
        <p className='text-xs leading-tight'>This site is protect by reCAPTCHA and the <span className='underline'>Google Privecy Policy</span> and <span className='underline'>term of services apply!</span></p>
        </div>  
    </div>
  )
}

export default captinSignup