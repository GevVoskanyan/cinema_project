import React from 'react';
import './AdminUsersList.scss';
import { logDOM } from '@testing-library/react';
import { usersList } from '../../data/data';
import AdminUserCart from '../../common/AdminUserCart/AdminUserCart';

function AdminUsersList(props) {
  return (
    <div className="users_list">
      <div className="users_list_users">
        <h4 className="users_list_users_title">Movie List</h4>
        <span className="users_list_users_count">1500 User</span>
      </div>
      <div className="users_list_content_titles">
        <h3 className="users_list_content_title us">User</h3>
        <h3 className="users_list_content_title fi">Films</h3>
      </div>
      <div className="users_list_content">{usersList.map((user) => (
        <React.Fragment key={user.id}>
          <AdminUserCart userName={user.userName} avatar={user.avatar} films={user.films} />
        </React.Fragment>
      ))}
      </div>
    </div>
  );
}

export default AdminUsersList;
