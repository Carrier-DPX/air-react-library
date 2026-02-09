import { NavigationDividerType, NavigationItemType } from "../Navigation";
import { BoxProps } from "../../Box";

export interface ExtraNavigationProps
  extends Pick<BoxProps, "children" | "sx"> {
  /**
   * Extra navigation elements.
   */
  items: ExtraNavigationItem[];
  /**
   * Show all items.
   * @default false
   */
  expanded?: boolean;
  /**
   * Callback fired when expand button is clicked.
   */
  onClickExpanded?: () => void;
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
}

export interface ExtraNavigationItemType
  extends Omit<NavigationItemType, "path"> {
  onClick?: () => void;
}

export type ExtraNavigationItem =
  | ExtraNavigationItemType
  | NavigationDividerType;
