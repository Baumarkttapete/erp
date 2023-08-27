import { TextField, MenuItem, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UserData } from "../../models/UserData";
import InfoIcon from "@mui/icons-material/Info";

const StepOne: React.FC<{
  userData: UserData;
  onChange: (userData: UserData, allValid: boolean) => void;
}> = ({ userData, onChange }) => {
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
        <Typography
          sx={{ fontWeight: "bold", fontSize: "20px", margin: "10px" }}
        >
          Benutzereingaben
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              label="Useranzahl"
              value={userQuantity}
              type="number"
              onChange={(e) => setUserQuantity(parseInt(e.target.value))}
              inputProps={{ inputMode: "numeric", min: 1, max: 1500 }}
              variant="outlined"
              sx={{ margin: "10px" }}
            ></TextField>

            <TextField
              label="Branche"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              variant="outlined"
              sx={{ margin: "10px" }}
              select
            >
              <MenuItem value="industrie">Industrie</MenuItem>
              <MenuItem value="handel">Handel</MenuItem>
              <MenuItem value="dienstleistungen">Dienstleistungen</MenuItem>
            </TextField>

            <TextField
              label="Region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              variant="outlined"
              sx={{ margin: "10px" }}
              select
            >
              <MenuItem value="D">Deutschland</MenuItem>
              <MenuItem value="A">Österreich</MenuItem>
              <MenuItem value="CH">Schweiz</MenuItem>
            </TextField>
          </Box>

          <Box
            sx={{
              flex: 1,
              margin: "10px",
            }}
          >
            <InfoIcon />
            <Typography>
              hallo ich bin der Bert und das soll eine Info sein. Bitte trage
              links die Useranzahl ein, die in Deinem Unternehmen arbeiten.
              Daruter gib die Brnache ein, in der das Unternehmen tätig ist und
              zuletzt trage ein, wo das Unternehmen bzw. die Niederlassung
              ansässig ist.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StepOne;
