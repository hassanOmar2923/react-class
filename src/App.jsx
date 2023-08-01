import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import PropsCompnent from './components/props'

function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setisLoading] = useState(false)
  const [data, setdata] = useState([])
  useEffect(()=>{
async function lload(){
console.log('laoded');
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
  
 
  

  return (
    <>
    
     
    
      {isLoading ? 'loading':
      <>
      {data.id}
      {data.title}
      </>

      }
      <hr/>
      <h1>props component</h1>
      jkzdhciod
      <hr/>
      <PropsCompnent fakeData={data}/>
      <h1>Hi all of you</h1>
    </>
  )
}

export default App
