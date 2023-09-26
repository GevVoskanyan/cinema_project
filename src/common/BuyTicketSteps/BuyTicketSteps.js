import React from 'react';
import './BuyTicketSteps.scss';
import { BsCheckLg } from 'react-icons/bs';

function BuyTicketSteps(props) {
  return (
    <div className="ticket_steps">
      <div className="ticket_steps_container">
        <div className="ticket_steps_circle active_1">
          <BsCheckLg className="ticket_steps_circle_icon f_i" />
        </div>
        <div className="ticket_steps_circle_title">
          <span className="ticket_steps_circle_title_num">1. </span> Tickets
        </div>
      </div>
      <div className="ticket_steps_line" />
      <div className="ticket_steps_container">
        <div className="ticket_steps_circle active_2">
          <BsCheckLg className="ticket_steps_circle_icon s_i" />
        </div>
        <div className="ticket_steps_circle_title">
          <span className="ticket_steps_circle_title_num">2. </span> Seats
        </div>
      </div>
      <div className="ticket_steps_line" />
      <div className="ticket_steps_container">
        <div className="ticket_steps_circle active_3">
          <BsCheckLg className="ticket_steps_circle_icon t_i" />
        </div>
        <div className="ticket_steps_circle_title">
          <span className="ticket_steps_circle_title_num">3. </span> Checkout
        </div>
      </div>
    </div>
  );
}

export default BuyTicketSteps;
