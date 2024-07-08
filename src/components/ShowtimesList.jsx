import React, { useState } from 'react';
import ShowtimeCard from './ShowTimeCard.jsx';
import './ShowTimeList.css';

const ShowtimesList = ({ showtimes, onTimeSelect }) => {

    return (
        <div className="showtimes-list">
            {showtimes.map((showtime, index) => (
                <ShowtimeCard key={index} showtime={showtime} onTimeSelect={onTimeSelect} />
            ))}
        </div>
    );
};

export default ShowtimesList;
