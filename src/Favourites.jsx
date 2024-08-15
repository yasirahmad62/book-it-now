import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import './Favourites.css';

const Favourites = () => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    // Retrieve the saved movie details from sessionStorage
    const savedMovies = JSON.parse(sessionStorage.getItem('favouriteMovies')) || [];
    setFavouriteMovies(savedMovies);
  }, []);

  const handleRemoveFromFavourites = (imdbID) => {
    const updatedFavourites = favouriteMovies.filter(movie => movie.imdbID !== imdbID);
    setFavouriteMovies(updatedFavourites);
    sessionStorage.setItem('favouriteMovies', JSON.stringify(updatedFavourites));
  };

  if (favouriteMovies.length === 0) {
    return (
      <div>
        <Header />
        <div className="favourites-container">
          <h2>No Favourites Added Yet</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="favourites-container">
        <h2>Your Favourites</h2>
        <div className="favourites-list">
          {favouriteMovies.map((movie) => (
            <div key={movie.imdbID} className="favourite-card">
              <img src={movie.poster} alt={movie.title} className="favourite-poster" />
              <div className="favourite-details">
                <h3>{movie.title}</h3>
                <p>{movie.genre}</p>
                <button onClick={() => handleRemoveFromFavourites(movie.imdbID)} className="remove-favourite">
                  Remove from Favourites
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favourites;
