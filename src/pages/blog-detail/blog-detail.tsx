import React, {useEffect} from 'react';
import Breadcumb from "../../components/breadcumb/breadcumb";
import imacImage from '../../assets/images/imac.png';
import './blog-detail.scss';
import authorImage from '../../assets/images/author.png';
import mackbookImage from '../../assets/images/mackbook.png';

function BlogDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="1000"
      className="blog-detail"
    >
      <Breadcumb title="Blog" link="/blog"/>
      <div className="container">
        <div className="blog-detail__wrapper">
          <div className="blog-detail__banner">
            <img src={imacImage} alt="CodeKaplan"/>
          </div>
          <div className="blog-detail__body">
            <div className="blog-detail__title">
              <h3 className="title">5 Great Marketing Trends To Follow In 2021</h3>
            </div>
            <div className="blog-detail__author">
              <img src={authorImage} alt="CodeKaplan"/>
              <h4>Madina Mamasaidova - 12.11.2021</h4>
            </div>
            <div className="blog-detail__content">
              <h5 className="title">The Biggest Marketing Trend in 2020</h5>
              <article className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet habitasse orci convallis
                sodales augue.

                Ac, pellentesque proin tincidunt lobortis sit velit velit dui eget. Massa, lectus orci auctor morbi. A
                nisl vitae, sagittis elementum placerat nullam id integer leo. Diam venenatis amet diam odio ultrices
                auctor.
              </article>
              <img className="mt-4" src={mackbookImage} alt="CodeKaplan"/>
              <h5 className="title mt-4">Video Marketing is Here to Stay</h5>
              <ul className="mt-3">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dor</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dor</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              <article className="mt-4">
                Porta massa, eget natoque tincidunt quis. Suspendisse vitae vestibulum scelerisque egestas. Volutpat,
                adipiscing a elit platea amet et. At at metus egestas nunc eget. Tempus sapien, augue laoreet morbi
                habitasse leo mauris arcu amet. Sapien lectus auctor quis in ut morbi risus. Ornare aliquam phasellus
                consequat amet velit risus. Amet, diam cras morbi hendrerit vitae pretium in enim.
              </article>
              <h5 className="title mt-4">Is It Still a Good Moment to Join the Video Marketing Wave?</h5>
              <article className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est arcu turpis vitae dignissim mi sit.
                Ornare morbi varius malesuada id mollis sit pellentesque blandit vulputate. Sed cursus volutpat magnis
                augue massa. Nisl consectetur mauris quisque nunc dictumst a. Pellentesque eget ultricies sed at mi diam
                pulvinar nec. Molestie commodo consequat nibh et porttitor quis.
              </article>
              <h5 className="title mt-4"> Start Marketing your Products Through Video</h5>
              <article className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est arcu turpis
                vitae dignissim mi sit. Ornare morbi varius malesuada id mollis sit pellentesque blandit vulputate.
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetail;