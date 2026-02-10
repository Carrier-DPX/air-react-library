import { forwardRef } from "react";

import {
  CSSObject,
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
  Theme,
} from "@mui/material";
import { baseTooltipSx } from "./styles";

export interface TooltipProps extends MuiTooltipProps {
  /**
   * Color sets the background-color and font color.
   */
  color?: "white" | "black";
}

/** Tooltip displays informative text when users hover over, focus on, or tap an element.
 *
 * `import Tooltip from '@carrier-io/air-react/Tooltip'`
 */

const Tooltip = forwardRef<unknown, TooltipProps>(
  ({ children, color = "white", ...rest }, ref) => {
    const componentsOverrideProps: any = {
      tooltip: {
        sx: { ...baseTooltipSx },
      },
      arrow: {
        color: (theme: Theme) => theme.palette.base?.background?.paper,
      },
      ...(color === "black"
        ? {
            arrow: {
              sx: (theme: Theme) =>
                ({
                  color: theme.palette.base?.dark,
                  "&:before": {
                    boxShadow: theme.shadows[2],
                  },
                } as CSSObject),
            },
            tooltip: {
              sx: (theme: Theme) =>
                ({
                  backgroundColor: theme.palette.base?.dark,
                  color: theme.palette.base?.contrastText,
                  boxShadow: theme.shadows[2],
                } as CSSObject),
            },
          }
        : {}),
      ...rest.componentsProps,
    };

    return (
      <MuiTooltip {...rest} componentsProps={componentsOverrideProps} ref={ref}>
        {children}
      </MuiTooltip>
    );
  }
);

Tooltip.displayName = "Tooltip";

export default Tooltip;
