import React from 'react';
import './AdminMoviesList.scss';
import { useNavigate } from 'react-router-dom';
import { moviesList } from '../../data/data';
import AdminMovieCart from '../../common/AdminMovieCart/AdminMovieCart';

function AdminMoviesList(props) {
  const navigate = useNavigate();
  return (
    <div className="movies_list">
      <div className="movies_list_users">
        <h4 className="movies_list_users_title">Movie List</h4>
        <span className="movies_list_users_count">1500 User</span>
      </div>
      <div className="movies_list_container">
        <button type="button" className="movies_list_add_movie" onClick={() => navigate('/admin/add-movie')}>+</button>
        <div className="movies_list_items">
          {moviesList.map((movie) => (
            <React.Fragment key={movie.id}>
              <AdminMovieCart movie={movie} />
            </React.Fragment>
          ))}
        </div>
      </div>
      <button type="button" className="more_btn">More</button>
    </div>
  );
}

export default AdminMoviesList;
