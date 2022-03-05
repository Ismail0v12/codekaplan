import React from 'react';
import MapPinIcon from "../../assets/icons/map-pin-icon";
import MailIcon from "../../assets/icons/mail-icon";
import PhoneCallIcon from "../../assets/icons/phone-call-icon";

function AboutContact() {
  return (
    <div className="container">
      <div className="about__contact">
        <div className="about__contact-map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Afd9bff3d8c5d6bf7baac61850d8bcd07031eb812ebf7acfd635c0050c9c0ad81&amp;source=constructor"
            frameBorder="0"/>
        </div>
        <div className="about__contact-call">
          <h3>Contact <span>Us</span></h3>
          <p>Programming will be must to know knowledge in the future! It doesn’t matter whether you are in sales,
            finance or operations, you will be required to write some instructions computers can run—and that once
            required coding skills and we will prepare you for that time!</p>
          <div>
            <div>
              <span><MapPinIcon/></span>
              <aside>
                <a href="https://yandex.ru">212, Johnson Street Melborne, Australia</a>
              </aside>
            </div>
            <div>
              <span><MailIcon/></span>
              <aside>
                <a href="mailto: info@xodekaplan.com">info@xodekaplan.com</a>
                <a href="mailto: codekaplan@gmail.com">codekaplan@gmail.com</a>
              </aside>
            </div>
            <div>
              <span><PhoneCallIcon/></span>
              <aside>
                <a href="tel:+1 457 856 44 55">+1 457 856 44 55</a>
                <a href="tel:+1 457 895 55 66">+1 457 895 55 66</a>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContact;