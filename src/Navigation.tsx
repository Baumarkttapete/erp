import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import routePaths from "./routePaths";
import logo from "./img/logo.png";
import MenuBtn from "./MenuBtn";
import { useTheme } from "./theme/ThemeProvider";

const Navigation: React.FC = () => {
  const { theme, setTheme, fontSize, setFontSize } = useTheme();

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.primary }}>
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
              color: theme.accent,
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
        <MenuBtn />
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
