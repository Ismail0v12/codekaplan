import React from 'react';
import userImage from '../../assets/images/user-image.png';

function CoursesDetailHeader() {
  return (
    <div className="course-detail__header">
      <h3 className="title">Brand & Identity Design for <br/> Marketers</h3>
      <p>Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis.</p>
      <div>
        <img src={userImage} alt="CodeKaplan"/>
        <div>
          <h6>Sophie Moore</h6>
          <span>UI/UX Dizayner</span>
        </div>
      </div>
    </div>
  );
}

export default CoursesDetailHeader;