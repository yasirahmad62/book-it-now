// src/EventListingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventListingPage.css';

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

const EventListingPage = () => {
  const navigate = useNavigate();

  const handleBookClick = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="event-listing-page">
      <h1>Upcoming Events in Mumbai</h1>
      <div className="events-container">
        {events.map(event => (
          <div className="event-card" key={event.id}>
            <h2>{event.name}</h2>
            <p>{event.date}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
            <p>{event.description}</p>
            <button className="book-button" onClick={() => handleBookClick(event.id)}>BOOK</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventListingPage;