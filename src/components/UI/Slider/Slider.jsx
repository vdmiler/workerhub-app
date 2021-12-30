import React from 'react';
import './Slider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { sliderItems } from '../../../constans';
import 'swiper/scss';
import 'swiper/scss/pagination';

const Slider = () => {
   return (
      <Swiper
         className="blog-slider"
         modules={[Pagination]}
         pagination={{ "clickable": true }}
         spaceBetween={20}
         slidesPerView={3}
         breakpoints={{
            "320": {
               "slidesPerView": 'auto',
               "spaceBetween": 60,
               "centeredSlides": true
            },
            "991.98": {
               "slidesPerView": 3,
               "spaceBetween": 20
            },
         }}
      >
         {
            sliderItems.map(slide => {
               return (
                  <SwiperSlide className='blog-slider__item' key={`slide-id_${slide.id}`}>
                     <div className="blog-slider__wrapper">
                        <div className="blog-slider__picture">
                           <img src={slide.img} alt="" className="blog-slider__img" />
                        </div>
                        <div className="blog-slider__content">
                           <h5 className="blog-slider__title">
                              {slide.title}
                           </h5>
                           <p className="blog-slider__text">
                              {slide.date}
                           </p>
                        </div>
                     </div>
                  </SwiperSlide>
               )
            })
         }
      </Swiper>
   );
}

export default Slider;