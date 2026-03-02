import { CSSObject, Theme } from "@mui/material";
import { styleTokens } from "../theme/constants/styleTokens";

export const baseBreadcrumbsSx = (
  theme: Theme,
  color: "primary" | "base" | undefined
): CSSObject => ({
  "& .MuiBreadcrumbs-separator": {
    color: theme.palette.base?.filledInput.outlinedBorder,
    marginRight: styleTokens.margin.medium,
    marginLeft: styleTokens.margin.medium,
  },
  "& .MuiBreadcrumbs-li:last-child": {
    color: theme.palette.base?.text.primary,
  },
  color:
    color == "primary"
      ? theme.palette.primary.main
      : theme.palette.base?.state.active,
});
