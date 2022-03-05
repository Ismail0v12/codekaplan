import React, {useState} from 'react';
import './practise.scss';
import Breadcumb from "../../components/breadcumb/breadcumb";
import FilterContent from "../../components/filter-content/filter-content";
import PractiseCard from "./practise-card";
import PractiseFilter from "./practise-filter";

function Practise() {
  const [filter, setFilter] = useState<string | any>("");
  return (
    <section className="practise">
      <Breadcumb title="Practise" link="/"/>
      <div className="container">
        <div className="practise__wrapper">
          <h3 className="title">Practice</h3>
          <h4>The most popular courses our students choose to study</h4>
          <FilterContent filter={filter} setFilter={setFilter}/>
          <div className="practise__grid">
            <PractiseFilter/>
            <div>
              <div className="row gy-4">
                <div className="col-md-3"><PractiseCard/></div>
                <div className="col-md-3"><PractiseCard/></div>
                <div className="col-md-3"><PractiseCard/></div>
                <div className="col-md-3"><PractiseCard/></div>
                <div className="col-md-3"><PractiseCard/></div>
                <div className="col-md-3"><PractiseCard/></div>
                <div className="col-md-3"><PractiseCard/></div>
                <div className="col-md-3"><PractiseCard/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Practise;