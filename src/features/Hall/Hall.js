import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Wrapper from '../Wrapper/Wrapper';
import BuyTicketSteps from '../../common/BuyTicketSteps/BuyTicketSteps';
import AboutSeats from '../../common/AboutSeats/AboutSeats';
import './Hall.scss';
import Seats from '../../common/Seats/Seats';

function Hall(props) {
  const { filmId } = useParams();

  return (
    <section className="seats">
      <Wrapper>
        <div className="seats__container">
          <div className="orange__line" />
          <BuyTicketSteps />
          <div className="hall">
            <AboutSeats />
            <Seats />
          </div>
          <div className="hall_btns">
            <button type="button" className="btn hall_btn_cancel">
              Cancel
            </button>
            <Link to={`/tickets/checkout/${filmId}`} className="btn btn_orange">
              Next
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Hall;
