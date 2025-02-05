import React from 'react'
import Ebox from './Ebox'
import './Eventsinfo.css'

function Eventsinfo() {
  return (
    <div className='einfo-container'>
        <div className="einfo-parent">
            <h2>Events</h2>
            <Ebox
            heading = "CINEQUEST"
            para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui soluta molestias nemo vel distinctio sequi blanditiis odio accusamus veritatis a, ipsam odit nulla quibusdam nemo vel distinctio sequi blanditiis odio accusamus veritatis a, ipsam odit nulla quibusdam"
            date = "1 March 2023"
            time="6:30 PM"
            Venue="LHC"
            flag ="True"
            />
            <Ebox
            heading="BOX OFFICE"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui soluta molestias nemo vel distinctio sequi blanditiis odio accusamus veritatis a, ipsam odit nulla quibusdam nemo vel distinctio sequi blanditiis odio accusamus veritatis a, ipsam odit nulla quibusdam"
            date = "16 October 2022"
            time="9:00 AM"
            Venue="LHC"
            flag = "False"
            />

            
            
            
        </div>
      
    </div>
  )
}

export default Eventsinfo
