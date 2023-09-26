import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';
import { IoLocationOutline } from 'react-icons/io5';
import { CgCopyright } from 'react-icons/cg';
import { AiOutlineInstagram, AiOutlineChrome } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import logo from './img/site_logo.png';
import google_play from './img/google_play.png';
import app_store from './img/app_store.png';

import './Footer.scss';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_content">
          <figure className="footer__logo_container">
            <img src={logo} alt="logo" className="footer__logo" />
          </figure>
          <div className="footer__menu">
            <h3 className="footer__blog_title">About</h3>
            <Link to="/" className="footer_links">
              Home
            </Link>
            <Link to="/catalog" className="footer_links">
              Catalog
            </Link>
            <Link to="/profile" className="footer_links">
              Profile
            </Link>
          </div>
          <div className="footer__menu">
            <h3 className="footer__blog_title">Menu</h3>
            <Link to="/" className="footer_links">
              Latest
            </Link>
            <Link to="/" className="footer_links">
              Coming Soon
            </Link>
            <Link to="/profile" className="footer_links">
              Featured movies
            </Link>
          </div>
          <div className="footer__menu">
            <h3 className="footer__blog_title">Contact Us</h3>
            <Link to="/" className="footer_links">
              <IoLocationOutline className="footer_content_icon" /> Armenia
              Gyumri Gayi1 Street
            </Link>
            <a href="tel:+37494558806" className="footer_links">
              <FiPhoneCall className="footer_content_icon" /> +37494558806
              031265563
            </a>
            <a href="mailto:Fmovie.cineam@gmail.com" className="footer_links">
              <TfiEmail className="footer_content_icon" />
              Fmovie.cineam@gmail.com
            </a>
          </div>
        </div>
        <div className="footer__orange_line" />
        <div className="footer__soc_container">
          <div className="footer__soc_copy">
            <span>Copyright</span>
            <CgCopyright className="footer__copy" />
            <span>2023Fmovie. Cinema</span>
          </div>
          <div className="footer__follow">
            <span className="footer_fol">Follow Us</span>
            <div className="footer__soc_icons">
              <a
                href="https://www.facebook.com/"
                className="footer__soc_link"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="footer__soc_icon bo" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="footer__soc_link"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram className="footer__soc_icon" />
              </a>
              <a
                href="https://twitter.com/"
                className="footer__soc_link"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter className="footer__soc_icon bo" />
              </a>
              <a
                href="https://www.google.com/"
                className="footer__soc_link"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineChrome className="footer__soc_icon" />
              </a>
            </div>
          </div>
          <div className="footer__stores">
            <a
              href="https://play.google.com/"
              target="_blank"
              rel="noreferrer"
              className="footer__stores_link  mr-30"
            >
              <img
                src={google_play}
                alt="google_play"
                className="footer__stores_img"
              />
            </a>
            <a
              href="https://www.apple.com/ru/app-store/"
              target="_blank"
              rel="noreferrer"
              className="footer__stores_link"
            >
              <img
                src={app_store}
                alt="app_store"
                className="footer__stores_img"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
