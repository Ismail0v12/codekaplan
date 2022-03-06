import React from 'react';
import Card from "../../components/card/card";

function CoursesContent() {
  return (
    <div className="courses__content">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 col-6">
          <Card/>
        </div>
        <div className="col-lg-4 col-md-6 col-6">
          <Card/>
        </div>
        <div className="col-lg-4 col-md-6 col-6">
          <Card/>
        </div>
        <div className="col-lg-4 col-md-6 col-6">
          <Card/>
        </div>
        <div className="col-lg-4 col-md-6 col-6">
          <Card/>
        </div>
        <div className="col-lg-4 col-md-6 col-6">
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default CoursesContent;