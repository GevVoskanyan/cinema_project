import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminNavBar.scss';

function AdminNavBar(props) {
  return (
    <ul className="admin__nav_bar">
      <li className="admin__nav_bar_item" />
      <li className="admin__nav_bar_item ">
        <NavLink to="dashboard" className="admin__nav_bar_link sec">Dashboard</NavLink>
      </li>
      <li className="admin__nav_bar_item">
        <NavLink to="movies-list" className="admin__nav_bar_link thir">Movie List</NavLink>
      </li>
      <li className="admin__nav_bar_item">
        <NavLink to="add-movie" className="admin__nav_bar_link fouth">Add Movie</NavLink>
      </li>
      <li className="admin__nav_bar_item">
        <NavLink to="users-list" className="admin__nav_bar_link five">User List</NavLink>
      </li>
      <li className="admin__nav_bar_item">
        <NavLink to="review-list" className="admin__nav_bar_link six">Review List</NavLink>
      </li>
    </ul>
  );
}

export default AdminNavBar;
