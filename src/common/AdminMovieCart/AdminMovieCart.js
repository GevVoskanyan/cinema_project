import React from 'react';
import './AdminMovieCart.scss';

function AdminMovieCart({ movie }) {
  return (
    <div className="movie_card">
      <figure className="movie_card__image_container">
        <img src={movie.img} alt={movie.title} className="movie_card__image" />
      </figure>
      <div className="movie_card_title">{movie.title}</div>
    </div>
  );
}

export default AdminMovieCart;
