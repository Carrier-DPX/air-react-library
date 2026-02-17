import { lighten, PaletteOptions } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { SimplePaletteColorOptions } from "@mui/material/styles/createPalette";

import { Severity } from "./types";

export const getColorInner = (theme: Theme, severity: Severity): string => {
  const key = severity.toLowerCase() as keyof PaletteOptions;
  const palette = theme.palette[key] as SimplePaletteColorOptions;
  const finalColor =
    palette?.main ||
    (severity == Severity.Static
      ? theme.palette.base?.dark || theme.palette.common.black
      : theme.palette.base?.state?.disabledContent ||
        lighten(theme.palette.common.black, 0.7));

  return finalColor;
};

export const getColorOuter = (theme: Theme, severity: Severity): string => {
  const key = severity.toLowerCase() as keyof PaletteOptions;
  const palette = theme.palette[key] as SimplePaletteColorOptions;
  const finalColor =
    palette?.light ??
    (severity == Severity.Static
      ? theme.palette.base?.dark || theme.palette.common.black
      : theme.palette.base?.state?.disabledContent ||
        lighten(theme.palette.common.black, 0.8));

  return finalColor;
};
