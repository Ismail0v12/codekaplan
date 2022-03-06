import React from 'react';
import PractiseAccordion from "./practise-accordion";

function PractiseFilter() {
  return (
    <div
    data-aos="fade-right"
    data-aos-delay="400"
    data-aos-duration="1000"
      className="practise__filter"
    >
      <PractiseAccordion title="Frontend"/>
      <PractiseAccordion title="Backend"/>
      <PractiseAccordion title="DataBase"/>
    </div>
  );
}

export default PractiseFilter;