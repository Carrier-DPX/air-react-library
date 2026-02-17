import { forwardRef } from "react";

import {
  Backdrop as MuiBackdrop,
  BackdropProps as MuiBackdropProps,
  CSSObject,
} from "@mui/material";
import { getSxStyles } from "../utils/styles";

export interface BackdropProps extends MuiBackdropProps {}

/** The Backdrop component signals a state change and provides emphasis to contextual or actionable content.
 *
 * `import Backdrop from '@carrier-io/air-react/Backdrop'`
 */

const Backdrop = forwardRef<unknown, BackdropProps>((props, ref) => {
  return (
    <MuiBackdrop
      {...props}
      sx={(theme) =>
        ({
          backgroundColor: theme.palette.base?.backdropOverlay,
          ...getSxStyles(theme, props.sx),
        } as CSSObject)
      }
      ref={ref}
    />
  );
});

Backdrop.displayName = "Backdrop";

export default Backdrop;
export type { BackdropProps };
