import React, {useEffect, useState} from 'react';
import './practise.scss';
import Breadcumb from "../../components/breadcumb/breadcumb";
import FilterContent from "../../components/filter-content/filter-content";
import PractiseCard from "./practise-card";
import PractiseFilter from "./practise-filter";

function Practise() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [filter, setFilter] = useState<string | any>("");
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="1000"
      className="practise"
    >
      <Breadcumb title="Practise" link="/"/>
      <div className="container">
        <div className="practise__wrapper">
          <h3 className="title">Practice</h3>
          <h4>The most popular courses our students choose to study</h4>
          <FilterContent filter={filter} setFilter={setFilter}/>
          <div className="practise__grid">
            <PractiseFilter/>
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1000">
              <div className="row gx-lg-3 gx-md-3 gy-lg-4 gy-md-3 gy-3 gx-3">
                <div className="col-lg-3 col-md-4 col-6"><PractiseCard/></div>
                <div className="col-lg-3 col-md-4 col-6"><PractiseCard/></div>
                <div className="col-lg-3 col-md-4 col-6"><PractiseCard/></div>
                <div className="col-lg-3 col-md-4 col-6"><PractiseCard/></div>
                <div className="col-lg-3 col-md-4 col-6"><PractiseCard/></div>
                <div className="col-lg-3 col-md-4 col-6"><PractiseCard/></div>
                <div className="col-lg-3 col-md-4 col-6"><PractiseCard/></div>
                <div className="col-lg-3 col-md-4 col-6"><PractiseCard/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Practise;