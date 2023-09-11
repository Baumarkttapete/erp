import React, { useEffect, useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
  Fab,
} from "@mui/material";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import { UserData } from "../../models/UserData";
import { TriangleData } from "../../models/TriangleData";
import SnackbarInfo, { AlertType } from "./SnackbarInfo";
import { RiskData } from "../../models/RiskData";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ScrollBtn from "../ScrollBtn";

const steps = ["Benutzereingaben", "Daten", "Risiken", "PDF"];

const CalcStepper: React.FC = () => {
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

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
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowScrollToTopButton(true);
      } else {
        setShowScrollToTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setRiskData([
      new RiskData(
        "Datenmigration",
        userData.risk.datenmigration,
        0,
        "Info zu Datenmigration",
        "Zusätzliche Kosten: Um die Probleme mit der Datenmigration zu beheben, können zusätzliche Ressourcen, wie Experten für Datenkonvertierung oder spezialisierte Software, benötigt werden. Dies kann zu zusätzlichen Kosten für das Projekt führen.",
        "Verlängerung der Projektdauer: Probleme mit der Datenmigration können dazu führen, dass mehr Zeit benötigt wird, um die notwendigen Daten zu übertragen und zu validieren. Dies kann zu einer Verzögerung des Projekts führen.",
        "Datenintegrität und Genauigkeit: Probleme mit der Datenmigration können die Integrität und Genauigkeit der übertragenen Daten beeinträchtigen. Dies könnte zu Fehlern oder Ungenauigkeiten in den Daten führen, was sich auf die Qualität des Projekts auswirkt."
      ),
      new RiskData(
        "Knapper Zeitplan",
        userData.risk.zeitplan,
        0,
        "infooo",
        "lala",
        "lala",
        "lalaaa"
      ),
      new RiskData(
        "Zu viele Anpassungen",
        userData.risk.anpassungen,
        0,
        "infooo",
        "lala",
        "lala",
        "lalaaa"
      ),
      new RiskData(
        "Ressourcen Anwender",
        userData.risk.ressourcen,
        0,
        "infooo",
        "lala",
        "lala",
        "lalaaa"
      ),
      new RiskData(
        "Abb. der Unternehmensprozesse",
        userData.risk.abbildungProzesse,
        0,
        "infooo",
        "lala",
        "lala",
        "lalaaa"
      ),
      new RiskData(
        "Schnittstellen",
        userData.risk.schnittstellen,
        0,
        "infooo",
        "lala",
        "lala",
        "lalaaa"
      ),
      new RiskData(
        "Anfoderungen unklar",
        userData.risk.anforderungenUnklar,
        0,
        "infooo",
        "lala",
        "lala",
        "lalaaa"
      ),
      new RiskData(
        "Schulungsauswand",
        userData.risk.schulungsaufwand,
        0,
        "infooo",
        "lala",
        "lala",
        "lalaaa"
      ),
    ]);
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
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
        <ScrollBtn scrollUp />
        <ScrollBtn scrollUp={false} />
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
