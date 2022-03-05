import React from 'react';
import image from '../../assets/images/tetrad.png';
import './card.scss';
import {Link} from "react-router-dom";
import Level from "../level/level";

function Card() {

  return (
    <Link to="/courses/1" className="card">
      <div className="card__img">
        <img src={image} alt="Card title"/>
      </div>
      <div className="card__body">
        <h4>Brand & Identity Design for Marketers</h4>
        <p>Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis.</p>
      </div>
      <div className="card__footer">
        <div className="card__level">
          <Level level={2}/>
          <h4>Beginner</h4>
        </div>
        <div className="card__price">
          <span>$45</span>
          <span> / month</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;