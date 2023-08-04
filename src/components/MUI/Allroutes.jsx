import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../homePage'
import About from '../About'

export default function Allroutes() {
  return (
    <Routes>
    <Route path='home' element={<HomePage/>}/>
    <Route path='about' element={<About/>}/>
  
   </Routes> 
  )
}
