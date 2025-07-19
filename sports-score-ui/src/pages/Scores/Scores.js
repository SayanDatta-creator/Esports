import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MatchCard from "../../components/MatchCard/MatchCard";
import ScoreForm from "../../components/ScoreForm/ScoreForm";
import "./Scores.css";

const dummyMatches = [
  {
    id: 1,
    team1: "Team A",
    team2: "Team B",
    score1: 3,
    score2: 2,
    isLive: true,
  },
  {
    id: 2,
    team1: "Team C",
    team2: "Team D",
    score1: 0,
    score2: 0,
    isLive: true,
  },
];

const Scores = () => {
  const [matches, setMatches] = useState(dummyMatches);
  const [selectedMatch, setSelectedMatch] = useState(null);

  const handleUpdateScore = (matchId, score1, score2) => {
    setMatches((matches) =>
      matches.map((m) => (m.id === matchId ? { ...m, score1, score2 } : m)),
    );
    setSelectedMatch(null);
  };

  return (
    <Container maxWidth="md" className="scores-container">
      <Typography variant="h4" gutterBottom className="scores-title">
        Match Scores
      </Typography>
      <Grid container spacing={2}>
        {matches.map((match) => (
          <Grid item xs={12} sm={6} md={4} key={match.id}>
            <MatchCard match={match} />
            <Button
              variant={selectedMatch === match.id ? "outlined" : "contained"}
              color="primary"
              className={`scores-edit-btn${selectedMatch === match.id ? " scores-edit-btn-outlined" : ""}`}
              onClick={() =>
                setSelectedMatch(selectedMatch === match.id ? null : match.id)
              }
              fullWidth
            >
              {selectedMatch === match.id ? "Cancel" : "Edit Score"}
            </Button>
            {selectedMatch === match.id && (
              <ScoreForm matchId={match.id} onSubmit={handleUpdateScore} />
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Scores;
