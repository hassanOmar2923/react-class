import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import PropsCompnent from './components/props'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/homePage'
import About from './components/About'
import Header from './components/header'
import Index from './components/MUI'
import Login from './components/login'
import PageNotFound from './pageNotFound'
import { contextExporter } from './context/AuthContext'


function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setisLoading] = useState(false)
  const [data, setdata] = useState([])
  const {isloggedIn}=contextExporter()
  useEffect(()=>{
async function lload(){

setisLoading(true)
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
let {data}=await axios.get('https://jsonplaceholder.typicode.com/todos/1')
setdata(data);
setisLoading(false)
}
lload()
  },[])
  


// console.log(imgList);
  return (
    <>
   
    {/* <Header/>
    {/* <HomePage/> */}
   
   <Routes>
   <Route path='/' element={<Login/>}/>
<Route path='*' element={<PageNotFound/>}/>
   {isloggedIn &&(
<>

<Route path='Dashbard' element={<Index/>}>
<Route path='home' element={<HomePage/>}/>
<Route path='about' element={<About/>}/>
</Route>
</>
   )}
  
   </Routes> 
  
    </>
   
  )
}

export default App
