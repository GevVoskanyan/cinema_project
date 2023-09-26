import React from 'react';
import './AdminDashboard.scss';
import SaledTicketsCart from '../../common/SaledTicketsCart/SaledTicketsCart';

function AdminDashboard(props) {
  return (
    <div className="admin_dashboard">
      <div className="admin_dashboard_tickets">
        <h4 className="admin_dashboard_tickets_title">Tickets</h4>
        <span className="admin_dashboard_tickets_count">1500 tickets</span>
      </div>
      <div className="admin_dashboard_content">
        <div className="admin_dashboard_content" />
        <div className="admin_dashboard_content_titles">
          <h4 className="admin_dashboard_content_title">Number</h4>
          <h4 className="admin_dashboard_content_title">Full Name</h4>
          <h4 className="admin_dashboard_content_title">Date</h4>
          <h4 className="admin_dashboard_content_title">Price</h4>
          <div className="admin_dashboard_content_title te" />
        </div>
        <SaledTicketsCart />
        <button type="button" className="admin_dashboard_more">More</button>
      </div>
    </div>
  );
}

export default AdminDashboard;
