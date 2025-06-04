import React from 'react';
import './Screened.css';

function Screened() {
  const screened = [
    {
      imgurl: "https://c.ndtvimg.com/gws/ms/kesari-chapter-2-all-you-need-to-know-about-akshay-kumars-film/assets/1.png",
      title: "Kesari 2"
    },
    {
      imgurl: "https://assets.voxcinemas.com/posters/P_HO00011674_1731043173783.jpg",
      title: "The Sabarmati Report"
    },
    {
      imgurl: "https://m.media-amazon.com/images/I/61le8UqCrDL._AC_UF1000,1000_QL80_.jpg",
      title: "Chhava"
    },
    {
      imgurl: "https://m.media-amazon.com/images/M/MV5BYzMxNDRjZGUtMDg3OS00YWVkLThmMDYtOGUzODU5Njk1YTM1XkEyXkFqcGc@._V1_.jpg",
      title: "Sam Bahadur"
    },
    {
      imgurl: "https://resizing.flixster.com/6IVS7Xrmm-zUM0iuKk_yzJktXGE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15912149_v_v9_aa.jpg",
      title: "Laila Majnu"
    },
    {
      imgurl: "https://lh6.googleusercontent.com/proxy/b-Dj8RlGblXtO43JnUmixYgyuJS427Wg-eKga1mvZp5_zrXPUB4xPjwG5g6OASSk45PF5LSgsi7iDSa3JEfrEFrQ9S7iFwvbb0kpzfxjBf2WOya6",
      title: "Tumbbad"
    },
    {
      imgurl: "https://i.pinimg.com/736x/7d/ed/32/7ded324d49d8c984ab2e15bb25778aae.jpg",
      title: "12th Fail"
    },
    {
      imgurl: "https://i.pinimg.com/736x/df/da/ee/dfdaee9ed3ce449ddbf7e2fb0307c441.jpg",
      title: "Jawan"
    },
    {
      imgurl: "https://static.abplive.com/wp-content/uploads/2019/01/09093219/200276_uri_movie.jpg",
      title: "URI"
    },
    {
      imgurl: "https://upload.wikimedia.org/wikipedia/en/2/29/Bhediya_film_poster.jpg",
      title: "Bhediya"
    }
  ];

  return (
    <div className='screened-container'>
      <h1 className='sdh'>Movies Screened</h1>
      <div className="scroll-wrapper">
        <div className="scroll-track">
          {[...screened, ...screened].map((movie, index) => (
            <div className="scroll-item" key={index}>
              <img src={movie.imgurl} alt={movie.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Screened;

