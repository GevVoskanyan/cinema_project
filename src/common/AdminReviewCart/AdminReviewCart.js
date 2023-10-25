import React from 'react';
import './AdminReviewCart.scss';
import RatingComponent from '../RatingComponent/RatingComponent';

function AdminReviewCart({ review }) {
  console.log(review);
  return (
    <div className="review">
      <input
        type="checkbox"
        style={{
          width: 34,
          height: 34,
          marginRight: '10px',
        }}
      />
      <div className="review_cart">
        <figure className="review_cart_avatar_container">
          <img src={review.avatar} alt={review.firstName} className="review_cart_avatar" />
        </figure>
        <div className="review_cart_userName">{review.userName}</div>
        <div className="review_cart_userName">{review.date}</div>
        <div>
          <RatingComponent value={review.rating} />
          <p className="review_cart_desc">{review.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminReviewCart;
