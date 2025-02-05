import React from 'react'
import './Box.css'

function Box(props) {
  return (
    <div >
        <img className='box' src={props.url} alt="" />
      
    </div>
  )
}

export default Box
