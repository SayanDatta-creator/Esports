import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import "./Navbar.css";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Matches", to: "/fixtures" },
  { label: "Rankings", to: "/rankings" },
  { label: "Players", to: "/players" },
  { label: "Stats", to: "/stats" },
  { label: "News", to: "/news" },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [authMode, setAuthMode] = useState("login");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  useEffect(() => {
    const onStorage = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

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
          {navLinks.map((link) => (
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
          {user ? (
            <span>Welcome, {user.name}</span>
          ) : (
            <>
              <Button
                variant="contained"
                color="inherit"
                onClick={(e) => handleAuthClick(e, "login")}
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => handleAuthClick(e, "signup")}
              >
                Sign Up
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                {authMode === "login" ? <Login /> : <Signup />}
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
