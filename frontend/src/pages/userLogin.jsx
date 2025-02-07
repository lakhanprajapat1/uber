import React from 'react'

const userLogin = () => {
  return (
    <div className='p-7'>
        <form>
            <h3 className='text-xl mb-2'>What is your Email</h3>

            <input 
            required 
            type="text" 
            placeholder='email.example.com' 
            />

            <h3>Enter Your Password</h3>

            <input 
            required 
            type="password" 
            placeholder='password'
            />

            <button>Login</button>
        </form>
    </div>
  )
}

export default userLogin