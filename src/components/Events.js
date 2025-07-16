import React from 'react'
import './Events.css'
import logo from './logo.png'

function Events() {
  return (
    <div className='events-container'>
       <p className='abt_us'>About Us</p>
        <div className="events-content">
          <div className='leftbox'>
          <img id ="img1" src={logo} alt="logo"/>
          <p id="p1">"A film is-or should be-more like music than like fiction. It should be a progression of moods and feelings. The theme, What's behind the  emotion, the meaning,all that comes later?"</p>
        </div>
        <div className='rightbox'>
            <p className='p3h'>What is cinema club</p>
            <p> A common place for all the movie freaks to discuss their 
hearts out! To explore the intricacies of the cinematic world. 
Cinema club organizes screening of latest movies at
 Convocation Hall, with a size of around 1800 seats with the
 best projector in the city. These Screenings (which are free
 of cost, by the way) are met with much fanfare in a Convo
 bottled down to its full capacity.</p>

            
        <div className="imgcards">
        <img id="img" src="/images/img001.jpg" alt="logo"/>
        <img id="img" src="/images/img002.jpg" alt="logo"/>
        <img id="img" src="/images/img003.jpg" alt="logo"/>
        </div>
      </div>
    </div>
    </div>
  );
}
           
       export default Events