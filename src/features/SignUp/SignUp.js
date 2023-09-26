import React from 'react';
import './SignUp.scss';
import Wrapper from '../Wrapper/Wrapper';
import Cart from '../../common/Cart/Cart';
import CartForm from '../../common/CartForm/CartForm';

function SignUp(props) {
  return (
    <section className="sign_up">
      <Wrapper>
        <div className="sign_up_container">
          <form className="sign_up_form">
            <h2 className="sign_up_form_title">SIGN UP</h2>
            <div className="sign_up_form_fileds">Fill in all Fileds</div>
            <div>
              <label
                htmlFor="photo_loader"
                className="sign_up_form_photo_loader"
              >
                Photo
              </label>
              <input
                type="file"
                id="photo_loader"
                style={{ display: 'none' }}
              />
            </div>
            <div className="sign_up_form_rows">
              <input
                type="text"
                className="sign_up_form_rows_inp"
                placeholder="Username"
              />
              <input
                type="text"
                className="sign_up_form_rows_inp"
                placeholder="City"
              />
            </div>
            <div className="sign_up_form_rows">
              <input
                type="text"
                className="sign_up_form_rows_inp"
                placeholder="Email"
              />
              <input
                type="text"
                className="sign_up_form_rows_inp"
                placeholder="Country"
              />
            </div>
            <div className="sign_up_form_rows">
              <input
                type="text"
                className="sign_up_form_rows_inp"
                placeholder="Password"
              />
              <input
                type="text"
                className="sign_up_form_rows_inp"
                placeholder="Adress"
              />
            </div>
            <div className="sign_up_form_rows">
              <input
                type="text"
                className="sign_up_form_rows_inp"
                placeholder="Repeat Password"
              />
              <input
                type="text"
                className="sign_up_form_rows_inp"
                placeholder="Phone"
              />
            </div>
            <div className="sign_up_form_cart_data">
              <Cart />
              <CartForm />
            </div>
          </form>
          <button type="submit" className="btn sign_up_form_btn">Done</button>
        </div>
      </Wrapper>
    </section>
  );
}

export default SignUp;
