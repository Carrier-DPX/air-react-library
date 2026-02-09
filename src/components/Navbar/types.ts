import { CSSObject } from "@mui/material";
import { BoxProps } from "../Box";
import { TooltipProps as FdsTooltipProps } from "../Tooltip";

export interface NavbarProps extends Pick<BoxProps, "children" | "sx"> {
  /**
   * Disallow expanding the drawer on hover.
   * @default true
   */
  disableHoverListener?: boolean;
  /**
   * Changes the width from 56px to 72px
   * @default false
   */
  wideMode?: boolean;
  /**
   * Height Offset for adjusting the height with headers
   * @default 0
   */
  heightOffset?: number;
  /**
   * Callback fired when drawer state changed.
   */
  onDrawerSizeChanged?: (opened: boolean) => void;
  /**
   * Change the default height of cells
   * @default 56
   */
  childHeight?: number;
  /**
   * Sets the Max Open Width of the drawer
   * @default 288
   */
  maxOpenWidth?: number;
  /**
   * Turns background color of nav bar transparent while closed
   * @default false
   */
  transparentBackground?: boolean;
  /**
   * Adds margin around each child
   * @default 0
   */
  childMargin?: 0 | 4 | 8;
  /**
   * Props applied to the NavbarTooltip component
   */
  tooltipProps?: NavbarTooltipProps;
  /**
   * Controls right side border visibility. Right side border is optional in collapsed state only.
   * @default true
   */
  border?: boolean;
  /**
   * Added padding between the list
   * @default false
   */
  padded?: boolean;
}

export type NavbarStyleFunc = (payload: unknown) => CSSObject;

export interface NavbarTooltipProps
  extends Omit<
    FdsTooltipProps,
    "title" | "disableHoverListener" | "children"
  > { }
