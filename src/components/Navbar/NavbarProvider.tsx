import React from "react";
import { NavbarTooltipProps } from "./types";

const state: {
  openedDrawer: boolean;
  tooltipProps?: NavbarTooltipProps;
} = {
  openedDrawer: false,
};

export const NavbarContext = React.createContext(state);

export const NavbarProvider = ({ value, children }: any) => (
  <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
);
