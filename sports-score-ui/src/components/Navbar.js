import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><Link to="/">Live Scores</Link></li>
      <li><Link to="/standings">Standings</Link></li>
      <li><Link to="/teams">Teams</Link></li>
      <li><Link to="/scores">Scores</Link></li>
    </ul>
  </nav>
);

export default Navbar;