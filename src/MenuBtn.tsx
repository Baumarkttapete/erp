import React from "react";
import { Box, Button, Menu, MenuItem, Slider, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { darkTheme, lightTheme } from "./theme/Colors";
import { fontSizeSmall, fontSizeMedium, fontSizeBig } from "./theme/Sizes";
import { useTheme } from "./theme/ThemeProvider";

const MenuBtn: React.FC = ({}) => {
  const { theme, setTheme, fontSize, setFontSize } = useTheme();

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
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  };

  const handleFontSizeChange = (event: Event, newValue: number | number[]) => {
    const value = Array.isArray(newValue) ? newValue[0] : newValue;

    if (value === 0) {
      setFontSize(fontSizeSmall);
    } else if (value === 1) {
      setFontSize(fontSizeMedium);
    } else {
      setFontSize(fontSizeBig);
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
        <Box sx={{ width: "300px", display: "flex", margin: "10px" }}>
          <Typography sx={{ margin: "10px", flex: 1, color: theme.font }}>
            Theme
          </Typography>
          <Slider
            sx={{ margin: "10px", flex: 1 }}
            value={theme === lightTheme ? 0 : 1}
            onChange={(e, newValue) => handleThemeChange(e, newValue)}
            step={1}
            marks={[
              { value: 0, label: "Light" },
              { value: 1, label: "Dark" },
            ]}
            min={0}
            max={1}
          />
        </Box>
        <hr />
        <Box sx={{ width: "300px", display: "flex", margin: "10px" }}>
          <Typography sx={{ margin: "10px", flex: 1, color: theme.font }}>
            Font Size
          </Typography>
          <Slider
            sx={{ margin: "10px", flex: 1 }}
            value={
              fontSize === fontSizeSmall
                ? 0
                : fontSize === fontSizeMedium
                ? 1
                : 2
            }
            onChange={(e, newValue) => handleFontSizeChange(e, newValue)}
            step={1}
            marks={[
              { value: 0, label: "Small" },
              { value: 1, label: "Medium" },
              { value: 2, label: "Big" },
            ]}
            min={0}
            max={2}
          />
        </Box>
      </Menu>
    </div>
  );
};

export default MenuBtn;
