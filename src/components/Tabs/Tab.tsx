import { forwardRef, Ref } from "react";

import MuiTab, { TabProps as MuiTabProps } from "@mui/material/Tab";
import { TouchRippleActions } from "@mui/material/ButtonBase/TouchRipple";
import { CSSObject, Theme } from "@mui/material/styles";
import { getSxStyles } from "../utils/styles";

export interface TabProps extends MuiTabProps {
  /**
   *
   * A ref that points to the TouchRipple element.
   */
  touchRippleRef?: Ref<TouchRippleActions>;
}

/** Tab
 *
 * `import Tab from '@carrier-io/air-react/Tab'`
 */
const Tab = forwardRef<HTMLDivElement, TabProps>(({ sx, ...rest }, ref) => {
  return (
    <MuiTab
      sx={(theme: Theme) =>
        ({
          ...getSxStyles(theme, sx),
          ...theme.typography.body2Semibold,
          textTransform: "capitalize",
          // Default/unselected: label and icon use base.state.active
          color: theme.palette.base?.state.active,
          "& .MuiTab-iconWrapper": {
            color: theme.palette.base?.state.active,
          },
          // Hover state: label and icon use base.text.primary
          "&:hover": {
            color: theme.palette.base?.text.primary,
            "& .MuiTab-iconWrapper": {
              color: theme.palette.base?.text.primary,
            },
          },
          // Selected tab: label and icon use base.text.primary
          "&.Mui-selected": {
            color: theme.palette.base?.text.primary,
            "& .MuiTab-iconWrapper": {
              color: theme.palette.base?.text.primary,
            },
          },
          // Disabled tab: label and icon use base.text.disabled
          "&.Mui-disabled": {
            color: theme.palette.base?.text.disabled,
            "& .MuiTab-iconWrapper": {
              color: theme.palette.base?.state.disabledContent,
            },
          },
        } as CSSObject)
      }
      {...rest}
      ref={ref}
    />
  );
});

Tab.displayName = "Tab";

export default Tab;
export type { TabProps };
