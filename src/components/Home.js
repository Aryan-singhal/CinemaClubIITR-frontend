import React, { useEffect, useState, useRef } from 'react';
import About from './About';
import Events from './Events';
import Screened from './Screened';
import './Home.css';

const sliderData = [
  {
    image: '/iit-rook.jpg',
    title: 'Your Gateway to the World of Films',
    subtitle: 'Celebrating cinema through curated screenings, creative expression and passionate dialogue.'
  },
  {
    image: '/images/convohall.jpg',
    title: 'Lights. Camera. Convo.',
    subtitle: 'Experience cinema like never before — in the heart of campus with 1000+ roaring cinephiles.'
  },
  {
    image: '/images/team.jpg',
    title: 'The Faces Behind the Frame',
    subtitle: 'Crafting every cinematic moment — one screening, one event, one story at a time.'
  }
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);


    intervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [currentSlide]);

  return (
    <>
      <div className="home-container">
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="home-content">
              <p className='p1'>{slide.title}</p>
              <p className='p2'>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {sliderData.map((_, idx) => (
          <span
            key={idx}
            className={`dot${currentSlide === idx ? ' active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>

      <Events />
      <Screened />
      <About />
    </>
  );
}

export default Home;

