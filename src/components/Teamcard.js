import React from 'react'
import { Link } from 'react-router-dom';
import './Teamcard.css'
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';

function Teamcard(props) {
  return (
    <div className='tcard'>
        <div className="tcardimg">
          <img className="tcardImg" src={props.img} alt="" />
        </div>
        <div className="tcardcontent">
            <p>{props.Name}</p>
            <span>{props.position}</span>
        </div>
      
    </div>
  )
}

export default Teamcard




