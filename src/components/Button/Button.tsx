import { ElementType, forwardRef, Ref } from "react";

import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { TouchRippleActions } from "@mui/material/ButtonBase/TouchRipple";
import { CSSObject, Theme } from "@mui/material/styles";

import { getSxStyles } from "../utils/styles";
import { styleTokens } from "../theme/constants/styleTokens";

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    xlarge: true;
    xsmall: true;
  }
}

export interface ButtonProps extends MuiButtonProps {
  /**
   * A ref that points to the TouchRipple element.
   */
  touchRippleRef?: Ref<TouchRippleActions>;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: ElementType;
  /**
   * The border radius of the button.
   * @default "rounded"
   */
  shape?: "rounded" | "circular";
}

const getHoverOverrides = (theme: Theme): CSSObject => ({
  "&.MuiButton-containedPrimary:hover": {
    backgroundColor: theme.palette.primary?.containedHoverBackground,
  },
  "&.MuiButton-containedSecondary:hover": {
    backgroundColor: theme.palette.secondary?.containedHoverBackground,
  },
  "&.MuiButton-containedError:hover": {
    backgroundColor: theme.palette.error?.containedHoverBackground,
  },
  "&.MuiButton-containedWarning:hover": {
    backgroundColor: theme.palette.warning?.containedHoverBackground,
  },
  "&.MuiButton-containedSuccess:hover": {
    backgroundColor: theme.palette.success?.containedHoverBackground,
  },
  "&.MuiButton-containedInfo:hover": {
    backgroundColor: theme.palette.info?.containedHoverBackground,
  },
});

/** The Button component allows users to take action which is communicated through a text label and optional icons.
 *
 * // Default import
 * import Button from '@carrier-io/air-react/Button'
 *
 * // Named import
 * import { Button } from '@carrier-io/air-react'
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = "primary",
      size,
      variant = "contained",
      disableElevation = true,
      shape = "rounded",
      sx,
      ...rest
    },
    ref
  ) => {
    return (
      <MuiButton
        ref={ref}
        color={color}
        size={size}
        variant={variant}
        disableElevation={disableElevation}
        sx={(theme) =>
          ({
            borderRadius:
              shape === "rounded"
                ? styleTokens.borderRadius.large
                : styleTokens.borderRadius.circular,
            ...getHoverOverrides(theme),
            ...getSxStyles(theme, sx),
          } as CSSObject)
        }
        style={{
          border: variant === "text" ? "none" : "",
        }}
        {...rest}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
