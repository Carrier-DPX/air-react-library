import { forwardRef } from "react";

import MuiTabScrollButton, {
  TabScrollButtonProps as MuiTabScrollButtonProps,
} from "@mui/material/TabScrollButton";

export interface TabScrollButtonProps extends MuiTabScrollButtonProps {}

/** TabScrollButton
 *
 * `import { TabScrollButton } from '@carrier-io/air-react'`
 */

const TabScrollButton = forwardRef<HTMLDivElement, TabScrollButtonProps>(
  (props, ref) => {
    return <MuiTabScrollButton {...props} ref={ref} />;
  }
);

TabScrollButton.displayName = "TabScrollButton";

export default TabScrollButton;
export type { TabScrollButtonProps };
