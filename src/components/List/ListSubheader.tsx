import { forwardRef } from "react";

import {
  ListSubheader as MuiListSubheader,
  ListSubheaderProps as MuiListSubheaderProps,
  CSSObject,
  Theme,
} from "@mui/material";

import { getSxStyles } from "../utils/styles";

export interface ListSubheaderProps extends MuiListSubheaderProps {
  // this may be updated later if Design needs any props to be removed
}

/** ListSubheader
 *
 * `import ListSubheader from '@carrier-io/air-react/ListSubheader'`
 */

const ListSubheader = forwardRef<HTMLLIElement, ListSubheaderProps>(
  (props, ref) => {
    return (
      <MuiListSubheader
        {...props}
        sx={(theme: Theme) =>
          ({
            color: theme.palette.base?.text.primary,
            backgroundColor: theme.palette.base?.background.paper,
            ...getSxStyles(theme, props.sx),
          } as CSSObject)
        }
        ref={ref}
      />
    );
  }
);

ListSubheader.displayName = "ListSubheader";

export default ListSubheader;
export type { ListSubheaderProps };
