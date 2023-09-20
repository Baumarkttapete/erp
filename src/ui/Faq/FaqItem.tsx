import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CostumText from "../CostumText";
import { useTheme } from "../../theme/ThemeProvider";

const FaqItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [expanded, setExpanded] = useState(false);
  const { theme } = useTheme();

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      sx={{
        border: expanded ? `2px solid ${theme.secondary}` : "1px solid #ccc",
        borderRadius: expanded ? "8px" : "0",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <CostumText>{question}</CostumText>
      </AccordionSummary>
      <AccordionDetails>
        <CostumText>{answer}</CostumText>
      </AccordionDetails>
    </Accordion>
  );
};
export default FaqItem;
