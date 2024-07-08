import React, { useState, useEffect } from 'react';
import './RatingsSection.css';
import { StarIcon, RatingStar, SmallStar, NoResultsFoundIcon } from "../icons/Icons"; // Import the NoResultsFoundIcon

const RatingsSection = ({ reviews }) => {
  const [selectedRating, setSelectedRating] = useState('All');
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    if (reviews.length > 0) {
      const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
      setAverageRating((totalRating / reviews.length).toFixed(1));
    } else {
      setAverageRating(0);
    }
  }, [reviews]);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const filteredReviews = selectedRating === 'All' ? reviews : reviews.filter(review => Math.floor(review.rating) === parseInt(selectedRating));


  return (
    <div className="ratings-section">
      <div className="ratingTop">
        <div className="rating-overview">
          <div className="MoreReview__overallRating styles__d-f styles__ai-c">
            <StarIcon />
            <span className="MoreReview__overallRatingText">{averageRating}</span>
          </div>
          <p>{reviews.length} Ratings, {reviews.length} Reviews</p>
        </div>
        <div className="rating-filters">
          <button
            className={`rating-category ${selectedRating === 'All' ? 'selected' : ''}`}
            onClick={() => handleRatingClick('All')}
          >
            All
          </button>
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              className={`rating-category ${selectedRating === rating ? 'selected' : ''}`}
              onClick={() => handleRatingClick(rating)}
            >
              <RatingStar />
              {rating}
            </button>
          ))}
        </div>
      </div>
      <div className="reviews-list">
        {filteredReviews.length === 0 ? (
          <div className="no-results">
            <div>No Results Found</div>
            <NoResultsFoundIcon />
          </div>
        ) : (
          filteredReviews.map((review, index) => (
            <div key={index} className="review-item">
              <div className="review-rating">
                <SmallStar />
                <p>{review.rating}</p>
              </div>
              <div className='reviewContent'>
                <p className="review-title">{review.title}</p>
                <p className="review-description">{review.description}</p>
                <span className="review-author">-{review.author}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RatingsSection;
