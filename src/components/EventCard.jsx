import React from 'react';
import './EventCard.css';

const EventCard = ({ event, onBookClick }) => {
  return (
    <div className="event-card" onClick={() => onBookClick(event._id)}>
      <img src={event.imgSrc} alt={event.title} className="event-image" />
      <div className="event-info">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-genre">{event.genres.join(', ')}</p>
      </div>
    </div>
  );
};

export default EventCard;
