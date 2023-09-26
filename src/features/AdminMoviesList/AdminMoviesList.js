import React from 'react';
import './AdminMoviesList.scss';
import { moviesList } from '../../data/data';
import AdminMovieCart from '../../common/AdminMovieCart/AdminMovieCart';

function AdminMoviesList(props) {
  return (
    <div className="movies_list">
      <div className="movies_list_users">
        <h4 className="movies_list_users_title">Movie List</h4>
        <span className="movies_list_users_count">1500 User</span>
      </div>
      <div className="movies_list_items">
        {moviesList.map((movie) => (
          <React.Fragment key={movie.id}>
            <AdminMovieCart movie={movie} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default AdminMoviesList;
