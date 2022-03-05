import React from 'react';

function ContactForm() {
  return (
    <form className="contact__form">
      <h5 className="title">Get in touch</h5>
      <div className="row gy-5 mt-5">
        <div className="col-md-4 contact__form-input">
          <input type="text" name="name" id="name" required/>
          <label htmlFor="name">Your name <i>*</i></label>
        </div>
        <div className="col-md-4 contact__form-input">
          <input type="text" name="number" id="number" required/>
          <label htmlFor="number">Phone number <i>*</i></label>
        </div>
        <div className="col-md-4 contact__form-input">
          <input type="text" id="email" name="email" required/>
          <label htmlFor="email">Email <i>*</i></label>
        </div>
        <div className="col-md-12 contact__form-input">
          <textarea name="message" placeholder="Message here"/>
        </div>
        <div className="col-md-12">
          <button type="submit" className="button-filled">Send message</button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;