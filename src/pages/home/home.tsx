import React, {useEffect} from 'react';
import './home.scss';
import HomeBanner from "./home-banner";
import HomeCourseCarousel from "./home-course-carousel";
import HomeEmojis from "./home-emojis";
import HomeAbout from "./home-about";
import HomeAnnouncement from "./home-announcement";
import HomeTestimonals from "./home-testimonals";
import HomeBlog from "./home-blog";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="home">
      <HomeBanner/>
      <HomeCourseCarousel/>
      <HomeEmojis/>
      <HomeAbout/>
      <HomeAnnouncement/>
      <HomeBlog/>
      <HomeTestimonals/>
    </section>
  );
}

export default Home;