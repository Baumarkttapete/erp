import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import routePaths from "./routePaths";
import logo from "./img/logo.png";
import MenuBtn from "./ui/MenuBtn";
import { useTheme } from "./theme/ThemeProvider";
import { useIntl } from "react-intl";
import { useIsInputCalc } from "./theme/IsInputCalcProvider";

const Navigation: React.FC = () => {
  const { theme } = useTheme();
  const { isInputCalc } = useIsInputCalc();
  const intl = useIntl();
  const location = useLocation();
  const [allowLink, setAllowLink] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [requestedPath, setRequestedPath] = useState("");

  useEffect(() => {
    if (isInputCalc === false) setAllowLink(true);
    else setAllowLink(false);
  }, [isInputCalc]);

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

  const checkPathChange = (path: string) => {
    if (location.pathname === routePaths.calculator && isInputCalc) {
      setShowDialog(true);
      setRequestedPath(path);
    }
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
          to={allowLink ? routePaths.home : routePaths.calculator}
          component={Link}
          onClick={() => checkPathChange(routePaths.home)}
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
            to={allowLink === true ? routePaths.home : routePaths.calculator}
            sx={getButtonStyle(routePaths.home)}
            onClick={() => checkPathChange(routePaths.home)}
          >
            {intl.formatMessage({ id: "home" })}
          </Button>
          <hr />
          <Button
            component={Link}
            to={routePaths.calculator}
            onClick={() => (isInputCalc ? setAllowLink(false) : undefined)}
            sx={getButtonStyle(routePaths.calculator)}
          >
            {intl.formatMessage({ id: "calculation" })}
          </Button>
          <hr />
          <Button
            component={Link}
            to={allowLink === true ? routePaths.about : routePaths.calculator}
            onClick={() => checkPathChange(routePaths.about)}
            sx={getButtonStyle(routePaths.about)}
          >
            {intl.formatMessage({ id: "about" })}
          </Button>
          <hr />
          <Button
            component={Link}
            to={allowLink === true ? routePaths.faq : routePaths.calculator}
            onClick={() => checkPathChange(routePaths.faq)}
            sx={getButtonStyle(routePaths.faq)}
          >
            {intl.formatMessage({ id: "faq" })}
          </Button>
          <hr />
          <MenuBtn />
          <Dialog
            open={showDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {intl.formatMessage({ id: "dialog_dataloss_title" })}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {intl.formatMessage({ id: "dialog_dataloss_text" })}
              </DialogContentText>
            </DialogContent>
            <DialogActions
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Button
                onClick={() => {
                  setAllowLink(true);
                  setShowDialog(false);
                }}
                sx={{
                  width: "33%",
                  backgroundColor: theme.primary,
                  color: theme.font2,
                }}
              >
                {intl.formatMessage({ id: "back" })}
              </Button>
              <Button
                onClick={() => {
                  setAllowLink(true);
                  setShowDialog(false);
                }}
                autoFocus
                component={Link}
                to={requestedPath}
                sx={{
                  width: "33%",
                  backgroundColor: theme.primary,
                  color: theme.font2,
                }}
              >
                {intl.formatMessage({ id: "next" })}
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
