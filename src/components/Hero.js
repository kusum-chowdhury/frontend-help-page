import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
import "../styles/Hero.css"

function Hero() {
  return (
    <div className='hero-section'>
        <h1>How can we help?</h1>
        <div className='search'>
        <input placeholder='Search' />
        <button><AiOutlineArrowRight /></button>
        </div>
    </div>
  )
}

export default Hero