import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';

const valorantBanner = process.env.PUBLIC_URL + '/images/valo-img-1.jpg';
const Home = () => (
  <Container maxWidth="md" sx={{ mt: 4 }}>
    <Typography variant="h3" gutterBottom>Welcome to Esports Valorant Central</Typography>
    <Paper elevation={2} sx={{ p: 0, mb: 4, textAlign: 'center', overflow: 'hidden' }}>
      <Box sx={{ width: '100%', height: { xs: 180, sm: 280, md: 340 }, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#111' }}>
        <img
          src={valorantBanner}
          alt="Valorant Banner"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
      </Box>
    </Paper>
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>Featured Matches</Typography>
      <List>
        <ListItem>Team Alpha vs Team Beta - Today 18:00</ListItem>
        <ListItem>Team Gamma vs Team Delta - Tomorrow 20:00</ListItem>
      </List>
    </Box>
    <Box>
      <Typography variant="h5" gutterBottom>Latest News</Typography>
      <List>
        <ListItem>Major tournament announced for next month!</ListItem>
        <ListItem>Player X joins Team Alpha.</ListItem>
      </List>
    </Box>
  </Container>
);

export default Home; 