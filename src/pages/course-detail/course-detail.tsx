import React, {useState} from 'react';
import './course-detail.scss';
import Breadcumb from "../../components/breadcumb/breadcumb";
import CourseDetailCard from "./course-detail-card";
import CoursesDetailHeader from "./courses-detail-header";
import CourseDetailTabs from "./course-detail-tabs";
import CourseDetailDescription from "./course-detail-description";

function CourseDetail() {
  const [tab, setTab] = useState<string | any>("about_the_course");
  return (
    <section className="course-detail">
      <Breadcumb title="Brand & Identity Design for Marketers" link="/"/>
      <div className="container">
        <div className="course-detail__wrapper">
          <div className="row">
            <div className="col-md-7">
              <CoursesDetailHeader/>
              <CourseDetailTabs setTab={setTab} tab={tab}/>
              <CourseDetailDescription/>
            </div>
            <div className="offset-lg-1 offset-md-1 offset-0 col-md-4">
              <CourseDetailCard/>
              <h1>{""}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseDetail;