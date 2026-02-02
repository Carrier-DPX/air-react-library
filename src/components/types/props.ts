import { SxProps, Theme } from "@mui/material/styles";

export interface StylesExtendable {
  sx?: SxProps<Theme>;
  className?: string;
}
