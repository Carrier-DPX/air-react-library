import { Theme } from "@mui/material";

export const styleTokens = {
  borderRadius: {
    small: "2px",
    medium: "4px",
    large: "8px",
    xlarge: "10px",
    none: "0px",
    circular: "999px",
  },
  border: {
    standard: (theme: Theme) =>
      `1px solid ${theme.palette.base?.filledInput.outlinedBorder}`,
    divider: (theme: Theme) => `1px solid ${theme.palette.base?.divider}`,
  },
  padding: {
    none: "0px",
    xsmall: "8px",
    small: "10px",
    medium: "12px",
    large: "14px",
    xlarge: "16px",
  },

  margin: {
    none: "0px",
    xsmall: "8px",
    small: "10px",
    medium: "12px",
    large: "16px",
    xlarge: "20px",
  },
  height: {
    large: "20px",
    xlarge: "24px",
  },
  paddingTop: {
    large: "18px",
  },
  paddingItem: "4px",
};
