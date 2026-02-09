import React from "react";
import { BoxProps } from "../../Box";

export interface NavbarLogoProps extends Pick<BoxProps, "children" | "sx"> {
  /**
   * Tooltip label.
   */
  label?: string;
  /**
   * Allow show tooltip.
   * @default false
   */
  disableTooltip?: boolean;
  /**
   * Callback fired when logo is clicked.
   */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
