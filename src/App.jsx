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


function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setisLoading] = useState(false)
  const [data, setdata] = useState([])
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
    <Index/>
    {/* <Header/>
    {/* <HomePage/> */}
   
    
  
    </>
   
  )
}

export default App
