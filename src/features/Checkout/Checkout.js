import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Wrapper from '../Wrapper/Wrapper';
import './Checkout.scss';
import BuyTicketSteps from '../../common/BuyTicketSteps/BuyTicketSteps';
import { latest } from '../../data/data';
import NotFound from '../NotFound/NotFound';
import FilmOrder from '../../common/FilmOrder/FilmOrder';
import PersonalDetails from '../../common/PersonalDetails/PersonalDetails';
import PaymentDetails from '../../common/PaymentDetails/PaymentDetails';

function Checkout(props) {
  const { filmId } = useParams();
  const film = latest.find((f) => f.id.toString() === filmId.toString());

  if (!film) {
    return <NotFound />;
  }

  return (
    <section className="checkout">
      <Wrapper>
        <div className="checkout_container">
          <div className="orange__line" />
          <BuyTicketSteps />
          <h2 className="checkout_title">Review order</h2>
          <FilmOrder film={film} />
          <PersonalDetails />
          <PaymentDetails />
          <div className="checkout_next">
            <Link to={`/tickets/final/${film.id}`} className="btn btn_orange">
              Next
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Checkout;
