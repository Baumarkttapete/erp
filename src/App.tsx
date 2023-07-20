import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import routePaths from './routePaths';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
        <Route path={routePaths.home} element={<Home />}/>
        <Route path={routePaths.about} element={<About />} />
        <Route path={routePaths.contact} element={<Contact />}/>
        <Route path={routePaths.calculator} element={<Calculator />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

