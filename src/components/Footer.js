import React from 'react'
import "../styles/Footer.css"
import FooterElement from '../helper/FooterElement'
import CopyRight from '../helper/CopyRight'

function Footer() {
  return (
    <div className='footer'>
    <FooterElement bold={"Abstract"} p={"Start Trial"} p1={"Pricing"} p2={"Download"} />
    <FooterElement bold={"Resources"} p={"Blog"} p1={"Help Center"} p2={"Release Notes"} p3={"Status"} />
    <FooterElement bold={"Community"} p={"Twitter"} p1={"Linkedln"} p2={"Facebook"} p3={"Dribble"} p4={"Podcast"} />
    <FooterElement bold={"Company"} p={"About Us"} p1={"Careers"} p2={"Legal"} />
    <CopyRight />
    </div>
  )
}

export default Footer