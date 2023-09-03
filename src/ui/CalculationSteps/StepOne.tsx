import { TextField, MenuItem, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UserData } from "../../models/UserData";
import InfoIcon from "@mui/icons-material/Info";
import Subtitle from "../Subtitle";
import CustomText from "../CustomText";
import { useIntl } from "react-intl";

const StepOne: React.FC<{
  userData: UserData;
  onChange: (userData: UserData, allValid: boolean) => void;
}> = ({ userData, onChange }) => {
  const intl = useIntl();

  const [userQuantity, setUserQuantity] = useState(userData.userQuantity);
  const [branch, setBranch] = useState(userData.branch);
  const [region, setRegion] = useState(userData.region);

  useEffect(() => {
    onChange(
      new UserData(userQuantity, branch, region),
      userQuantity !== 0 && branch !== "" && region !== ""
    );
  }, [userQuantity, branch, region]);

  return (
    <>
      <Box
        sx={{
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          margin: "30px",
        }}
      >
        <Subtitle text={intl.formatMessage({ id: "stepOne_title" })} />

        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              label={intl.formatMessage({ id: "userQuantity" })}
              value={userQuantity}
              type="number"
              onChange={(e) => setUserQuantity(parseInt(e.target.value))}
              inputProps={{ inputMode: "numeric", min: 1, max: 1500 }}
              variant="outlined"
              sx={{ margin: "10px" }}
            ></TextField>

            <TextField
              label={intl.formatMessage({ id: "branch" })}
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              variant="outlined"
              sx={{ margin: "10px" }}
              select
            >
              <MenuItem value="industrie">
                {intl.formatMessage({ id: "branch_industry" })}
              </MenuItem>
              <MenuItem value="handel">
                {intl.formatMessage({ id: "branch_trading" })}
              </MenuItem>
              <MenuItem value="dienstleistungen">
                {intl.formatMessage({ id: "branch_service" })}
              </MenuItem>
            </TextField>

            <TextField
              label={intl.formatMessage({ id: "region" })}
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              variant="outlined"
              sx={{ margin: "10px" }}
              select
            >
              <MenuItem value="D">
                {intl.formatMessage({ id: "region_d" })}
              </MenuItem>
              <MenuItem value="A">
                {intl.formatMessage({ id: "region_a" })}
              </MenuItem>
              <MenuItem value="CH">
                {intl.formatMessage({ id: "region_ch" })}
              </MenuItem>
            </TextField>
          </Box>

          <Box
            sx={{
              flex: 1,
              margin: "10px",
            }}
          >
            <InfoIcon />
            <CustomText text={intl.formatMessage({ id: "stepOne_infotext" })} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StepOne;
