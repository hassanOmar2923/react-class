import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
        <div> 
            <Link to={'home'}>
            Home
            </Link>
            
            </div> 
            <div>
            <Link to={'about'}>
                ABout
                </Link>
            </div>
    </div>
  )
}
