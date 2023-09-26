import { Outlet } from 'react-router-dom';
import React from 'react';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import './AdminContent.scss';

function AdminContent(props) {
  return (
    <div className="admin_content">
      <div className="admin_content_container">
        <AdminNavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminContent;
