import React from 'react';
import './AdminReviewList.scss';
import { reviewsList } from '../../data/data';
import AdminReviewCart from '../../common/AdminReviewCart/AdminReviewCart';

function AdminReviewList(props) {
  return (
    <div className="review_list">
      <div className="review_list_reviews">
        <h4 className="review_list_reviews_title">Review List</h4>
        <span className="review_list_reviews_count">1500 Tickets</span>
      </div>
      <div className="review_list_rows">
        <div className="review_list_row sm">Photo</div>
        <div className="review_list_row">Full Name</div>
        <div className="review_list_row">Date</div>
        <div className="review_list_row lrg">Review</div>
      </div>
      {reviewsList.map(((r) => (
        <React.Fragment key={r.id}>
          <AdminReviewCart review={r} />
        </React.Fragment>
      )))}
      <button type="button" className="more_btn">More</button>
    </div>
  );
}

export default AdminReviewList;
