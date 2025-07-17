import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './StandingsTable.css';

const StandingsTable = ({ teams }) => (
  <TableContainer component={Paper} className="standings-table-container">
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Position</TableCell>
          <TableCell>Team</TableCell>
          <TableCell>W</TableCell>
          <TableCell>L</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {teams.map((team, index) => (
          <TableRow key={team.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{team.name}</TableCell>
            <TableCell>{team.wins}</TableCell>
            <TableCell>{team.losses}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default StandingsTable;