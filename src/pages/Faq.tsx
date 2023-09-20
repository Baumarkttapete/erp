import React from "react";
import CustomTitle from "../ui/CustomTitle";
import { useIntl } from "react-intl";
import { Box } from "@mui/material";

const Faq: React.FC<{}> = () => {
  const intl = useIntl();

  return (
    <Box sx={{ margin: "40px auto", width: "80%" }}>
      <CustomTitle>{intl.formatMessage({ id: "faq" })}</CustomTitle>
    </Box>
  );
};

export default Faq;
