import React from 'react';
import './filter-content.scss';

interface CoursesFilterProps {
  readonly filter: string;
  readonly setFilter: (value: string) => void;
}

function CoursesFilter({filter, setFilter}: CoursesFilterProps) {

  const coursesFilter = [
    {id: 1, name: "web-development", label: "Web development"},
    {id: 1, name: "game-development", label: "Game development"},
    {id: 1, name: "data-analysis", label: "Data analysis"},
    {id: 1, name: "software-testing", label: "Software testing"},
    {id: 1, name: "ui-ux-design", label: "UI/UX Design"},
  ];

  const buttons = coursesFilter.map((item, index) => {
    return (
      <button
        key={index}
        onClick={() => setFilter(item.name)}
        className={filter === item.name ? "active" : ""}>{item.label}</button>
    )
  });

  return (
    <div
      className="filter__content"
      data-aos="zoom-in-right"
      data-aos-delay="400"
      data-aos-duration="1000">
      {buttons}
    </div>
  );
}

export default CoursesFilter;