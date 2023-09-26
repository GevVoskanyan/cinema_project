import React from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';

function NotFound(props) {
  return (
    <div className="not_found">
      <div className="not_found_container">
        <h3 className="not_found_title">Not Found</h3>
        <Link to="/" className="not_found_btn btn">
          Go To Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
