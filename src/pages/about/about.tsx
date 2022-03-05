import React from 'react';
import './about.scss';
import Breadcumb from "../../components/breadcumb/breadcumb";
import AboutMission from "./about-mission";
import AboutWho from "./about-who";
import AboutContact from "./about-contact";

function About() {
  return (
    <section className="about">
      <Breadcumb title="About" link="/"/>
      <AboutMission/>
      <AboutWho/>
      <AboutContact/>
    </section>
  );
}

export default About;