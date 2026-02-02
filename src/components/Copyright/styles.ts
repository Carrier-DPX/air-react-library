import { lighten } from "@mui/material";
import { StyledComponentDefaultProps } from "../types/common";

const styles = ({ theme }: StyledComponentDefaultProps) => ({
  color: lighten(theme.palette.common.black, 0.6),
});

export default styles;
