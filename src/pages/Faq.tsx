import { Box, TextField } from "@mui/material";
import CustomTitle from "../ui/CustomTitle";
import { useState } from "react";
import { useIntl } from "react-intl";
import FaqItem from "../ui/Faq/FaqItem";

const Faq: React.FC<{}> = () => {
  const intl = useIntl();
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = [
    { question: "Was ist ein Magisches Dreieck?", answer: "Antwort 1" },
    { question: "Wie werden die Kosten berechnet?", answer: "Antwort 2" },
    { question: "Wie ist dieses Projekt entstanden?", answer: "Antwort 2" },
    {
      question: "Wie verlässlich sind die ausgegebenen Werte?",
      answer: "Antwort 2",
    },
    {
      question: "Wird es noch mehr Auswahlmöglichkeiten geben?",
      answer: "Antwort 2",
    },
    { question: "Für wen ist die Webseite gedacht?", answer: "Antwort 2" },
    { question: "Werden meine Eingaben gespeichert?", answer: "Antwort 2" },
  ];

  const filteredFaq = faqData.filter((item) =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ margin: "40px auto", width: "80%" }}>
      <CustomTitle>{intl.formatMessage({ id: "faq" })}</CustomTitle>
      <TextField
        label="Suche nach Fragen"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ margin: "20px 0" }}
      />
      {filteredFaq.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </Box>
  );
};

export default Faq;
