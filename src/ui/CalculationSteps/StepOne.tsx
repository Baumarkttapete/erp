import { FormControl, TextField, InputLabel, Select, MenuItem, FormHelperText, Button } from '@mui/material';
import React, { useState } from 'react';

const StepOne: React.FC = () => {
  const [useranzahl, setUseranzahl] = useState('');
  const [branche, setBranche] = useState('');
  const [region, setRegion] = useState('');

  const handleNext = () => {
    // Hier können Sie die Validierung durchführen
    if (useranzahl && branche && region) {
      // Führen Sie die Logik aus, um zum nächsten Schritt zu gehen
      console.log('Alle Eingaben wurden gemacht. Gehe zum nächsten Schritt.');
    } else {
      console.log('Bitte füllen Sie alle Felder aus.');
    }
  };

  return (
    <div>
      <FormControl fullWidth variant="outlined" sx={{margin:"20px"}}>
        <TextField
          label="Useranzahl"
          type="number"
          value={useranzahl}
          onChange={(e) => setUseranzahl(e.target.value)}
          inputProps={{ inputMode: 'numeric' }}
          variant="outlined"
        />
      </FormControl>

      <FormControl fullWidth variant="outlined" sx={{margin:"20px"}}>
        <InputLabel>Branche</InputLabel>
        <Select
          value={branche}
          onChange={(e) => setBranche(e.target.value)}
          label="Branche"
          variant="outlined"
        >
          <MenuItem value="">(Wählen Sie eine Branche)</MenuItem>
          <MenuItem value="industrie">Industrie</MenuItem>
          <MenuItem value="handel">Handel</MenuItem>
          <MenuItem value="dienstleistungen">Dienstleistungen</MenuItem>
        </Select>
        {!branche && <FormHelperText>Bitte wählen Sie eine Branche aus.</FormHelperText>}
      </FormControl>

      <FormControl fullWidth variant="outlined" sx={{margin:"20px"}}>
        <InputLabel>Region</InputLabel>
        <Select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          label="Region"
          variant="outlined"
        >
          <MenuItem value="">(Wählen Sie eine Region)</MenuItem>
          <MenuItem value="Deutschland">Deutschland</MenuItem>
          <MenuItem value="Östereich">Östereich</MenuItem>
          <MenuItem value="Schweiz">Schweiz</MenuItem>
        </Select>
        {!region && <FormHelperText>Bitte wählen Sie eine Region aus.</FormHelperText>}
      </FormControl>
    </div>
  );
};

export default StepOne;
