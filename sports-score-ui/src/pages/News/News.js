import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import "./News.css";

const mockThreads = [
  {
    id: 1,
    title: "Pickems: VCT EMEA S2 Group Stage",
    stickied: true,
    category: "General Discussion",
    author: "sk_",
    time: "1 week ago",
    comments: 26,
    views: 1200,
  },
  {
    id: 2,
    title: "Pickems: VCT AMER S2 Group Stage",
    stickied: true,
    category: "General Discussion",
    author: "ccccc_",
    time: "2 days ago",
    comments: 22,
    views: 900,
  },
  {
    id: 3,
    title: "Pickems: VCL NA Stage 3 Swiss",
    stickied: true,
    category: "General Discussion",
    author: "ThatsAWrap",
    time: "1 week ago",
    comments: 10,
    views: 500,
  },
  {
    id: 4,
    title: "no politics/religion",
    stickied: true,
    category: "General Discussion",
    author: "enigma",
    time: "about 4 years ago",
    comments: 1,
    views: 2102,
  },
  {
    id: 5,
    title: "YFP vs. ENVY – Challengers 2025: North America ACE Stage 3 R2",
    stickied: false,
    category: "Matches",
    author: "Miyuky",
    time: "32 seconds ago",
    comments: 15,
    views: 80,
  },
  {
    id: 6,
    title: "just finished the t1 documentary",
    stickied: false,
    category: "General Discussion",
    author: "t1aSUNNS",
    time: "33 seconds ago",
    comments: 14,
    views: 21,
  },
  {
    id: 7,
    title: "Team secret coach",
    stickied: false,
    category: "General Discussion",
    author: "Mvy",
    time: "46 seconds ago",
    comments: 24,
    views: 3,
  },
  {
    id: 8,
    title: "ENvY cope and disrespect",
    stickied: false,
    category: "General Discussion",
    author: "KiwiJuice",
    time: "1 minute ago",
    comments: 6,
    views: 4,
  },
  {
    id: 9,
    title: "ion and canezerra",
    stickied: false,
    category: "General Discussion",
    author: "michaelisupset",
    time: "1 minute ago",
    comments: 4,
    views: 2,
  },
  {
    id: 10,
    title: "T1 Documentary",
    stickied: false,
    category: "General Discussion",
    author: "archetype",
    time: "2 minutes ago",
    comments: 139,
    views: 80,
  },
];

const News = () => {
  const stickied = mockThreads.filter((t) => t.stickied);
  const normal = mockThreads.filter((t) => !t.stickied);

  return (
    <Container maxWidth="md" className="news-container">
      <Box className="news-thread-list">
        {stickied.length > 0 && (
          <>
            {stickied.map((thread) => (
              <Paper
                key={thread.id}
                className="news-thread-card stickied"
                elevation={4}
              >
                <Box className="news-thread-title-row">
                  <Typography variant="subtitle1" className="news-thread-title">
                    {thread.title}{" "}
                    <Chip
                      label="STICKIED"
                      size="small"
                      color="success"
                      className="news-sticky-badge"
                    />
                  </Typography>
                  <Typography
                    variant="caption"
                    className="news-thread-category"
                  >
                    in {thread.category}
                  </Typography>
                </Box>
                <Box className="news-thread-meta">
                  <span>
                    by <b>{thread.author}</b>
                  </span>
                  <span>• {thread.time}</span>
                  <span>• {thread.comments} comments</span>
                  <span>• {thread.views} views</span>
                </Box>
              </Paper>
            ))}
            <Divider className="news-sticky-divider" />
          </>
        )}
        {normal.map((thread) => (
          <Paper key={thread.id} className="news-thread-card" elevation={2}>
            <Box className="news-thread-title-row">
              <Typography variant="subtitle1" className="news-thread-title">
                {thread.title}
              </Typography>
              <Typography variant="caption" className="news-thread-category">
                in {thread.category}
              </Typography>
            </Box>
            <Box className="news-thread-meta">
              <span>
                by <b>{thread.author}</b>
              </span>
              <span>• {thread.time}</span>
              <span>• {thread.comments} comments</span>
              <span>• {thread.views} views</span>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default News;
