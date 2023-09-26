import React, { useRef, useState } from 'react';
import './PersonalDetails.scss';
import { BiEditAlt } from 'react-icons/bi';

function PersonalDetails(props) {
  const [formData, setFormData] = useState({
    firstName: 'Tom',
    lastName: 'Tomlinsson',
    email: 'TomTomlinsson@mail.ru',
    phone: '812-345-5010',
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleChange = (key, value) => {
    formData[key] = value;
    setFormData({ ...formData });
  };

  return (
    <div className="personal">
      <h2 className="personal__title">Personal Details</h2>
      <form onSubmit={handleSubmit} className="personal__banner">
        <div className="personal__banner_inputs">
          <div className="personal__banner_inp_container">
            <input
              type="text"
              className="personal__banner_inp"
              value={formData.firstName}
              onChange={(ev) => handleChange('firstName', ev.target.value)}
            />
            <BiEditAlt className="personal__banner_inp_icon" />
          </div>
          <div className="personal__banner_inp_container">
            <input
              type="text"
              className="personal__banner_inp"
              value={formData.lastName}
              onChange={(ev) => handleChange('lastName', ev.target.value)}
            />
            <BiEditAlt className="personal__banner_inp_icon" />
          </div>
        </div>
        <div className="personal__banner_inputs">
          <div className="personal__banner_inp_container">
            <input
              type="text"
              className="personal__banner_inp"
              value={formData.email}
              onChange={(ev) => handleChange('email', ev.target.value)}
            />
            <BiEditAlt className="personal__banner_inp_icon" />
          </div>
          <div className="personal__banner_inp_container">
            <input
              type="text"
              className="personal__banner_inp"
              value={formData.phone}
              onChange={(ev) => handleChange('phone', ev.target.value)}
            />
            <BiEditAlt className="personal__banner_inp_icon" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetails;
