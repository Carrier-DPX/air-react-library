import { ReactNode } from "react";
import { BoxProps } from "../../Box";

export interface NavigationProps extends Pick<BoxProps, "sx" | "children"> {
  /**
   * Current application pathname.
   */
  currentPathname: string;
  /**
   * Navigation elements.
   */
  items: NavigationItem[];
  /**
   * Navigation elements style.
   * @default basic
   */
  activeButtonType?: ActiveButtonType;
  /**
   * Callback fired when basic navigation button is clicked.
   */
  onClick?: ClickNavItem;
  /**
   * Allow show tooltip.
   * @default false
   */
  disableTooltip?: boolean;
  /**
   * Allow ripple effect.
   * @default false
   */
  disableRipple?: boolean;
  /**
   * Allow ripple touch effect.
   * @default false
   */
  disableTouchRipple?: boolean;
  /**
   * If 'false', the active state for the first nav item is disabled during initial rendering.
   * @default true
   */
  isDefaultActive?: boolean;
}

export interface NavigationItemType {
  type?: "ITEM";
  icon: JSX.Element;
  label?: string;
  id: string;
  path: string;
  disabled?: boolean;
}

export interface NavigationDividerType {
  type: "DIVIDER";
  children?: ReactNode;
}

export type NavigationItem = NavigationItemType | NavigationDividerType;

export type ClickNavItem = (params: {
  path: string | null;
  id: string;
}) => void;

export enum ActiveButtonType {
  Basic = "basic",
  Indicator = "indicator",
}
