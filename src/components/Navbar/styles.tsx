import { CSSObject } from "@mui/material";

import {
  navItemSizePx,
  NAV_ANIMATION,
  navIsInWideMode,
  navMaxWidthPx,
  navBackgroundTransparent,
  navBorder,
} from "./constants";
import { StyledComponentDefaultProps } from "../types/common";
import { styleTokens } from "src/components/theme/constants/styleTokens";
import { NavbarProps } from "./types";

export default {
  container: ({ theme, padded }: StyledComponentDefaultProps & NavbarProps) =>
    ({
      position: "relative",
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
      boxSizing: "content-box",
      overflowX: "hidden",
      background: navBackgroundTransparent
        ? "inherit"
        : theme.palette.primary.contrastText,
      borderRight: navBorder
        ? `1px solid ${theme.palette.base?.divider}`
        : "none",
      paddingTop: "8px",
      transition: NAV_ANIMATION,
      width: navItemSizePx(navIsInWideMode),
      minWidth: navItemSizePx(navIsInWideMode),
      "&.opened": {
        background: theme.palette.primary.contrastText,
        borderRight: `1px solid ${theme.palette.base?.divider}`,
        width: navMaxWidthPx,
      },
      ".MuiButtonBase-root": {
        padding: padded && styleTokens.paddingItem,
      },
    } as CSSObject),
};
