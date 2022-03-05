import React from 'react';
import Level from "../../components/level/level";
import courseImage from '../../assets/images/course-detail-play.png';
import PlayIcon from "../../assets/icons/play-icon";

function CourseDetailCard() {
  return (
    <div className="course-detail__card">
      <div className="course-detail__card-img">
        <img src={courseImage} alt="CodeKaplan"/>
        <span><PlayIcon/></span>
      </div>
      <div className="course-detail__card-body">
        <div className="course-detail__card-price">
          <span>$450</span>
          <span>$475</span>
        </div>
        <div className="course-detail__card-level">
          <Level level={1}/>
          <div>
            Level: <span>Beginner</span>
          </div>
        </div>
      </div>
      <button className="button-filled course-detail__button">Apply now</button>
    </div>
  );
}

export default CourseDetailCard;