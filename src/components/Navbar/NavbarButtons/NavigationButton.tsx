import { FC } from "react";
import clsx from "clsx";
import { styled } from "@mui/material/styles";
import { useNavbarContext } from "../hooks/useNavbarContext";
import { NavbarButtonClasses as Classes } from "./types";
import styles from "../NavbarButtons/styles";
import Button, { ButtonProps } from "../../Button";
import Typography from "../../Typography";
import { NavbarTooltip } from "./NavbarTooltip";
import { getSxStyles } from "../../utils/styles";
import { CSSObject } from "@mui/material";
import { navChildMarginPx } from "../constants";
import { ActiveButtonType } from "../Navigation";

/**
 * The NavigationButton used for navigation buttons.
 *
 * //Named Import
 * `import { NavigationButton } from '@carrier-io/air-react'`
 */

export interface NavigationButtonProps
  extends Pick<ButtonProps, "sx" | "children"> {
  data: { label?: string; id: string };
  onClick: () => void;
  disableTooltip: boolean;
  withOffset?: boolean;
  active?: boolean;
  activeButtonType?: ActiveButtonType;
  disabled?: boolean;
  disableRipple?: boolean;
  disableTouchRipple?: boolean;
}

const ButtonStyled = styled(Button)(styles[Classes.NavbarBtn]);

export const NavigationButton: FC<NavigationButtonProps> = ({
  data,
  onClick,
  disableTooltip,
  active,
  activeButtonType,
  withOffset = false,
  children,
  disabled = false,
  disableRipple = false,
  disableTouchRipple = false,
  ...rest
}) => {
  const { openedDrawer } = useNavbarContext();
  const { id, label } = data;

  // Tooltip uses label if it's non-empty and not just whitespace,
  // otherwise falls back to id
  const tooltipTitle = label?.trim() ? label : id;

  const classNames = clsx({
    [Classes.NavbarBtn]: true,
    [Classes.BasicBtn]: activeButtonType === ActiveButtonType.Basic,
    [Classes.WithIndicatorBtn]: activeButtonType === ActiveButtonType.Indicator,
    [Classes.ActiveBtn]: active,
    [Classes.WithOffsetBtn]: withOffset,
  });

  return (
    <NavbarTooltip
      title={tooltipTitle}
      disableHoverListener={openedDrawer ? true : disableTooltip}
    >
      <ButtonStyled
        {...rest}
        variant="text"
        onClick={() => onClick?.()}
        className={classNames}
        disabled={disabled}
        disableRipple={disableRipple}
        disableTouchRipple={disableTouchRipple}
        data-testId={`navbar-button-${id}`}
        sx={(theme) =>
          ({
            ...getSxStyles(theme, rest.sx),
            margin: navChildMarginPx + "px 0px",
          } as CSSObject)
        }
      >
        {children}
        {label && (
          <Typography
            component="span"
            variant={withOffset ? "subtitle2" : "subtitle1"}
          >
            {label}
          </Typography>
        )}
      </ButtonStyled>
    </NavbarTooltip>
  );
};
