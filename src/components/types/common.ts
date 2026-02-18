import { Theme } from "@mui/material/styles";

export enum AccentType {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error",
  Base = "base",
}

export enum Orientation {
  Horizontal = "horizontal",
  Vertical = "vertical",
}

export enum Position {
  Left = "left",
  Right = "right",
  Top = "top",
  Bottom = "bottom",
}

export interface StyledComponentDefaultProps {
  theme: Theme;
}
