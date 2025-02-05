import React from 'react'
import './Events.css'

function Events() {
  return (
    <div className='events-container'>
        <div className="events-content">
            <p className='p3h'>What is cinema club</p>
            <p>A common place for all the movie freaks to <br />discuss their hearts out! To explore the<br /> intricacies of the cinematic world.</p>
            <p>A film is-or should be-more like msuic than <br />like fiction. It should be a progression of moods <br />and feelings. The theme, What's behind the <br /> emotion, the meaning,all that comes later?</p>
        </div>
        <div className="imgcards">
            <div className="crd1"></div>
            <div className="crd2"></div>
            {/* <div className="crd3"></div> */}
            <div className="crd4"></div>
            <div className="crd5"></div>
        </div>
      
    </div>
  )
}

export default Events
