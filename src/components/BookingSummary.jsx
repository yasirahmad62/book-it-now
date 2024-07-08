import React from 'react';
import { useSelector } from 'react-redux';
import './BookingSummary.css';

const BookingSummary = () => {
  const { selectedSeats, selectedCity } = useSelector(state => state.booking);
  const ticketPrice = 24; // Example price
  const convenienceFee = 3.40; // Example fee
  const total = selectedSeats.length * ticketPrice + convenienceFee;

  return (
    <div className="booking-summary">
      <h2>Booking Summary</h2>
      <p>{selectedSeats.join(', ')} ( {selectedSeats.length} Tickets )</p>
      <p>$ {selectedSeats.length * ticketPrice}.00</p>
      <p>Convenience fees</p>
      <p>$ {convenienceFee}</p>
      <p>Subtotal</p>
      <p>$ {total}</p>
      <p>Your current state is {selectedCity}</p>
      <button className="proceed-button">Proceed</button>
    </div>
  );
};

export default BookingSummary;
