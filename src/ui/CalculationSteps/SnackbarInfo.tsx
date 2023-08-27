import { Alert, Snackbar } from "@mui/material";
import React, { useState, useEffect } from "react";

export type AlertType = "error" | "warning" | "info" | "success";

const SnackbarInfo: React.FC<{
  text: string;
  alert: AlertType;
  open: boolean;
  onClose: () => void;
}> = ({ text, alert, open, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert severity={alert} sx={{ width: "100%" }}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarInfo;
