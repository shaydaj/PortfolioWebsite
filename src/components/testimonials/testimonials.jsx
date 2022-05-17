import React from 'react';
import "./testimonials.css";
import me from "../../assets/me.png";

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// This is useful if you decide to add more testimonials!
const data = [
  {
    avatar: 1,
    name: 'shayda1',
    review: 'cool'
  }, 
  {
    avatar: 2,
    name: 'shayda2',
    review: 'cool'
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Testimonials</h5>
      <h2>References</h2>
      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
            <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={me}/>
                </div>
                <h5 className = 'client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>

            )
          })
        }

      </Swiper>
     </section>
  )
}

export default testimonials