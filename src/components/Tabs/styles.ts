import { CSSObject } from "@mui/material";

export const baseTabsSx = (
  justifyContentValue: "left" | "right" | "center" | undefined
): CSSObject => ({
  "& .MuiTabs-flexContainer": {
    justifyContent: justifyContentValue,
  },
});
