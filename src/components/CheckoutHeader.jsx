import React from 'react';
import { useSelector } from 'react-redux';
import './CheckoutHeader.css';

const CheckoutHeader = () => {
  const { movieDetails, selectedDate, selectedTime, selectedCity } = useSelector(state => state.booking);

  const cityMap = {
    Toronto: 'Ontario',
    Vancouver: 'BC',
    Calgary: 'AB',
    Montreal: 'QB'
  };

  const currentState = cityMap[selectedCity] || '';

  return (
    <div className="checkout-header">
      <div className="header-content">
        <button className="back-button">&lt;</button>
        <div className="movie-details">
          <h1>{movieDetails?.title}</h1>
          <p>{movieDetails?.rating}</p>
          <p>{selectedCity}, {currentState} | {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}, {selectedTime}</p>
        </div>
        <button className="close-button">X</button>
      </div>
    </div>
  );
};

export default CheckoutHeader;
