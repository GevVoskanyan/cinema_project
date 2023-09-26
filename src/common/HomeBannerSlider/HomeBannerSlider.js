import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import banner_img from './img/banner_img.png';

import actor_1 from './img/actor_1.png';
import actor_2 from './img/actor_2.png';
import actor_3 from './img/actor_3.png';
import actor_4 from './img/actor_4.png';
import actor_5 from './img/actor_5.png';
import './HomeBannerSlider.scss';
import RatingComponent from '../RatingComponent/RatingComponent';

const slides = [
  { title: 'MUUNFALL', img: `${banner_img}`, id: 1 },
  { title: 'MUUNFALL', img: `${banner_img}`, id: 2 },
  { title: 'MUUNFALL', img: `${banner_img}`, id: 3 },
  { title: 'MUUNFALL', img: `${banner_img}`, id: 4 },
];

function HomeBannerSlider(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {slides.map((s) => (
          <div key={s.id} className="slider">
            <div className="slider_left_side">
              <img src={s.img} alt="" className="slider_left_side_img" />
            </div>
            <div className="slider_right_side">
              <h1 className="slider_right_side_title">{s.title}</h1>
              <RatingComponent />
              <span className="slider_right_side_voters">180k Voters</span>
              <div className="slider_right_side_actors">
                <figure className="slider_right_side_actor_container">
                  <img
                    src={actor_1}
                    alt="actor"
                    className="slider_right_side_actor"
                  />
                </figure>
                <figure className="slider_right_side_actor_container">
                  <img
                    src={actor_2}
                    alt="actor"
                    className="slider_right_side_actor"
                  />
                </figure>
                <figure className="slider_right_side_actor_container">
                  <img
                    src={actor_3}
                    alt="actor"
                    className="slider_right_side_actor"
                  />
                </figure>
                <figure className="slider_right_side_actor_container">
                  <img
                    src={actor_4}
                    alt="actor"
                    className="slider_right_side_actor"
                  />
                </figure>
                <figure className="slider_right_side_actor_container">
                  <img
                    src={actor_5}
                    alt="actor"
                    className="slider_right_side_actor"
                  />
                </figure>
              </div>
              <div className="slider_right_side_navigation">
                <div className="slider_right_side_navigation_watch">
                  Watch Trailer
                </div>
                <Link
                  to="/play/:movie-id"
                  className="slider_right_side_navigation_play btn"
                >
                  Play now
                </Link>
                <Link
                  to="/tickets"
                  className=" slider_right_side_navigation_ticket btn"
                >
                  Get Tickets
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeBannerSlider;
