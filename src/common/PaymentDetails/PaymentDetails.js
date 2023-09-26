import React, { useState } from 'react';
import './PaymentDetails.scss';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import CartForm from '../CartForm/CartForm';

function PaymentDetails(props) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="payment">
      <h2 className="payment__title">Payment Details</h2>
      <div className="payment__content">
        <Cart />
        {!isFormOpen && (
          <div className="payment_new_cart">
            Add new cart
            <button
              type="button"
              className="payment_new_cart_btn"
              onClick={() => setIsFormOpen(!isFormOpen)}
            >
              +
            </button>
          </div>
        )}
        {isFormOpen && <CartForm />}
      </div>
    </div>
  );
}

export default PaymentDetails;
