import React, {useEffect} from 'react';
import Breadcumb from "../../components/breadcumb/breadcumb";
import './blog.scss';
import CardBlog from "../../components/card-blog/card-blog";
import Pagination from "../../components/pagination/pagination";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="1000"
      className="blog"
    >
      <Breadcumb title="Blog" link="/"/>
      <div className="container">
        <div className="blog__wrapper">
          <h4 className="title">Our Latest Articles</h4>
          <h5>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</h5>
          <div className="row gy-4 gx-4 mt-4">
            <div className="col-lg-4 col-md-6 col-6">
              <CardBlog/>
            </div>
            <div className="col-lg-4 col-md-6 col-6">
              <CardBlog/>
            </div>
            <div className="col-lg-4 col-md-6 col-6">
              <CardBlog/>
            </div>
            <div className="col-lg-4 col-md-6 col-6">
              <CardBlog/>
            </div>
            <div className="col-lg-4 col-md-6 col-6">
              <CardBlog/>
            </div>
            <div className="col-lg-4 col-md-6 col-6">
              <CardBlog/>
            </div>
            <div className="col-md-12 blog__pagination">
              <Pagination/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;