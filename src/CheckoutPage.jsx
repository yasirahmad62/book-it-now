import React from 'react';
import CheckoutHeader from './components/CheckoutHeader';
import BookingSummary from './components/BookingSummary';
import './CheckoutPage.css';

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <CheckoutHeader />
      <BookingSummary />
    </div>
  );
};

export default CheckoutPage;
