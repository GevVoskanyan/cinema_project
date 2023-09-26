import React, { useState } from 'react';
import Slider from 'react-slick';

import RatingComponent from '../RatingComponent/RatingComponent';
import './CommentsSlides.scss';

function CommentsSlides(props) {
  const [expandedMap, setExpandedMap] = useState({});
  const { users } = props;

  const toggleExpanded = (userId) => {
    setExpandedMap((prevExpandedMap) => ({
      ...prevExpandedMap,
      [userId]: !prevExpandedMap[userId],
    }));
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {users.map((u) => (
        <div key={u.id} className="comments_slider">
          <div className="comments_slider_item">
            <div className="comments_slider_rating">
              <RatingComponent value={u.stars} size={35} />
            </div>
            <div className="comments_slider_comment">
              <div
                style={{
                  maxHeight: expandedMap[u.id] ? 'none' : '4.5em',
                  overflow: 'hidden',
                }}
              >
                {u.comment}
              </div>
              {u.comment.length > 150 && (
                <button
                  type="button"
                  onClick={() => toggleExpanded(u.id)}
                  className="comments_slider_btn"
                >
                  {expandedMap[u.id] ? 'Less' : 'More'}
                </button>
              )}
            </div>
            <div className="comments_slider_user_info_container">
              <div className="comments_slider_user_info">
                <img src={u.user_img} alt={u.name} />
                <h4 className="comments_slider_user_info_name">{u.name}</h4>
                <span className="comments_slider_user_info_voters">
                  {u.voters} Voters
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default CommentsSlides;
