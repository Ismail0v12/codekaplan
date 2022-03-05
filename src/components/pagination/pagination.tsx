import React from 'react';
import {Link} from "react-router-dom";
import './pagination.scss';

function Pagination() {
  return (
    <div className="pagination">
      <div className="pagination__prev pagination__button">«</div>
      <Link to="/" className="pagination__button">1</Link>
      <Link to="/" className="pagination__button">2</Link>
      <Link to="/" className="pagination__button">3</Link>
      <Link to="/" className="pagination__button">4</Link>
      <Link to="/" className="pagination__button">5</Link>
      <div className="pagination__next pagination__button">»</div>
    </div>
  );
}

export default Pagination;