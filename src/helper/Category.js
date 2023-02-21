import React from 'react'
import '../styles/Category.css'
import {HiOutlineArrowLongRight} from 'react-icons/hi2'

function Category({img, p, url, bold}) {
  return (

    <div className='category'>
      <img src={img} /> 
      <div>
        <p className='bold'>{bold}</p>
        <p>{p}</p>
        <div className='learn-more'>
        <a href={url}>Learn More </a>
        <HiOutlineArrowLongRight />
        </div>
      </div>
    </div>

  )
}

export default Category