import { AppBar, Toolbar, Button, Box } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import routePaths from "./routePaths";
import logo from "./img/logo.png";
import MenuBtn from "./ui/MenuBtn";
import { useTheme } from "./theme/ThemeProvider";

const Navigation: React.FC = () => {
  const { theme } = useTheme();
  const location = useLocation();

  const getButtonStyle = (route: string) => {
    return {
      color: location.pathname === route ? theme.secondary : theme.font2,
      fontWeight: "bold",
      borderBottom:
        location.pathname === route ? "4px solid white" : theme.primary,
      margin: "5px",
      "&:hover": {
        color: theme.accent,
        opacity: "0.8",
      },
    };
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.primary }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          sx={{
            backgroundColor: "transparent",
          }}
          to={routePaths.home}
          component={Link}
        >
          <img src={logo} style={{ width: "250px", margin: "10px" }} />
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Button
            component={Link}
            to={routePaths.home}
            sx={getButtonStyle(routePaths.home)}
          >
            Home
          </Button>
          <hr />
          <Button
            component={Link}
            to={routePaths.calculator}
            sx={getButtonStyle(routePaths.calculator)}
          >
            Kalkulation
          </Button>
          <hr />
          <Button
            component={Link}
            to={routePaths.about}
            sx={getButtonStyle(routePaths.about)}
          >
            About
          </Button>
          <hr />
          <MenuBtn />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
