import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';

function RatingComponent(props) {
  const ratingChanged = (newRating) => {
    // console.log(newRating);
  };
  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={props.size || 24}
      isHalf
      emptyIcon={<BsStar />}
      halfIcon={<BsStarHalf />}
      fullIcon={<BsStarFill />}
      activeColor="#ffd700"
      value={props.value || null}
    />
  );
}

export default RatingComponent;
