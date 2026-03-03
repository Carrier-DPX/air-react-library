import { forwardRef } from "react";

import MuiTabPanel, {
  TabPanelProps as MuiTabPanelProps,
} from "@mui/lab/TabPanel";
import { Theme } from "@mui/material/styles";
import { getSxStyles } from "../utils/styles";

export interface TabPanelProps extends MuiTabPanelProps {}

/** TabPanel
 *
 * `import { TabPanel } from '@carrier-io/air-react'`
 */

const TabPanel = forwardRef<unknown, TabPanelProps>(({ sx, ...props }, ref) => {
  return (
    <MuiTabPanel
      sx={
        ((theme: Theme) => ({
          ...getSxStyles(theme, sx),
          // Apply base.text.primary color to panel content for dark theme support
          color: theme.palette.base?.text.primary || theme.palette.text.primary,
        })) as any
      }
      {...props}
      ref={ref}
    />
  );
});

TabPanel.displayName = "TabPanel";

export default TabPanel;
export type { TabPanelProps };
