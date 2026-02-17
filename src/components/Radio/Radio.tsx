import { forwardRef } from "react";

import MuiRadio, { RadioProps as MuiRadioProps } from "@mui/material/Radio";
import { CSSObject, Theme, useTheme } from "@mui/material/styles";

import { baseRadioSx } from "./styles";
import { getSxStyles } from "../utils/styles";

export interface RadioProps extends Omit<MuiRadioProps, "color"> {
  /**
   *
   * Colors that make sense for this component
   * @default primary
   */
  color?:
    | "base"
    | "primary"
    | "secondary"
    | "warning"
    | "success"
    | "info"
    | "error";
  disableHover?: boolean;
}

const defaultRadioIcon = (size: RadioProps["size"], theme: Theme) => (
  <svg
    width={size === "small" ? "20" : "24"}
    height={size === "small" ? "20" : "24"}
    viewBox="-1 -1 20 20"
    fill="none"
    stroke={theme.palette?.base?.state.active ?? "#666666"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16ZM9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
      fill={theme.palette?.base?.state.active ?? "#666666"}
    />
  </svg>
);

const defaultCheckedRadioIcon = (size: RadioProps["size"]) => (
  <svg
    width={size === "small" ? "20" : "24"}
    height={size === "small" ? "20" : "24"}
    viewBox="-1 -1 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12ZM9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
    />
  </svg>
);

/** The Radio component allows users to make a mutually exclusive choice from a set or list.
 *
 * // Default import
 * import Radio from '@carrier-io/air-react/Radio'
 *
 * // Named import
 * import { Radio } from '@carrier-io/air-react'
 */

const Radio = forwardRef<HTMLButtonElement, RadioProps>(
  ({ sx, disableHover = true, color = "primary", ...rest }, ref) => {
    const theme = useTheme();
    const radioSX = (theme: Theme) =>
      ({
        ...getSxStyles(theme, sx),
        ...(rest.size === "small"
          ? { height: 32, width: 32 }
          : { height: 40, width: 40 }),
        ...baseRadioSx(theme, disableHover),
      } as CSSObject);

    return (
      <MuiRadio
        color={color as any}
        disableRipple={true}
        checkedIcon={rest.checkedIcon ?? defaultCheckedRadioIcon(rest.size)}
        icon={rest.icon ?? defaultRadioIcon(rest.size, theme)}
        {...rest}
        sx={radioSX}
        ref={ref}
      />
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
export type { RadioProps };
