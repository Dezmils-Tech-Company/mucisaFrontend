
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './ComponentStyles/ProjectSlider.css';
import { FaArrowAltCircleRight } from 'react-icons/fa';


const ProjectSlider = () => {
   const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/activities')
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="project-slider-container">
        <h2 className='project-title'>Recent <span> Activities</span></h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {activities.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="activity-card">
             <img src={`/assets/${item.image}`} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <button><FaArrowAltCircleRight /> Learn More</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
