import React from 'react';
import './Cart.scss';

function Cart(props) {
  return (
    <div className="sign_up_form_cart_data_cart">
      <h3 className="sign_up_form_cart_data_cart_title">VISA</h3>
      {/* dotes */}
      <div className="sign_up_form_cart_data_cart_dotes_container">
        <div className="sign_up_form_cart_data_cart_dotes">
          <span className="sign_up_form_cart_data_cart_dote">.</span>
          <span className="sign_up_form_cart_data_cart_dote">.</span>
          <span className="sign_up_form_cart_data_cart_dote">.</span>
          <span className="sign_up_form_cart_data_cart_dote">.</span>
        </div>
        <div className="sign_up_form_cart_data_cart_dotes">
          <span className="sign_up_form_cart_data_cart_dote">.</span>
          <span className="sign_up_form_cart_data_cart_dote">.</span>
          <span className="sign_up_form_cart_data_cart_dote">.</span>
          <span className="sign_up_form_cart_data_cart_dote">.</span>
        </div>
        <div className="sign_up_form_cart_data_cart_dotes">
          <span className="sign_up_form_cart_data_cart_dote">.</span>
          <span className="sign_up_form_cart_data_cart_dote">.</span>
          <span className="sign_up_form_cart_data_cart_dote">.</span>
          <span className="sign_up_form_cart_data_cart_dote">.</span>
        </div>
        <div className="sign_up_form_cart_data_cart_dotes">
          <span className="sign_up_form_cart_data_cart_dote">.</span>
          <span className="sign_up_form_cart_data_cart_dote">.</span>
          <span className="sign_up_form_cart_data_cart_dote">.</span>
          <span className="sign_up_form_cart_data_cart_dote">.</span>
        </div>
      </div>
      <div className="sign_up_form_cart_data_info">
        <div className="sign_up_form_cart_data_info_userName">
          <div className="sign_up_form_cart_data_info_name">Name</div>
          <div className="sign_up_form_cart_data_info_surname">Surname</div>
        </div>
        <div className="sign_up_form_cart_data_info_date">.. /..</div>
      </div>
    </div>
  );
}

export default Cart;
