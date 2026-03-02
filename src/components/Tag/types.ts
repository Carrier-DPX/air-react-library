import { ChipProps as MuiChipProps } from "@mui/material";
import fleetPalette from "../theme/constants/colors";

declare module "@mui/material/Chip" {
  export interface ChipPropsColorOverrides {
    base: true;
    default: typeof fleetPalette;
  }
}
export interface TagProps extends Omit<MuiChipProps, "color" | "size"> {
  /**
   *  Represents the desired size of the component
   * @default xsmall
   */
  size?: "micro" | "xsmall";
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default success
   */
  color?:
    | "base"
    | "primary"
    | "secondary"
    | "warning"
    | "success"
    | "info"
    | "error";
  /**
   *  It capitalizes the label and adds custom styling.
   * @default false
   */
  uppercase?: boolean;
  /**
   *  If defined, then the startIcon is added to the front of the label
   */
  startIcon?: React.ReactElement;
}

export type StyledTagProps = TagProps;
