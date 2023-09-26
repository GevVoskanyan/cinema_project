import React from 'react';
import './CartForm.scss';

function CartForm(props) {
  return (
    <div className="sign_up_form_cart_data_info_inp_container">
      <input
        type="text"
        className="sign_up_form_cart_data_info_inp_container_inp"
        placeholder="Name on Card"
      />
      <input
        type="text"
        className="sign_up_form_cart_data_info_inp_container_inp"
        placeholder="Card Number"
      />
      <div className="sign_up_form_cart_data_info_inp_container_date">
        <input
          type="text"
          className="sign_up_form_cart_data_info_inp_container_date_inp"
          placeholder="mm"
        />
        <span className="sign_up_form_cart_data_info_inp_container_date_line">
          -
        </span>
        <input
          type="text"
          className="sign_up_form_cart_data_info_inp_container_date_inp"
          placeholder="dd"
        />
        <span className="sign_up_form_cart_data_info_inp_container_date_line">
          -
        </span>
        <input
          type="text"
          className="sign_up_form_cart_data_info_inp_container_date_inp"
          placeholder="yy"
        />
      </div>
    </div>
  );
}

export default CartForm;
