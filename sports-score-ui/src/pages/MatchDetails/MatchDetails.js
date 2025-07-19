import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./MatchDetails.css";

const MatchDetails = () => (
  <Container maxWidth="sm" className="match-details-container">
    <Typography variant="h4" gutterBottom className="match-details-title">
      Match Details
    </Typography>
    <Paper elevation={2} className="match-details-paper">
      <Typography variant="subtitle1" color="text.secondary">
        [Tabs: Overview | Stats | Lineups | VODs]
      </Typography>
      <Box className="match-details-info-box">
        <Typography variant="h6">Team Alpha vs Team Beta</Typography>
        <Typography>Date: 2024-06-10 18:00</Typography>
        <Typography>Score: 16 - 12</Typography>
        <Typography>Map: Mirage</Typography>
      </Box>
    </Paper>
  </Container>
);

export default MatchDetails;
