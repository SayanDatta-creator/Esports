import React from 'react';

const StandingsTable = ({ teams }) => (
  <table className="standings-table">
    <thead>
      <tr>
        <th>Position</th>
        <th>Team</th>
        <th>W</th>
        <th>L</th>
      </tr>
    </thead>
    <tbody>
      {teams.map((team, index) => (
        <tr key={team.id}>
          <td>{index + 1}</td>
          <td>{team.name}</td>
          <td>{team.wins}</td>
          <td>{team.losses}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default StandingsTable;