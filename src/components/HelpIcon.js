import React from 'react'
import "../styles/HelpIcon.css"
import {AiOutlineQuestionCircle} from "react-icons/ai"

function HelpIcon() {
  return (
    <div>
        <button className='help-btn'>
        <AiOutlineQuestionCircle />   Help
        </button>
    </div>
  )
}

export default HelpIcon