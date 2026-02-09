import { forwardRef } from "react";

import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationProps as MuiBottomNavigationProps,
} from "@mui/material";
import { CSSObject } from "@mui/material/styles";
import { getSxStyles } from "../utils/styles";

export interface BottomNavigationProps
  extends Omit<MuiBottomNavigationProps, "showLabels"> {
  /**
   *
   * Labels will be visible based on the selection.
   */
  showLabel?: "On" | "Selected Only" | "Off";
}

/** The BottomNavigation component provides a persistent and convenient way for users to visit primary destinations in an app.
 *
 * `import BottomNavigation from '@carrier-io/air-react/BottomNavigation'`
 * `import BottomNavigationAction from '@carrier-io/air-react/BottomNavigationAction'`
 */

const BottomNavigation = forwardRef<HTMLDivElement, BottomNavigationProps>(
  ({ sx, ...props }, ref) => {
    return (
      <MuiBottomNavigation
        {...props}
        sx={(theme) =>
          ({
            ...getSxStyles(theme, sx),
            // Theme-aware background: adapts to light/dark themes
            backgroundColor: theme.palette.base?.background.paper,
          } as CSSObject)
        }
        ref={ref}
      />
    );
  }
);

BottomNavigation.displayName = "BottomNavigation";

export default BottomNavigation;
