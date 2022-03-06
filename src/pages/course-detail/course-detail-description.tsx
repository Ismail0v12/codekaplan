import React from 'react';
import imgBanner from '../../assets/images/course-detail-banner.png';

function CourseDetailDescription() {
  return (
    <div className="course-detail__description">
      <h4 className="title">About the Course</h4>
      <article className="mb-lg-5 mb-md-3 mb-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet habitasse orci convallis sodales augue.
      </article>
      <article>
        Ac, pellentesque proin tincidunt lobortis sit velit velit dui eget. Massa, lectus orci auctor morbi. A
        nisl vitae, sagittis elementum placerat nullam id integer leo. Diam venenatis amet diam odio ultrices auctor.
      </article>
      <img src={imgBanner} alt="CodeKaplan"/>
      <h5 className="title">What are you going to learn?</h5>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </ul>
      <article className="mb-lg-5 mb-md-3 mb-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet habitasse orci convallis sodales
        augue.
      </article>
      <article>
        Ac, pellentesque proin tincidunt lobortis sit velit velit dui eget. Massa, lectus orci auctor morbi. A nisl
        vitae, sagittis elementum placerat nullam id integer leo. Diam venenatis amet diam odio ultrices auctor.
      </article>
    </div>
  );
}

export default CourseDetailDescription;