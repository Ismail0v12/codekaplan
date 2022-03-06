import React from 'react';
import perspectiveImage from '../../assets/images/perspective.png';
import computer from '../../assets/images/computer.png';

function HomeAnnouncement() {
  return (
    <div
      className="home__announcement"
      data-aos="fade-up"
      data-aos-duration="1000">
      <div className="container">
        <div className="home__announcement-top">
          <img
            data-aos="zoom-out"
            data-aos-duration="1000"
            src={perspectiveImage} alt="codekaplan"/>
        </div>
        <h3
          data-aos-duration="1000"
          data-aos="zoom-in">Apply until December 31, 2021 and get one <br/> of our benefits!</h3>
        <div className="home__announcement-bottom">
          <div>
            <img src={computer} alt="codekaplan"/>
            <span>Video lessons</span>
          </div>
          <div>
            <img src={computer} alt="codekaplan"/>
            <span>Video lessons</span>
          </div>
          <div>
            <img src={computer} alt="codekaplan"/>
            <span>Video lessons</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAnnouncement;