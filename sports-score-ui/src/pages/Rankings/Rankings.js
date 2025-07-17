import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import './Rankings.css';

const dummyRankings = [
  { rank: 1, name: 'Team C', wins: 6, losses: 1, logo: process.env.PUBLIC_URL + '/images/teams/team-1.png' },
  { rank: 2, name: 'Team A', wins: 5, losses: 2, logo: process.env.PUBLIC_URL + '/images/teams/team-2.png' },
  { rank: 3, name: 'Team B', wins: 4, losses: 3, logo: process.env.PUBLIC_URL + '/images/teams/team-3.png' },
];

const Rankings = () => (
  <Container maxWidth="md" className="rankings-container">
    <Typography variant="h4" gutterBottom className="rankings-title">Team Rankings</Typography>
    <Grid container spacing={3} className="rankings-grid">
      {dummyRankings.map((team) => (
        <Grid item xs={12} sm={6} md={4} key={team.rank}>
          <Card className="rankings-card">
            <CardMedia
              component="img"
              image={team.logo}
              alt={team.name + ' logo'}
              className="rankings-logo"
            />
            <CardContent className="rankings-card-content">
              <Box className="rankings-card-header">
                <Typography variant="h6" className="rankings-rank">#{team.rank}</Typography>
                <Typography variant="h6" className="rankings-name">{team.name}</Typography>
              </Box>
              <Typography variant="body2" color="grey.400" className="rankings-wins-losses">Wins: <b>{team.wins}</b> &nbsp; Losses: <b>{team.losses}</b></Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Rankings; 