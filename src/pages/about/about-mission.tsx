import React from 'react';
import discussionImage from '../../assets/images/discussion.png';

function AboutMission() {
  return (
    <div className="container">
      <div className="about__mission">
        <div className="about__mission-description">
          <h5>Our Mission</h5>
          <h3>We are innovative educational institution for students.</h3>
          <p>Programming will be must to know knowledge in the future! It doesn’t matter whether you are in sales,
            finance
            or operations, you will be required to write some instructions computers can run—and that once required
            coding
            skills and we will prepare you for that time! Programming will be must to know knowledge in the future! It
            doesn’t matter whether you are in sales, finance or operations, you will be required to write some
            instructions computers can run—and that once required coding skills and we will prepare you for that
            time!</p>
        </div>
        <div className="about__mission-image">
          <img src={discussionImage} alt="CodeKaplan"/>
        </div>
      </div>
    </div>
  );
}

export default AboutMission;