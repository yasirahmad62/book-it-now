import React, { useState } from 'react';
import "./HeroImage.css";

const HeroImage = ({ images, hideArrows }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="hero-image-carousel">
      {!hideArrows && (
        <>
          <button className="carousel-button prev-button" onClick={handlePrevClick}>❮</button>
          <button className="carousel-button next-button" onClick={handleNextClick}>❯</button>
        </>
      )}
      <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="hero-image" />
    </div>
  );
};

export default HeroImage;
