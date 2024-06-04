import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroCarousel.css';

const HeroCarousel = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <h2>Recommended Movies <a href="#" className="see-all">See All</a></h2>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <div className="movie-info">
              <div className="movie-rating">
                <span className="star">★</span> {movie.rating} <span className="votes"> {movie.votes} Votes</span>
              </div>
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-genre">{movie.genre}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

export default HeroCarousel;
