import React from 'react';
import './footer.scss';
import {Link} from "react-router-dom";
import ArrowRightShort from "../../assets/icons/arrow-right-short";
import FooterLogo from "../../assets/logo/footer-logo";
import MailIcon from "../../assets/icons/mail-icon";
import PhoneIcon from "../../assets/icons/phone-icon";
import MapPinIcon from "../../assets/icons/map-pin-icon";
import FacebookIcon from "../../assets/icons/facebook-icon";
import TwitterIcon from "../../assets/icons/twitter-icon";
import InstagramIcon from "../../assets/icons/instagram-icon";
import TiktokIcon from "../../assets/icons/tiktok-icon";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div>
            <div className="footer__logo">
              <Link to="/">
                <FooterLogo/>
              </Link>
            </div>
            <div className="footer__about">
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout.
              </p>
              <Link to="/">Read more <ArrowRightShort/></Link>
            </div>
            <div className="footer__social">
              <a href="https://facebook.com">
                <FacebookIcon/>
              </a>
              <a href="https://facebook.com">
                <TwitterIcon/>
              </a>
              <a href="https://facebook.com">
                <InstagramIcon/>
              </a>
              <a href="https://facebook.com">
                <TiktokIcon/>
              </a>
            </div>
          </div>
          <ul className="footer__nav">
            <li className="footer__nav-title">Company</li>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Courses</Link></li>
            <li><Link to="/">Style Guide</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
          <ul className="footer__nav">
            <li className="footer__nav-title">Company</li>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Courses</Link></li>
            <li><Link to="/">Style Guide</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
          <div className="footer__support">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="mailto: support@ckaplan.com"><MailIcon/> support@ckaplan.com</a>
              </li>
              <li>
                <a href="tel: +371 457 855 54 44"><PhoneIcon/> +371 457 855 54 44</a>
              </li>
              <li>
                <a target="_blank" rel="nofollow"
                   href="https://yandex.com/maps/?ll=71.311531%2C40.479963&mode=routes&rtext=~40.887740%2C69.090478&rtt=auto&ruri=~&z=7">
                  <MapPinIcon/> <span>442 Belle Terre St Floor 7, San Francisco, AV 4206</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr/>
        <div className="footer__copyright">
          Copyright © 2021. Codekaplan.com All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;