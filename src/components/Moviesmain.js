import React from 'react'
import Mcard from './Mcard'
import './Moviesman.css'

function Moviesmain() {
  let movies = [
    {
      rating:"5.3",
      imgurl:"https://files.prokerala.com/movies/pics/1024/hindi-movie-chhapaak-releasing-poster-110760.jpg",
      title:"Chappaak",
      description:"Chhapaak is a Hindi-language drama film released in 2020, directed by Meghna Gulzar andproduced by Deepika Padukone, who also stars in the lead role. The movie is based on the real-life story ofacid attack survivor Laxmi Agarwal."
    },
    {
      rating:"6.8",
      imgurl:"https://filmfare.wwmindia.com/content/2020/jul/goodnewwzsrilanka11593692931.jpg",
      title:"Good Newz",
      description:"Good Newwz is a Hindi-language comedy film released in 2019, directed by Raj Mehta and produced by Karan Johar, Apoorva Mehta, and Hiroo Yash Johar. The movie features an ensemble cast that includes Akshay Kumar, Kareena Kapoor Khan, Diljit Dosanjh, and Kiara Advani"
    },
    {
      rating:"8.2",
      imgurl:"https://im.rediff.com/movies/2019/jan/10uri20.jpg?w=670&h=900",
      title:"URI",
      description:"Uri: The Surgical Strike is a Hindi-language action film directed by Aditya Dhar and produced by Ronnie Screwvala. The film is based on the 2016 Uri attack and follows Major Vihaan Singh Shergill of the Indian Army, who leads a covert operation to avenge the attack. The film stars Vicky Kaushal, Paresh Rawal, and Yami Gautam in lead roles."
    },
    {
      rating:"8.0",
      imgurl:"https://static.digit.in/OTT/v2/images/tr:w-1200/karthikeya-2-875705.jpg",
      title:"Karthikeya 2",
      description:"Karthikeya 2 is a Telugu-language mystery action-adventure film written and directed by Chandoo Mondeti. The film serves as a sequel to the 2014 film Karthikeya and stars Nikhil Siddhartha, Anupama Parameswaran, and Anupam Kher. It is produced by Abhishek Agarwal Arts and People Media Factory. The plot follows Dr. Karthikeya who is on a quest to find the lost anklet of Lord Krishna."
    },
    {
      rating:"7.3",
      imgurl:"https://v3img.voot.com/v3Storage/assets/bhediya-16x9-1688099191400.jpg",
      title:"Bhediya",
      description:"Bhediya is a Hindi-language comedy horror film directed by Amar Kaushik. Produced by Dinesh Vijan, it stars Varun Dhawan and Kriti Sanon. It is the third installment in Vijan's horror-comedy universe."
    },
    {
      rating:"8.8",
      imgurl:"https://www.hindustantimes.com/ht-img/img/2023/08/24/1600x900/rocketry_1692881922224_1692881922532.png",
      title:"Rocketry",
      description:"Rocketry: The Nambi Effect is a 2022 Indian biographical drama film written, produced and directed by R. Madhavan in his directorial debut. The film is based on the life of Nambi Narayanan, played by Madhavan, a scientist at the Indian Space Research Organisation, who was accused in the ISRO espionage case and later exonerated."
    },
    {
      rating:"8.2",
      imgurl:"https://wallpapercave.com/wp/wp8200100.jpg",
      title:"Chhichhore",
      description:"A tragic incident forces Anirudh a middle aged man,to take a trip down memory lane and reminisce his college days along with his friends, who were labelled as losers"
    },
    {
      rating:"7.0",
      imgurl:"https://stat2.bollywoodhungama.in/wp-content/uploads/2018/11/Dream-Girl-2.jpg",
      title:"Dream girl",
      description:"Rom-com Movie, directed by Raaj Shaandilyaa, stars Ayushmann Khurrana who plays a 'dream girl'. In every love story, there is always one trying to win the heart of the other, who could be the 'dream girl'."
    },
    {
      rating:"6.5",
      imgurl:"https://media5.bollywoodhungama.in/wp-content/uploads/2017/09/War-11.jpg",
      title:"War",
      description:"War is a 2019 Indian Hindi-language action thriller film directed by Siddharth Anand and produced by Aditya Chopra. The movie stars Hrithik Roshan, Tiger Shroff, and Vaani Kapoor in lead roles. The plot follows an Indian soldier who is tasked with eliminating his former mentor, who has gone rogue"
    },
    {
      rating:"7.3",
      imgurl:"https://www.shikipedia.com/wp-content/uploads/2019/12/mardani-2.png",
      title:"Mardaaani 2",
      description:"A 21-year old boy Sunny has a penchant for sexually assaulting and killing girls. He's locked horns with top cop Shivani Shivaji Roy. Will she nab him?"
    },
    {
      rating:"7.5",
      imgurl:"https://stat4.bollywoodhungama.in/wp-content/uploads/2017/07/Tanhaji-%E2%80%93-The-Unsung-Warrior-15.jpg",
      title:"Tanhaji",
      description:"Tanhaji Malusare, a military chieftain in the army of the Maratha king Shivaji, leads the charge to capture the strategically important Kondhana fort guarded by the army of the fierce Rajput chieftain Udaybhan Rathod."
    },
    {
      rating:"6.8",
      imgurl:"https://static.india.com/wp-content/uploads/2019/12/Capture-21.jpg",
      title:"Panga",
      description:"Panga is inspired by the life of a National-level Kabbadi player from India. It follows her triumphs, struggle, and overcoming of stereotypes. It shows how important family love and support is for success."
    },
    // {
    //   rating:"6.9",
    //   imgurl:"images/savdhan.png",
    //   title:"Shubh Mangal Savdhan",
    //   description:"In this remake of Kalyana Samayal Saadham (2013), a couple fall in love but then the groom discovers that he suffers from erectile dysfunction"
    // },
    {
      rating:"8",
      imgurl:"https://images.news18.com/ibnlive/uploads/2025/02/The-Diplomat-John-Abraham-2025-02-e03af3643c19ca874cd36831f0f630f6-16x9.jpg",
      title:"The Diplomat",
      description:"The Diplomat is a Hindi-language political thriller film released in 2024,directed by Shivam Nair and starring John Abraham in the lead role.The movie is inspired by real-life events and explores the gripping story of a courageous Indian diplomat navigating international crises and intelligence battles."
    },
    {
      rating:"8.2",
      imgurl:"https://image.tmdb.org/t/p/original/9F4lPRLjfBjsu0zjWNOZQMa8a4V.jpg",
      title:"Chhaava",
      description:"Directed by Laxman Utekar, Chhaava is a Hindi-language historical action film based on the life of Sambhaji Maharaj, the second ruler of the Maratha Empire.Vicky Kaushal stars as the titular character, with Rashmika Mandanna and Akshaye Khanna in supporting roles.The film, adapted from the Marathi Novel Chhava by Shivaji Sawant, delves into the velor and sacrifices of Sambhaji Maharaj."
    },
    {
      rating:"6.5",
      imgurl:"images/deva.avif",
      title:"Deva",
      description:"Directed by Rosshan Andrrews, Deva is a Hindi-language action thriller starring Shahid Kapoor as ACP Dev Ambre, a rebellious police Officer who loses his memory after an accident.The film follows his journey to solve a colleague's murder while grappling with his fragmented past.Pooja Hegde and Pavail Gulati also feauture in pivotal roles."
    }
  ]

  return (
    <div className='mcontainer'>
      <h4>Movies screened </h4>
      <div className='mparent'>
        {movies.map((element, index) => (
          <Mcard
            key={index}
            rating={element.rating}
            imgurl={element.imgurl}
            title={element.title}
            description={element.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Moviesmain
