// src/EventBookingPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './EventBookingPage.css';

const EventBookingPage = () => {
  const { id } = useParams();
  
  // You can fetch event details using the id if needed
  // For now, let's just display the event id
  
  return (
    <div className="event-booking-page">
      <h1>Book Event</h1>
      <p>Booking details for event ID: {id}</p>
      {/* Add your booking form or other booking details here */}
    </div>
  );
};

export default EventBookingPage;
