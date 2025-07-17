import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import './Home.css';

const valorantBanner = process.env.PUBLIC_URL + '/images/valo-img-1.jpg';
const Home = () => (
  <Container maxWidth="md" className="home-container">
    <Typography variant="h3" gutterBottom className="home-title">Welcome to Esports Valorant Central</Typography>
    <Paper elevation={2} className="home-banner-paper">
      <Box className="home-banner-box">
        <img
          src={valorantBanner}
          alt="Valorant Banner"
          className="home-banner-img"
        />
      </Box>
    </Paper>
    <Box className="home-featured-box">
      <Typography variant="h5" gutterBottom>Featured Matches</Typography>
      <List>
        <ListItem>Team Alpha vs Team Beta - Today 18:00</ListItem>
        <ListItem>Team Gamma vs Team Delta - Tomorrow 20:00</ListItem>
      </List>
    </Box>
    <Box className="home-news-box">
      <Typography variant="h5" gutterBottom>Latest News</Typography>
      <List>
        <ListItem>Major tournament announced for next month!</ListItem>
        <ListItem>Player X joins Team Alpha.</ListItem>
      </List>
    </Box>
  </Container>
);

export default Home; 