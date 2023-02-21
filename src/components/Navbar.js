import React from 'react'
import '../styles/Navbar.css'
import {FaItunes} from "react-icons/fa" 

function Navbar() {
  return (
    <div className='navbar'>
        <div className='left'>
            <div className='logo'>
        <FaItunes />
        <h2>Abstract</h2>
            </div>
            <p>| Help Center</p>
        </div>
        <div className='buttons'>
         <button className='submit-btn'>Submit a request</button>
         <button className='signin-btn'>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar