import React, { useCallback } from 'react';
import './SignIn..scss';
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillApple } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import Wrapper from '../Wrapper/Wrapper';

function SignIn(props) {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <section className="sign_in">
      <Wrapper>
        <form className="sign_in_form" onSubmit={handleSubmit}>
          <h1 className="sign_in_form_title">SIGN IN</h1>
          <input
            type="text"
            className="sign_in_form__inp"
            placeholder="Username"
          />
          <input
            type="text"
            className="sign_in_form__inp"
            placeholder="Password"
          />
          <button type="button" className="sign_in_form__forgot">
            Forgot password
          </button>
          <span className="sign_in_form___or">Or</span>
          <div className="sign_in_form_soc">
            <a href="/" className="sign_in_form_soc_item">
              <AiFillFacebook className="sign_in_form_soc_item_icon" />
            </a>
            <a href="/" className="sign_in_form_soc_item">
              <FcGoogle className="sign_in_form_soc_item_icon" />
            </a>
            <a href="/" className="sign_in_form_soc_item">
              <AiFillApple className="sign_in_form_soc_item_icon" />
            </a>
          </div>
          <button type="submit" className="btn sign_in_form_btn">Sign In</button>
        </form>
      </Wrapper>
    </section>
  );
}

export default SignIn;
