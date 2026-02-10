import { forwardRef } from "react";

import MuiAvatarGroup, {
  AvatarGroupProps as MuiAvatarGroupProps,
} from "@mui/material/AvatarGroup";
import { styled } from "@mui/material/styles";

export interface AvatarGroupProps extends MuiAvatarGroupProps {
  variant?: "circular";
}

/** The AvatarGroup component represents a set of unique users or entities through custom images, initials or icons.
 *
 * // Default import
 * import AvatarGroup from '@carrier-dpx/air-react-library/Avatar'
 *
 * // Named import
 * import { AvatarGroup } from '@carrier-dpx/air-react-library'
 */

const MuiAvatarGroupStyled = styled(MuiAvatarGroup)<AvatarGroupProps>(
  ({ spacing, theme }) => ({
    ...(spacing === "small" && {
      ".MuiAvatarGroup-avatar": {
        marginLeft: "-12px !important",
        ":last-child": {
          marginLeft: "0px!important",
        },
      },
    }),
    "& .MuiAvatarGroup-avatar": {
      fontWeight: 600,
      fontSize: "16px",
      border: `2px solid ${theme.palette.base?.background.paper}`,
    },
  })
);

const AvatarGroup = forwardRef<unknown, AvatarGroupProps>((props, ref) => {
  return <MuiAvatarGroupStyled {...props} ref={ref} />;
});

AvatarGroup.displayName = "AvatarGroup";

export default AvatarGroup;
