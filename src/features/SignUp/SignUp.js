import React, { useCallback, useEffect, useState } from "react";
import "./SignUp.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import Cart from "../../common/Cart/Cart";
import CartForm from "../../common/CartForm/CartForm";
import SignUpForm from "../../common/SignUpForm/SignUpForm";
import { registrationAction } from "../../store/actions/registrationAction";
import { isObjectEmpty, SignInSchema, SignUpSchema } from "../../Validations/UserValidations";

function SignUp(props) {
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState("");
  const { user, registrationToken } = useSelector((store) => store.registration);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState({
    avatar: "",
    firstName: "",
    lastName: "",
    city: "",
    email: "",
    country: "",
    address: "",
    password: "",
    confirmPassword: "",
    phone: "",
    cardNumber: "",
    cardholderName: "",
    cvv: "",
    mm: "",
    yy: ""
  });

  useEffect(() => {
  }, []);
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const err = await SignUpSchema.validate(formData, { abortEarly: false });
      const valid = await SignUpSchema.isValid(formData, { abortEarly: false });
      setIsValid(valid);
      setErrors(err);
      // await dispatch(registrationAction(formData));
      if (registrationToken) {
        alert(1);
        navigate("/", { replace: true });
      }
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
      console.error("Validation error:", error.errors);
    }
  };

  const handleChange = useCallback(
    (key, value) => {
      formData[key] = value;
      setFormData({ ...formData });
    },
    [formData, setFormData]
  );
  console.log("errors:", errors);
  const handleFileChange = (ev) => {
    const [file] = ev.target.files;
    formData.avatar = file;
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    } else {
      setPreview(null);
    }
    setFormData({ ...formData });
  };
  return (
    <section className="sign_up">
      <Wrapper>
        <div>{JSON.stringify(errors)}</div>
        <div className="sign_up_container">
          <form className="sign_up_form" onSubmit={handleSubmit}>
            <h2 className="sign_up_form_title">SIGN UP</h2>
            <div className="sign_up_form_fileds">Fill in all Fileds</div>
            <SignUpForm
              handleChange={handleChange}
              handleFileChange={handleFileChange}
              avatar={formData.avatar}
              firstName={formData.firstName}
              lastName={formData.lastName}
              city={formData.city}
              email={formData.email}
              country={formData.country}
              address={formData.address}
              password={formData.password}
              confirmPassword={formData.confirmPassword}
              phone={formData.phone}
              errors={errors}
            />
            <div className="sign_up_form_cart_data">
              <Cart />
              <CartForm
                handleChange={handleChange}
                cardNumber={formData.cardNumber}
                cardholderName={formData.cardholderName}
                mm={formData.mm}
                yy={formData.yy}
                cvv={formData.cvv}
              />
            </div>
            <button
              type="submit"
              className="btn sign_up_form_btn"
            >
              Done
            </button>
          </form>
        </div>
      </Wrapper>
    </section>
  );
}

export default SignUp;
