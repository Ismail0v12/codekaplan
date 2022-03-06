import React, {useEffect} from 'react';
import './about.scss';
import Breadcumb from "../../components/breadcumb/breadcumb";
import AboutMission from "./about-mission";
import AboutWho from "./about-who";
import AboutContact from "./about-contact";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="1000"
      className="about"
    >
      <Breadcumb title="About" link="/"/>
      <AboutMission/>
      <AboutWho/>
      <AboutContact/>
    </section>
  );
}

export default About;