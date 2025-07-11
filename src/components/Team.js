import React from 'react'
import './Team.css'
import Teamcard from './Teamcard'

function Team() {
  let team = [
    {
      Name:"Ankit Lal",
        img:"images/ankit.jpg",
        position:" Secretary ",
        

    },
    {
      Name:"Ritesh Kumar Ratnakar",
        img:"images/ritesh.jpg",
        position:" Design Head",
        

    },
    {
      
        Name:"Aryan Singhal",
        img:"images/aryan.jpg",
        position:"Additional Secretary",

    },
    {
      Name:"Chanchal",
        img:"images/Chanchal.jpg",
        position:"Joint Secretary ",
        

    },
    {
      Name:"Grivann Patwa",
        img:"images/Grivann.jpg",
        position:"Joint Secretary ",
        

    },
    {
      
        Name:"Muskan Mimrot",
        img:"images/muskan.jpg",
        position:"Joint Secretary ",

    },
  
  ]
  return (
    <div className='Tcontainer'>
        <h2>Team Members</h2>
        <div className="tparent">
          {team.map((member)=>{
            return(
              <Teamcard
              Name={member.Name}
              img={member.img}
              position={member.position}
              />
            )

          })}
        

        </div>
        
        
      
    </div>
  )
}


export default Team