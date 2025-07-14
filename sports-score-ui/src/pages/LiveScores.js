import React, { useState, useEffect } from 'react';
import MatchCard from '../components/MatchCard';
import { getScores } from '../services/mockApi';

const LiveScores = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getScores();
      setMatches(data.filter(match => match.isLive));
    };
    fetchData();
    
    // Simulate live updates
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <h1>Live Scores</h1>
      <div className="matches-container">
        {matches.map(match => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default LiveScores;