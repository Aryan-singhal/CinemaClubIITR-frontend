import React from 'react'
import './Ebox.css'
import { Link } from 'react-router-dom'



function Ebox(props) {
  // const [showbtn,setShowbtn]=useState(props.flag);
  return (
    <div className='ebox-container'>
        <div className="boximg"></div>
        <div className="ebox-content">
            <h2>{props.heading}</h2>
            <p>{props.para}</p>
            <div className="lrow">
                <p>{props.date} | {props.time} | {props.Venue}</p>

                {props.flag=="True"?<Link to="/registration">
                 <button>Register</button>               
                </Link>:""}
              
            </div>
        
        </div>
      
    </div>
  )
}

export default Ebox
