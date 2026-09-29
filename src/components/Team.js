import React from 'react'
import './Team.css'
import Teamcard from './Teamcard'

function Team() {
  let team = [
    {
      Name:"Chanchal",
        img:"images/Chanchal.jpg",
        position:" Secretary ",
        

    },
    {
      Name:"Grivann Patwa",
      img:"images/Grivann.jpg",
      position:"Additional Secretary",
    },
    {
      Name:"Chunmun",
        img:"images/Chunmun.jpg",
        position:"Joint Secretary ",
    },
    {
      
        Name:"Devanshi",
        img:"images/Devanshi.jpg",
        position:"Joint Secretary ",

    },
    
    {
      Name:"Harsh Rishi",
        img:"images/Harsh.jpg",
        position:"Joint Secretary ",
        

    },
    {
        Name:"Bhanu Priya",
        img:"images/Bhanu.jpg",
        position:"Joint Secretary ",

    },
      {
      Name:"Nitesh Kuriyal",
        img:"images/Nitesh.jpg",
        position:"Joint Secretary ",
    },
    {
      Name:"Aditya Manlawat",
      img:"images/Aditya.jpg",
      position:"Outreach Head",
    },
    {
      Name:"Rohit Singh",
      img:"images/Rohit.jpg",
      position:"Outreach Head",
    }

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