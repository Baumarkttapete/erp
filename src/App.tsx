// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import About from "./pages/About";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import routePaths from "./routePaths";
import Faq from "./pages/Faq";
import { ThemeProvider } from "./theme/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path={routePaths.home} element={<Home />} />
            <Route path={routePaths.faq} element={<Faq />} />
            <Route path={routePaths.about} element={<About />} />
            <Route path={routePaths.calculator} element={<Calculator />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
