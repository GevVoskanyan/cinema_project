import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Wrapper from '../Wrapper/Wrapper';
import SearchBar from '../SearchBar/SearchBar';
import { latest } from '../../data/data';
import NotFound from '../NotFound/NotFound';
import RatingComponent from '../../common/RatingComponent/RatingComponent';
import actor_1 from './img/actor_1.png';
import actor_2 from './img/actor_2.png';
import actor_3 from './img/actor_3.png';
import actor_4 from './img/actor_4.png';
import actor_5 from './img/actor_5.png';
import about_film_1 from './img/about_film_1.png';
import about_film_2 from './img/about_film_2.png';
import about_film_3 from './img/about_film_3.png';
import './SingleFilm.scss';
import Comments from '../Comments/Comments';
import HomeFilms from '../HomeFilms/HomeFilms';

function SingleFilm(props) {
  const { id } = useParams();
  const film = latest.find((f) => f.id.toString() === id.toString());

  if (!film) {
    return <NotFound />;
  }
  return (
    <section className="single_film">
      <Wrapper>
        <div className="single_film_container">
          <SearchBar />
          <div className="orange__line" />
          <div className="single_film__content">
            <div className="single_film__content_title_rating">
              <div className="single_film__content_title">{film.title}</div>
              <div className="single_film__content_rating">
                <RatingComponent value={film.rating} />
                <div className="single_film__content_voters">
                  {film.voters} Voters
                </div>
              </div>
            </div>
            <div className="single_film_content_container">
              <div className="single_film_content_container_film_banner">
                <figure className="single_film_content_container_figure">
                  <img src={film.img} alt={film.title} />
                </figure>
                <div className="single_film_content_container_actors_container">
                  <figure className="single_film_content_container_actors_container_figure">
                    <img
                      src={actor_1}
                      alt="actor"
                      className="single_film_content_container_actors_container_img"
                    />
                  </figure>
                  <figure className="single_film_content_container_actors_container_figure">
                    <img
                      src={actor_2}
                      alt="actor"
                      className="single_film_content_container_actors_container_img"
                    />
                  </figure>
                  <figure className="single_film_content_container_actors_container_figure">
                    <img
                      src={actor_3}
                      alt="actor"
                      className="single_film_content_container_actors_container_img"
                    />
                  </figure>
                  <figure className="single_film_content_container_actors_container_figure">
                    <img
                      src={actor_4}
                      alt="actor"
                      className="single_film_content_container_actors_container_img"
                    />
                  </figure>
                  <figure className="single_film_content_container_actors_container_figure">
                    <img
                      src={actor_5}
                      alt="actor"
                      className="single_film_content_container_actors_container_img"
                    />
                  </figure>
                </div>
              </div>
              <div className="single_film_triller_container">
                <iframe
                  className="single_film_triller_container_iframe"
                  width="725"
                  height="400"
                  src="https://www.youtube.com/embed/tTwFeGArcrs"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <div className="single_film_triller_container_cadres">
                  <figure className="single_film_triller_container_cadre">
                    <img
                      src={about_film_1}
                      alt="cadres"
                      className="single_film_triller_container_cadre_img"
                    />
                  </figure>
                  <figure className="single_film_triller_container_cadre">
                    <img
                      src={about_film_2}
                      alt="cadres"
                      className="single_film_triller_container_cadre_img"
                    />
                  </figure>
                  <figure className="single_film_triller_container_cadre">
                    <img
                      src={about_film_3}
                      alt="cadres"
                      className="single_film_triller_container_cadre_img"
                    />
                  </figure>
                </div>
                <Link to="/" className="single_film_triller_container_view_all">
                  View all
                </Link>
              </div>
            </div>
          </div>
          <div className="single_film_desc">
            <div className="single_film_desc_details">
              <h3 className="single_film_desc_details_title">Detalis</h3>
              <div className="orange__line" />
              <div className="single_film_desc_details_content">
                <div className="single_film_desc_details_rows">
                  <div className="single_film_desc_details_rows_item">
                    Detalis
                  </div>
                  <div className="single_film_desc_details_rows_item">USA</div>
                </div>
                <div className="orange__line" />
                <div className="single_film_desc_details_rows">
                  <div className="single_film_desc_details_rows_item">
                    Language
                  </div>
                  <div className="single_film_desc_details_rows_item">
                    English
                  </div>
                </div>
                <div className="orange__line" />
                <div className="single_film_desc_details_rows">
                  <div className="single_film_desc_details_rows_item">
                    Relise Date
                  </div>
                  <div className="single_film_desc_details_rows_item">
                    15 Fab 2022
                  </div>
                </div>
                <div className="orange__line" />
                <div className="single_film_desc_details_rows">
                  <div className="single_film_desc_details_rows_item">
                    Director
                  </div>
                  <div className="single_film_desc_details_rows_item">
                    Jpn Smiths
                  </div>
                </div>
                <div className="orange__line" />
              </div>
            </div>
            <div className="single_film_desc_storyline">
              <h3 className="single_film_desc_storyline_title">Storyline</h3>
              <div className="orange__line" />
              <div className="single_film_desc_storyline_info">
                <p className="single_film_desc_storyline_info_text">
                  In front of a young climber, Kelly, her friend is killed. The
                  heroine manages to record it on video, but the criminals
                  notice her. The girl runs to the rock in the hope that the
                  killers won&lsquo;,t be able to find her there. However, the climb to
                  the top turns out to be unpredictable, and Kelly realizes that
                  she has fallen into a real trap.
                </p>
              </div>
            </div>
          </div>
          <div className="single_film_desc_line">
            <div className="orange__line" />
          </div>
          <Link
            className="btn btn_orange single_film_get_tickets"
            to={`/tickets/${film.id}`}
          >
            Get Tickets
          </Link>
          <Comments />
          <div className="mb-30" />
          <HomeFilms title="Similar movies" data={latest} />
        </div>
      </Wrapper>
    </section>
  );
}

export default SingleFilm;
