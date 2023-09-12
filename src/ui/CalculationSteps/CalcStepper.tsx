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
import { RiskData } from "../../models/RiskData";
import ScrollBtn from "../ScrollBtn";
import { useIntl } from "react-intl";
import { getRiskData } from "../../helper/RiskHelper";
import { darkTheme, lightTheme } from "../../theme/Colors";

const steps = ["Benutzereingaben", "Daten", "Risiken", "PDF"];

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
      { implementation: 0, prework: 0 },
      {
        datenmigration: 0,
        zeitplan: 0,
        anpassungen: 0,
        ressourcen: 0,
        abbildungProzesse: 0,
        schnittstellen: 0,
        anforderungenUnklar: 0,
        schulungsaufwand: 0,
      }
    )
  );
  const [triangleData, setTriangleData] = useState<TriangleData>(
    new TriangleData(50, 50, 50)
  );
  const [riskData, setRiskData] = useState<RiskData[]>([]);
  const [stepOneValid, setStepOneValid] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarText, setSnackbarText] = useState<string>("");
  const [snackbarAlertType, setSnackbarAlertType] = useState<AlertType>("info");

  const [nextBtnActive, setNextBtnActive] = useState<boolean>(false);

  useEffect(() => {
    if (activeStep === 0) setNextBtnActive(stepOneValid);
  }, [stepOneValid, activeStep]);

  useEffect(() => {
    setRiskData(getRiskData(userData));
  }, [userData]);

  const handleNext = () => {
    if (activeStep === 0 && !stepOneValid) {
      setSnackbarText(
        "Bitte gib eine User-Anzahl Branche und Region an, um anschließend auf WEITER klicken zu können."
      );
      setSnackbarAlertType("info");
      setSnackbarOpen(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (activeStep !== 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleChangeStepOne = (userData: UserData, allValid: boolean) => {
    setUserData(userData);
    setStepOneValid(allValid);
  };
  const handleChangeStepTwo = (
    triangleData: TriangleData,
    riskData: RiskData[]
  ) => {
    setTriangleData(triangleData);
    setRiskData(riskData);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <StepOne userData={userData} onChange={handleChangeStepOne} />;
      case 1:
        return <StepThree userData={userData} triangleData={triangleData} />;
      case 2:
        return (
          <StepTwo
            userData={userData}
            riskData={riskData}
            triangleData={triangleData}
            onChange={handleChangeStepTwo}
          />
        );
      case 3:
        return (
          <StepFour
            userData={userData}
            triangleData={triangleData}
            riskData={riskData}
          />
        );
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
        <ScrollBtn scrollUp />
        <ScrollBtn scrollUp={false} />
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconProps={{
                  style: {
                    color:
                      index === activeStep
                        ? lightTheme.primary
                        : lightTheme.secondary,
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {getStepContent(activeStep)}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            disabled={activeStep === 0}
            variant="contained"
            onClick={handleBack}
            sx={{
              flex: 1,
              margin: "10px",
              maxWidth: "300px",
              backgroundColor: lightTheme.primary,
              "&:hover": {
                opacity: "0.9",
                backgroundColor: lightTheme.primary,
              },
              "&:disabled": {
                opacity: "0.5",
                backgroundColor: lightTheme.primary,
                color: "white",
              },
            }}
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
              backgroundColor: lightTheme.primary,
              "&:hover": {
                opacity: "0.9",
                backgroundColor: lightTheme.primary,
              },
              "&:disabled": {
                opacity: "0.5",
                backgroundColor: lightTheme.primary,
                color: "white",
              },
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
