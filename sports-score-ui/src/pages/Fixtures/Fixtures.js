import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Fixtures.css';

const dummySchedule = [
  {
    time: '1:30 AM',
    date: '2025-07-17',
    teams: [
      { name: 'RED Canids', flag: '🇧🇷' },
      { name: 'F4TALITY', flag: '🇧🇷' },
    ],
    score: [0, 0],
    status: 'LIVE',
    countdown: null,
    stats: 'Pending',
    vods: 'Pending',
    event: 'Regular Phase–Round 7',
    eventDesc: 'Challengers 2025: Brazil Gamers Club Split 2',
    icon: <ArrowForwardIosIcon color="primary" />,
  },
  {
    time: '3:30 AM',
    date: '2025-07-17',
    teams: [
      { name: 'Six Karma', flag: '🇲🇽' },
      { name: 'E-Xolos LAZER', flag: '🇲🇽' },
    ],
    score: ['-', '-'],
    status: 'Upcoming',
    countdown: '1h 20m',
    stats: 'Pending',
    vods: 'Pending',
    event: 'Regular Phase–Week 4',
    eventDesc: 'Challengers 2025: LATAM North',
    icon: <ArrowForwardIosIcon color="primary" />,
  },
  // Add more dummy rows as needed
];

const dummyResults = [
  {
    time: '10:00 PM',
    date: '2025-07-16',
    teams: [
      { name: 'Team Alpha', flag: '🇺🇸' },
      { name: 'Team Beta', flag: '🇨🇦' },
    ],
    score: [13, 8],
    status: 'Finished',
    countdown: null,
    stats: 'Available',
    vods: 'Available',
    event: 'Playoffs',
    eventDesc: 'Challengers 2025: North America',
    icon: <PlayCircleOutlineIcon color="secondary" />,
  },
  // Add more dummy results as needed
];

function MatchTable({ matches }) {
  return (
    <TableContainer component={Paper} className="fixtures-table-container">
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className="fixtures-table-header">Time</TableCell>
            <TableCell colSpan={2} className="fixtures-table-header">Teams</TableCell>
            <TableCell align="center" className="fixtures-table-header">Score</TableCell>
            <TableCell align="center" className="fixtures-table-header">Status</TableCell>
            <TableCell align="center" className="fixtures-table-header">Stats</TableCell>
            <TableCell align="center" className="fixtures-table-header">VODs</TableCell>
            <TableCell className="fixtures-table-header">Event</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {matches.map((row, idx) => (
            <TableRow key={idx} hover>
              <TableCell>
                <Box className="fixtures-time-box">
                  <AccessTimeIcon fontSize="small" className="fixtures-time-icon" />
                  {row.time}
                </Box>
              </TableCell>
              <TableCell align="right" className="fixtures-team-cell">
                <span className="fixtures-flag">{row.teams[0].flag}</span> {row.teams[0].name}
              </TableCell>
              <TableCell align="left" className="fixtures-team-cell">
                <span className="fixtures-flag">{row.teams[1].flag}</span> {row.teams[1].name}
              </TableCell>
              <TableCell align="center" className="fixtures-score-cell">
                {row.score[0]} <span className="fixtures-score-dash">-</span> {row.score[1]}
              </TableCell>
              <TableCell align="center">
                {row.status === 'LIVE' && <Chip label="LIVE" color="error" size="small" />}
                {row.status === 'Upcoming' && <Chip label="Upcoming" color="success" size="small" />}
                {row.status === 'Finished' && <Chip label="Finished" color="default" size="small" />}
                {row.countdown && (
                  <Chip label={row.countdown} color="success" size="small" className="fixtures-countdown-chip" />
                )}
              </TableCell>
              <TableCell align="center">{row.stats}</TableCell>
              <TableCell align="center">{row.vods}</TableCell>
              <TableCell>
                <Typography variant="body2" className="fixtures-event-title">{row.event}</Typography>
                <Typography variant="caption" color="text.secondary">{row.eventDesc}</Typography>
              </TableCell>
              <TableCell align="center">{row.icon}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const Fixtures = () => {
  const [tab, setTab] = useState(0);
  return (
    <Container maxWidth="lg" className="fixtures-container">
      <Box className="fixtures-tabs-box">
        <Tabs value={tab} onChange={(_, v) => setTab(v)}>
          <Tab label="Schedule" />
          <Tab label="Results" />
        </Tabs>
      </Box>
      <Box className="fixtures-content-box">
        {tab === 0 && (
          <>
            <Typography variant="subtitle2" color="text.secondary" className="fixtures-date-label">
              THU, JULY 17, 2025 <Chip label="TODAY" color="primary" size="small" className="fixtures-today-chip" />
            </Typography>
            <MatchTable matches={dummySchedule} />
          </>
        )}
        {tab === 1 && (
          <>
            <Typography variant="subtitle2" color="text.secondary" className="fixtures-date-label">
              WED, JULY 16, 2025
            </Typography>
            <MatchTable matches={dummyResults} />
          </>
        )}
      </Box>
    </Container>
  );
};

export default Fixtures; 