import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Wrapper from '../Wrapper/Wrapper';
import './TicketsFinal.scss';
import BuyTicketSteps from '../../common/BuyTicketSteps/BuyTicketSteps';
import { latest } from '../../data/data';
import NotFound from '../NotFound/NotFound';
import Ticket from '../../common/Ticket/Ticket';

function TicketsFinal(props) {
  const { filmId } = useParams();
  const film = latest.find((f) => f.id.toString() === filmId.toString());
  if (!film) {
    return <NotFound />;
  }
  return (
    <section className="tickets_final">
      <Wrapper>
        <div className="tickets_final_container">
          <div className="orange__line" />
          <BuyTicketSteps />
          <h2 className="tickets_final_title">Hooray!</h2>
          <Ticket film={film} />
          <div className="tickets_final_email_container">
            <h3 className="tickets_final_email_title">SEND YOUR EMAIL?</h3>
            <Link to="/" className="btn btn_orange">
              Send
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default TicketsFinal;
