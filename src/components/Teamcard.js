import React from 'react'
import { Link } from 'react-router-dom';
import './Teamcard.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Teamcard(props) {
  return (
    <div className='tcard'>
        <div className="tcardimg">
          <img className="tcardimg" src={props.img} alt="" />
        </div>
        <div className="tcardcontent">
            <p>{props.Name}</p>
            <span>{props.position}</span>
        </div>
        <div className="tcardlinks">
          
          
            <a href={props.Linlink} target='_blank'>
            <LinkedInIcon  className='lin'/>
            </a>
            <a href={props.Iglink} target='_blank'>
            <InstagramIcon className='ig'/>
            </a>
            <a href={props.Tlink} target='_blank'>
            <TwitterIcon className='twit'/>
            </a>
          
          
          <Link to = {props.Iglink}>
          
          </Link>

        </div>
      
    </div>
  )
}

export default Teamcard
