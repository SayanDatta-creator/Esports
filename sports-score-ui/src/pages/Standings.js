import React, { useState, useEffect } from 'react';
import StandingsTable from '../components/StandingsTable';
import { getStandings } from '../services/mockApi';

const Standings = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStandings();
      // Sort by wins descending
      setTeams(data.sort((a, b) => b.wins - a.wins));
    };
    fetchData();
  }, []);

  return (
    <div className="page">
      <h1>Standings</h1>
      <StandingsTable teams={teams} />
    </div>
  );
};

export default Standings;