import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import "./search.css";
import { AiOutlineSearch } from "react-icons/ai";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const pages = [
  { label: "home", link: "/" },
  { label: "about us", link: "/aboutus" },
  { label: "all products", link: "/products" },
];

const settings = [
  { label: "Profile", link: "/product" },
  { label: "Dashboard", link: "/dashbord" },
  { label: "Logout", link: "/" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.role === "admin") {
        console.log('role',decodedToken.role)
        setIsAdmin(true);
      }
      setIsLoggedIn(true);
    }
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
  };

  return (
    <AppBar position="static" sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              Menu
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Button
                    component={Link}
                    to={page.link}
                    sx={{ width: "100%", textAlign: "center" }}
                  >
                    {page.label}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Typography>
            <AiOutlineSearch className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.link}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
          {!isLoggedIn && (
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              color="inherit"
              sx={{ marginRight: "21px" }}
            >
              SignIn
            </Button>
          )}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => {
                if (setting.label === "Dashboard" && !isAdmin) {
                  return null;
                }
                return (
                  <MenuItem
                    key={setting.label}
                    onClick={
                      setting.label === "Logout" ? handleLogout : handleCloseUserMenu
                    }
                    component={Link}
                    to={setting.link}
                  >
                    {setting.label}
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar