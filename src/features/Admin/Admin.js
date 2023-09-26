import React from 'react';
import './Admin.scss';
import Footer from '../../layouts/Footer/Footer';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import AdminContent from '../AdminContent/AdminContent';

function Admin(props) {
  return (
    <div className="admin">
      <AdminHeader />
      <AdminContent />
      <Footer />
    </div>
  );
}

export default Admin;
