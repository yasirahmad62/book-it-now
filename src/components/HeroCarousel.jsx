import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroCarousel.css';

const HeroCarousel = ({ sections, subHeading, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
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
    <div>
      {sections.map((section, idx) => (
        <div key={idx} className="carousel-container">
          <h2>{title} <a href={"/events"} className="see-all">See All</a></h2>
          <p>{subHeading}</p>
          <Slider {...settings}>
            {section.items.map((item, index) => (
              <div key={index} className="movie-card">
                <img src={item.image} alt={item.title} className="movie-image" />
                <div className="movie-info">
                  <h3 className="movie-title">{item.title}</h3>
                  <p className="movie-genre">{item.genre}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'white' }}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block'}}
      onClick={onClick}
    />
  );
}

export default HeroCarousel;
