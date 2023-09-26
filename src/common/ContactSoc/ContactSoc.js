import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';

import './ContactSoc.scss';

function ContactSoc(props) {
  return (
    <div className="contact_soc">
      <div className="contact_soc_items">
        <FiPhoneCall className="contact_soc_items_icon" />
        <span className="contact_soc_items_title">Phone</span>
        <a href="tel:+37494558806" className="contact_soc_items_desc">
          +37494558806
        </a>
        <a href="tel:031265563" className="contact_soc_items_desc">
          031265563
        </a>
      </div>
      <div className="contact_soc_items">
        <IoLocationOutline className="contact_soc_items_icon" />
        <span className="contact_soc_items_title">Adress</span>
        <span className="contact_soc_items_desc">Armenia Gyumri</span>
        <span className="contact_soc_items_desc">031265563</span>
      </div>
      <div className="contact_soc_items">
        <AiOutlineMail className="contact_soc_items_icon" />
        <span className="contact_soc_items_title">Email</span>

        <a
          href="mailto: Fmovie.cineam@gmail.com"
          className="contact_soc_items_desc"
        >
          Fmovie.cineam@gmail.com
        </a>
      </div>
    </div>
  );
}

export default ContactSoc;
