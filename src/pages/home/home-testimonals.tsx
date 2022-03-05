import React from 'react';
import {Pagination, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import testimonalImage from '../../assets/images/testimonals.png';
import StarIcon from "../../assets/icons/star-icon";
import ArrowLeft from "../../assets/icons/arrow-left";
import ArrowRight from "../../assets/icons/arrow-right";

function HomeTestimonals() {
  const arrayStar = new Array(5).fill(<StarIcon/>);
  const testimonalsRating = 5;
  return (
    <div className="home__testimonals">
      <div className="container">
        <h4 className="title">Our Testimonials</h4>
        <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{
            el: '.testimonals',
            clickable: true,
            renderCustom: (swiper, className, index) => {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
          }}
          navigation={{
            prevEl: ".testimonals-prev",
            nextEl: ".testimonals-next"
          }}>
          <SwiperSlide>
            <div className="home__testimonals-block">
              <div className="home__testimonals-image">
                <img src={testimonalImage} alt="codekaplan"/>
                <div>
                  <span>Xurshid Istamov</span>
                  <span>UI/UX Designer</span>
                </div>
              </div>
              <div className="home__testimonals-comments">
                <div>
                  {arrayStar.map((item, index) => (
                    <i
                      className={index < testimonalsRating ? "active" : ""}
                      key={index}>
                      {item}
                    </i>
                  ))}
                </div>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using 'Content here, content here', making it look like
                  readable English.</p>
                <div className="home__testimonals-buttons">
                  <div className="testimonals-prev button"><ArrowLeft/></div>
                  <div className="testimonals-next button"><ArrowRight/></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home__testimonals-block">
              <div className="home__testimonals-image">
                <img src={testimonalImage} alt="codekaplan"/>
                <div>
                  <span>Xurshid Istamov</span>
                  <span>UI/UX Designer</span>
                </div>
              </div>
              <div className="home__testimonals-comments">
                <div>
                  {arrayStar.map((item, index) => (
                    <i
                      className={index < testimonalsRating ? "active" : ""}
                      key={index}>
                      {item}
                    </i>
                  ))}
                </div>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using 'Content here, content here', making it look like
                  readable English.</p>
                <div className="home__testimonals-buttons">
                  <div className="testimonals-prev button"><ArrowLeft/></div>
                  <div className="testimonals-next button"><ArrowRight/></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={`testimonals swiper__pagination home__carousel-pagination`}/>
      </div>
    </div>
  );
}

export default HomeTestimonals;