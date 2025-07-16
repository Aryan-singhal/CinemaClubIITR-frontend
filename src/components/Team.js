import React from 'react'
import './Team.css'
import Teamcard from './Teamcard'

function Team() {
  let team = [
    {
      Name:"Ankit Lal",
        img:"images/Ankit.jpeg",
        position:" Secretary ",
        

    },
    {
      Name:"Harshita",
      img:"images/harshita.jpg",
      position:"Additional Secretary",
    },
    {
      
        Name:"Aryan Singhal",
        img:"images/aryan.jpg",
        position:"Additional Secretary",

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
    
    {
      Name:"Chanchal",
        img:"images/Chanchal.jpg",
        position:"Joint Secretary ",
        

    },
    {
        Name:"Aarush Manglecha",
        img:"images/Aarush.jpg",
        position:"Joint Secretary ",

    },
      {
      Name:"Ritesh Ratnakar",
        img:"images/ritesh.jpg",
        position:" Design Head",
    },
    {
      Name:"Vivek Kumar",
      img:"images/vivek.jpg",
      position:"Outreach Head",
    },

  ]
  return (
    <div className='Tcontainer'>
        <h2 >Team Members</h2>
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