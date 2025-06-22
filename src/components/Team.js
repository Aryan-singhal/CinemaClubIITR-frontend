import React from 'react'
import './Team.css'
import Teamcard from './Teamcard'

function Team() {
  let team = [
    {
      Name:"Abc",
        img:"https://img.freepik.com/premium-photo/young-man-isolated-blue_1368-124991.jpg?semt=ais_hybrid&w=740",
        position:" Secretary ",
        

    },
    {
      Name:"Abc",
        img:"https://img.freepik.com/premium-photo/young-man-isolated-blue_1368-124991.jpg?semt=ais_hybrid&w=740",
        position:" Secretary ",
        

    },
    {
      Name:"Abc",
        img:"https://img.freepik.com/premium-photo/young-man-isolated-blue_1368-124991.jpg?semt=ais_hybrid&w=740",
        position:" Secretary ",
        

    },
    {
      Name:"Abc",
        img:"https://img.freepik.com/premium-photo/young-man-isolated-blue_1368-124991.jpg?semt=ais_hybrid&w=740",
        position:" Secretary ",
        

    },
    {
      Name:"Abc",
        img:"https://img.freepik.com/premium-photo/young-man-isolated-blue_1368-124991.jpg?semt=ais_hybrid&w=740",
        position:" Secretary ",
        

    },
    {
      Name:"Abc",
        img:"https://img.freepik.com/premium-photo/young-man-isolated-blue_1368-124991.jpg?semt=ais_hybrid&w=740",
        position:" Secretary ",
        

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
              Name={member.Name}
              position={member.position}
              />
            )

          })}
        

        </div>
        
        
      
    </div>
  )
}


export default Team