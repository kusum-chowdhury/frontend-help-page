import React from 'react'
import "../styles/CopyRight.css"
import { FaItunes } from 'react-icons/fa'

function CopyRight() {
  return (
    <div className='copyright-container'>
        <FaItunes />
        <p className='copyright-p'>© Copyright 2023

Abstract Studio Design, Inc.

All rights reserved</p>
    </div>
  )
}

export default CopyRight