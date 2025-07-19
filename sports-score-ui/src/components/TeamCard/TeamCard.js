import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./TeamCard.css";

const TeamCard = ({ team }) => (
  <Card className="team-card">
    <CardContent>
      <Typography variant="h6">{team.name}</Typography>
      <Typography color="text.secondary">Wins: {team.wins}</Typography>
      <Typography color="text.secondary">Losses: {team.losses}</Typography>
    </CardContent>
  </Card>
);

export default TeamCard;
