import {
  NAV_ICON_PADDING,
  NAV_ICON_SIZE_PX,
  navItemPaddingPx,
  navItemSizePx,
  NAV_ANIMATION,
  navIsInWideMode,
  navChildHeightPx,
} from "../constants";
import { NavbarStyleFunc } from "../types";
import { NavbarButtonClasses } from "./types";
import { StyledComponentDefaultProps } from "../../types/common";

interface NavbarStyledProps extends StyledComponentDefaultProps {
  openedDrawer?: boolean;
}

export default {
  [NavbarButtonClasses.ContainerFooterBtn]: ({
    theme,
    openedDrawer,
  }: NavbarStyledProps) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: NAV_ANIMATION,
    width: openedDrawer
      ? "100%"
      : `calc(${NAV_ICON_SIZE_PX} + ${navItemPaddingPx(
          navIsInWideMode
        )} * 2)!important`,
    margin: "6px",
    "& button": {
      width: "calc(100% - 24px)",
      color: openedDrawer ? "" : "transparent!important",
      minWidth: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "flex-start",
      whiteSpace: "nowrap",
      marginLeft: "-5px",
    },
    "& .MuiSvgIcon-root": {
      color: theme.palette.common.white,
    },
  }),
  [NavbarButtonClasses.NavbarBtn]: ({
    theme,
  }: StyledComponentDefaultProps) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-start",
    whiteSpace: "nowrap",
    color: theme.palette.action.active,
    borderRadius: 0,
    padding: 0,
    minWidth: 0,
    height: navChildHeightPx,
    "&:hover": {
      background: theme.palette.action.hover,
      color: theme.palette.text.primary,
    },
    "& .MuiSvgIcon-root": {
      width: NAV_ICON_SIZE_PX,
      height: NAV_ICON_SIZE_PX,
      margin: navItemPaddingPx(navIsInWideMode),
      padding: NAV_ICON_PADDING,
      boxSizing: "content-box",
    },
    [`&.${NavbarButtonClasses.BasicBtn}`]: {
      background: "none",
      "& .MuiSvgIcon-root": {
        borderRadius: "4px",
      },
      "&:hover": {
        background: "none",
        "& .MuiSvgIcon-root": {
          background: theme.palette.action.hover,
        },
      },
      [`&.${NavbarButtonClasses.ActiveBtn}`]: {
        color: theme.palette.primary.main,
        "& .MuiSvgIcon-root": {
          background: theme.palette.primary.outlinedHoverBackground,
        },
      },
    },
    [`&.${NavbarButtonClasses.WithIndicatorBtn}`]: {
      position: "relative",
      [`&.${NavbarButtonClasses.ActiveBtn}`]: {
        color: theme.palette.primary.main,
        background: theme.palette.primary.outlinedHoverBackground,
        "&::after": {
          content: `""`,
          height: "22px",
          width: "4px",
          background: theme.palette.primary.main,
          position: "absolute",
          right: 0,
          borderRadius: "4px 0 0 4px",
        },
      },
    },
    [`&.${NavbarButtonClasses.WithOffsetBtn}`]: {
      paddingLeft: `calc(${navItemSizePx(navIsInWideMode)} - ${navItemPaddingPx(
        navIsInWideMode
      )})`,
    },
  }),
} as {
  [key: string]: NavbarStyleFunc;
};
