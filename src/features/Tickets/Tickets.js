import React from 'react';
import './Tickets.scss';
import { Link, useParams } from 'react-router-dom';
import Wrapper from '../Wrapper/Wrapper';
import BuyTicketSteps from '../../common/BuyTicketSteps/BuyTicketSteps';
import { latest } from '../../data/data';
import NotFound from '../NotFound/NotFound';
import RatingComponent from '../../common/RatingComponent/RatingComponent';
import TicketDateSelects from '../../common/TicketDateSelects/TicketDateSelects';

function Tickets(props) {
  const { filmId } = useParams();
  const film = latest.find((f) => (f.id = filmId));

  if (!filmId) {
    return <NotFound />;
  }

  return (
    <section className="tickets">
      <Wrapper>
        <div className="tickets__container">
          <div className="orange__line" />
          <BuyTicketSteps />
          <section className="tickets_film_content">
            <figure className="tickets_film_content_img_container">
              <img
                src={film.img}
                alt="film.title"
                className="tickets_film_content_img"
              />
            </figure>
            <div className="tickets_film_content_desc">
              <div className="tickets_film_content_desc_main">
                <div className="tickets_film_content_desc_title_hours">
                  <h2 className="tickets_film_content_desc_title">
                    On the Edge
                  </h2>
                </div>
                <div className="tickets_film_content_desc_rating">
                  <RatingComponent value={film.rating} size={27} />
                </div>
              </div>
              <span className="tickets_film_content_desc_hours">
                2h. 13min.
              </span>
              <p className="tickets_film_content_desc_text">
                In front of a young climber, Kelly, her friend is killed. The
                heroine manages to record it on video, but the criminals notice
                her. The girl runs to the rock in the hope that the killers
                won&apos;t be able to find her there. However, the climb to the top
                turns out to be unpredictable, and Kelly realizes that she has
                fallen into a real trap.
              </p>
              <div className="tickets_film_content_desc_cinema">
                Fmovie cinema
              </div>
            </div>
          </section>
          <TicketDateSelects />
          <Link
            to={`/tickets/seats/${film.id}`}
            className="tickets_next btn btn_orange"
          >
            Next
          </Link>
        </div>
      </Wrapper>
    </section>
  );
}

export default Tickets;
