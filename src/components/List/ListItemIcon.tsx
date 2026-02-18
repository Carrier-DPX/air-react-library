import { forwardRef } from "react";

import {
  ListItemIcon as MuiListItemIcon,
  ListItemIconProps as MuiListItemIconProps,
  CSSObject,
  Theme,
} from "@mui/material";

import { getSxStyles } from "../utils/styles";

export interface ListItemIconProps extends MuiListItemIconProps {
  // this may be updated later if Design needs any props to be removed
}

/** ListItemIcon
 *
 * `import ListItemIcon from '@carrier-io/air-react/ListItemIcon'`
 */

const ListItemIcon = forwardRef<HTMLDivElement, ListItemIconProps>(
  (props, ref) => {
    return (
      <MuiListItemIcon
        {...props}
        sx={(theme: Theme) =>
          ({
            color: theme.palette.base?.state.active,
            ...getSxStyles(theme, props.sx),
          } as CSSObject)
        }
        ref={ref}
      />
    );
  }
);

ListItemIcon.displayName = "ListItemIcon";

export default ListItemIcon;
export type { ListItemIconProps };
