import React from 'react';

const TeamCard = ({ team }) => (
  <div className="team-card">
    <h3>{team.name}</h3>
    <p>Wins: {team.wins}</p>
    <p>Losses: {team.losses}</p>
  </div>
);

export default TeamCard;