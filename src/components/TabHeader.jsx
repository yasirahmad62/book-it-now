import React from 'react';
import './TabHeader.css';

const TabHeader = () => {
    return (
        <div className="tab-header-container">
            <div className="tab-header-links">
            <div className="rating-filters">

          {["Events","Sports", "Movies"].map((rating) => (
            <a
              key={rating}
              className={`rating-category `}
href={`/${rating.toLocaleLowerCase()}`}
            >
              {rating}
            </a>
          ))}
        </div>
            </div>
        </div>
    );
};

export default TabHeader;
