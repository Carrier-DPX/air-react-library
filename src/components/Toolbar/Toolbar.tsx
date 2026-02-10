import { forwardRef } from "react";

import MuiToolbar, {
  ToolbarProps as MuiToolbarProps,
} from "@mui/material/Toolbar";

export interface ToolbarProps extends MuiToolbarProps {}

/** Toolbar
 *
 * `import Toolbar from '@carrier-dpx/air-react-library/Toolbar'`
 * `import { Toolbar } from '@carrier-dpx/air-react-library'`
 */

const Toolbar = forwardRef<HTMLDivElement, ToolbarProps>((props, ref) => {
  return <MuiToolbar {...props} ref={ref} />;
});

Toolbar.displayName = "Toolbar";

export default Toolbar;
