import React from 'react';
import './AdminUserInfo.scss';

function AdminUserInfo(props) {
  const { userName, avatar } = props;
  return (
    <div className="user_info">
      <figure className="user_info_avatar_container">
        <img src={avatar} alt={userName} className="user_info_avatar" />
      </figure>
      <div className="user_info_name">{userName}</div>
    </div>
  );
}

export default AdminUserInfo;
