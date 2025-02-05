import React from 'react'
import About from './About'
import Events from './Events'
import './Home.css'
import Screened from './Screened'

function Home() {
  return (
    <>
    <div className='home-container'>
        <div className="home-content">
            <p className='p1'>Welcome!</p>
            <p className='p2'>Cinema Club</p>
            <div className="img1">
              {/* <img src="https://cdn5.vectorstock.com/i/1000x1000/34/39/cinema-camera-reel-icon-flat-style-vector-26633439.jpg" alt="" /> */}

            </div>
        </div >
        <div className="img2"></div>
        
            {/* <img src="https://i.pinimg.com/736x/de/d9/20/ded9207882c08a88cc403e43c04c4526.jpg" alt="" /> */}
        
        
      
    </div>
    <Events/>
    <Screened/>
    <About/>
    </>
    
    
  )
}

export default Home
