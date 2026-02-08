import { forwardRef } from "react";

import { Icon as MuiIcon, IconProps as MuiIconProps } from "@mui/material";

export interface IconProps extends MuiIconProps {}

declare module "@mui/material/Icon" {
  interface IconPropsSizeOverrides {
    xsmall: true;
  }
}

/** The Icon component provides access to our Icon Library and allows graphic, size and color customization.
 *
 * `import Icon from '@carrier-io/air-react/Icon'`
 */

const Icon = forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <MuiIcon {...props} ref={ref} />;
});

Icon.displayName = "Icon";

export default Icon;
