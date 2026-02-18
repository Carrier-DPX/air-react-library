import { forwardRef } from "react";
import { heightMap } from "../utils/HeightUtils";
import {
  ListItem as MuiListItem,
  ListItemProps as MuiListItemProps,
} from "@mui/material";
import { getSxStyles } from "../utils/styles";
import { CSSObject } from "@emotion/react";
import { styleTokens } from "../theme/constants/styleTokens";

export interface ListItemProps extends MuiListItemProps {
  /**
   * size of the component
   */
  size?: keyof typeof heightMap;
  /**
   * If `true`, list item has padding on left and right.
   * @default true
   */
  padded?: boolean;
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters?: boolean;
}

/** ListItem
 *
 * `import ListItem from '@carrier-io/air-react/ListItem'`
 */

const ListItem = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  const { size, sx, padded = true, disableGutters = false, ...rest } = props;

  return (
    <MuiListItem
      sx={(theme) =>
        ({
          height: size ? heightMap[size] : "auto",
          padding: disableGutters
            ? "0"
            : padded
            ? `${styleTokens.padding.xsmall} ${styleTokens.padding.xlarge}`
            : styleTokens.padding.xsmall,
          ...getSxStyles(theme, sx),
        } as CSSObject)
      }
      {...rest}
      ref={ref}
    />
  );
});

ListItem.displayName = "ListItem";

export default ListItem;
export type { ListItemProps };
