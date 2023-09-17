// ThemeProvider.tsx
import React, { createContext, useContext, useState } from "react";
import { ColorTheme, lightTheme } from "./Colors";

interface ThemeContextProps {
  theme: ColorTheme;
  setTheme: React.Dispatch<React.SetStateAction<ColorTheme>>;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ColorTheme>(lightTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
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
