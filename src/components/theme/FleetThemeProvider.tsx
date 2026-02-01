import React, { ReactNode, useEffect } from "react";
import { Theme, ThemeProvider, createTheme } from "@mui/material/styles";
import { airDarkThemeOptions, fleetThemeOptions } from "./fleetThemeOptions";

// Define theme instances
const ahpTheme: Theme = createTheme({ ...fleetThemeOptions });

const airLightTheme: Theme = createTheme(fleetThemeOptions);

const airDarkTheme: Theme = createTheme(airDarkThemeOptions);

// Mapping from theme names to actual Theme instances
export const ThemeMap = {
  AHP: ahpTheme,
  AirLight: airLightTheme,
  AirDark: airDarkTheme,
} as const;

// Define props for FleetThemeProvider
export type ThemeProviderProps = {
  /** Content to render with the specified theme */
  children?: ReactNode;

  /** Custom Theme instance or predefined theme key */
  theme?: Theme | keyof typeof ThemeMap;
};

// FleetThemeProvider component
const FleetThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = airLightTheme, // Default to airLightTheme
}) => {
  const resolvedTheme = typeof theme === "string" ? ThemeMap[theme] : theme;

  // Load Nunito Sans font
  useEffect(() => {
    // Check if font is already loaded
    if (!document.querySelector('link[href*="Nunito+Sans"]')) {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, []);

  return <ThemeProvider theme={resolvedTheme}>{children}</ThemeProvider>;
};

export default FleetThemeProvider;
export { FleetThemeProvider };
