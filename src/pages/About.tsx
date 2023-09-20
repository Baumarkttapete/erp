import React from "react";
import { Box } from "@mui/material";
import CostumText from "../ui/CostumText";
import CustomTitle from "../ui/CustomTitle";
import { useIntl } from "react-intl";

const About: React.FC<{}> = ({}) => {
  const intl = useIntl();

  return (
    <>
      <Box sx={{ margin: "40px auto", width: "80%" }}>
        <CustomTitle>{intl.formatMessage({ id: "about" })}</CustomTitle>
        <Box sx={{ margin: "40px" }}>
          <CostumText>
            {intl.formatMessage({ id: "about_infotext" })}
          </CostumText>
          <CostumText>
            {intl.formatMessage({ id: "about_infotext2" })}
          </CostumText>
        </Box>
      </Box>
    </>
  );
};

export default About;
