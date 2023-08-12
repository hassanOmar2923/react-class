import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
 const AuthContext=createContext()
export default function AuthContextApi(props) {
    const [userData, setuserData] = useState({})
    const [isloggedIn, setIsloggedIn] = useState(false)
    const direct=useNavigate()
console.log(isloggedIn);
    let curr={}
    useEffect(()=>{
       curr=JSON.parse(localStorage.getItem('currentUser'))
       if(curr) {
        setIsloggedIn(true)
    } else{
        setIsloggedIn(false)
        direct('/')
    }
        
    
      
    },[])
    const logOut =()=>{
        localStorage.removeItem('currentUser')
        setIsloggedIn(false)
        direct('/')
       }
  return (
    <AuthContext.Provider value={{curr,logOut,userData,isloggedIn,setIsloggedIn,setuserData}}>{props.children}</AuthContext.Provider>
  )
}

export const contextExporter=()=>{
    return useContext(AuthContext)
}