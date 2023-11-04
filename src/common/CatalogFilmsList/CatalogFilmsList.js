import React from "react";
import FilmCart from "../FilmCart/FilmCart";
import { latest } from "../../data/data";
import "./CatalogFilmsList.scss";

function CatalogFilmsList(props) {
  return (
    <div className="catalog_films_list">
      {latest.map((d) => (
        <div className="catalog_films_list_item" key={d.id}>
          <FilmCart data={d} />
        </div>
      ))}
    </div>
  );
}

export default CatalogFilmsList;
