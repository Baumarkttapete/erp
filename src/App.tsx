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
import { IsInputCalcProvider } from "./theme/IsInputCalcProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <IsInputCalcProvider>
        <Router>
          <div
            style={{
              height: "100%",
              margin: "0",
              padding: "0",
              minWidth: "990px",
            }}
          >
            <Navigation />
            <Routes>
              <Route path={routePaths.home} element={<Home />} />
              <Route path={routePaths.faq} element={<Faq />} />
              <Route path={routePaths.about} element={<About />} />
              <Route path={routePaths.calculator} element={<Calculator />} />
            </Routes>
          </div>
        </Router>
      </IsInputCalcProvider>
    </ThemeProvider>
  );
};

export default App;
