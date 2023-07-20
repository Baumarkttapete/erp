import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import routePaths from './routePaths';

const Navigation: React.FC = () => {
  return (
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        ERP Projektkosten-Kalkulator
      </Typography>
      <Button color="inherit" component={Link} to={routePaths.home}>
        Home
      </Button>
      <Button color="inherit" component={Link} to={routePaths.calculator}>
        Kalkulation
      </Button>
      <Button color="inherit" component={Link} to={routePaths.about}>
        Über uns
      </Button>
      <Button color="inherit" component={Link} to={routePaths.contact}>
        Kontakt
      </Button>
    </Toolbar>
  </AppBar>
  );
};

export default Navigation;
