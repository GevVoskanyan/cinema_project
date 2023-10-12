import React from 'react';
import './AdminAddMovie.scss';
import AddMovieMain from '../../common/AddMovieMain/AddMovieMain';
import AddMovieDetails from '../../common/AddMovieDetails/AddMovieDetails';

function AdminAddMovie() {
  return (
    <div className="add_move">
      <div className="add_move_users">
        <h4 className="add_move_users_title">Movie List</h4>
        <span className="add_move_users_count">1500 User</span>
      </div>
      <AddMovieMain />
      <AddMovieDetails />
      <button type="button" className="btn btn_orange">Done</button>
    </div>
  );
}
export default AdminAddMovie;
