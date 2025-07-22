import React, { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ComponentStyles/services.css';


export default function Services(){
    const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch('https://mucisabackend.onrender.com/api/ourservices')
      .then(res => res.json())
      .then(data => setSlides(data));
  }, []);
    return(
        <>
        <h2 className="services-title">What <span>We Do</span></h2>
        <Swiper 
         modules={[Navigation]}
         navigation
        spaceBetween={10} 
        slidesPerView={1} 
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        >
        {slides.map(slide => (
          <SwiperSlide key={slide._id}>
            <div className="activity-card">
              <img src={slide.image} alt={slide.title} />
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        </>
    )
}