import React from 'react';
import "./testimonials.css";
// import client
import client1 from '../../assets/client1.png';
import client2 from '../../assets/client2.png';
import client3 from '../../assets/client3.png';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export default function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Rewiew from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials-container"
      pagination={{
        dynamicBullets: true,
      }}
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        // pagination={{ clickable: true }}
      >
        <SwiperSlide className='testimonial'>
          <div className="client-avatar">
            <img src={client1} alt="Eric Perez" />
          </div>
          <h5 className='client-name'>Eric Perez</h5>
          <small className='client-rewiew'>
            “ Morsalin Nur, did a great job at designing and improving my Ecommerce site.
            I highly recommend him for any future projects. ”
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client-avatar">
            <img src={client2} alt="Terrell J." />
          </div>
          <h5 className='client-name'>Terrell J.</h5>
          <small className='client-rewiew'>
            “ EXCELLENT FREELANCER!!! Works very hard and is dedicated to do the work.
            Love to work with her!. ”
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client-avatar">
            <img src={client3} alt="Rami Khshan" />
          </div>
          <h5 className='client-name'>Rami Khshan</h5>
          <small className='client-rewiew'>
            “ He was amazing. He went way beyond the requirements that I requested and did an amazing job.
            I would hire her again for sure. I even gave her extra money as he never complains about improvements. ”
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
