import React from 'react'
import './Events.css'
import logo from './logo.png'

function Events() {
  return (
    <div className='events-container'>
       <p className='p3h'>About Us</p>
        <div className="events-content">
           
            <div className="logoimg">
            <img id="img1" src={logo} width="80%" />
           
            <p id="p1">"A film is-or should be-more like msuic than like fiction. It should be a progression of moods and feelings. The theme, What's behind the  emotion, the meaning,all that comes later?"</p>
            </div>
        <div className='about'>
          <p id="p3"> What is Cinema Club ?</p>
         <p id="p2">A common place for all the movie freaks to discuss their hearts out! To explore the intricacies of the cinematic world. Cinema Club organises screenign of latest movies at Convocation Hall,with a size of around 1800 seats with the  best projector in the city.These Screenings (which are free of cost,by the way) are met with much fanfare in a Convo bottled down to its full capacity.
         </p>
         <div className='imgcards'>
          <img src={logo}  width="150px" alt="" />
          <img src={logo}  width="150px" alt="" />
         <img src={logo}  width="150px" alt="" />
          </div>
         </div>
       
        
        
      </div>
    </div>  
    
  )}


export default Events
