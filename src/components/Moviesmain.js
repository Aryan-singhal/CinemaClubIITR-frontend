import React from 'react'
import Mcard from './Mcard'
import './Moviesman.css'

function Moviesmain() {
  let movies = [
    {
      rating:"5.3",
      imgurl:"https://s01.sgp1.cdn.digitaloceanspaces.com/inline/fbuffigrhv-1578850957.png",
      title:"Chappaak",
      description:"Chhapaak is a Hindi-language drama film released in 2020, directed by Meghna Gulzar andproduced by Deepika Padukone, who also stars in the lead role. The movie is based on the real-life story ofacid attack survivor Laxmi Agarwal."
    },
    {
      rating:"6.8",
      imgurl:"https://c.ndtvimg.com/2019-12/sr8fib2o_good-newwz-movie-review-_625x300_27_December_19.jpg?im=Resize=(1230,900)",
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
      imgurl:"https://images.indianexpress.com/2022/08/Karthikeya-2.jpg?w=640",
      title:"Karthikeya 2",
      description:"Karthikeya 2 is a Telugu-language mystery action-adventure film written and directed by Chandoo Mondeti. The film serves as a sequel to the 2014 film Karthikeya and stars Nikhil Siddhartha, Anupama Parameswaran, and Anupam Kher. It is produced by Abhishek Agarwal Arts and People Media Factory. The plot follows Dr. Karthikeya who is on a quest to find the lost anklet of Lord Krishna."
    },
    {
      rating:"7.3",
      imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqtF19vW40XUyp7BNJGk7o-eRwZ55QJZYUFw&usqp=CAU",
      title:"Bhediya",
      description:"Bhediya is a Hindi-language comedy horror film directed by Amar Kaushik. Produced by Dinesh Vijan, it stars Varun Dhawan and Kriti Sanon. It is the third installment in Vijan's horror-comedy universe."
    },
    {
      rating:"8.8",
      imgurl:"https://stat5.bollywoodhungama.in/wp-content/uploads/2018/10/Rocketry-11-306x393.jpg",
      title:"Rocketry",
      description:"Rocketry: The Nambi Effect is a 2022 Indian biographical drama film written, produced and directed by R. Madhavan in his directorial debut. The film is based on the life of Nambi Narayanan, played by Madhavan, a scientist at the Indian Space Research Organisation, who was accused in the ISRO espionage case and later exonerated."
    },
    {
      rating:"8.2",
      imgurl:"https://www.impawards.com/intl/india/2019/posters/chhichhore.jpg",
      title:"chhichhore",
      description:"A tragic incident forces Anirudh a middle aged man,to take a trip down memory lane and reminisce his college days along with his friends, who were labelled as losers"
    },
    {
      rating:"7.0",
      imgurl:"https://www.themoviedb.org/t/p/original/9gk7h7h7h7h7h7h7h7h7h7h7h7h7h7h7.jpg",
      title:"Dream girl",
      description:"Rom-com Movie, directed by Raaj Shaandilyaa, stars Ayushmann Khurrana who plays a 'dream girl'. In every love story, there is always one trying to win the heart of the other, who could be the 'dream girl'."
    },
    {
      rating:"6.5",
      imgurl:"https://www.impawards.com/intl/india/2019/posters/war.jpg",
      title:"War",
      description:"War is a 2019 Indian Hindi-language action thriller film directed by Siddharth Anand and produced by Aditya Chopra. The movie stars Hrithik Roshan, Tiger Shroff, and Vaani Kapoor in lead roles. The plot follows an Indian soldier who is tasked with eliminating his former mentor, who has gone rogue"
    },
    {
      rating:"7.3",
      imgurl:"https://www.themoviedb.org/t/p/original/9gk7h7h7h7h7h7h7h7h7h7h7h7h7h7h7.jpg",
      title:"Mardaaani 2",
      description:"A 21-year old boy Sunny has a penchant for sexually assaulting and killing girls. He's locked horns with top cop Shivani Shivaji Roy. Will she nab him?"
    },
    {
      rating:"7.5",
      imgurl:"https://www.themoviedb.org/t/p/original/9gk7h7h7h7h7h7h7h7h7h7h7h7h7h7h7.jpg",
      title:"Tanhaji",
      description:"Tanhaji Malusare, a military chieftain in the army of the Maratha king Shivaji, leads the charge to capture the strategically important Kondhana fort guarded by the army of the fierce Rajput chieftain Udaybhan Rathod."
    },
    {
      rating:"6.8",
      imgurl:"https://www.impawards.com/intl/india/2020/posters/panga.jpg",
      title:"Panga",
      description:"Panga is inspired by the life of a National-level Kabbadi player from India. It follows her triumphs, struggle, and overcoming of stereotypes. It shows how important family love and support is for success."
    },
    {
      rating:"6.9",
      imgurl:"https://www.impawards.com/intl/india/2017/posters/shubh_mangal_saavdhan.jpg",
      title:"Shubh Mangal Savdhan",
      description:"In this remake of Kalyana Samayal Saadham (2013), a couple fall in love but then the groom discovers that he suffers from erectile dysfunction"
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
