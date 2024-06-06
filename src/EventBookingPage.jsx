// src/EventBookingPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
import './EventBookingPage.css';

const EventBookingPage = () => {
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));

  return (
    <div>
      <Header />
      <div className="event-booking-page">
        <h1>Book Event</h1>
        {event ? (
          <div className="booking-details">
            <h2>{event.name}</h2>
            <p>{event.date}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
            <p>{event.description}</p>
            <form className="booking-form">
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Number of Tickets:
                <input type="number" name="tickets" required min="1" />
              </label>
              <button type="submit">Book Now</button>
            </form>
          </div>
        ) : (
          <p>Event not found</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

const events = [
  { id: 1, name: 'Concert by XYZ Band', date: 'June 10, 2024', venue: 'Mumbai Concert Hall', description: 'Join us for an electrifying concert by XYZ Band.' },
  { id: 2, name: 'Art Exhibition', date: 'June 12, 2024', venue: 'Mumbai Art Gallery', description: 'Explore the latest works by renowned artists.' },
  { id: 3, name: 'Theater Play: Hamlet', date: 'June 15, 2024', venue: 'Mumbai Theater', description: 'Experience the classic play Hamlet in a new light.' },
  { id: 4, name: 'Sports Event: Football Match', date: 'June 18, 2024', venue: 'Mumbai Sports Arena', description: 'Watch an exciting football match between top teams.' },
  { id: 5, name: 'Comedy Show', date: 'June 20, 2024', venue: 'Mumbai Comedy Club', description: 'Laugh out loud with the best comedians in town.' },
  { id: 6, name: 'Dance Performance', date: 'June 22, 2024', venue: 'Mumbai Dance Academy', description: 'Enjoy a mesmerizing dance performance by top dancers.' },
  { id: 7, name: 'Music Festival', date: 'June 25, 2024', venue: 'Mumbai Open Grounds', description: 'A day-long festival featuring multiple bands and artists.' },
  { id: 8, name: 'Film Screening', date: 'June 27, 2024', venue: 'Mumbai Cinema', description: 'Watch the latest critically acclaimed film.' },
];

export default EventBookingPage;
