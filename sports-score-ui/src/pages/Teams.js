import React, { useState, useEffect } from 'react';
import TeamCard from '../components/TeamCard';
import { getStandings } from '../services/mockApi';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStandings();
      setTeams(data);
    };
    fetchData();
  }, []);

  return (
    <div className="page">
      <h1>Teams</h1>
      <div className="teams-container">
        {teams.map(team => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default Teams;