import { forwardRef } from "react";

import {
  ListItemText as MuiListItemText,
  ListItemTextProps as MuiListItemTextProps,
  CSSObject,
  Theme,
} from "@mui/material";

import { getSxStyles } from "../utils/styles";

export interface ListItemTextProps extends MuiListItemTextProps {
  // this may be updated later if Design needs any props to be removed
}

/** ListItemText
 *
 * `import ListItemText from '@carrier-io/air-react/ListItemText'`
 */

const ListItemText = forwardRef<HTMLSpanElement, ListItemTextProps>(
  (props, ref) => {
    return (
      <MuiListItemText
        {...props}
        sx={(theme: Theme) =>
          ({
            "& .MuiListItemText-primary": {
              color: theme.palette.base?.text.primary,
            },
            "& .MuiListItemText-secondary": {
              color: theme.palette.base?.text.secondary,
            },
            ...getSxStyles(theme, props.sx),
          } as CSSObject)
        }
        ref={ref}
      />
    );
  }
);

ListItemText.displayName = "ListItemText";

export default ListItemText;
export type { ListItemTextProps };
