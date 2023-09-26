import React from 'react';
import _ from 'lodash';
import './Ticket.scss';

function Ticket({ film }) {
  // eslint-disable-next-line no-shadow
  const arr = Array.from({ length: 80 }, (_, index) => index + 1);
  return (
    <div className="tickets_final_content">
      <div className="tickets_final_content_items">
        <figure className="tickets_final_content_figure">
          <img
            src={film.img}
            alt={film.title}
            className="tickets_final_content_img"
          />
        </figure>
        <div className="tickets_final_content_info">
          <div className="pd-20">
            <div className="tickets_final_content_info_title_price">
              <h2 className="tickets_final_content_info_title">On the Edge</h2>
              <div className="tickets_final_content_info_price">$50</div>
            </div>
            <div className="tickets_final_content_info_time">2h. 13min.</div>
            <div className="tickets_final_content_info_theater">Theater</div>
            <div className="tickets_final_content_info_theater_name">
              Play Cinema San Jose, CA
            </div>
            <div className="black_line" />
            <div className="tickets_final_content_info_date_d_time">
              <div className="tickets_final_content_info_date_container">
                <span className="tickets_final_content_info_date_title">
                  Date
                </span>
                <div className="tickets_final_content_info_date">
                  Sun.-Oct.24
                </div>
              </div>
              <div className="tickets_final_content_info_date_container">
                <span className="tickets_final_content_info_date_title">
                  Time
                </span>
                <div className="tickets_final_content_info_date">21:00PM</div>
              </div>
            </div>
            <div className="black_line" />
            <div className="tickets_final_content_info_place">
              <div className="tickets_final_content_info_place_row">A</div>
              <div className="tickets_final_content_info_place_seat">15</div>
            </div>
          </div>
        </div>
      </div>
      <div className="tickets_final_content_qr">
        {arr.map((line) => (
          <span className="tickets_final_content_qr_line" key={_.uniqueId} />
        ))}
      </div>
    </div>
  );
}

export default Ticket;
