import React from 'react';
import './AddMovieMain.scss';
import { CgSoftwareUpload } from 'react-icons/cg';
import RatingComponent from '../RatingComponent/RatingComponent';

function AddMovieMain() {
  return (
    <div className="add_movie_main">
      <div className="add_movie_main_left">
        <label
          htmlFor="film_image"
          className="add_movie_main_left_upload_label"
        >
          <span className="add_movie_main_left_upload_label_t">Photo</span>
          <CgSoftwareUpload className="add_movie_main_left_upload" />
        </label>
        <input
          type="file"
          id="film_image"
          name="film_image"
          style={{ display: 'none' }}
        />
        <input
          type="text"
          placeholder="Film Name"
          className="add_movie_main_left_inp"
        />
        <input
          type="text"
          placeholder="Category"
          className="add_movie_main_left_inp"
        />
        <input
          type="text"
          placeholder="Hour"
          className="add_movie_main_left_inp"
        />
        <RatingComponent size={40} />
      </div>
      <div className="add_movie_main_rigth">
        <textarea
          cols="30"
          rows="10"
          className="add_movie_main_rigth_txt"
          placeholder="Description"
        />
      </div>
    </div>
  );
}
export default AddMovieMain;
