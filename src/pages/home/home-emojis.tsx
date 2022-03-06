import React from 'react';
import emoSad from '../../assets/images/emo-sad.png';
import emoHappy from '../../assets/images/emo-happy.png';

function HomeEmojis() {
  return (
    <div className="home__emojis" data-aos="fade-up"
         data-aos-duration="1000">
      <div className="container">
        <h4 className="title" data-aos="zoom-in-up"
            data-aos-duration="1500">You should not let obstecles stop to change your future!</h4>
        <div className="home__emojis-grid">
          <div data-aos="fade-up"
               data-aos-duration="1000">
            <img src={emoSad} alt="You should not let obstecles stop to change your future!"/>
            <p>But I don’t have It background or computert skills</p>
          </div>
          <div data-aos="fade-up"
               data-aos-duration="1000">
            <img src={emoHappy} alt="You should not let obstecles stop to change your future!"/>
            <p>But I don’t have It background or computert skills</p>
          </div>
          <div data-aos="fade-up"
               data-aos-duration="1000">
            <img src={emoSad} alt="You should not let obstecles stop to change your future!"/>
            <p>But I don’t have It background or computert skills</p>
          </div>
          <div data-aos="fade-up"
               data-aos-duration="1000">
            <img src={emoHappy} alt="You should not let obstecles stop to change your future!"/>
            <p>But I don’t have It background or computert skills</p>
          </div>
          <div data-aos="fade-up"
               data-aos-duration="1000">
            <img src={emoSad} alt="You should not let obstecles stop to change your future!"/>
            <p>But I don’t have It background or computert skills</p>
          </div>
          <div data-aos="fade-up"
               data-aos-duration="1000">
            <img src={emoHappy} alt="You should not let obstecles stop to change your future!"/>
            <p>But I don’t have It background or computert skills</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeEmojis;