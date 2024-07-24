import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutButton from './CheckoutButton';
import './BookingSummary.css';

const BookingSummary = () => {
  const { selectedSeats, selectedCity } = useSelector(state => state.booking);
  const ticketPrice = 2400; // Example price in cents
  const convenienceFee = 340; // Example fee in cents
  const total = selectedSeats.length * ticketPrice + convenienceFee;

  return (
    <div className="booking-summary">
      <h2>Booking Summary</h2>
      <p>{selectedSeats.join(', ')} ( {selectedSeats.length} Tickets )</p>
      <p>$ {(selectedSeats.length * ticketPrice / 100).toFixed(2)}</p>
      <p>Convenience fees</p>
      <p>$ {(convenienceFee / 100).toFixed(2)}</p>
      <p>Subtotal</p>
      <p>$ {(total / 100).toFixed(2)}</p>
      <p>Your current state is {selectedCity}</p>
      <CheckoutButton
        selectedSeats={selectedSeats}
        ticketPrice={ticketPrice}
        convenienceFee={convenienceFee}
      />
    </div>
  );
};

export default BookingSummary;
