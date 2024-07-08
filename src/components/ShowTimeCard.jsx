import React, { useState } from 'react';
import TheaterInfo from './TheaterInfo';

import './ShowTimeCard.css';

const ShowtimeCard = ({ showtime, onTimeSelect }) => {
    const [hoveredTime, setHoveredTime] = useState(null);

    const handleTimeClick = (time) => {
        onTimeSelect(time);
    };

    return (
        <div className="showtime-card">
            <TheaterInfo theater={showtime.theater} />
    
            <div className="showtime-details">
                {showtime.availability.map((timeSlot, index) => (
                    <div
                        key={index}
                        className="time-slot"
                        onMouseEnter={() => setHoveredTime(index)}
                        onMouseLeave={() => setHoveredTime(null)}
                        onClick={() => handleTimeClick(timeSlot.time)}
                    >
                        <span className="time">{timeSlot.time}</span>
                        <span className={`status ${timeSlot.status.replace(" ", "-").toLowerCase()}`}>
                            {timeSlot.status}
                        </span>
                        {hoveredTime === index && (
                            <div className="pricing-popup">
                                <div className="pricing-arrow"></div>
                                {showtime.theater.pricing.map((price, priceIndex) => (
                                    <div key={priceIndex} className="pricing-option">
                                        <span className="price">${price.amount}</span>
                                        <span className="type">{price.type}</span>
                                        <span className="availability">{price.status}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowtimeCard;
