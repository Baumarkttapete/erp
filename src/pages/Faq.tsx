import { Box, TextField } from "@mui/material";
import CustomTitle from "../ui/CustomTitle";
import { useState } from "react";
import { useIntl } from "react-intl";
import FaqItem from "../ui/Faq/FaqItem";
import InfoIcon from "@mui/icons-material/Info";
import CostumText from "../ui/CostumText";
import { useTheme } from "../theme/ThemeProvider";

const Faq: React.FC<{}> = () => {
  const intl = useIntl();
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = [
    {
      question: intl.formatMessage({ id: "faq_question1" }),
      answer: intl.formatMessage({ id: "faq_answer1" }),
      answer2: intl.formatMessage({ id: "faq_answer1_2" }),
      answer3: intl.formatMessage({ id: "faq_answer1_3" }),
      answer4: intl.formatMessage({ id: "faq_answer1_4" }),
      answer5: intl.formatMessage({ id: "faq_answer1_5" }),
    },

    {
      question: intl.formatMessage({ id: "faq_question3" }),
      answer: intl.formatMessage({ id: "faq_answer3" }),
    },
    {
      question: intl.formatMessage({ id: "faq_question4" }),
      answer: intl.formatMessage({ id: "faq_answer4" }),
    },
    {
      question: intl.formatMessage({ id: "faq_question5" }),
      answer: intl.formatMessage({ id: "faq_answer5" }),
    },
    {
      question: intl.formatMessage({ id: "faq_question6" }),
      answer: intl.formatMessage({ id: "faq_answer6" }),
    },
    {
      question: intl.formatMessage({ id: "faq_question7" }),
      answer: intl.formatMessage({ id: "faq_answer7" }),
    },
  ];

  const filteredFaq = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.answer2 &&
        item.answer2.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.answer3 &&
        item.answer3.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.answer4 &&
        item.answer4.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.answer5 &&
        item.answer5.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Box sx={{ margin: "40px auto", width: "80%" }}>
      <CustomTitle>{intl.formatMessage({ id: "faq" })}</CustomTitle>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: "15px 0",
        }}
      >
        <InfoIcon
          sx={{ color: theme.secondary, margin: "auto 0" }}
          fontSize="large"
        />
        <CostumText>{intl.formatMessage({ id: "faq_infotext" })}</CostumText>
      </Box>

      <TextField
        label={intl.formatMessage({ id: "faq_search" })}
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ margin: "20px 0" }}
      />
      {filteredFaq.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          answer2={item.answer2}
          answer3={item.answer3}
          answer4={item.answer4}
          answer5={item.answer5}
        />
      ))}
    </Box>
  );
};

export default Faq;
