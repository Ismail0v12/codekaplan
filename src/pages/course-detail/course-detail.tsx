import React, {useEffect, useState} from 'react';
import './course-detail.scss';
import Breadcumb from "../../components/breadcumb/breadcumb";
import CourseDetailCard from "./course-detail-card";
import CoursesDetailHeader from "./courses-detail-header";
import CourseDetailTabs from "./course-detail-tabs";
import CourseDetailDescription from "./course-detail-description";

function CourseDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [tab, setTab] = useState<string | any>("about_the_course");
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="1000"
      className="course-detail"
    >
      <Breadcumb title="Brand & Identity Design for Marketers" link="/"/>
      <div className="container">
        <div className="course-detail__wrapper">
          <div className="row gy-4">
            <div className="col-lg-7 col-md-12 col-12">
              <CoursesDetailHeader/>
              <CourseDetailTabs setTab={setTab} tab={tab}/>
              <CourseDetailDescription/>
            </div>
            <div className="col-lg-4 col-md-12 col-12 offset-lg-1 offset-0 mobile__order">
              <CourseDetailCard/>
              <h1 className="FAKE CONTENT DO NOT TOUCH">{""}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseDetail;