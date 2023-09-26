import React from 'react';
import './HomeFilms.scss';
import Slider from 'react-slick';
import FilmCart from '../../common/FilmCart/FilmCart';

function HomeFilms(props) {
  const { data, title } = props;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home_films">
      <div className="home_films_container">
        <h2 className="home_films_title">{title}</h2>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.id}>
              <FilmCart data={d} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomeFilms;
