import React from 'react';
import './SignUpForm';

function SignUpForm(props) {
  const {
    avatar,
    firstName,
    lastName,
    city,
    email,
    country,
    address,
    password,
    confirmPassword,
    phone,
    handleChange,
    handleFileChange,
    errors
  } = props;
  console.log(errors);
  return (
    <>
      <div>
        <label htmlFor='photo_loader' className='sign_up_form_photo_loader'>
          Photo
        </label>
        <input
          type='file'
          id='photo_loader'
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept='image/*'
        />
      </div>
      <div className='sign_up_form_rows'>
        <div className='sign_up_form_rows_name'>
          <div className="sign_up_form_rows_name_container">
            <input
              type='text'
              className='sign_up_form_rows_inp'
              placeholder='First Name'
              value={firstName}
              onChange={(ev) => handleChange('firstName', ev.target.value)}
            />
            {errors.firstName && <span className="error_message">{errors.firstName}</span>}
          </div>
          <div className="sign_up_form_rows_name_container">
            <input
              type='text'
              className='sign_up_form_rows_inp'
              placeholder='Last Name'
              value={lastName}
              onChange={(ev) => handleChange('lastName', ev.target.value)}
            />
            {errors.lastName && <span className="error_message">{errors.lastName}</span>}
          </div>
        </div>
        <div className="sign_up_form_rows_inp_container">
          <input
            type='text'
            className='sign_up_form_rows_inp'
            placeholder='City'
            value={city}
            onChange={(ev) => handleChange('city', ev.target.value)}
          />
          {errors.city && <span className="error_message">{errors.city}</span>}
        </div>
      </div>
      <div className='sign_up_form_rows'>
        <div className="sign_up_form_rows_inp_container">
          <input
            type='text'
            className='sign_up_form_rows_inp'
            placeholder='Email'
            value={email}
            onChange={(ev) => handleChange('email', ev.target.value)}
          />
          {errors.email && <span className="error_message">{errors.email}</span>}

        </div>
        <div className="sign_up_form_rows_inp_container">
          <input
            type='text'
            className='sign_up_form_rows_inp'
            placeholder='Country'
            value={country}
            onChange={(ev) => handleChange('country', ev.target.value)}
          />
          {errors.country && <span className="error_message">{errors.country}</span>}
        </div>

      </div>
      <div className='sign_up_form_rows'>
        <div className="sign_up_form_rows_inp_container">
          <input
            type='text'
            className='sign_up_form_rows_inp'
            placeholder='Password'
            value={password}
            onChange={(ev) => handleChange('password', ev.target.value)}
          />
          {errors.password && <span className="error_message">{errors.password}</span>}
        </div>
        <div className="sign_up_form_rows_inp_container">
          <input
            type='text'
            className='sign_up_form_rows_inp'
            placeholder='Adress'
            value={address}
            onChange={(ev) => handleChange('address', ev.target.value)}
          />
          {errors.address && <span className="error_message">{errors.address}</span>}
        </div>

      </div>
      <div className='sign_up_form_rows'>
        <div className="sign_up_form_rows_inp_container">
          <input
            type='text'
            className='sign_up_form_rows_inp'
            placeholder='Repeat Password'
            value={confirmPassword}
            onChange={(ev) => handleChange('confirmPassword', ev.target.value)}
          />
          {errors.confirmPassword && <span className="error_message">{errors.confirmPassword}</span>}
        </div>
        <div className="sign_up_form_rows_inp_container">
          <input
            type='text'
            className='sign_up_form_rows_inp'
            placeholder='Phone'
            value={phone}
            onChange={(ev) => handleChange('phone', ev.target.value)}
          />
          {errors.phone && <span className="error_message">{errors.phone}</span>}
        </div>

      </div>
    </>
  );
}

export default SignUpForm;
