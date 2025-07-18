import React from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import "./Article.css";

const Article = () => {
  const { id } = useParams();
  return (
    <Container maxWidth="sm" className="article-container">
      <Paper elevation={2} className="article-paper">
        <Typography variant="h4" gutterBottom className="article-title">
          Article {id}
        </Typography>
        <Typography>
          This is a dummy article with id {id}. More content coming soon!
        </Typography>
      </Paper>
    </Container>
  );
};

export default Article;
