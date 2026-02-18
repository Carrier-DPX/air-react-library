import { forwardRef } from "react";

import {
  List as MuiList,
  ListProps as MuiListProps,
  CSSObject,
  Theme,
} from "@mui/material";
import { styleTokens } from "../theme/constants/styleTokens";
import { getSxStyles } from "../utils/styles";

export interface ListProps extends MuiListProps {
  maxHeight?: string;
  // this may be updated later if Design needs any props to be removed

  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader?: React.ReactNode;

  /**
   * Toggles the display of the subheader. Set to `true` to show the subheader.
   */
  showSubheader?: boolean;

  /**
   * Added padding between the list
   * @default false
   */
  padded?: boolean;
}

/** The List component is useful for organizing related content or actions in a vertical format.
 *
 * `import List from '@carrier-io/air-react/List'`
 */

const List = forwardRef<HTMLUListElement, ListProps>(
  (
    { maxHeight, sx, subheader, showSubheader = true, padded = false, ...rest },
    ref
  ) => {
    return (
      <MuiList
        ref={ref}
        {...rest}
        sx={(theme: Theme) =>
          ({
            backgroundColor: theme.palette.base?.background.paper,
            maxHeight: maxHeight ?? "auto",
            overflowY: maxHeight ? "auto" : "visible",
            ...(padded && {
              ".MuiListItem-root": {
                padding: styleTokens.paddingItem,
              },
              ".MuiListItemButton-root": {
                padding: styleTokens.paddingItem,
              },
            }),
            ...getSxStyles(theme, sx),
          } as CSSObject)
        }
        subheader={showSubheader && subheader ? subheader : null}
      />
    );
  }
);

List.displayName = "List";

export default List;
export type { ListProps };
