import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';

const Players = () => (
  <Container maxWidth="sm" sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>Players</Typography>
    <Paper elevation={1} sx={{ p: 2 }}>
      <List>
        <ListItem>Player X (Team Alpha)</ListItem>
        <ListItem>Player Y (Team Beta)</ListItem>
        <ListItem>Player Z (Team Delta)</ListItem>
        <ListItem>Player W (Team Gamma)</ListItem>
      </List>
    </Paper>
  </Container>
);

export default Players; 