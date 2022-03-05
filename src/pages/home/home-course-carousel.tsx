import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import 'swiper/scss';
import 'swiper/css/pagination';
import {Link} from "react-router-dom";
import Card from "../../components/card/card";

function HomeCourseCarousel() {
  return (
    <div className="home__carousel">
      <div className="container">
        <div className="home__carousel-header">
          <div>
            <h2 className="title">Popular Courses</h2>
            <span>The most popular courses our students choose to study</span>
          </div>
          <Link to="/courses" className="button home__carousel-button ">Show All</Link>
        </div>
        <Swiper
          modules={[Pagination]}
          loop={true}
          breakpoints={{
            "320": {
              "slidesPerView": 2,
              "spaceBetween": 15
            },
            "768": {
              "slidesPerView": 2,
              "spaceBetween": 20
            },
            "992": {
              "slidesPerView": 3,
              "spaceBetween": 20
            },
            "1400": {
              "slidesPerView": 3,
              "spaceBetween": 43
            }
          }}
          pagination={{
            el: '.home__courses',
            clickable: true,
            renderCustom: (swiper, className, index) => {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
          }}
        >
          <SwiperSlide><Card/></SwiperSlide>
          <SwiperSlide><Card/></SwiperSlide>
          <SwiperSlide><Card/></SwiperSlide>
          <SwiperSlide><Card/></SwiperSlide>
          <SwiperSlide><Card/></SwiperSlide>
        </Swiper>
        <div className={`home__courses swiper__pagination home__carousel-pagination`}/>
      </div>
    </div>
  );
}

export default HomeCourseCarousel;