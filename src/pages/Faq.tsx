import { Box, TextField } from "@mui/material";
import CustomTitle from "../ui/CustomTitle";
import { useState } from "react";
import { useIntl } from "react-intl";
import FaqItem from "../ui/Faq/FaqItem";

const Faq: React.FC<{}> = () => {
  const intl = useIntl();
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
      question: intl.formatMessage({ id: "faq_question2" }),
      answer: intl.formatMessage({ id: "faq_answer2" }),
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
