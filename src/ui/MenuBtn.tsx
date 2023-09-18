import React from "react";
import { Box, Button, Menu, Slider, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTheme } from "../theme/ThemeProvider";
import { bright, highContrast } from "../theme/Colors";

const MenuBtn: React.FC = ({}) => {
  const { theme, setTheme } = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (event: Event, newValue: number | number[]) => {
    const value = Array.isArray(newValue) ? newValue[0] : newValue;

    if (value === 0) {
      setTheme(bright);
    } else {
      setTheme(highContrast);
    }
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <SettingsIcon sx={{ color: theme.font2 }} />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{
            width: "200px",
            display: "flex",
            margin: "10px",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ margin: "10px auto", flex: 1, color: theme.font }}>
            Theme
          </Typography>
          <Slider
            sx={{ margin: "10px 30px", width: "120px" }}
            value={theme === bright ? 0 : 1}
            onChange={(e, newValue) => handleThemeChange(e, newValue)}
            step={1}
            marks={[
              { value: 0, label: "Bright" },
              { value: 1, label: "high Contrast" },
            ]}
            min={0}
            max={1}
          />
        </Box>
      </Menu>
    </div>
  );
};

export default MenuBtn;
