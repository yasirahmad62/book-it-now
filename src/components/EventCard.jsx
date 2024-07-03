import React from 'react';
import './EventCard.css';

const EventCard = ({ event, onBookClick }) => {
  const handleBookClick = () => {
    onBookClick(event.id);
  };

  return (
    <div key={"index"} className="event-card">
      <img src={event.image} alt={event.title} className="event-image" />
      <div className="event-info">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-genre">{event.genre}</p>
      </div>
    </div>
  );
};

export default EventCard;
