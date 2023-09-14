// ThemeProvider.tsx
import React, { createContext, useContext, useState } from "react";
import { ColorTheme, lightTheme } from "./Colors";
import { Size, fontSizeMedium } from "./Sizes";

interface ThemeContextProps {
  theme: ColorTheme;
  fontSize: Size;
  setTheme: React.Dispatch<React.SetStateAction<ColorTheme>>;
  setFontSize: React.Dispatch<React.SetStateAction<Size>>;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ColorTheme>(lightTheme);
  const [fontSize, setFontSize] = useState<Size>(fontSizeMedium);

  return (
    <ThemeContext.Provider value={{ theme, fontSize, setTheme, setFontSize }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export { ThemeProvider, useTheme };
