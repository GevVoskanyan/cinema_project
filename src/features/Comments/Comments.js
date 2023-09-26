import React from 'react';
import './Comments.scss';
import { Link } from 'react-router-dom';
import CommentsSlides from '../../common/CommentsSlides/CommentsSlides';
import user_1 from './img/user_1.png';
import user_2 from './img/user_2.png';
import user_3 from './img/user_3.png';

const users = [
  {
    name: 'Jon Tomlinsson',
    comment: `This is the best movie I have ever seen. I've watched it for 
    the hundredth time, but every time it's like the first. In the end, it 
    grows to tears, no matter how many times`,
    id: 1,
    voters: '180k',
    stars: 5,
    user_img: `${user_1}`,
  },
  {
    name: 'Frank Skorpion',
    comment: `A very strong film, it was rightly said that a person should not be pitied, 
    but one should simply live as if nothing had happened, not create the same discomfort 
    and negative thoughts. Amazing movie, I'm watching it for the 3rd time 
    and will watch it again and again`,
    id: 2,
    voters: '100k',
    stars: 4,
    user_img: `${user_2}`,
  },
  {
    name: 'Rozmari Darnsmore',
    comment: 'Cool movie',
    id: 3,
    voters: '50k',
    stars: 5,
    user_img: `${user_3}`,
  },
  {
    name: 'Jon Tomlinsson',
    comment: `This is the best movie I have ever seen. I've watched it for 
    the hundredth time, but every time it's like the first. In the end, it 
    grows to tears, no matter how many times`,
    id: 4,
    voters: '180k',
    stars: 5,
    user_img: `${user_1}`,
  },
  {
    name: 'Frank Skorpion',
    comment: `A very strong film, it was rightly said that a person should not be pitied, 
    but one should simply live as if nothing had happened, not create the same discomfort 
    and negative thoughts. Amazing movie, I'm watching it for the 3rd time 
    and will watch it again and again`,
    id: 5,
    voters: '100k',
    stars: 4,
    user_img: `${user_2}`,
  },
  {
    name: 'Rozmari Darnsmore',
    comment: 'Cool movie',
    id: 6,
    voters: '50k',
    stars: 5,
    user_img: `${user_3}`,
  },
  {
    name: 'Jon Tomlinsson',
    comment: `This is the best movie I have ever seen. I've watched it for 
    the hundredth time, but every time it's like the first. In the end, it 
    grows to tears, no matter how many times`,
    id: 7,
    voters: '180k',
    stars: 5,
    user_img: `${user_1}`,
  },
  {
    name: 'Frank Skorpion',
    comment: `A very strong film, it was rightly said that a person should not be pitied, 
    but one should simply live as if nothing had happened, not create the same discomfort 
    and negative thoughts. Amazing movie, I'm watching it for the 3rd time 
    and will watch it again and again`,
    id: 8,
    voters: '100k',
    stars: 4,
    user_img: `${user_2}`,
  },
  {
    name: 'Rozmari Darnsmore',
    comment: 'Cool movie',
    id: 9,
    voters: '50k',
    stars: 5,
    user_img: `${user_3}`,
  },
];
function Comments(props) {
  return (
    <>
      <div className="blur" />
      <div className="comments">
        <div className="comments__container">
          <div className="comments__first_blog">
            <h1 className="comments__title">What people say</h1>
            <Link to="/comments" className="comments_link">
              See all
            </Link>
          </div>
          <div className="slicks" />
          <div className="comments__slider_blog">
            <CommentsSlides users={users} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
