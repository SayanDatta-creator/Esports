import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LiveScores from './pages/LiveScores';
import Standings from './pages/Standings';
import Teams from './pages/Teams';
import Scores from './pages/Scores';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<LiveScores />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/scores" element={<Scores />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;