import React, { useState, useEffect } from 'react';
import MatchCard from '../components/MatchCard';
import ScoreForm from '../components/ScoreForm';
import { getScores, updateScore } from '../services/mockApi';

const Scores = () => {
  const [matches, setMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getScores();
      setMatches(data);
    };
    fetchData();
  }, []);

  const handleUpdateScore = async (matchId, score1, score2) => {
    await updateScore(matchId, score1, score2);
    const updatedMatches = await getScores();
    setMatches(updatedMatches);
    setSelectedMatch(null);
  };

  return (
    <div className="page">
      <h1>Match Scores</h1>
      <div className="matches-container">
        {matches.map(match => (
          <div key={match.id}>
            <MatchCard match={match} />
            <button onClick={() => setSelectedMatch(selectedMatch === match.id ? null : match.id)}>
              {selectedMatch === match.id ? 'Cancel' : 'Edit Score'}
            </button>
            {selectedMatch === match.id && (
              <ScoreForm 
                matchId={match.id} 
                onSubmit={handleUpdateScore} 
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scores;