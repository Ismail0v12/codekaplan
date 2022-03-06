import React from 'react';
import {Link} from "react-router-dom";
import Level from "../../components/level/level";
import learnHtml from '../../assets/images/learn-html.png';

function PractiseCard() {
  return (
    <Link
      to="/"
      className="practise__card"
      data-aos="zoom-in-down"
      data-aos-delay="400"
      data-aos-duration="1000"
    >
      <img src={learnHtml} alt="CodeKaplan"/>
      <div className="practise__card-body">
        <h5 className="title">Learn HTML</h5>
        <div className="practise__card-level">
          <Level level={4}/>
          <h6>Beginner</h6>
        </div>
      </div>
    </Link>
  );
}

export default PractiseCard;