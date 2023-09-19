import { StringifyOptions } from "querystring";

export interface ColorTheme {
  primary: string;
  secondary: string;
  accent: string;
  warning: string;
  success: string;
  font: string;
  font2: string;
  pie1: string;
  pie2: string;
  pie3: string;
  pie4: string;
}

export const bright: ColorTheme = {
  primary: "#3a4e48",
  secondary: "#c2e812",
  accent: "#beb0a7",
  warning: "#D64045",
  success: "#698F3F",
  font: "#313638∂",
  font2: "white",
  pie1: "#8a1c7c",
  pie2: "#bfcde0",
  pie3: "#542344",
  pie4: "#fe938c",
};

export const highContrast: ColorTheme = {
  primary: "#3a4e48",
  secondary: "#c2e812",
  accent: "#beb0a7",
  warning: "#D64045",
  success: "#698F3F",
  font: "#313638∂",
  font2: "white",
  pie1: "#8a1c7c",
  pie2: "#bfcde0",
  pie3: "#542344",
  pie4: "#fe938c",
};
