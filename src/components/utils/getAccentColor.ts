import { AccentType } from "../types/common";
import { useTheme } from "@mui/material/styles";

export const getAccentColor = (
  type?: AccentType,
  defaultColor?: string
): string => {
  const theme = useTheme();
  switch (type) {
    case AccentType.Secondary:
      return theme.palette?.secondary.main;

    case AccentType.Error:
      return theme.palette?.error.main;

    case AccentType.Info:
      return theme.palette?.info.main;

    case AccentType.Success:
      return theme.palette?.success.main;

    case AccentType.Warning:
      return theme.palette?.warning.main;

    case AccentType.Base:
      return theme.palette?.base?.light ?? "primary";

    default:
      return defaultColor ?? theme.palette?.primary.main;
  }
};
