import { forwardRef, Ref } from "react";

import MuiTabs, { TabsProps as MuiTabsProps } from "@mui/material/Tabs";
import { TouchRippleActions } from "@mui/material/ButtonBase/TouchRipple";
import { baseTabsSx } from "./styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TabScrollButton, {
  TabScrollButtonProps,
} from "@mui/material/TabScrollButton";

export interface TabsProps extends Omit<MuiTabsProps, "centered" | "variant"> {
  /**
   *
   * A ref that points to the TouchRipple element.
   */
  touchRippleRef?: Ref<TouchRippleActions>;
  /**
   *
   * Invert the indicator on the tab. Default set to bottom for "horizontal" orientation and right for "vertical" orientation.
   */
  invertIndicator?: boolean;

  /**
   * indicator variant
   * @default "line"
   */
  indicatorVariant?: "line" | "standard";

  /**
   * indicator width
   */
  indicatorWidth?: "content" | "full";

  /**
   * Determines additional display behavior of the tabs:
   *
   * - `scrollable` will invoke scrolling properties and allow for horizontally
   *   scrolling (or swiping) of the tab bar.
   * - `fullWidth` will make the tabs grow to use all the available space,
   *   which should be used for small views, like on mobile.
   * - `group-left` will align the tabs to the left within the available space.
   * - `group-center` will center-align the tabs within the available space.
   * - `group-right` will align the tabs to the right within the available space.
   * @default 'group-left'
   */
  variant?:
    | "scrollable"
    | "full-width"
    | "group-left"
    | "group-center"
    | "group-right";
}

const indicatorInvertStyle = {
  bottom: "unset",
  top: 0,
  borderBottomRightRadius: 4,
  borderBottomLeftRadius: 4,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
};

const ScrollButton = ({
  direction,
  onClick,
  orientation = "horizontal",
  ...props
}: TabScrollButtonProps) => {
  return (
    <TabScrollButton
      orientation={orientation}
      {...props}
      direction={direction}
      onClick={onClick}
    >
      {direction === "left" ? (
        <ChevronLeftIcon fontSize="small" />
      ) : (
        <ChevronRightIcon fontSize="small" />
      )}
    </TabScrollButton>
  );
};

/** The Tabs component is useful for organizing views of related content and allowing users to switch between them.
 *
 * `import { Tabs, Tab, TabContext, TabList, TabPanel, TabScrollButton } from '@carrier-io/air-react'`
 */

const Tabs = forwardRef<HTMLButtonElement, TabsProps>(
  (
    {
      invertIndicator,
      indicatorVariant = "line",
      indicatorWidth = "content",
      variant = "group-left",
      visibleScrollbar = false,
      ...props
    },
    ref
  ) => {
    const rootClassNames = `${
      indicatorWidth === "full"
        ? "MuiTab-indicator__full"
        : "MuiTab-indicator__content"
    }`;
    const indicatorClassNames = `${
      indicatorVariant === "line"
        ? "MuiTab-indicator__line"
        : "MuiTab-indicator__standard"
    }`;

    let justifyContentValue: "left" | "right" | "center" | undefined;
    let componentVariant: "standard" | "scrollable" | "fullWidth" | undefined =
      "standard";

    switch (variant) {
      case "group-center":
        justifyContentValue = "center";
        break;
      case "group-left":
        justifyContentValue = "left";
        break;
      case "group-right":
        justifyContentValue = "right";
        break;
      case "full-width":
        justifyContentValue = undefined;
        componentVariant = "fullWidth";
        break;
      default:
        justifyContentValue = undefined;
        componentVariant = variant;
        break;
    }

    return (
      <MuiTabs
        {...props}
        ref={ref}
        visibleScrollbar={visibleScrollbar}
        ScrollButtonComponent={ScrollButton}
        variant={componentVariant}
        allowScrollButtonsMobile={props.allowScrollButtonsMobile || false}
        sx={baseTabsSx(justifyContentValue)}
        className={[rootClassNames, indicatorClassNames].join(" ")}
        TabIndicatorProps={{
          ...(invertIndicator ? { style: indicatorInvertStyle } : undefined),
          ...props.TabIndicatorProps,
        }}
      />
    );
  }
);

Tabs.displayName = "Tabs";

export default Tabs;
export type { TabsProps };
