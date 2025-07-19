import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import "./MatchCard.css";

const MatchCard = ({ match }) => (
  <Card className={`match-card${match.isLive ? " match-card-live" : ""}`}>
    <CardContent>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={3}
        className="match-card-stack"
      >
        <Box className="match-card-team-box">
          <Typography
            variant="subtitle1"
            fontWeight={500}
            className="match-card-team-name"
          >
            {match.team1}
          </Typography>
          <Typography
            variant="h4"
            fontWeight={700}
            color="primary.main"
            className="match-card-score"
          >
            {match.score1}
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          className="match-card-divider"
        />
        <Box className="match-card-team-box">
          <Typography
            variant="subtitle1"
            fontWeight={500}
            className="match-card-team-name"
          >
            {match.team2}
          </Typography>
          <Typography
            variant="h4"
            fontWeight={700}
            color="primary.main"
            className="match-card-score"
          >
            {match.score2}
          </Typography>
        </Box>
      </Stack>
      <Typography variant="body2" align="center" className="match-card-vs">
        VS
      </Typography>
      {match.isLive && (
        <Chip
          label="LIVE"
          color="error"
          size="small"
          className="match-card-live-chip"
        />
      )}
    </CardContent>
  </Card>
);

export default MatchCard;
