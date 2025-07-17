import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import StandingsTable from '../../components/StandingsTable/StandingsTable';
import './Standings.css';

const dummyTeams = [
  { id: 1, name: 'Team A', wins: 5, losses: 2 },
  { id: 2, name: 'Team B', wins: 4, losses: 3 },
  { id: 3, name: 'Team C', wins: 6, losses: 1 },
];

const Standings = () => {
  const [teams] = useState(dummyTeams);

  return (
    <Container maxWidth="md" className="standings-container">
      <Typography variant="h4" gutterBottom className="standings-title">Standings</Typography>
      <StandingsTable teams={teams} />
    </Container>
  );
};

export default Standings;