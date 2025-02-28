// ReviewsCard.jsx
import React from 'react';
import '../css/ReviewCard.css'; // Import the CSS file

const ReviewsCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-content">
        <h3 className="review-title">
          &ldquo;{review.title}&quot;
        </h3>
        <p className="review-description">
          {review.description}
        </p>
      </div>
      <div className="reviewer-info">
        <div className="reviewer-image-container">
          <img src={review.img} alt="" className="reviewer-image" />
        </div>
        <div className="reviewer-details">
          <p className="reviewer-name">
            {review.name}
          </p>
          <p className="reviewer-location">{review.location}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;