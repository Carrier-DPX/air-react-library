import { forwardRef } from "react";

import MuiBreadcrumbs, {
  BreadcrumbsProps as MuiBreadcrumbsProps,
} from "@mui/material/Breadcrumbs";
import { CSSObject, Theme } from "@mui/material/styles";

import { baseBreadcrumbsSx } from "./styles";
import { getSxStyles } from "../utils/styles";
import useMediaQuery from "../useMediaQuery/useMediaQuery";

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {
  color?: "primary" | "base";
}

/** The Breadcrumbs component is a set of links that help users navigate
 *  and visualize the current location within a hierarchical structure.
 *
 * // Default import
 * import Breadcrumbs from '@carrier-io/air-react/Breadcrumbs'
 *
 * // Named import
 * import { Breadcrumbs } from '@carrier-io/air-react'
 */

const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ sx, color, ...rest }, ref) => {
    const isMobile = useMediaQuery(`(max-width:599px)`);

    const breadcrumbSX = (theme: Theme) => {
      const baseStyles = getSxStyles(theme, sx);

      return {
        ...baseStyles,
        ...baseBreadcrumbsSx(theme, color),
      } as CSSObject;
    };

    return (
      <MuiBreadcrumbs
        {...rest}
        sx={breadcrumbSX}
        ref={ref}
        separator={isMobile ? "" : "/"}
      />
    );
  }
);

Breadcrumbs.displayName = "Breadcrumbs";

export default Breadcrumbs;
