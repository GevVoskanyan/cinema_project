import React from 'react';
import './AboutSeats.scss';

function AboutSeats(props) {
  return (
    <div className="hall__desc">
      <div className="hall__desc_user_seat">
        <div className="hall__desc_user_seat_circle circle" />
        <span className="hall__desc_user_seat_circle_text">Your Seat</span>
      </div>
      <div className="hall__desc_user_seat">
        <div className="hall__desc_available_seat_circle circle" />
        <span className="hall__desc_user_seat_circle_text">Available</span>
      </div>
      <div className="hall__desc_user_seat">
        <div className="hall__desc_booked_seat_circle circle" />
        <span className="hall__desc_user_seat_circle_text">Booked</span>
      </div>
    </div>
  );
}

export default AboutSeats;
