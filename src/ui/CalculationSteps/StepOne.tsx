import { TextField, MenuItem, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UserData } from "../../models/UserData";
import InfoIcon from "@mui/icons-material/Info";
import CustomText from "../CustomText";
import { useIntl } from "react-intl";
import { getCost } from "../../helper/CostHelper";
import {
  dienstleistungData,
  hardwareData,
  softwareData,
} from "../../data/Cost";
import { getPersonal } from "../../helper/PersonalHelper";
import { Personal } from "../../data/Personal";
import { Time } from "../../data/Time";
import { getTime } from "../../helper/TimeHelper";
import { Risk } from "../../data/Risks";
import { getRisk } from "../../helper/RiskHelper";
import { useTheme } from "../../theme/ThemeProvider";
import Title from "../Title";

const StepOne: React.FC<{
  userData: UserData;
  onChange: (userData: UserData, allValid: boolean) => void;
}> = ({ userData, onChange }) => {
  const { theme } = useTheme();
  const intl = useIntl();

  const [userQuantity, setUserQuantity] = useState(userData.userQuantity);
  const [branch, setBranch] = useState(userData.branch);
  const [region, setRegion] = useState(userData.region);
  const [softwareCost, setSoftwareCost] = useState(userData.softwareCost);
  const [hardwareCost, setHardwareCost] = useState(userData.hardwareCost);
  const [serviceCost, setServiceCost] = useState(userData.serviceCost);
  const [personal, setPersonal] = useState<Personal>({
    intern: userData.personal.intern,
    extern: userData.personal.extern,
  });
  const [time, setTime] = useState<Time>({
    implementation: userData.time.implementation,
    prework: userData.time.prework,
  });
  const [risk, setRisk] = useState<Risk>({
    datenmigration: userData.risk.datenmigration,
    zeitplan: userData.risk.zeitplan,
    anpassungen: userData.risk.anpassungen,
    ressourcen: userData.risk.ressourcen,
    abbildungProzesse: userData.risk.abbildungProzesse,
    schnittstellen: userData.risk.schnittstellen,
    anforderungenUnklar: userData.risk.anforderungenUnklar,
    schulungsaufwand: userData.risk.schulungsaufwand,
  });

  useEffect(() => {
    setSoftwareCost(getCost(softwareData, userQuantity, branch, region));
    setServiceCost(getCost(dienstleistungData, userQuantity, branch, region));
    setHardwareCost(getCost(hardwareData, userQuantity, branch, region));
    setPersonal(getPersonal(userQuantity));
    setTime(getTime(userQuantity));
    setRisk(getRisk(userQuantity));

    onChange(
      new UserData(
        userQuantity,
        branch,
        region,
        softwareCost,
        serviceCost,
        hardwareCost,
        personal,
        time,
        risk
      ),
      userQuantity > 0 && branch !== "" && region !== ""
    );
  }, [userQuantity, branch, region]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "40px auto",
          width: "80%",
        }}
      >
        <Title
          text={intl.formatMessage({ id: "stepOne_title" })}
          color={theme.font}
        />

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
              margin: "30px",
            }}
          >
            <InfoIcon sx={{ color: theme.secondary }} fontSize="large" />
            <CustomText text={intl.formatMessage({ id: "stepOne_infotext" })} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StepOne;
