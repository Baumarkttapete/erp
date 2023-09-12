import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import routePaths from "./routePaths";
import logo from "./img/logo.png";
import { lightTheme } from "./theme/Colors";

const Navigation: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: lightTheme.primary }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img src={logo} style={{ width: "250px", margin: "10px" }} />
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to={routePaths.home}
          sx={{
            "&:hover": {
              color: lightTheme.accent,
            },
          }}
        >
          Home
        </Button>
        <hr />
        <Button color="inherit" component={Link} to={routePaths.calculator}>
          Kalkulation
        </Button>
        <hr />
        <Button color="inherit" component={Link} to={routePaths.about}>
          FAQ
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
