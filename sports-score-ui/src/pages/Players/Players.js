import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import "./Players.css";

const dummyPlayers = [
  {
    nickname: "1eeR",
    realName: "Aliaksandr Nahorny",
    team: "Valorant Titans",
    rank: "Radiant",
    img: process.env.PUBLIC_URL + "/images/players/player-1.png",
  },
  {
    nickname: "910",
    realName: "Usukhbayar Banzragch",
    team: "Phoenix Five",
    rank: "Diamond",
    img: process.env.PUBLIC_URL + "/images/players/player-2.png",
  },
  {
    nickname: "ac0R",
    realName: "Frederik Gyldstrand",
    team: "Shadow Wolves",
    rank: "Platinum",
    img: process.env.PUBLIC_URL + "/images/players/player-3.png",
  },
  {
    nickname: "adamb",
    realName: "Adam Angström",
    team: "Iron Giants",
    rank: "Iron",
    img: process.env.PUBLIC_URL + "/images/players/player-1.png",
  },
  {
    nickname: "afro",
    realName: "Aurélien Drapier",
    team: "Radiant Stars",
    rank: "Gold",
    img: process.env.PUBLIC_URL + "/images/players/player-2.png",
  },
  {
    nickname: "Ag1l",
    realName: "André Gil",
    team: "Ascendant Crew",
    rank: "Ascendant",
    img: process.env.PUBLIC_URL + "/images/players/player-3.png",
  },
  // Add more dummy players as needed
];

const rankIconMap = {
  Gold: process.env.PUBLIC_URL + "/images/rank-icon/Gold_3_Rank.png",
  Platinum: process.env.PUBLIC_URL + "/images/rank-icon/Platinum_3_Rank.png",
  Silver: process.env.PUBLIC_URL + "/images/rank-icon/Silver_3_Rank.png",
  Diamond: process.env.PUBLIC_URL + "/images/rank-icon/Diamond_3_Rank.png",
  Iron: process.env.PUBLIC_URL + "/images/rank-icon/Iron_3_Rank.png",
  Immortal: process.env.PUBLIC_URL + "/images/rank-icon/Immortal_3_Rank.png",
  Ascendant: process.env.PUBLIC_URL + "/images/rank-icon/Ascendant_3_Rank.png",
  Radiant: process.env.PUBLIC_URL + "/images/rank-icon/Radiant_Rank.png",
};

const Players = () => (
  <Container maxWidth="lg" className="players-container">
    <Typography variant="h4" gutterBottom className="players-title">
      All Valorant Players
    </Typography>
    <Grid container spacing={3}>
      {dummyPlayers.map((player, idx) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
          <Card className="player-card">
            <Box className="player-card-box">
              <CardMedia
                component="img"
                image={player.img}
                alt={player.nickname}
                className="player-img"
              />
              <Box className="player-nick-rank">
                <Typography
                  variant="h6"
                  fontWeight={700}
                  className="player-nickname"
                >
                  {player.nickname}
                </Typography>
                <img
                  src={rankIconMap[player.rank]}
                  alt={player.rank + " rank"}
                  className="player-rank-icon"
                />
              </Box>
              <Typography
                variant="body2"
                color="grey.400"
                className="player-realname"
              >
                {player.realName}
              </Typography>
              <Typography
                variant="body2"
                fontWeight={600}
                className="player-team"
              >
                {player.team}
              </Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Players;
