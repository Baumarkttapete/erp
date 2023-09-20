import React from "react";
import CustomTitle from "../ui/CustomTitle";
import { useIntl } from "react-intl";

const Faq: React.FC<{}> = () => {
  const intl = useIntl();

  return <CustomTitle>{intl.formatMessage({ id: "faq" })}</CustomTitle>;
};

export default Faq;
