import React from "react";
import bannerImg from "../../assets/images/banner-img.png"
import HomeForm from "./home-form";
import {Link} from "react-router-dom";

function HomeBanner() {

  return (
    <div className="home__banner" style={{background: `var(--gradient), url(${bannerImg})`}}>
      <div className="container">
        <div className="home__banner-content">
          <h1>Futuristic <span>{"<"}Coding{">"}</span> School</h1>
          <p>Education is the process of learning, or the acquisition of knowledge, skills, values, beliefs, and habits.</p>
          <Link to="/learn-more" className="button-filled">Learn more</Link>
        </div>
        <HomeForm/>
      </div>
    </div>
  );
}

export default HomeBanner;