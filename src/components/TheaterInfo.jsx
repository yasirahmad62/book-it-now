import React from 'react';
import './TheaterInfo.css';

const TheaterInfo = ({ theater }) => {
    return (
        <div className="theater-info">
            <h3>{theater.name}</h3>
            <p>{theater.location}</p>
            <div className="facilities">
                {theater.facilities.map((facility, index) => (
                    <span key={index} className="facility">{facility}</span>
                ))}
            </div>
            {theater.nonCancellable && <span className="non-cancellable">Non-cancellable</span>}
        </div>
    );
};

export default TheaterInfo;
