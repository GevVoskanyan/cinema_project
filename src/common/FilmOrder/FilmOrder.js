import React from 'react';
import './FilmOrder.scss';

function FilmOrder({ film }) {
  // console.log('🚀 ~ file: FilmOrder.js:5 ~ FilmOrder ~ film:', film);
  return (
    <div className="film_order">
      <figure className="film_order_img_container">
        <img src={film.img} alt={film.title} className="film_order_img" />
      </figure>
      <div className="film_order_desc">
        <h3 className="film_order_desc_title">{film.title}</h3>
        <div className="film_order_desc_cinema bg-white">Play Cinema, S SA</div>
        <div className="film_order_desc_date">
          <div className="bg-white film_order_desc_date_item">
            Sun.- Oct. 24
          </div>
          <div className="bg-white film_order_desc_date_item">21:00 PM</div>
        </div>
        <div className="film_order_desc_cinema bg-white">1 Ticket</div>
        <div className="film_order_desc_date">
          <div className="bg-white film_order_desc_date_item">A</div>
          <div className="bg-white film_order_desc_date_item">15</div>
        </div>
        <div className="film_order_desc_cinema price bg-white">$50</div>
      </div>
    </div>
  );
}

export default FilmOrder;
