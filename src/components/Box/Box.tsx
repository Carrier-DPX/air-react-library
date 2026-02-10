import { forwardRef } from "react";

import MuiBox, { BoxProps as MuiBoxProps } from "@mui/material/Box";
import { AllSystemCSSProperties, ResponsiveStyleValue } from "@mui/system";

export interface BoxProps extends MuiBoxProps {
  /**
   *
   * Specifies how to capitalize an element's text
   */
  textTransform?: ResponsiveStyleValue<AllSystemCSSProperties["textTransform"]>;
}

/** The Box component serves as a wrapper component for most of the CSS utility needs.
 *
 * // Default import
 * import Box from '@carrier-io/air-react/Box'
 *
 * // Named import
 * import { Box } from '@carrier-io/air-react'
 */

const Box = forwardRef<unknown, BoxProps>((props: BoxProps, ref) => {
  return <MuiBox {...props} ref={ref} />;
});

Box.displayName = "Box";

export default Box;
