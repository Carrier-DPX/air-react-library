import { forwardRef } from "react";

import {
  ListItemAvatar as MuiListItemAvatar,
  ListItemAvatarProps as MuiListItemAvatarProps,
} from "@mui/material";

export interface ListItemAvatarProps extends MuiListItemAvatarProps {
  // this may be updated later if Design needs any props to be removed
}

/** ListItemAvatar
 *
 * `import ListItemAvatarProps from '@carrier-io/air-react/ListItemAvatar'`
 */

const ListItemAvatar = forwardRef<HTMLDivElement, ListItemAvatarProps>(
  (props, ref) => {
    return <MuiListItemAvatar {...props} ref={ref} />;
  }
);

ListItemAvatar.displayName = "ListItemAvatar";

export default ListItemAvatar;
export type { ListItemAvatarProps };
