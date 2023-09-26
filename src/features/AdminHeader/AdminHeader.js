import React from 'react';
import './AdminHeader.scss';
import { FaUserTie } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import img from '../../assets/images/logo/img.png';

function AdminHeader(props) {
  return (
    <header className="admin__header">
      <div className="admin__header_container">
        <div className="admin__header_content">
          <figure className="admin_header_logo">
            <img src={img} alt="site_logo" className="admin_header_logo_img" />
          </figure>
          <div className="admin__header_user_container">
            <div className="admin__header_user_icon_container">
              <FaUserTie className="admin__header_user_icon" />
            </div>
            <button type="button" className="admin__header_user_dropdown">
              <BsChevronDown className="admin__header_user_dropdown" />
            </button>
            <div />
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
