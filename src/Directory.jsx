import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './components/header';
import HeroCarousel from './components/HeroCarousel';
import Footer from './components/Footer';
import './DetailPage.css'; 
import RatingsSection from './components/RatingsSection';
import axios from 'axios';
import { premier, section } from './const/const';

const Directory = () => {
  const navigate = useNavigate();
  const { imdbID } = useParams(); // Use the imdbID from the URL as a unique identifier
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=5e2f39cc&i=${imdbID}`);
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [imdbID]);

  const handleAddToFavourites = () => {
    if (movieDetails) {
      const favourites = JSON.parse(sessionStorage.getItem('favouriteMovies')) || [];
      const newFavourite = {
        imdbID: imdbID,
        title: movieDetails.Title,
        poster: movieDetails.Poster,
        rating: movieDetails.imdbRating,
        votes: movieDetails.imdbVotes,
        type: movieDetails.Type,
        language: movieDetails.Language,
        runtime: movieDetails.Runtime,
        genre: movieDetails.Genre,
        released: movieDetails.Released
      };

      const updatedFavourites = [...favourites, newFavourite];
      sessionStorage.setItem('favouriteMovies', JSON.stringify(updatedFavourites));
      alert(`${movieDetails.Title} has been added to your favourites!`);
    }
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <section className="detail-banner" style={{ backgroundImage: `linear-gradient(90deg, rgba(26, 26, 26, 1) 24.97%, rgba(26, 26, 26, 1) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgba(26, 26, 26, 1) 100%), url(${movieDetails.Poster})` }}>
        <div className="banner-content">
          <div className="movie-thumbnail">
            <img src={movieDetails.Poster} alt={movieDetails.Title} />
          </div>
          <div className="movie-info">
            <h1>{movieDetails.Title}</h1>
            <div className="rating">
              <svg width="24" height="24">
                <use href="/chunks/icons/common-icons-d8988b3d.svg#icon-star"></use>
              </svg>
              <h5>{movieDetails.imdbRating}/10</h5>
              <h6>({movieDetails.imdbVotes} Votes)</h6>
            </div>
            <div className="additional-info">
              <div className="formats">
                <a href="#">{movieDetails.Type}</a>
              </div>
              <div className="languages">
                <a href="#">{movieDetails.Language}</a>
              </div>
              <div className="details">
                <span>{movieDetails.Runtime}</span>
                <span> • </span>
                <span>{movieDetails.Genre}</span>
                <span> • </span>
                <span>{movieDetails.Released}</span>
              </div>
            </div>
            <button className="book-tickets" onClick={handleAddToFavourites}>Add to Favourites</button>
          </div>
        </div>
      </section>
      <div className="detailPageContainer">
        <div>
          <span className="event-description__EventDescriptionContainer-sc-o4g232-1 gHdeCC">
            <h2 className="event-description__Title-sc-o4g232-2 btsbpT">About the movie</h2>
            <div className="event-description__DescriptionContainer-sc-o4g232-3 gSmoFT">
              <span>{movieDetails.Plot}</span>
            </div>
          </span>
          <hr />
        </div>
        <div className="detailPage-cast-crew-section">
          <div className="detailPage-section">
            <h2 className="detailPage-section-title">Cast</h2>
            <div className="detailPage-section-content">
              {movieDetails.Actors?.split(', ').map((actor, index) => (
                <div key={index} className="detailPage-card">
                  <div className="detailPage-card-content">
                    <strong>{actor}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="detailPage-section">
            <h2 className="detailPage-section-title">Crew</h2>
            <div className="detailPage-section-content">
              {movieDetails.Director?.split(', ').map((director, index) => (
                <div key={index} className="detailPage-card">
                  <div className="detailPage-card-content">
                    <strong>{director}</strong>
                    <p>Director</p>
                  </div>
                </div>
              ))}
              {movieDetails.Writer?.split(', ').map((writer, index) => (
                <div key={index} className="detailPage-card">
                  <div className="detailPage-card-content">
                    <strong>{writer}</strong>
                    <p>Writer</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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

export default Directory;
