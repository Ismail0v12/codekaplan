import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import 'swiper/scss';
import 'swiper/css/pagination';
import {Link} from "react-router-dom";
import CardBlog from "../../components/card-blog/card-blog";


function HomeBlog() {
  return (
    <div className="home__carousel">
      <div className="container">
        <div className="home__carousel-header">
          <div>
            <h2 className="title">Our Latest Articles</h2>
            <span>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</span>
          </div>
          <Link to="/blog" className="button home__carousel-button ">Show All</Link>
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
            el: ".home__blog",
            clickable: true,
            renderCustom: (swiper, className, index) => {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
          }}
        >
          <SwiperSlide><CardBlog/></SwiperSlide>
          <SwiperSlide><CardBlog/></SwiperSlide>
          <SwiperSlide><CardBlog/></SwiperSlide>
          <SwiperSlide><CardBlog/></SwiperSlide>
        </Swiper>
        <div className={`home__blog swiper__pagination home__carousel-pagination`}/>
      </div>
    </div>
  );
}

export default HomeBlog;