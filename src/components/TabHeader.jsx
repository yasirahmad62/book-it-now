import React, { useState, useEffect } from 'react';
import './TabHeader.css';
import RecommendationModal from './RecommendationModal';

const TabHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const hasModalBeenShown = sessionStorage.getItem('hasModalBeenShown');
    if (!hasModalBeenShown) {
      setIsModalOpen(true);
      sessionStorage.setItem('hasModalBeenShown', 'true');
    }
  }, []);

  return (
    <div className="tab-header-container">
      <div className="tab-header-links">
        <div className="rating-filters">
          {["Events", "Sports", "Movies"].map((rating) => (
            <a
              key={rating}
              className={`rating-category `}
              href={`/${rating.toLocaleLowerCase()}`}
            >
              {rating}
            </a>
          ))}
        </div>
        <a
          className={`rating-category h`}
          onClick={() => setIsModalOpen(true)}
        >
          Find Your Perfect Event
        </a>
      </div>
      <RecommendationModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </div>
  );
};

export default TabHeader;
