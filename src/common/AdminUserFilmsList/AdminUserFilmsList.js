import React from 'react';
import './AdminUserFilmsList.scss';

function AdminUserFilmsList({ films }) {
  return (
    <div className="films_list">
      {films.map((f) => (
        <figure className="films_list_item" key={f.id}>
          <img src={f.img} alt="" className="films_list_item_img" />
          <figcaption>{f.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default AdminUserFilmsList;
