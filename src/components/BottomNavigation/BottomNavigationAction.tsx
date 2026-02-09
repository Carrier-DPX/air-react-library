import { forwardRef } from "react";

import {
  BottomNavigationAction as MuiBottomNavigationAction,
  BottomNavigationActionProps as MuiBottomNavigationActionProps,
} from "@mui/material";
import { CSSObject } from "@mui/material/styles";
import { getSxStyles } from "../utils/styles";

export const BottomNavigationLabelOptions = {
  On: "On",
  Off: "Off",
  SelectedOnly: "Selected Only",
};

export interface BottomNavigationActionProps
  extends MuiBottomNavigationActionProps {
  /**
   *
   * Labels will be visible based on the selection.
   */

  labelvisibility?: "On" | "Selected Only" | "Off";

  /**
   *
   * selected will be used to which item is selected.
   */

  selected?: boolean;
}

/** BottomNavigationAction
 *
 * `import BottomNavigationAction from '@carrier-io/air-react/BottomNavigationAction'`
 */

const labelStyles = (props: BottomNavigationActionProps) => {
  if (props.labelvisibility === BottomNavigationLabelOptions.On) {
    return { opacity: "1", paddingTop: "0px" };
  } else if (
    props.labelvisibility === BottomNavigationLabelOptions.SelectedOnly &&
    props.selected === true
  ) {
    return { opacity: "1" };
  } else {
    return { opacity: "0" };
  }
};

const verticalAlignStyles = () => {
  return { paddingTop: "0px" };
};

const BottomNavigationAction = forwardRef<
  HTMLButtonElement,
  BottomNavigationActionProps
>(({ sx, ...props }, ref) => {
  return (
    <MuiBottomNavigationAction
      sx={(theme) =>
        ({
          ...getSxStyles(theme, sx),
          "& .MuiBottomNavigationAction-iconOnly": { ...labelStyles(props) },
          "& .Mui-selected": { ...labelStyles(props) },
          "&.MuiButtonBase-root": { ...verticalAlignStyles() },
          // Theme-aware colors: unselected uses secondary, selected uses primary.main
          color: theme.palette.base?.text.secondary,
          // Consistent label sizing prevents container resizing on selection
          "& .MuiBottomNavigationAction-label": {
            lineHeight: "1.2",
            fontSize: theme.typography.body2.fontSize,
            // Hide label container when Off or when SelectedOnly and not selected
            ...((props.labelvisibility === BottomNavigationLabelOptions.Off ||
              (props.labelvisibility ===
                BottomNavigationLabelOptions.SelectedOnly &&
                !props.selected)) && {
              height: 0,
              minHeight: 0,
              padding: 0,
              margin: 0,
              overflow: "hidden",
            }),
          },
          // Selected state: primary.main color for icon and label
          "&.Mui-selected": {
            color: theme.palette.primary.main,
            "& .MuiBottomNavigationAction-icon": {
              color: theme.palette.primary.main,
            },
            "& .MuiBottomNavigationAction-label": {
              color: theme.palette.primary.main,
              lineHeight: "1.2",
              fontSize: theme.typography.body2.fontSize,
            },
          },
          "&.Mui-disabled": {
            color: theme.palette.base?.text.disabled,
          },
        } as CSSObject)
      }
      {...props}
      ref={ref}
    />
  );
});

BottomNavigationAction.displayName = "BottomNavigationAction";

export default BottomNavigationAction;
