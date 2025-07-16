import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Article = () => {
  const { id } = useParams();
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>Article {id}</Typography>
        <Typography>This is a dummy article with id {id}. More content coming soon!</Typography>
      </Paper>
    </Container>
  );
};

export default Article; 