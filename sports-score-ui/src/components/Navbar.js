import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Matches', to: '/fixtures' },
  { label: 'Rankings', to: '/rankings' },
  { label: 'Teams', to: '/teams' },
  { label: 'Players', to: '/players' },
  { label: 'Stats', to: '/stats' },
  { label: 'News', to: '/news' },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [authMode, setAuthMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleAuthClick = (event, mode) => {
    setAuthMode(mode);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (authMode === 'signup' && password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`${authMode === 'login' ? 'Logging in' : 'Signing up'} as ${email}`);
    handleClose();
  };

  return (
    <AppBar position="static" color="default" elevation={2}>
      <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navLinks.map(link => (
            <Button
              key={link.to}
              color="inherit"
              component={RouterLink}
              to={link.to}
              sx={{ textTransform: 'none', fontWeight: 500 }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', position: 'relative' }}>
          <Button variant="contained" color="inherit" onClick={e => handleAuthClick(e, 'login')}>Login</Button>
          <Button variant="contained" color="primary" onClick={e => handleAuthClick(e, 'signup')}>Sign Up</Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{ sx: { p: 2, minWidth: 320 } }}
          >
            <form onSubmit={handleSubmit}>
              <Typography variant="h6" align="center" gutterBottom>
                {authMode === 'login' ? 'Login' : 'Sign Up'}
              </Typography>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              {authMode === 'signup' && (
                <TextField
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  fullWidth
                  margin="normal"
                  required
                />
              )}
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                {authMode === 'login' ? 'Login' : 'Sign Up'}
              </Button>
              <Box sx={{ textAlign: 'center', mt: 1 }}>
                {authMode === 'login' ? (
                  <Button color="primary" onClick={() => setAuthMode('signup')} sx={{ textTransform: 'none' }}>Don't have an account? Sign Up</Button>
                ) : (
                  <Button color="primary" onClick={() => setAuthMode('login')} sx={{ textTransform: 'none' }}>Already have an account? Login</Button>
                )}
              </Box>
            </form>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;