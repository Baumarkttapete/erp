import React, { useEffect, useState } from "react";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";
import { UserData } from "../../models/UserData";
import { TriangleData } from "../../models/TriangleData";
import SnackbarInfo, { AlertType } from "./SnackbarInfo";
import { RiskData } from "../../models/RiskData";
import ScrollBtn from "../ScrollBtn";
import { useIntl } from "react-intl";
import { getRiskData } from "../../helper/RiskHelper";
import { useTheme } from "../../theme/ThemeProvider";
import Step1 from "./Step1";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step2 from "./Step2";
import CostumText from "../CostumText";

const CalcStepper: React.FC = () => {
  const { theme } = useTheme();
  const intl = useIntl();

  const steps = [
    intl.formatMessage({ id: "input" }),
    intl.formatMessage({ id: "results" }),
    intl.formatMessage({ id: "risks" }),
    intl.formatMessage({ id: "pdf_export" }),
  ];

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
    new TriangleData(100, 100, 100)
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
    setRiskData(getRiskData(intl, userData));
  }, [userData]);

  const handleNext = () => {
    if (activeStep === 0 && !stepOneValid) {
      handleOpenSnackbar();
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
        return <Step1 userData={userData} onChange={handleChangeStepOne} />;
      case 1:
        return <Step2 userData={userData} />;
      case 2:
        return (
          <Step3
            userData={userData}
            riskData={riskData}
            triangleData={triangleData}
            onChange={handleChangeStepTwo}
          />
        );
      case 3:
        return (
          <Step4
            userData={userData}
            triangleData={triangleData}
            riskData={riskData}
          />
        );
      default:
        return <CostumText>404</CostumText>;
    }
  };

  const handleStepClick = (step: number) => {
    if (activeStep === 0 && !stepOneValid) {
      handleOpenSnackbar();
    } else {
      setActiveStep(step);
      window.scrollTo(0, 0);
    }
  };

  const handleOpenSnackbar = () => {
    setSnackbarText(intl.formatMessage({ id: "step1_snackbar_text" }));
    setSnackbarAlertType("info");
    setSnackbarOpen(true);
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
            <Step key={label} onClick={() => handleStepClick(index)}>
              <StepLabel
                StepIconProps={{
                  style: {
                    color:
                      index === activeStep ? theme.secondary : theme.primary,
                  },
                }}
              >
                <CostumText>{label}</CostumText>
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
          {activeStep !== 0 && (
            <Button
              variant="contained"
              onClick={handleBack}
              sx={{
                flex: 1,
                margin: "10px",
                maxWidth: "300px",
                fontWeight: "bold",
                backgroundColor: theme.primary,
                "&:hover": {
                  opacity: "0.8",
                  backgroundColor: theme.primary,
                },
                "&:disabled": {
                  opacity: "0.5",
                  backgroundColor: theme.primary,
                  color: "white",
                },
              }}
            >
              {intl.formatMessage({ id: "back" })}
            </Button>
          )}
          {activeStep !== 3 && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              sx={{
                flex: 1,
                margin: "10px",
                maxWidth: "300px",
                fontWeight: "bold",
                backgroundColor: theme.primary,
                "&:hover": {
                  opacity: nextBtnActive ? "0.8" : 0.5,
                  backgroundColor: theme.primary,
                },
                cursor: nextBtnActive ? "pointer" : "not-allowed",
                opacity: nextBtnActive ? 1 : 0.5,
              }}
            >
              {intl.formatMessage({ id: "next" })}
            </Button>
          )}
        </Box>
        <SnackbarInfo
          text={snackbarText}
          alert={snackbarAlertType}
          open={snackbarOpen}
          onClose={() => setSnackbarOpen(false)}
        />
      </Box>
    </>
  );
};

export default CalcStepper;
