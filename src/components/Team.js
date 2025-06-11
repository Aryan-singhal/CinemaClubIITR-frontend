import React from 'react'
import './Team.css'
import Teamcard from './Teamcard'

function Team() {
  let team = [
    {
      Name:"Priyanshu Goswami",
        // https://drive.google.com/open?id=1mp8H2afL40t3KJHpyfeU5JtGI-iy7INg
        img:"https://images.pexels.com/photos/20804701/pexels-photo-20804701.jpeg?cs=srgb&dl=pexels-agrosales-20804701.jpg&fm=jpg",
        position:"Additional Secretary ",
        Iglink:"https://instagram.com/priyanshu_goswami_04?igshid=YmMyMTA2M2Y=",
        Linlink:"https://www.linkedin.com/in/priyanshu-goswami-722197189",
        Tlink:""

    },
    {
      Name:"Ayush Saini",
        // https://drive.google.com/open?id=1bCaOWWZmMzKRM_1fbyXARqJVa67Bzbl_
        img:"https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1600",
        position:"Web Developer ",
        Iglink:"",
        Linlink:"https://www.linkedin.com/in/ayush-saini-51535b222/",
        Tlink:"https://twitter.com/AYUSHSA42951195",

    },
    {
      Name:"Asiya Batool",
        // https://drive.google.com/open?id=1MlLrC64PKBL2n5Brs1D3dZTOYwmbWclg
        img:"https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
        position:"Content Writer",
        Iglink:"",
        Linlink:"",
        Tlink:""
    },
    {
      Name:"Manish Kumar",
        // https://drive.google.com/open?id=1EKCvC0fB76rGfJdIRnceZnQqs3QxXGC-
        img:"https://tse4.mm.bing.net/th/id/OIP.twShHXy5ikGjP-cjGlsVFQHaEK?rs=1&pid=ImgDetMain",
        position:"Content Writer",
        Iglink:"",
        Linlink:"https://www.linkedin.com/in/manish-kumar-1baaa725b",
        Tlink:""
    },
    {
      Name:"Sachita Gupta",
        // https://drive.google.com/open?id=1Y6-eUbhXMMD1SKAsZ-eLu9iqoVI1cKEN
        img:"https://www.pixelstalk.net/wp-content/uploads/images6/Animal-Desktop-Wallpaper.jpg",
        position:"Joint Secretary ",
        Iglink:"https://instagram.com/_sachitaaaaa_?igshid=YmMyMTA2M2Y=",
        Linlink:"https://instagram.com/_sachitaaaaa_?igshid=YmMyMTA2M2Y=",
        Tlink:""
    },
    {
      Name:"Rishabh Kumar",
        // https://drive.google.com/open?id=1wtAUa_G4Gqk8mfzaEV82ZwV7s3vsZLbd
        img:"https://tse3.mm.bing.net/th/id/OIP.-D5xt6nfX4BGup0qkTmyiAHaFI?rs=1&pid=ImgDetMain",
        position:"Joint Secretary ",
        Iglink:"https://www.instagram.com/_rishu.kr/",
        Linlink:"https://www.linkedin.com/in/rishabh-kumar-5690a5216",
        Tlink:"https://twitter.com/_rishu_kr?t=ngJT_9XAl_99fpx46MU1rw&s=09",
    },
    {
      Name:"Anand Ranjan",
        // https://drive.google.com/open?id=1HUp-tCNNlZSW_fSp5Ix6Atdgrk74rA0x
        img:"https://tse1.mm.bing.net/th/id/OIP.5YProBu2o1nWFiNySK-NqAHaE8?rs=1&pid=ImgDetMain",
        position:"Joint Secretary ",
        Iglink:"https://www.instagram.com/anand_.ranjan/",
        Linlink:"https://www.linkedin.com/in/anand-ranjan-351b6b201/",
        Tlink:""
    },
    {
      Name:"Raunak Kumar ",
        // https://drive.google.com/open?id=15QGBXWnMRTjFwDi5TdXEarF9q-nygXlQ
        img:"https://iso.500px.com/wp-content/uploads/2020/09/Playful-Leopard-Cub-By-Will-Burrard-Lucas.jpeg",
        position:"Team Member ",
        Iglink:"https://www.instagram.com/raunakkumar6043/",
        Linlink:"https://www.instagram.com/raunakkumar6043/",
        Tlink:"https://twitter.com/RAUNAKK62065?s=08",
    }
  ]
  return (
    <div className='Tcontainer'>
        <h2>Our Team</h2>
        <div className="tparent">
          {team.map((member)=>{
            return(
              <Teamcard
              img={member.img}
              position={member.position}
              Iglink={member.Iglink}
              Linlink={member.Linlink}
              Tlink={member.Tlink}
              />
            )

          })}
        

        </div>
        
        
      
    </div>
  )
}

export default Team
