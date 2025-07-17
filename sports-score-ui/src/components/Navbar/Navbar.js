import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import './Navbar.css';
import Login from '../../pages/Login/Login';
import Signup from '../../pages/Signup/Signup';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Matches', to: '/fixtures' },
  { label: 'Rankings', to: '/rankings' },
  { label: 'Players', to: '/players' },
  { label: 'Stats', to: '/stats' },
  { label: 'News', to: '/news' },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [authMode, setAuthMode] = useState('login');

  const handleAuthClick = (event, mode) => {
    setAuthMode(mode);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default" elevation={2}>
      <Toolbar className="navbar-toolbar">
        <Box className="navbar-links-box">
          {navLinks.map(link => (
            <Button
              key={link.to}
              color="inherit"
              component={RouterLink}
              to={link.to}
              className="navbar-link-btn"
            >
              {link.label}
            </Button>
          ))}
        </Box>
        <Box className="navbar-auth-box">
          <Button variant="contained" color="inherit" onClick={e => handleAuthClick(e, 'login')}>Login</Button>
          <Button variant="contained" color="primary" onClick={e => handleAuthClick(e, 'signup')}>Sign Up</Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{ className: 'navbar-menu-paper' }}
          >
            {authMode === 'login' ? (
              <Login />
            ) : (
              <Signup />
            )}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;