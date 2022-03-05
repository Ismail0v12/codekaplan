import React from 'react';
import Card from "../../components/card/card";

function CoursesContent() {
  return (
    <div className="courses__content">
      <div className="row gy-4">
        <div className="col-md-4">
          <Card/>
        </div>
        <div className="col-md-4">
          <Card/>
        </div>
        <div className="col-md-4">
          <Card/>
        </div>
        <div className="col-md-4">
          <Card/>
        </div>
        <div className="col-md-4">
          <Card/>
        </div>
        <div className="col-md-4">
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default CoursesContent;