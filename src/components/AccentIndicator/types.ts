import { SxProps } from "@mui/material";
import { Orientation, Position, AccentType } from "../types/common";
import { Theme } from "@mui/material/styles";

export interface AccentIndicatorProps {
  /**
   * Override or extend the styles applied to the component.
   */
  sx?: SxProps<Theme>;
  /**
   * The type of the component.
   * @default 'Primary'
   */
  severity?: AccentType;
  /**
   * The custom background color of the component.
   */
  customBgColor?: string;
  /**
   * Override extend the styles applied to the component.
   */
  className?: string;
  /**
   * The orientation to use.
   * @default 'Vertical'
   */
  orientation?: Orientation;

  /**
   * alignment of the AccentIndicator edge tips
   * @default 'left'
   */
  alignment?: Position;
}

export interface AccentIndicatorStyles
  extends Omit<AccentIndicatorProps, "className" | "sx"> {
  custombgcolor?: string;
}
