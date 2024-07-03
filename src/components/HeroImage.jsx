import React, { useState } from 'react';
import "./HeroImage.css";

const HeroImage = ({ images }) => {
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
      <button className="carousel-button prev-button" onClick={handlePrevClick}>❮</button>
      <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="hero-image" />
      <button className="carousel-button next-button" onClick={handleNextClick}>❯</button>
    </div>
  );
};

export default HeroImage;
