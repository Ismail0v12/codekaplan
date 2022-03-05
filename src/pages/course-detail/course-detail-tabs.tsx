import React from 'react';

interface CourseDetailTabsProps {
  readonly setTab: (value: string) => void;
  readonly tab: string;
}

function CourseDetailTabs({setTab, tab}: CourseDetailTabsProps) {
  const tabsArr = [
    {id: 1, label: "About the Course", name: "about_the_course"},
    {id: 2, label: "Course Content", name: "course_content"},
    {id: 1, label: "Reviews", name: "reviews"}
  ];

  const tabs = tabsArr.map((item, index) => (
    <h5 onClick={() => setTab(item.name)} key={index} className={item.name === tab ? "active" : ""}>{item.label}</h5>
  ));
  return (
    <div className="course-detail__tabs">
      {tabs}
    </div>
  );
}

export default CourseDetailTabs;