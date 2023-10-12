import React from 'react';
import './AdminUploadActors.scss';
import { CgSoftwareUpload } from 'react-icons/cg';

function AdminUploadActors(props) {
  return (
    <div className="add_details_left_content_container">
      <label htmlFor="acter_avatar" className="add_details_left_content_container_avatar">
        <CgSoftwareUpload
          className="add_details_left_content_container_avatar_icon"
        />
      </label>
      <input
        id="acter_avatar"
        name="acter_avatar"
        type="file"
        style={{ display: 'none' }}
      />
      <input type="text" placeholder="Full Name" className="add_details_left_content_container_inp" />
    </div>
  );
}

export default AdminUploadActors;
