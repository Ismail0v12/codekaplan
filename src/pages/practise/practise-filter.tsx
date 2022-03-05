import React from 'react';
import PractiseAccordion from "./practise-accordion";

function PractiseFilter() {
  return (
    <div className="practise__filter">
      <PractiseAccordion title="Frontend"/>
      <PractiseAccordion title="Backend"/>
      <PractiseAccordion title="DataBase"/>
    </div>
  );
}

export default PractiseFilter;