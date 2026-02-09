import { useState, useEffect } from "react";
import clsx from "clsx";
import { styled } from "@mui/material/styles";
import { NavbarProps } from "./types";
import styles from "./styles";
import Box from "../Box";
import { NavbarProvider } from "./NavbarProvider";
import { NavbarLogo } from "./NavbarLogo";
import { Navigation } from "./Navigation";
import { ExtraNavigation } from "./ExtraNavigation";
import { NavbarFooter } from "./NavbarFooter";
import { NavbarFooterButton, NavigationButton } from "./NavbarButtons";
import {
  navSetWideMode,
  navSetMaxWidthPx,
  navSetChildHeightPx,
  navSetBackgroundTransparent,
  navSetChildMarginPx,
  navSetBorder,
} from "./constants";
import { CSSObject } from "@mui/material";
import { getSxStyles } from "../utils/styles";

const NavbarContainerStyled = styled(Box)(styles.container);

/** The NavBar pattern is a collapsible surface containing supplementary content or actions that is anchored to the edge of the screen.
 *  //Named Import
 * `import { Navbar } from '@carrier-io/air-react'`
 */
export const Navbar = ({
  disableHoverListener = true,
  onDrawerSizeChanged,
  children,
  heightOffset = 0,
  tooltipProps,
  wideMode,
  transparentBackground,
  childMargin,
  childHeight,
  maxOpenWidth,
  border = true,
  sx,
  ...rest
}: NavbarProps) => {
  const [openedDrawer, setOpenedDrawer] = useState<boolean>(false);
  const [update, setUpdate] = useState<boolean>(false);

  const handleOpenDrawer = (): void => {
    if (!disableHoverListener) {
      setOpenedDrawer(!openedDrawer);
      if (onDrawerSizeChanged) {
        onDrawerSizeChanged(!openedDrawer);
      }
    }
  };

  //This sets the override flag for getting the correct values out of nav constants
  useEffect(() => {
    navSetWideMode(wideMode ?? false);
    setUpdate(!update);
  }, [wideMode]);
  useEffect(() => {
    navSetBackgroundTransparent(!!transparentBackground);
    setUpdate(!update);
  }, [transparentBackground]);
  useEffect(() => {
    if (!!childMargin) navSetChildMarginPx(childMargin);
    setUpdate(!update);
  }, [childMargin]);
  useEffect(() => {
    if (!!childHeight) navSetChildHeightPx(childHeight);
    setUpdate(!update);
  }, [childHeight]);
  useEffect(() => {
    if (!!maxOpenWidth) navSetMaxWidthPx(maxOpenWidth);
    setUpdate(!update);
  }, [maxOpenWidth]);
  useEffect(() => {
    navSetBorder(!!border);
    setUpdate(!update);
  }, [border]);

  return (
    <NavbarProvider value={{ openedDrawer, tooltipProps }}>
      <NavbarContainerStyled
        {...rest}
        className={clsx({
          opened: openedDrawer,
        })}
        sx={(theme) =>
          ({
            ...getSxStyles(theme, sx),
            height: "calc(100% - " + heightOffset + "px)",
          } as CSSObject)
        }
        onMouseEnter={() => !openedDrawer && handleOpenDrawer()}
        onMouseLeave={() => openedDrawer && handleOpenDrawer()}
      >
        {children && <Box sx={{ width: "100%" }}>{children}</Box>}
      </NavbarContainerStyled>
    </NavbarProvider>
  );
};

Navbar.Logo = NavbarLogo;
Navbar.Navigation = Navigation;
Navbar.ExtraNavigation = ExtraNavigation;
Navbar.Footer = NavbarFooter;
Navbar.NavButton = NavigationButton;
Navbar.NavFooterButton = NavbarFooterButton;
