import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Main from '../components/Main'
import Footer from '../components/Footer'
import '../styles/Home.css'
import HelpIcon from '../components/HelpIcon'

function Home() {
  return (
    <div className='home'>
        <Navbar />
        <Hero />
        <Main />
        <Footer />
        <HelpIcon />
    </div>
  )
}

export default Home