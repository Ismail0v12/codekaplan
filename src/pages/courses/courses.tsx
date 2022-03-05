import React, {useState} from 'react';
import './courses.scss';
import Breadcumb from "../../components/breadcumb/breadcumb";
import CoursesContent from "./courses-content";
import FilterContent from "../../components/filter-content/filter-content";

function Courses() {
  const [filter, setFilter] = useState<string | any>("");

  return (
    <section className="courses">
      <Breadcumb title="Courses" link="/courses"/>
      <div className="container">
        <div className="courses__wrapper">
          <h3 className="title courses__title">Courses</h3>
          <h5>The most popular courses our students choose to study</h5>
          <FilterContent setFilter={setFilter} filter={filter}/>
          <CoursesContent/>
          <button className="button-filled courses__button">Show more</button>
        </div>
      </div>
    </section>
  );
}

export default Courses;