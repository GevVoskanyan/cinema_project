import React from 'react';
import './AdminUserCart.scss';
import AdminUserInfo from '../AdminUserInfo/AdminUserInfo';
import AdminUserFilmsList from '../AdminUserFilmsList/AdminUserFilmsList';

function AdminUserCart(props) {
  const { userName, avatar, films } = props;
  return (
    <div className="user_cart">
      <AdminUserInfo userName={userName} avatar={avatar} />
      <AdminUserFilmsList films={films} />
    </div>
  );
}

export default AdminUserCart;
