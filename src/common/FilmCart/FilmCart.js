import React from 'react';
import { Link } from 'react-router-dom';
import RatingComponent from '../RatingComponent/RatingComponent';
import './FilmCart.scss';

function FilmCart({ data }) {
  return (
    <Link key={data.id} className="films_slides" to={`/film/${data.id}`}>
      <figure className="films_slides_img">
        <img src={data.img} alt="data.title" />
      </figure>
      <div className="films_slides_info">
        <div className="films_slides_title">{data.title}</div>
        <div className="films_slides_rating_voters">
          <RatingComponent />
          <span className="films_slides_voters">180k Voters</span>
        </div>
      </div>
    </Link>
  );
}

export default FilmCart;
