import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './components/header';
import HeroCarousel from './components/HeroCarousel';
import Footer from './components/Footer';
import './DetailPage.css';
import RatingsSection from './components/RatingsSection';
import axios from 'axios';
import { premier, section } from './const/const';

const DetailPage = ({type}) => {
  const navigate = useNavigate();
  const { id } = useParams(); // Retrieve the movie ID from the URL
  const [movieDetails, setMovieDetails] = useState(null);
  const bookingUrl = `/bookings/${id}`;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/${type}/${id}`);
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <section className="detail-banner" style={{ backgroundImage: `linear-gradient(90deg, rgba(26, 26, 26, 1) 24.97%, rgba(26, 26, 26, 1) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgba(26, 26, 26, 1) 100%), url(${movieDetails.bgImage})` }}>
        <div className="banner-content">
          <div className="movie-thumbnail">
            <img src={movieDetails.imgSrc} alt={movieDetails.title} />
          </div>
          <div className="movie-info">
            <h1>{movieDetails.title}</h1>
            <div className="rating">
              <svg width="24" height="24">
                <use href="/chunks/icons/common-icons-d8988b3d.svg#icon-star"></use>
              </svg>
              <h5>{movieDetails.rating}/10</h5>
              <h6>({movieDetails.votes} Votes)</h6>
            </div>
            <div className="additional-info">
              <div className="formats">
                {movieDetails.formats.map((format, index) => (
                  <React.Fragment key={index}>
                    <a href="#">{format}</a>
                    {index < movieDetails.formats.length - 1 && <span>, </span>}
                  </React.Fragment>
                ))}
              </div>
              <div className="languages">
                {movieDetails.languages.map((language, index) => (
                  <React.Fragment key={index}>
                    <a href="#">{language}</a>
                    {index < movieDetails.languages.length - 1 && <span>, </span>}
                  </React.Fragment>
                ))}
              </div>
              <div className="details">
                <span>{movieDetails.duration}</span>
                <span> • </span>
                {movieDetails.genres.map((genre, index) => (
                  <React.Fragment key={index}>
                    <a href="#">{genre}</a>
                    {index < movieDetails.genres.length - 1 && <span>, </span>}
                  </React.Fragment>
                ))}
                <span> • </span>
                <span>{movieDetails.releaseDate}</span>
              </div>
            </div>
            <a href={bookingUrl}>
              <button className="book-tickets">Book tickets</button>
            </a>
          </div>
        </div>
      </section>
      <div className="detailPageContainer">
        <div>
          <span className="event-description__EventDescriptionContainer-sc-o4g232-1 gHdeCC">
            <h2 className="event-description__Title-sc-o4g232-2 btsbpT">About the movie</h2>
            <div className="event-description__DescriptionContainer-sc-o4g232-3 gSmoFT">
              <span>{movieDetails.description}</span>
            </div>
          </span>
          <hr />
        </div>
        <div className="detailPage-cast-crew-section">
  <div className="detailPage-section">
    <h2 className="detailPage-section-title">Cast</h2>
    <div className="detailPage-section-content">
      {movieDetails.cast.map((castMember, index) => (
        <div key={index} className="detailPage-card">
          <div className="detailPage-card-content">
            <strong>{castMember.name}</strong>
            <p>{castMember.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  <div className="detailPage-section">
    <h2 className="detailPage-section-title">Crew</h2>
    <div className="detailPage-section-content">
      {movieDetails.crew.map((crewMember, index) => (
        <div key={index} className="detailPage-card">
          <div className="detailPage-card-content">
            <strong>{crewMember.name}</strong>
            <p>{crewMember.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

        <div>
          <span className="event-description__EventDescriptionContainer-sc-o4g232-1 gHdeCC">
            <h2 className="event-description__Title-sc-o4g232-2 btsbpT">Ratings & Reviews</h2>
          </span>
        </div>
        <RatingsSection reviews={movieDetails.userReviews} />
        <div className="heroContainer">
          <HeroCarousel sections={premier} subHeading={""} title={"Related Movies"} />
          <div className="bgHero">
            <HeroCarousel sections={section} subHeading={""} title={"People also like"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPage;
