import React from 'react';
import './breadcumb.scss';
import {Link} from "react-router-dom";
import breadcumbImage from '../../assets/images/breadcumb.png';

interface BreadcumbProps {
  readonly image?: string;
  readonly title: string;
  readonly link: string;
}

function Breadcumb({image, link, title}: BreadcumbProps) {
  return (
    <div className="breadcumb" style={{backgroundImage: `url(${image ? image : breadcumbImage})`}}>
      <div>
        <h2>{title}</h2>
        <div>
          <Link to="/">Home{"»"}</Link>
          <Link to={link}>{title}</Link>
        </div>
      </div>
    </div>
  );
}

export default Breadcumb;