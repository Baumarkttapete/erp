import React, { createContext, useState, useContext } from "react";

interface IsInputCalcContextProps {
  isInputCalc: boolean;
  setIsInputCalc: React.Dispatch<React.SetStateAction<boolean>>;
}

const IsInputCalcContext = createContext<IsInputCalcContextProps | undefined>(
  undefined
);

const IsInputCalcProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isInputCalc, setIsInputCalc] = useState(false);

  return (
    <IsInputCalcContext.Provider value={{ isInputCalc, setIsInputCalc }}>
      {children}
    </IsInputCalcContext.Provider>
  );
};

const useIsInputCalc = () => {
  const context = useContext(IsInputCalcContext);
  if (!context) {
    throw new Error(
      "useIsInputCalc muss innerhalb eines IsInputCalcProviders verwendet werden"
    );
  }
  return context;
};

export { IsInputCalcProvider, useIsInputCalc };
