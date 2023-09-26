import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { buyTickets } from '../../data/data';
import './SaledTicketsCart.scss';

function SaledTicketsCart(props) {
  return (
    <>
      {buyTickets.map((t) => (
        <div className="saled_tickets" key={t.id}>
          <div className="saled_tickets_item">{t.number}</div>
          <div className="saled_tickets_item">{t.userName}</div>
          <div className="saled_tickets_item">{t.date}</div>
          <div className="saled_tickets_item">{t.price}</div>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button type="button" className="saled_tickets_del"><RiDeleteBin5Line /></button>
        </div>
      ))}
    </>
  );
}

export default SaledTicketsCart;
