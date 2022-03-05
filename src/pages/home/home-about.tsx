import React from 'react';
import unsplash from '../../assets/images/unsplash.png'
import video from '../../assets/images/video.png'
import {Link} from "react-router-dom";
import PlayIcon from "../../assets/icons/play-icon";

function HomeAbout() {
  return (
    <div className="container">
      <div className="home__about">
        <div className="home__about-image">
          <img src={unsplash} alt="codekaplan"/>
        </div>
        <div className="home__about-content">
          <h4>About <span>Us</span></h4>
          <p>Programming will be must to know knowledge in the future! It doesn’t matter whether you are in sales,
            finance
            or operations, you will be required to write some instructions computers can run—and that once required
            coding
            skills and we will prepare you for that time!</p>
          <Link to="/" className="button-filled">Read More</Link>
          <div className="home__about-video">
            <img src={video} alt="codekaplan"/>
            <span><PlayIcon/></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;