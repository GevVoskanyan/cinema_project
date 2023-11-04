import React from 'react';
import './ShowSeatPlace.scss';
import { AiOutlineClose } from 'react-icons/ai';

function ShowSeatPlace({
  row, seat, price, onClick
}) {
  const rowLabels = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  return (
    <div className='seat_place'>
      <button type='button' className='seat_place_btn' onClick={onClick}>
        <AiOutlineClose />
      </button>
      <div className='seat_place_container'>
        <div className='seat_place_row'>
          <strong>{rowLabels[row - 1].toLocaleUpperCase()}</strong> row
        </div>
        <div className='seat_place_seat'>
          <strong>{seat}</strong> seat
        </div>
        <div className='seat_place_price'>
          <strong>$</strong>
          {price}
        </div>
      </div>
    </div>
  );
}

export default ShowSeatPlace;
