import React from 'react'
import './Screened.css'
import Box from './Box'


function Screened() {

  let screened = [
    {
      rating:"5.3",
      imgurl:"https://s01.sgp1.cdn.digitaloceanspaces.com/inline/fbuffigrhv-1578850957.png",
      title:"Chappaak",
      description:"Chhapaak is a Hindi-language drama film released in 2020, directed by Meghna Gulzar andproduced by Deepika Padukone, who also stars in the lead role. The movie is based on the real-life story ofacid attack survivor Laxmi Agarwal."
      
    },
    {
      rating:"7.3",
        imgurl:"https://cinemaclub.iitr.ac.in/images/movies/mardaani2.jpeg",
        title:"Mardaaani 2",
        description:"A 21-year old boy Sunny has a penchant for sexually assaulting and killing girls. He's locked horns with top cop Shivani Shivaji Roy. Will she nab him? "
    },
    {
      rating:"8.2",
        imgurl:"https://im.rediff.com/movies/2019/jan/10uri20.jpg?w=670&h=900",
        title:"URI",
        description:"Uri: The Surgical Strike is a Hindi-language action film directed by Aditya Dhar and produced by Ronnie Screwvala. The film is based on the 2016 Uri attack and follows Major Vihaan Singh Shergill of the Indian Army, who leads a covert operation to avenge the attack. The film stars Vicky Kaushal, Paresh Rawal, and Yami Gautam in lead roles.  "
    },
    {
      rating:"8.8",
        imgurl:"https://stat5.bollywoodhungama.in/wp-content/uploads/2018/10/Rocketry-11-306x393.jpg",
        title:"Rocketry",
        description:"Rocketry: The Nambi Effect is a 2022 Indian biographical drama film written, produced and directed by R. Madhavan in his directorial debut. The film is based on the life of Nambi Narayanan, played by Madhavan, a scientist at the Indian Space Research Organisation, who was accused in the ISRO espionage case and later exonerated. "
    },
    {
      rating:"8.2",
        imgurl:"https://cinemaclub.iitr.ac.in/images/movies/chhichhore.webp",
        title:"chhichhore",
        description:"A tragic incident forces Anirudh a middle aged man,to take a trip down memory lane and reminisce his college days along with his friends, who were labelled as losers "
    },
    
    

  ]
  return (
    <div className='screened-container'>
        <h1 className='sdh'>Movies Screened</h1>
        <div className="box-container">
          {screened.map((element)=>{
            return(
              <Box
              url={element.imgurl}
              />
            )
          })

          }

            {/* <div className="box" id='bx1'></div>
            <div  className="box" id='bx2'></div>
            <div className="box hide" id='bx3'></div>
            <div className="box hide" id='bx4'></div>
            <div className="box hide" id="bx5"></div> */}
            
           
        </div>
        
    </div>
  )
}

export default Screened
