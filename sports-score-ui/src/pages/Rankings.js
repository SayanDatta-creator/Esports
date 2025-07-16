import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

const dummyRankings = [
  { rank: 1, name: 'Team C', wins: 6, losses: 1, logo: process.env.PUBLIC_URL + '/images/logo-1.jpg' },
  { rank: 2, name: 'Team A', wins: 5, losses: 2, logo: process.env.PUBLIC_URL + '/images/logo-2.jpg' },
  { rank: 3, name: 'Team B', wins: 4, losses: 3, logo: process.env.PUBLIC_URL + '/images/logo-3.png' },
];

const Rankings = () => (
  <Container maxWidth="md" sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>Team Rankings</Typography>
    <Grid container spacing={3} sx={{ mt: 2 }}>
      {dummyRankings.map((team) => (
        <Grid item xs={12} sm={6} md={4} key={team.rank}>
          <Card sx={{ display: 'flex', alignItems: 'center', p: 2, background: '#23272f', color: 'white', borderRadius: 3 }}>
            <CardMedia
              component="img"
              image={team.logo}
              alt={team.name + ' logo'}
              sx={{ width: 56, height: 56, borderRadius: 2, mr: 2, background: '#fff', objectFit: 'contain', p: 1 }}
            />
            <CardContent sx={{ flex: 1, p: 0 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mr: 1 }}>#{team.rank}</Typography>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>{team.name}</Typography>
              </Box>
              <Typography variant="body2" color="grey.400">Wins: <b>{team.wins}</b> &nbsp; Losses: <b>{team.losses}</b></Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Rankings; 