import { forwardRef } from "react";

import MuiAvatar, { AvatarProps as MuiAvatarProps } from "@mui/material/Avatar";
import { blueGrey } from "@mui/material/colors";
import { CSSObject, styled } from "@mui/material/styles";

import { styleTokens } from "../theme/constants/styleTokens";
import { getDisplayStringForAvatar } from "../utils/DataDisplayUtils";
import { getSxStyles } from "../utils/styles";

export interface AvatarProps extends MuiAvatarProps {
  variant?: "circular" | "rounded";
  /**
   * Size of the Avatar
   * - large: 48px
   * - medium: 40px
   * - small: 32px
   * - xsmall: 24px
   * - micro: 20px
   */
  size?: "large" | "medium" | "small" | "xsmall" | "micro";
}

/** The Avatar component represents a unique user or entity through a custom image, initials or icon.
 *
 * // Default import
 * import Avatar from '@carrier-dpx/air-react-library/Avatar'
 *
 * // Named import
 * import { Avatar } from '@carrier-dpx/air-react-library'
 */

const MuiAvatarStyled = styled(MuiAvatar)({
  "&.MuiAvatar-rounded": {
    borderRadius: styleTokens.borderRadius.large,
  },
});

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ children, sx, size = "medium", ...rest }, ref) => {
    const getSize = () => {
      switch (size) {
        case "large":
          return "48px";
        case "medium":
          return "40px";
        case "small":
          return "32px";
        case "xsmall":
          return "24px";
        case "micro":
          return "20px";
        default:
          return "40px";
      }
    };

    const getFontSize = () => {
      switch (size) {
        case "large":
          return "18px";
        case "medium":
          return "16px";
        case "small":
          return "14px";
        case "xsmall":
          return "12px";
        case "micro":
          return "10px";
        default:
          return "16px";
      }
    };

    const avatarSize = getSize();
    const isLargeVariant = size === "large";

    return (
      <MuiAvatarStyled
        sx={(theme) => {
          const resolvedSx = (getSxStyles(theme, sx) ?? {}) as CSSObject;
          
          return {
            backgroundColor: blueGrey[500],
            cursor: "default",
            fontSize: getFontSize(),
            fontWeight: 600,
            width: avatarSize,
            height: avatarSize,
            ...(isLargeVariant && {
              "& .MuiSvgIcon-root": {
                fontSize: "24px",
              },
            }),
            ...resolvedSx,
          } as CSSObject;
        }}
        {...rest}
        ref={ref}
      >
        {typeof children === "string"
          ? getDisplayStringForAvatar(children)
          : children}
      </MuiAvatarStyled>
    );
  }
);

Avatar.displayName = "Avatar";

export default Avatar;
