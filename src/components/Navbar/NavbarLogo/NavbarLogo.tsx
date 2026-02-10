import { FC } from "react";
import { styled } from "@mui/material/styles";
import btnStyles from "../NavbarButtons/styles";
import logoStyles from "./styles";
import { NavbarLogoProps } from "./types";
import { useNavbarContext } from "../hooks/useNavbarContext";
import Box from "../../Box";
import Button from "../../Button";
import { Zoom } from "@mui/material";
import { NavbarTooltip } from "../NavbarButtons";
import { NavbarButtonClasses } from "../NavbarButtons/types";

const LogoContainerStyled = styled(Box)(logoStyles.container);
const ButtonStyled = styled(Button)(btnStyles[NavbarButtonClasses.NavbarBtn]);

/**
 * The NavbarLogo component allows adding logo.
 *
 *  //Named Import
 * `import { NavbarLogo } from '@carrier-io/air-react'`
 */

export const NavbarLogo: FC<NavbarLogoProps> = ({
  label,
  disableTooltip = false,
  onClick,
  children,
  ...rest
}) => {
  const { openedDrawer } = useNavbarContext();

  return (
    <LogoContainerStyled {...rest}>
      <NavbarTooltip
        title={label ?? ""}
        TransitionComponent={Zoom}
        disableHoverListener={openedDrawer ? true : disableTooltip}
      >
        <ButtonStyled variant="text" onClick={(e) => onClick?.(e)}>
          {children}
        </ButtonStyled>
      </NavbarTooltip>
    </LogoContainerStyled>
  );
};
