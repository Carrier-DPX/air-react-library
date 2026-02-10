import { forwardRef } from "react";

import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { CSSObject } from "@mui/material/styles";

import { getSxStyles } from "../utils/styles";

export interface AppBarProps extends Omit<MuiAppBarProps, "color" | "elevation"> {
  color?: "paper" | "accent" | "transparent" | "primary" | "base";
  /**
   * Size of the AppBar
   * - dense: 48px height
   * - basic: 64px height (default)
   * - prominent: 128px height
   */
  size?: "dense" | "basic" | "prominent";
  /**
   * Whether to show a divider at the bottom
   * @default false
   */
  divider?: boolean;
  /**
   * Whether to show elevation/shadow
   * @default true
   */
  elevation?: boolean;
}

/** The AppBar component displays application-wide actions, search and information.
 *
 * // Default import
 * import AppBar from '@carrier-dpx/air-react-library/AppBar'
 *
 * // Named import
 * import { AppBar } from '@carrier-dpx/air-react-library'
 */

const AppBar = forwardRef<HTMLDivElement, AppBarProps>(
  ({ sx, color = "primary", size = "basic", divider = false, elevation = true, ...rest }, ref) => {
    // Map size to height
    const getHeight = () => {
      switch (size) {
        case "dense":
          return "48px";
        case "prominent":
          return "128px";
        case "basic":
        default:
          return "64px";
      }
    };

    const appBarHeight = getHeight();

    return (
      <MuiAppBar
        {...rest}
        enableColorOnDark
        elevation={elevation && color !== "transparent" ? 4 : 0}
        sx={(theme) =>
          ({
            ...getSxStyles(theme, sx),
            height: appBarHeight,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            ...(divider && {
              borderBottom: `1px solid ${theme.palette.divider}`,
            }),
            ...(color === "paper" && {
              backgroundColor: theme.palette.base?.background.paper,
              color: theme.palette.base?.text.primary,
            }),
            ...(color === "accent" && {
              backgroundColor: theme.palette.base?.background.accent,
              color: theme.palette.base?.text.primary,
            }),
            ...(color === "transparent" && {
              backgroundColor: "transparent",
              color: theme.palette.base?.text.primary,
            }),
            ...(color === "primary" && {
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.primary.contrastText,
            }),
            ...(color === "base" && {
              backgroundColor: theme.palette.base?.dark,
              color: theme.palette.base?.contrastText,
            }),
            // Ensure Toolbar inside matches AppBar height and centers content
            "& .MuiToolbar-root": {
              minHeight: appBarHeight,
              height: appBarHeight,
              display: "flex",
              alignItems: "center",
            },
          } as CSSObject)
        }
        ref={ref}
      />
    );
  }
);

AppBar.displayName = "AppBar";

export default AppBar;
