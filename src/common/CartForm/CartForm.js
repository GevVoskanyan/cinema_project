import React from 'react';
import './CartForm.scss';

function CartForm(props) {
  const {
    handleChange,
    cardNumber,
    cardholderName,
    cvv,
    mm,
    yy
  } = props;

  return (
    <div className='sign_up_form_cart_data_info_inp_container'>
      <input
        type='text'
        className='sign_up_form_cart_data_info_inp_container_inp'
        placeholder='Name on Card'
        value={cardholderName}
        onChange={(ev) => handleChange("cardholderName", ev.target.value)}
      />
      <input
        type='text'
        className='sign_up_form_cart_data_info_inp_container_inp'
        placeholder='Card Number'
        value={cardNumber}
        onChange={(ev) => handleChange("cardNumber", ev.target.value)}
      />
      <div className='sign_up_form_cart_data_info_inp_container_date'>
        <input
          type='text'
          className='sign_up_form_cart_data_info_inp_container_date_inp'
          placeholder='mm'
          value={mm}
          onChange={(ev) => handleChange("mm", ev.target.value)}
        />
        <span className='sign_up_form_cart_data_info_inp_container_date_line'>
          -
        </span>
        <input
          type='text'
          className='sign_up_form_cart_data_info_inp_container_date_inp'
          placeholder='yy'
          value={yy}
          onChange={(ev) => handleChange("yy", ev.target.value)}
        />
        <span className='sign_up_form_cart_data_info_inp_container_date_line'>
          -
        </span>
        <input
          type='text'
          className='sign_up_form_cart_data_info_inp_container_date_inp'
          placeholder='cvv'
          value={cvv}
          onChange={(ev) => handleChange("cvv", ev.target.value)}
        />
      </div>
    </div>
  );
}

export default CartForm;
