import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TeamCard from '../components/TeamCard';

const dummyTeams = [
  { id: 1, name: 'Team A', wins: 5, losses: 2 },
  { id: 2, name: 'Team B', wins: 4, losses: 3 },
  { id: 3, name: 'Team C', wins: 6, losses: 1 },
];

const Teams = () => {
  const [teams] = useState(dummyTeams);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Teams</Typography>
      <Grid container spacing={2}>
        {teams.map(team => (
          <Grid item xs={12} sm={6} md={4} key={team.id}>
            <TeamCard team={team} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Teams;