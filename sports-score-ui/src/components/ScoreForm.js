import React, { useState } from 'react';

const ScoreForm = ({ matchId, onSubmit }) => {
  const [scores, setScores] = useState({ score1: 0, score2: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(matchId, scores.score1, scores.score2);
  };

  return (
    <form onSubmit={handleSubmit} className="score-form">
      <label>
        Team 1 Score:
        <input 
          type="number" 
          value={scores.score1}
          onChange={(e) => setScores({...scores, score1: parseInt(e.target.value) || 0})}
        />
      </label>
      <label>
        Team 2 Score:
        <input 
          type="number" 
          value={scores.score2}
          onChange={(e) => setScores({...scores, score2: parseInt(e.target.value) || 0})}
        />
      </label>
      <button type="submit">Update Score</button>
    </form>
  );
};

export default ScoreForm;