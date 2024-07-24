import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import "./Faq.css"

const stripePromise = loadStripe('pk_test_51Pfv0NA2iC3BEjckeRInDm8u5Wj1KJCOGYobCmnXC9pBRZjwjNaNJK5PrOKNeZJlZFhjoT4z28rFE1lSS9B3ZMwV00INt9Rvgp'); // Replace with your Stripe public key

const CheckoutButton = ({ selectedSeats, ticketPrice, convenienceFee }) => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await axios.post('http://localhost:8000/api/create-checkout-session', {
      selectedSeats,
      ticketPrice,
      convenienceFee,
    });

    const sessionId = response.data.id;

    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.error('Error redirecting to checkout:', error);
    }
  };

  return (
    <button role="link" onClick={handleCheckout} className="checkoutBtnc">
      Checkout
    </button>
  );
};

export default CheckoutButton;
