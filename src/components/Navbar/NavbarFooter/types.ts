import { BoxProps } from "../../Box";
import { NavbarProps } from "../types";

export interface NavbarFooterProps extends Pick<BoxProps, "children" | "sx"> {
  /**
   * Adds CarrierLogo as the last element.
   */
  showCarrierLogo?: boolean;

  /**
   * property directly depends on Navbar WideMode prop.
   * NavbarProps Value
   */
  wideMode?: NavbarProps["wideMode"];
}
