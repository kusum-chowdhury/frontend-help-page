import React from 'react'
import "../styles/FooterElement.css"

function FooterElement({bold, p, p1, p2, p3 , p4}) {
  return (
    <div className='footer-element' >
    <p className='bold'>{bold}</p>
    <p>{p}</p>
    <p>{p1}</p>
    <p>{p2}</p>
    <p>{p3}</p>
    <p>{p4}</p>
</div>
  )
}

export default FooterElement