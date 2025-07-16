import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Standings from './pages/Standings';
import Teams from './pages/Teams';
import Scores from './pages/Scores';
import Home from './pages/Home';
import Fixtures from './pages/Fixtures';
import Rankings from './pages/Rankings';
import Players from './pages/Players';
import Stats from './pages/Stats';
import MatchDetails from './pages/MatchDetails';
import News from './pages/News';
import Article from './pages/Article';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/players" element={<Players />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<Article />} />
            <Route path="/match/:id" element={<MatchDetails />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/scores" element={<Scores />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;