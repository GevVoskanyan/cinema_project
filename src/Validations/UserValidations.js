import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .trim()
    .required("Password is required")
    .min(6, "min length is 3")
    .max(12)
});

export const SignUpSchema = Yup.object().shape({
  avatar: Yup.mixed().notRequired(),
  firstName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "First name can only contain letters")
    .trim()
    .required("First name is required"),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Last name can only contain letters")
    .trim()
    .required("Last name is required"),
  country: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Country can only contain letters")
    .trim()
    .required("Country is required"),
  address: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Address can only contain letters")
    .trim()
    .required("Address is required"),
  city: Yup.string()
    .matches(/^[a-zA-Z]+$/, "City can only contain letters")
    .trim()
    .required("City is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone must contain only numbers")
    .required("Phone is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .matches(/^(?=.*[A-Z])/, "Password must contain at least one uppercase letter")
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password can't exceed 12 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .matches(/^(?=.*[A-Z])/, "Password must contain at least one uppercase letter")
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password can't exceed 12 characters")
    .required("Repeat Password is required"),
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, "Invalid card number")
    .required("Card Number is required"),
  cardholderName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Cardholder name must contain only letters")
    .required("Cardholder Name is required"),
  mm: Yup.string()
    .matches(/^[0-9]+$/, "Expiration Month must contain only numbers")
    .max(2, "Expiration Month must be 2 characters or less")
    .required("Expiration Month is required"),
  yy: Yup.string()
    .matches(/^[0-9]+$/, "Expiration Year must contain only numbers")
    .max(2, "Expiration Year must be 2 characters or less")
    .required("Expiration Year is required"),
  cvv: Yup.string()
    .matches(/^\d{3}$/, "Invalid CVV")
    .required("CVV is required"),
});

export function isObjectEmpty(obj) {
  return Object.keys(obj).length !== 0;
}
