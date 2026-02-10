import { forwardRef, Ref } from "react";

import MuiIconButton, {
  IconButtonProps as MuiIconButtonProps,
} from "@mui/material/IconButton";
import { TouchRippleActions } from "@mui/material/ButtonBase/TouchRipple";
import { CSSObject, Theme } from "@mui/material";
import { getSxStyles } from "../utils/styles";

declare module "@mui/material/IconButton" {
  interface IconButtonPropsSizeOverrides {
    xsmall: true;
  }
}

export interface IconButtonProps extends Omit<MuiIconButtonProps, "color"> {
  color?:
    | "base"
    | "primary"
    | "secondary"
    | "warning"
    | "success"
    | "info"
    | "error"
    | "inherit";
  /**
   *
   * A ref that points to the TouchRipple element.
   */
  touchRippleRef?: Ref<TouchRippleActions>;
}

/** The IconButton component is a simple, icon-only button that allows users to take action.
 *
 * `import IconButton from '@carrier-dpx/air-react-library/IconButton'`
 * `import { IconButton } from '@carrier-dpx/air-react-library'`
 */

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      color = "base",
      disableTouchRipple = true,
      disableRipple = true,
      size = "small",
      sx,
      ...props
    },
    ref
  ) => {
    const getBaseColorStyles = (theme: Theme) => {
      if (color === "base") {
        return {
          color: theme.palette.base?.state.active,
        };
      }
      return {};
    };

    const setHoverBg = () => {
      switch (color) {
        case "base":
          return (theme: Theme) => theme.palette.base?.state.hover;
        case "primary":
          return (theme: Theme) =>
            theme.palette.primary.outlinedHoverBackground;
        case "secondary":
          return (theme: Theme) =>
            theme.palette.secondary.outlinedHoverBackground;
        case "error":
          return (theme: Theme) => theme.palette.error.outlinedHoverBackground;
        case "info":
          return (theme: Theme) => theme.palette.info.outlinedHoverBackground;
        case "success":
          return (theme: Theme) =>
            theme.palette.success.outlinedHoverBackground;
        case "warning":
          return (theme: Theme) =>
            theme.palette.warning.outlinedHoverBackground;
        default:
          return (theme: Theme) => theme.palette.base?.state.hover;
      }
    };

    const setPadding = () => {
      switch (size) {
        case "large":
          return "10px";
        case "medium":
          return "8px";
        case "small":
          return "6px";
        case "xsmall":
          return "4px";
        default:
          return "8px";
      }
    };

    const setHeight = () => {
      switch (size) {
        case "large":
          return "48px";
        case "medium":
          return "40px";
        case "small":
          return "32px";
        case "xsmall":
          return "24px";
        default:
          return "48px";
      }
    };

    return (
      <MuiIconButton
        color={color == "base" ? "default" : color}
        data-testid="test-iconButton"
        disableTouchRipple={disableTouchRipple}
        disableRipple={disableRipple}
        {...props}
        sx={(theme) =>
          ({
            padding: setPadding(),
            height: setHeight(),
            width: setHeight(),
            fontSize: setHeight(),
            ...getBaseColorStyles(theme),
            "&:hover": {
              backgroundColor: setHoverBg()(theme),
            },
            ...getSxStyles(theme, sx),
          } as CSSObject)
        }
        ref={ref}
      />
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
