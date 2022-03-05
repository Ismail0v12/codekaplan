import React from 'react';
import {Link} from "react-router-dom";

function AboutWho() {
  return (
    <div className="about__who">
      <div className="container">
        <h5>Who we are?</h5>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla cras ut lacus massa, hac at aliquet
          tempor. Amet malesuada mauris, aliquam consectetur. Orci leo et molestie nibh a vulputate suspendisse
          phasellus. Nec pharetra eget et viverra consequat eu. Donec vitae etiam sollicitudin nec. Magnis nisl urna
          porttitor pellentesque non sapien. In mauris sed sit facilisis. Semper mus commodo dui amet, id massa cursus
          lacus. Diam massa interdum diam pharetra, lorem nibh scelerisque non. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Fringilla cras ut lacus massa, hac at aliquet tempor. Amet malesuada mauris, aliquam
          consectetur. Orci leo et molestie nibh a vulputate suspendisse phasellus. Nec pharetra eget et viverra
          consequat eu. Donec vitae etiam sollicitudin nec. Magnis nisl urna porttitor pellentesque non sapien. In
          mauris sed sit facilisis. Semper mus commodo dui amet, id massa cursus lacus. Diam massa interdum diam
          pharetra, lorem nibh scelerisque non.
        </p>
        <Link to="/" className="button-filled">Learn more</Link>
      </div>
    </div>
  );
}

export default AboutWho;