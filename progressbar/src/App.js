import React from 'react';
import FeedbackComponent from './component/FeedbackComponent';
import './App.css'

const App = () => {
  return (
    <div>
      <h1>Logo</h1>
      <FeedbackComponent title={'Responsiveness'} color={'filledGreen'} />
      <FeedbackComponent title={'Competency in advising right solution'} color={'filledYellow'} />
      <FeedbackComponent title={'Trustworthiness'} color={'filledLightGreen'} />
      <FeedbackComponent title={'Customer service and support'} color={'filledGreen'} />
      <div className="next-button-container">
        <button className="next-button" disabled>Next</button>
      </div>

    </div>
  );
};

export default App;