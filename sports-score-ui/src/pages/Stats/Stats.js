import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import "./Stats.css";

// Mock data for 10 players
const mockStats = [
  {
    player: "stonezy",
    flag: "🇺🇦",
    agents: ["jett", "raze", "chamber"],
    rounds: 205,
    r2: 1.38,
    acs: 289.9,
    kd: 1.45,
    kast: 75,
    adr: 184.4,
    kpr: 1.04,
    apr: 0.23,
    fkpr: 0.21,
    fdpr: 0.11,
    hs: 26,
    cl: 29,
    clmax: "5/17",
    kmax: 32,
    k: 214,
    d: 148,
    a: 48,
    fk: 43,
  },
  {
    player: "StarBound",
    flag: "🇨🇦",
    agents: ["sova", "fade", "breach"],
    rounds: 277,
    r2: 1.37,
    acs: 240.8,
    kd: 1.63,
    kast: 77,
    adr: 148.6,
    kpr: 0.91,
    apr: 0.15,
    fkpr: 0.16,
    fdpr: 0.05,
    hs: 16,
    cl: 16,
    clmax: "8/51",
    kmax: 38,
    k: 253,
    d: 155,
    a: 42,
    fk: 45,
  },
  {
    player: "tok1o",
    flag: "🇺🇸",
    agents: ["jett", "raze"],
    rounds: 397,
    r2: 1.36,
    acs: 283.7,
    kd: 1.43,
    kast: 72,
    adr: 179.6,
    kpr: 0.99,
    apr: 0.2,
    fkpr: 0.18,
    fdpr: 0.13,
    hs: 27,
    cl: 19,
    clmax: "6/31",
    kmax: 32,
    k: 393,
    d: 275,
    a: 81,
    fk: 72,
  },
  {
    player: "Ayumiii",
    flag: "🇲🇾",
    agents: ["sage", "killjoy"],
    rounds: 416,
    r2: 1.36,
    acs: 280.0,
    kd: 1.57,
    kast: 78,
    adr: 173.7,
    kpr: 1.0,
    apr: 0.24,
    fkpr: 0.25,
    fdpr: 0.11,
    hs: 23,
    cl: 21,
    clmax: "8/39",
    kmax: 26,
    k: 416,
    d: 265,
    a: 99,
    fk: 102,
  },
  {
    player: "tess",
    flag: "🇫🇷",
    agents: ["viper", "astra"],
    rounds: 355,
    r2: 1.3,
    acs: 241.4,
    kd: 1.31,
    kast: 78,
    adr: 150.9,
    kpr: 0.86,
    apr: 0.12,
    fkpr: 0.03,
    fdpr: 0.12,
    hs: 31,
    cl: 19,
    clmax: "10/53",
    kmax: 32,
    k: 306,
    d: 234,
    a: 158,
    fk: 42,
  },
  // ...add more players as needed
];

// Helper for color-coding (simple gradient based on value)
function getCellColor(value, min, max, color1, color2) {
  if (value == null) return undefined;
  const percent = (value - min) / (max - min);
  const r1 = parseInt(color1.slice(1, 3), 16);
  const g1 = parseInt(color1.slice(3, 5), 16);
  const b1 = parseInt(color1.slice(5, 7), 16);
  const r2 = parseInt(color2.slice(1, 3), 16);
  const g2 = parseInt(color2.slice(3, 5), 16);
  const b2 = parseInt(color2.slice(5, 7), 16);
  const r = Math.round(r1 + (r2 - r1) * percent);
  const g = Math.round(g1 + (g2 - g1) * percent);
  const b = Math.round(b1 + (b2 - b1) * percent);
  return `background: rgb(${r},${g},${b},0.25)`;
}

const statColumns = [
  { key: "player", label: "PLAYER", sticky: true },
  { key: "agents", label: "AGENTS" },
  { key: "rounds", label: "RND" },
  { key: "r2", label: "R²" },
  { key: "acs", label: "ACS", color: ["#e0e7fa", "#a3bffa"] },
  { key: "kd", label: "K:D", color: ["#e0fae0", "#4fd1c5"] },
  { key: "kast", label: "KAST", color: ["#e0f7fa", "#38b2ac"] },
  { key: "adr", label: "ADR", color: ["#fceabb", "#f8b500"] },
  { key: "kpr", label: "KPR", color: ["#e0e7fa", "#a3bffa"] },
  { key: "apr", label: "APR", color: ["#e0fae0", "#4fd1c5"] },
  { key: "fkpr", label: "FKPR", color: ["#fceabb", "#f8b500"] },
  { key: "fdpr", label: "FDPR", color: ["#fceabb", "#f8b500"] },
  { key: "hs", label: "HS%" },
  { key: "cl", label: "CL%" },
  { key: "clmax", label: "CL" },
  { key: "kmax", label: "KMAX" },
  { key: "k", label: "K" },
  { key: "d", label: "D" },
  { key: "a", label: "A" },
  { key: "fk", label: "FK" },
];

const getStatRange = (key) => {
  const values = mockStats
    .map((row) => row[key])
    .filter((v) => typeof v === "number");
  return [Math.min(...values), Math.max(...values)];
};

const Stats = () => (
  <Container maxWidth="xl" className="stats-container">
    <Typography variant="h4" gutterBottom className="stats-title">
      Player Stats
    </Typography>
    <Paper elevation={2} className="stats-paper">
      <TableContainer style={{ maxHeight: 600 }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              {statColumns.map((col) => (
                <TableCell
                  key={col.key}
                  align={col.key === "player" ? "left" : "center"}
                  style={
                    col.sticky
                      ? {
                          position: "sticky",
                          left: 0,
                          background: "#23272f",
                          zIndex: 2,
                        }
                      : {}
                  }
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {mockStats.map((row, idx) => (
              <TableRow key={row.player} hover>
                {statColumns.map((col) => {
                  let value = row[col.key];
                  let style = {};
                  if (col.color && typeof value === "number") {
                    const [min, max] = getStatRange(col.key);
                    style = {
                      ...style,
                      ...{
                        background: getCellColor(
                          value,
                          min,
                          max,
                          col.color[0],
                          col.color[1],
                        ),
                      },
                    };
                  }
                  if (col.key === "player") {
                    return (
                      <TableCell
                        key={col.key}
                        align="left"
                        style={
                          col.sticky
                            ? {
                                position: "sticky",
                                left: 0,
                                background: "#23272f",
                                zIndex: 1,
                              }
                            : {}
                        }
                      >
                        <span style={{ fontWeight: 600 }}>
                          {row.flag} {value}
                        </span>
                      </TableCell>
                    );
                  }
                  if (col.key === "agents") {
                    return (
                      <TableCell key={col.key} align="center">
                        {row.agents.map((agent, i) => (
                          <Avatar
                            key={i}
                            alt={agent}
                            src={
                              process.env.PUBLIC_URL +
                              "/images/players/player-2.png"
                            }
                            style={{
                              width: 24,
                              height: 24,
                              display: "inline-block",
                              marginRight: 2,
                            }}
                          />
                        ))}
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell key={col.key} align="center" style={style}>
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  </Container>
);

export default Stats;
