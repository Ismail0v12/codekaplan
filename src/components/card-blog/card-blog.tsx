import React from 'react';
import image from '../../assets/images/tetrad.png';
import adminUser from '../../assets/images/admin-user.png';
import {Link} from "react-router-dom";
import './card-blog.scss';

function CardBlog() {
  return (
    <div className="card-blog">
      <div className="card-blog__img">
        <img src={image} alt="card-blog"/>
      </div>
      <div className="card-blog__body">
        <div className="card-blog__date">
          <h4>JULY 4, 2021</h4>
        </div>
        <div className="card-blog__title">
          <h3>Coding challenge</h3>
        </div>
        <div className="card-blog__description">
          <p>Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis.</p>
        </div>
        <div className="card-blog__footer">
          <div>
            <img src={adminUser} alt="card-blog"/>
            <span>Admin</span>
          </div>
          <Link to="/blog/1">Read more</Link>
        </div>
      </div>
    </div>
  );
}

export default CardBlog;