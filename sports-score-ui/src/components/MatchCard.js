import React from 'react';

const MatchCard = ({ match }) => (
  <div className={`match-card ${match.isLive ? 'live' : ''}`}>
    <div className="team">
      <span>{match.team1}</span>
      <span className="score">{match.score1}</span>
    </div>
    <div className="vs">VS</div>
    <div className="team">
      <span>{match.team2}</span>
      <span className="score">{match.score2}</span>
    </div>
    {match.isLive && <div className="live-badge">LIVE</div>}
  </div>
);

export default MatchCard;