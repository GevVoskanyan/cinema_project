import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import './ContactUs.scss';
import ContactSoc from '../../common/ContactSoc/ContactSoc';
import ContactMessage from '../../common/ContactMessage/ContactMessage';

function ContactUs(props) {
  return (
    <section className="contact">
      <Wrapper>
        <div className="contact_container">
          <div className="p-30 bcb">
            <h2 className="contact_title">CONTACT US</h2>
            <ContactSoc />
            <ContactMessage />
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96671.37289995853!2d43.75800483832838!3d40.784444976503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041fb8b9b34fc9f%3A0x4f4bed0e45f99102!2z0JPRjtC80YDQuA!5e0!3m2!1sru!2sam!4v1693766073848!5m2!1sru!2sam"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
            className="map_frame"
          />
        </div>
      </Wrapper>
    </section>
  );
}

export default ContactUs;
