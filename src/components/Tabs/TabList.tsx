import { forwardRef } from "react";

import MuiTabList, { TabListProps as MuiTabListProps } from "@mui/lab/TabList";

export interface TabListProps extends MuiTabListProps {
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
}

/** TabList
 *
 * `import { TabList } from '@carrier-io/air-react'`
 */

const indicatorInvertStyle = {
  right: "unset",
  borderBottomRightRadius: 4,
  borderBottomLeftRadius: 0,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 4,
};

const TabList = forwardRef<HTMLButtonElement, TabListProps>(
  ({ invertIndicator, indicatorVariant, indicatorWidth, ...props }, ref) => {
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
    return (
      <MuiTabList
        {...props}
        ref={ref}
        TabIndicatorProps={{
          ...(invertIndicator ? { style: indicatorInvertStyle } : undefined),
          ...props.TabIndicatorProps,
        }}
        className={[rootClassNames, indicatorClassNames].join(" ")}
      />
    );
  }
);

TabList.displayName = "TabList";

export default TabList;
export type { TabListProps };
