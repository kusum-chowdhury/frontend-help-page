import React from 'react'
import '../styles/Navbar.css'
import {FaBars, FaItunes} from "react-icons/fa" 
import { useEffect } from 'react'

function Navbar() {

  const ShowBtns = () => {
    const btns = document.getElementById('.small-btns')
    if(btns){

      btns.classList.toggle('hide')
    }
  }

  useEffect(() => {
    const menuIcon = document.querySelector('.menu-icon')
    menuIcon.addEventListener('click', ShowBtns)

    return () => {
      menuIcon.removeEventListener('click', ShowBtns)
    }
  }, [])

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
        <div className='menu-icon' onClick={ShowBtns}>
        <FaBars  />
      </div>
      <div className='small-btns hide' id='small-btns'>
        <button className='submit-btn'>Submit a request</button>
        <button className='signin-btn'>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar