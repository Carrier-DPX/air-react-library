import { forwardRef } from "react";

import {
  ListItemSecondaryAction as MuiListItemSecondaryAction,
  ListItemSecondaryActionProps as MuiListItemSecondaryActionProps,
} from "@mui/material";

export interface ListItemSecondaryActionProps
  extends MuiListItemSecondaryActionProps {
  // this may be updated later if Design needs any props to be removed
}

/** ListItemSecondaryAction
 *
 * `import ListItemSecondaryAction from '@carrier-io/air-react/ListItemSecondaryAction'`
 */

const ListItemSecondaryAction = forwardRef<
  HTMLDivElement,
  ListItemSecondaryActionProps
>((props, ref) => {
  return <MuiListItemSecondaryAction {...props} ref={ref} />;
});

ListItemSecondaryAction.displayName = "ListItemSecondaryAction";

export default ListItemSecondaryAction;
export type { ListItemSecondaryActionProps };
