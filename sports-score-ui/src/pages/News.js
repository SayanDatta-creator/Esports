import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

const News = () => (
  <Container maxWidth="sm" sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>News</Typography>
    <Paper elevation={1} sx={{ p: 2 }}>
      <List>
        <ListItem>
          <Link component={RouterLink} to="/news/1">Major tournament announced for next month!</Link>
        </ListItem>
        <ListItem>
          <Link component={RouterLink} to="/news/2">Player X joins Team Alpha.</Link>
        </ListItem>
      </List>
    </Paper>
  </Container>
);

export default News; 