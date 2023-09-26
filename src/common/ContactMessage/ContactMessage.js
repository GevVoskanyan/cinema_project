import React from 'react';
import './ContactMessage.scss';
import { RiFacebookFill } from 'react-icons/ri';
import { BiLogoInstagram } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

function ContactMessage(props) {
  return (
    <div className="contact_message">
      <div className="contact_message_container">
        <h3 className="contact_message_title">
          If You Got Any Questions Olease Do Not Hesitate To Send Us a Meesage
        </h3>
        <form>
          <textarea
            className="contact_message_inp"
            placeholder="Message"
          />
        </form>
        <button type="submit" className="btn btn_orange">
          Send Message
        </button>
        <h4 className="contact_message_soc_title">Connect with us!</h4>
        <div className="contact_message_soc_container">
          <div className="contact_message_soc_icon_container">
            <RiFacebookFill className="contact_message_soc_icon" />
          </div>
          <div className="contact_message_soc_icon_container">
            <BiLogoInstagram className="contact_message_soc_icon" />
          </div>
          <div className="contact_message_soc_icon_container">
            <AiOutlineTwitter className="contact_message_soc_icon" />
          </div>
          <div className="contact_message_soc_icon_container">
            <FcGoogle className="contact_message_soc_icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMessage;
