import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie }) => {
    return (
        <div className="movie-details">
            <div className="movie-header">
                <img src={movie.imgSrc} alt={movie.title} className="movie-poster" />
                <div className="movie-info">
                    <h2>{movie.title}</h2>
                    <div className="movie-meta">
                        <span>{movie.rating} ★</span>
                        <span>{movie.duration}</span>
                        <span>{movie.releaseDate}</span>
                    </div>
                    <div className="movie-genres">
                        {movie.genres.map((genre, index) => (
                            <span key={index} className="genre">{genre}</span>
                        ))}
                    </div>
                    <div className="movie-description">
                        <p>{movie.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
