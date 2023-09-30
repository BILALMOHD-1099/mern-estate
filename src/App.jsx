import React from 'react'
import { BrowserRouter , Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/profile' element={<Profile/>}/>
     </Routes>
     </BrowserRouter>
    
  )
}
