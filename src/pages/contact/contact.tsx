import React, {useEffect} from 'react';
import './contact.scss';
import Breadcumb from "../../components/breadcumb/breadcumb";
import MapPinIcon from "../../assets/icons/map-pin-icon";
import MailIcon from "../../assets/icons/mail-icon";
import PhoneCallIcon from "../../assets/icons/phone-call-icon";
import TelegramFilledIcon from "../../assets/icons/telegram-filled-icon";
import YoutubeFilledIcon from "../../assets/icons/youtube-filled-icon";
import InstagramFilledIcon from "../../assets/icons/instagram-filled-icon";
import WhatsappFilledIcon from "../../assets/icons/whatsapp-filled-icon";
import FacebookFilledIcon from "../../assets/icons/facebook-filled-icon";
import ContactForm from "./contact-form";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="1000"
      className="contact"
    >
      <Breadcumb title="Contact" link="/contact"/>
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__header">
            <h3 className="title">Our contact information to contact us</h3>
            <h4>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</h4>
          </div>
          <div className="contact__info">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="contact__info-card">
                  <div className="contact__info-icon">
                    <MapPinIcon/>
                  </div>
                  <div className="contact__info-title title">Address</div>
                  <div className="contact__info-address">212, Johnson Street Melborne, Australia</div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="contact__info-card">
                  <div className="contact__info-icon">
                    <MailIcon/>
                  </div>
                  <div className="contact__info-title title">Email</div>
                  <div className="contact__info-address">
                    <a href="mailto: info@xodekaplan.com">info@xodekaplan.com</a>
                    <a href="mailto:codekaplan@gmail.com">codekaplan@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                <div className="contact__info-card">
                  <div className="contact__info-icon">
                    <PhoneCallIcon/>
                  </div>
                  <div className="contact__info-title title">Phone</div>
                  <div className="contact__info-address">
                    <a href="tel:+1 457 856 44 55">+1 457 856 44 55</a>
                    <a href="tel:+1 457 895 55 66">+1 457 895 55 66</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact__social">
            <h5 className="title">Social media</h5>
            <div>
              <a href="https://facebook.com"><FacebookFilledIcon/></a>
              <a href="https://facebook.com"><YoutubeFilledIcon/></a>
              <a href="https://facebook.com"><InstagramFilledIcon/></a>
              <a href="https://facebook.com"><WhatsappFilledIcon/></a>
              <a href="https://facebook.com"><TelegramFilledIcon/></a>
            </div>
          </div>
          <ContactForm/>
        </div>
      </div>
    </section>
  );
}

export default Contact;