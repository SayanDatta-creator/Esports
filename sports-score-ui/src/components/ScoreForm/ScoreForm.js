import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './ScoreForm.css';

const ScoreForm = ({ matchId, onSubmit }) => {
  const [scores, setScores] = useState({ score1: 0, score2: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(matchId, scores.score1, scores.score2);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="score-form-root">
      <Stack spacing={2}>
        <TextField
          label="Team 1 Score"
          type="number"
          value={scores.score1}
          onChange={e => setScores({ ...scores, score1: parseInt(e.target.value) || 0 })}
          fullWidth
        />
        <TextField
          label="Team 2 Score"
          type="number"
          value={scores.score2}
          onChange={e => setScores({ ...scores, score2: parseInt(e.target.value) || 0 })}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">Update Score</Button>
      </Stack>
    </Box>
  );
};

export default ScoreForm;