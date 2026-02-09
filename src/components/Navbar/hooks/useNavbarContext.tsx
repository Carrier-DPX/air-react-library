import { useContext } from "react";
import { NavbarContext } from "../NavbarProvider";

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);

  if (context === undefined) {
    throw new Error("useNavbarProvider must be used within a NavbarProvider");
  }

  return context;
};
