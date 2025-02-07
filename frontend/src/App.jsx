import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import UserLogin from './pages/userLogin.jsx'
import UserSignup from './pages/userSignup.jsx'
import CaptainLogin from './pages/captainLogin.jsx'
import CaptainSignup from './pages/captinSignup.jsx'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/login' element= {<UserLogin/>}/>
        <Route path='/signup' element= {<UserSignup/>}/>
        <Route path='/captain-login' element= {<CaptainLogin/>}/>
        <Route path='/captain-signup' element= {<CaptainSignup/>}/>
      </Routes>
    </div>
  )
}

export default App