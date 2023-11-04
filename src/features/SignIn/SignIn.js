import React, { useCallback, useEffect, useState } from "react";
import * as Yup from "yup";

import "./SignIn..scss";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import Wrapper from "../Wrapper/Wrapper";
import { loginAction } from "../../store/actions/loginAction";
import { SignInSchema } from "../../Validations/UserValidations";

function SignIn(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    SignInSchema.isValid({ email, password }).then((valid) => {
      setIsValid(valid);
    });
  }, [email, password]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
      // await validationSchema.validate({ email, password }, { abortEarly: false });
        // dispatch(loginAction({ email, password }));
        await SignInSchema.isValid({ email, password });
      } catch (error) {
        console.error("Validation error:", error.errors);
      }
    },
    [email, password]
  );

  return (
    <section className="sign_in">
      <Wrapper>
        <form className="sign_in_form" onSubmit={handleSubmit}>
          <h1 className="sign_in_form_title">SIGN IN</h1>
          <input
            type="text"
            className="sign_in_form__inp"
            placeholder="Email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="text"
            className="sign_in_form__inp"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
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
          <button type="submit" className="btn sign_in_form_btn btn_orange" disabled={!isValid}>
            Sign In
          </button>
        </form>
      </Wrapper>
    </section>
  );
}

export default SignIn;
