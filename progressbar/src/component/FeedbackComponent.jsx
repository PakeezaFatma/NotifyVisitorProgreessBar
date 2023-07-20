import React, { useState } from 'react';
import './styles.css'; // Create a CSS file for styling

const FeedbackComponent = (props) => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (num) => {
    setRating(num);
  };

  const ratingLabels = ['Extremely bad', 'Bad', 'Natural', 'Good', 'Extremely good'];

  return (
    <div className="feedback-container">
      <h2>{props.title}</h2>
      {/* First Row - Labels */}
      <div className="labels-row">
        {ratingLabels.map((label, index) => (
          <div key={index} className={`label-container`}>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Second Row - Rectangles */}
      <div className="rectangles-row">
        {ratingLabels.map((label, index) => (
          <div key={index} className={`rectangle ${index < rating ? props.color : ''}`} onClick={() => handleRatingClick(index + 1)}>
            {index === 0 && <div className={`left-arrow ${rating > 0 ? props.color : ''}`}></div>}
            {index === ratingLabels.length - 1 && <div className={`right-arrow ${rating === ratingLabels.length ? 'filled' : ''}`}></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackComponent;