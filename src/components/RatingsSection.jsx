import React, { useState } from 'react';
import './RatingsSection.css';
import { StarIcon, RatingStar, SmallStar, NoResultsFoundIcon } from "../icons/Icons"; // Import the NoResultsFoundIcon

const reviews = [
  {
    "rating": 4.5,
    "title": "Action-Packed Thrill Ride",
    "description": "Bad Boys delivers on every front with non-stop action and a great storyline. Will Smith and Martin Lawrence have fantastic chemistry, making every scene entertaining. Highly recommend for action movie enthusiasts!",
    "author": "John Doe"
  },
  {
    "rating": 3.5,
    "title": "Fun but Formulaic",
    "description": "The movie is a fun watch with lots of explosions and car chases. However, it does follow a pretty standard formula for buddy cop films. Still worth a watch for the humor and action sequences.",
    "author": "Jane Smith"
  },
  {
    "rating": 4.0,
    "title": "Great Chemistry Between Leads",
    "description": "Will Smith and Martin Lawrence shine as the lead duo. Their banter and camaraderie are the highlights of the film. The action scenes are well-executed, making it an enjoyable watch.",
    "author": "Alex Johnson"
  },
  {
    "rating": 5.0,
    "title": "A Classic Buddy Cop Film",
    "description": "Bad Boys is a classic in the buddy cop genre. The humor, action, and storyline blend perfectly. It's a must-watch for fans of the genre and those who love good action movies.",
    "author": "Emily Davis"
  },
  {
    "rating": 3.0,
    "title": "Entertaining but Predictable",
    "description": "The movie offers solid entertainment with its action scenes and humor. However, the plot is quite predictable. Worth a watch if you're in the mood for some light-hearted action.",
    "author": "Michael Brown"
  },
  {
    "rating": 4.2,
    "title": "High-Octane Fun",
    "description": "Bad Boys is high-octane fun from start to finish. The action scenes are exhilarating, and the humor keeps the tone light. Will Smith and Martin Lawrence make a great team.",
    "author": "Sarah Wilson"
  },
  {
    "rating": 4.8,
    "title": "Excellent Action and Humor",
    "description": "This movie strikes a perfect balance between action and humor. The plot is engaging, and the performances by the lead actors are top-notch. Definitely a film that keeps you entertained throughout.",
    "author": "David Lee"
  },
  {
    "rating": 3.8,
    "title": "Solid Action Flick",
    "description": "Bad Boys is a solid action flick with plenty of thrilling moments. The story is straightforward but effective. It's a great movie to watch if you're looking for some mindless fun.",
    "author": "Laura Martinez"
  },
  {
    "rating": 4.3,
    "title": "Action and Comedy Blend Well",
    "description": "The blend of action and comedy in Bad Boys is well-executed. The movie keeps you engaged with its fast pace and witty dialogue. Will Smith and Martin Lawrence deliver great performances.",
    "author": "Chris Taylor"
  },
  {
    "rating": 4.7,
    "title": "A Fun Ride",
    "description": "Bad Boys is a fun ride from beginning to end. The chemistry between the lead actors is fantastic, and the action sequences are impressive. It's a movie that delivers exactly what you expect.",
    "author": "Jessica White"
  }
];

const RatingsSection = () => {
  const [selectedRating, setSelectedRating] = useState('All');

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
            <span className="MoreReview__overallRatingText">4.0</span>
          </div>
          <p>5 Ratings, 5 Reviews</p>
        </div>
        <div className="rating-filter">
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
