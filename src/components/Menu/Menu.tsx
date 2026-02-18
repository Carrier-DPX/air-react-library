import { forwardRef } from "react";

import {
  Menu as MuiMenu,
  MenuProps as MuiMenuProps,
  Theme,
  styled,
  CSSObject,
} from "@mui/material";

import { getSxStyles } from "../utils/styles";

export interface MenuProps extends MuiMenuProps {
  maxHeight?: string;
}
type StyledMenuProps = MenuProps & {
  maxHeightProp?: string;
};

const StyledMuiMenu = styled(MuiMenu, {
  shouldForwardProp: (prop: PropertyKey) => prop !== "maxHeightProp",
})<StyledMenuProps>(({ maxHeightProp }) => ({
  maxHeight: maxHeightProp,
  overflowY: "auto",
  "& .MuiList-root": {
    paddingBottom: "4px",
    paddingTop: "4px",
    "&:after": {
      content: '""',
      display: "table",
    },
    "&:before": {
      content: '""',
      display: "table",
    },
  },
}));

/** The Menu component displays overflow actions in a vertical list.
 *
 * `import Menu from '@carrier-io/air-react/Menu'`
 */

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ elevation = 4, maxHeight, PaperProps, ...rest }, ref) => {
    return (
      <StyledMuiMenu
        elevation={elevation}
        PaperProps={{
          ...PaperProps,
          sx: (theme: Theme) =>
            ({
              backgroundColor: theme.palette.base?.background.paper,
              ...getSxStyles(theme, PaperProps?.sx),
            } as CSSObject),
          style: {
            marginTop: "4px",
            ...PaperProps?.style,
          },
        }}
        maxHeightProp={maxHeight}
        {...rest}
        ref={ref}
      />
    );
  }
);

Menu.displayName = "Menu";

export default Menu;
export type { MenuProps };
