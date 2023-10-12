import React from 'react';
import './AddMovieDetails.scss';
import { CgSoftwareUpload } from 'react-icons/cg';
import AdminUploadActors from '../AdminUploadActors/AdminUploadActors';

function AddMovieDetails(props) {
  return (
    <div className="add_details">
      <div className="add_details_left">
        <h3 className="add_details_left_title">Acters Name & Photo</h3>
        <div className="add_details_left_content">
          <AdminUploadActors />
          <AdminUploadActors />
          <AdminUploadActors />
          <AdminUploadActors />
          <AdminUploadActors />
        </div>
      </div>
      <div className="add_details_right">
        <h3 className="add_details_right_title">Details</h3>
        <div className="add_details_right_container">
          <input type="text" placeholder="Detalis" className="add_details_right_container_inp" />
          <input type="text" placeholder="Detalis" className="add_details_right_container_inp" />
          <input type="text" placeholder="Detalis" className="add_details_right_container_inp" />
          <input type="text" placeholder="Detalis" className="add_details_right_container_inp" />
        </div>
      </div>
    </div>
  );
}

export default AddMovieDetails;
