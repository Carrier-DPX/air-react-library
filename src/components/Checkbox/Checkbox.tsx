import { forwardRef, Ref } from "react";

import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from "@mui/material/Checkbox";
import { TouchRippleActions } from "@mui/material/ButtonBase/TouchRipple";
import { CSSObject, Theme, useTheme } from "@mui/material/styles";

import { baseCheckboxSx, disableHoverSx } from "./styles";
import { getSxStyles } from "../utils/styles";

export interface CheckboxProps extends Omit<MuiCheckboxProps, "color"> {
  /**
   *
   * The color of the component. It supports both default and custom theme colors, which can be added as shown in the <a href="https://mui.com/material-ui/customization/palette/#adding-new-colors">palette customization guide</a>.
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
  /**
   *
   * A ref that points to the TouchRipple element.
   */
  touchRippleRef?: Ref<TouchRippleActions>;

  disableHover?: boolean;
}

const defaultUncheckedCheckboxIcon = (theme: Theme) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="3"
      stroke={theme.palette?.base?.state.active}
      strokeWidth="2"
    />
  </svg>
);

const defaultCheckedCheckboxIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7ZM16.7388 9.67396C17.111 9.26595 17.082 8.63345 16.674 8.26123C16.266 7.88902 15.6335 7.91803 15.2612 8.32604L10.4994 13.5457L8.71334 11.7277C8.32628 11.3338 7.69314 11.3282 7.29918 11.7152C6.90521 12.1023 6.89961 12.7354 7.28666 13.1294L9.81298 15.7008C10.0055 15.8968 10.2702 16.0049 10.5448 15.9998C10.8195 15.9947 11.0799 15.8769 11.2651 15.674L16.7388 9.67396Z"
    />
  </svg>
);

const defaultIndeterminateCheckboxIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z"
    />
  </svg>
);

/** The Checkbox component allows users to select one or more items from a set or list.
 *
 * // Default import
 * import Checkbox from '@carrier-io/air-react/Checkbox'
 *
 * // Named import
 * import { Checkbox } from '@carrier-io/air-react'
 */

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ color = "primary", disableHover = false, ...rest }, ref) => {
    const theme = useTheme();
    return (
      <MuiCheckbox
        color={color as any}
        icon={defaultUncheckedCheckboxIcon(theme)}
        checkedIcon={defaultCheckedCheckboxIcon}
        indeterminateIcon={defaultIndeterminateCheckboxIcon}
        sx={(theme) =>
          ({
            ...getSxStyles(theme, rest.sx),
            p: 1,
            ...(rest.checked &&
              rest.disabled && {
                svg: { fill: () => theme.palette.base?.main },
              }),
            ...(rest.disabled === true && {
              svg: {
                rect: { stroke: () => theme.palette.base?.text.disabled },
              },
            }),
            ...(rest.size === "small" && {
              svg: { width: "16px", height: "16px" },
            }),
            ...(disableHover && disableHoverSx),
            ...baseCheckboxSx,
          } as CSSObject)
        }
        disableRipple={true}
        ref={ref}
        {...rest}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
export type { CheckboxProps };
