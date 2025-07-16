import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';

const Stats = () => (
  <Container maxWidth="sm" sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>Stats Overview</Typography>
    <Paper elevation={1} sx={{ p: 2 }}>
      <List>
        <ListItem>Top Fragger: Player X (1.32 K/D)</ListItem>
        <ListItem>Most Assists: Player Y (210 assists)</ListItem>
        <ListItem>Highest ADR: Player Z (92.5 ADR)</ListItem>
      </List>
    </Paper>
  </Container>
);

export default Stats; 