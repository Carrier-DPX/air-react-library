import { forwardRef } from "react";

import {
  ListItemButton as MuiListItemButton,
  ListItemButtonProps as MuiListItemButtonProps,
} from "@mui/material";
import { Theme, styled } from "@mui/material/styles";

export interface ListItemButtonProps extends MuiListItemButtonProps {
  // this may be updated later if Design needs any props to be removed
}

/** ListItemButton
 *
 * `import ListItemButton from '@carrier-io/air-react/ListItemButton'`
 */

const MuiListItemButtonStyled = styled(MuiListItemButton)(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.base?.state.active,
    "&:hover": {
      backgroundColor: theme.palette.base?.state.hover,
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.base?.state.selected,
    },
    "&.Mui-selected:hover": {
      backgroundColor: theme.palette.base?.state.selectedHover,
    },
  })
);

const ListItemButton = forwardRef<HTMLDivElement, ListItemButtonProps>(
  (props, ref) => {
    return <MuiListItemButtonStyled {...props} ref={ref} />;
  }
);

ListItemButton.displayName = "ListItemButton";

export default ListItemButton;
export type { ListItemButtonProps };
