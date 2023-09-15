import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
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
            color="inherit"
            component={Link}
            to={routePaths.home}
            sx={{
              "&:hover": {
                color: theme.accent,
                opacity: "0.8",
                backgroundColor: theme.primary,
              },
            }}
          >
            Home
          </Button>
          <hr />
          <Button
            color="inherit"
            component={Link}
            to={routePaths.calculator}
            sx={{
              "&:hover": {
                color: theme.accent,
                opacity: "0.8",
                backgroundColor: theme.primary,
              },
            }}
          >
            Kalkulation
          </Button>
          <hr />
          <Button
            color="inherit"
            component={Link}
            to={routePaths.about}
            sx={{
              "&:hover": {
                color: theme.accent,
                opacity: "0.8",
                backgroundColor: theme.primary,
              },
            }}
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
