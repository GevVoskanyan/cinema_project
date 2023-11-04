import React from "react";
import { Link } from "react-router-dom";
import { PiUserCircleThin } from "react-icons/pi";

import "./Header.scss";

import { useSelector } from "react-redux";
import logo from "./img/logo/site_logo.png";

function Header() {
  const { user, registrationToken } = useSelector((store) => store.registration);
  return (
    <header className="header">
      <div className="header__container">
        <figure className="header__logo_container">
          <img src={logo} alt="logo" className="header__logo" />
        </figure>
        <nav className="header__nav_bar">
          <ul className="header__nav_bar_list">
            <li className="header__nav_bar_item">
              <Link to="/" className="header__nav_bar_link">
                Home
              </Link>
            </li>
            <li className="header__nav_bar_item">
              <Link to="/catalog" className="header__nav_bar_link">
                Catalog
              </Link>
            </li>
            <li className="header__nav_bar_item">
              <Link to="/contact" className="header__nav_bar_link">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header_btns">
          {registrationToken ? (
            <button type="button" className="user_btn">
              <PiUserCircleThin className="user_btn_icon" />
            </button>
          ) : (
            <>
              <Link to="/sign-in" className="header__sign-in">
                Sign in
              </Link>
              <Link to="/sign-up" className="header__sign-up btn">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
