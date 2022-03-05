import React, {useState} from 'react';
import ChevronDown from "../../assets/icons/chevron-down";

interface PractiseAccordionProps {
  readonly title: string;
  readonly technology?: object[];
}

function PractiseAccordion({title, technology}: PractiseAccordionProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="practise__filter-wrapper">
      <div className="practise__filter-header" onClick={() => setIsActive((d) => !d)}>
        <h6>{title}</h6>
        <span><ChevronDown/></span>
      </div>
      <div className={isActive ? "practise__filter-accordion active" : "practise__filter-accordion"}>
        <label htmlFor="html">
          <span>HTML</span>
          <input type="checkbox" name="checkbox" id="html"/>
        </label>
        <label htmlFor="css">
          <span>CSS</span>
          <input type="checkbox" name="checkbox" id="css"/>
        </label>
        <label htmlFor="javascript">
          <span>JavaScript</span>
          <input type="checkbox" name="checkbox" id="javascript"/>
        </label>
      </div>
    </div>
  );
}

export default PractiseAccordion;