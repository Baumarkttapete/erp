import React, { useEffect, useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
} from "@mui/material";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import { UserData } from "../../models/UserData";
import { TriangleData } from "../../models/TriangleData";
import SnackbarInfo, { AlertType } from "./SnackbarInfo";

const steps = ["Benutzereingaben", "Magisches Dreieck", "Informationen", "PDF"];

const CalcStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState<UserData>(
    new UserData(
      0,
      "",
      "",
      0,
      0,
      0,
      { intern: 0, extern: 0 },
      { implementation: 0, prework: 0 }
    )
  );
  const [triangleData, setTriangleData] = useState<TriangleData>(
    new TriangleData(50, 50, 50)
  );
  const [stepOneValid, setStepOneValid] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarText, setSnackbarText] = useState<string>("");
  const [snackbarAlertType, setSnackbarAlertType] = useState<AlertType>("info");

  const [nextBtnActive, setNextBtnActive] = useState<boolean>(false);

  useEffect(() => {
    if (activeStep === 0) setNextBtnActive(stepOneValid);
  }, [stepOneValid, activeStep]);

  const handleNext = () => {
    if (activeStep === 0 && !stepOneValid) {
      setSnackbarText(
        "Bitte gib eine User-Anzahl Branche und Region an, um anschließend auf WEITER klicken zu können."
      );
      setSnackbarAlertType("info");
      setSnackbarOpen(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChangeStepOne = (userData: UserData, allValid: boolean) => {
    setUserData(userData);
    setStepOneValid(allValid);
  };
  const handleChangeStepTwo = (triangleData: TriangleData) => {
    setTriangleData(triangleData);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <StepOne userData={userData} onChange={handleChangeStepOne} />;
      case 1:
        return (
          <StepTwo triangleData={triangleData} onChange={handleChangeStepTwo} />
        );
      case 2:
        return <StepThree userData={userData} triangleData={triangleData} />;
      case 3:
        return <StepFour />;
      default:
        return <Typography>Unbekannter Schritt</Typography>;
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {getStepContent(activeStep)}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            disabled={activeStep === 0}
            variant="contained"
            onClick={handleBack}
            sx={{ flex: 1, margin: "10px", maxWidth: "300px" }}
          >
            Zurück
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            sx={{
              flex: 1,
              margin: "10px",
              maxWidth: "300px",
              backgroundColor: nextBtnActive ? "blue" : "grey",
            }}
          >
            Weiter
          </Button>
        </Box>
      </Box>
      <SnackbarInfo
        text={snackbarText}
        alert={snackbarAlertType}
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
      />
    </>
  );
};

export default CalcStepper;
