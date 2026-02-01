import { SxProps, Theme } from "@mui/material/styles";

export const getSxStyles = (theme: Theme, sx?: SxProps<Theme>) => {
  if (typeof sx === "function") {
    return sx(theme);
  }
  return sx || {};
};
