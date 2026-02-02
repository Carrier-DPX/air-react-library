import { forwardRef } from "react";

import MuiDivider, {
  DividerProps as MuiDividerProps,
} from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

import { styleTokens } from "../theme/constants/styleTokens";

export interface DividerProps extends Omit<MuiDividerProps, "light"> {}

declare module "@mui/material/Divider" {
  interface DividerPropsVariantOverrides {
    padded: true;
    middle: false;
    full: true;
    fullWidth: false;
    inset: false;
  }
}

/** The Divider component is a thin line that groups content in lists and layouts.
 *
 * // Default import
 * import Divider from '@carrier-io/air-react/Divider'
 *
 * // Named import
 * import { Divider } from '@carrier-io/air-react'
 */

const MuiDividerStyled = styled(MuiDivider)(({ theme }) => ({
  "&.MuiDivider-padded": {
    marginLeft: styleTokens.margin.large,
    marginRight: styleTokens.margin.large,
    paddingTop: "8px",
    paddingBottom: "8px",
  },
  "& .MuiDivider-wrapper": {
    paddingLeft: styleTokens.padding.xsmall,
    paddingRight: styleTokens.padding.xsmall,
    color: theme.palette.base?.text.primary,
  },
  "&.MuiDivider-root": {
    borderColor: theme.palette.base?.divider,
    "&:before, &:after": {
      borderTop: `thin solid ${theme.palette.base?.divider}`,
    },
  },
}));

const Divider = forwardRef<HTMLHRElement, DividerProps>((props, ref) => {
  return <MuiDividerStyled {...props} ref={ref} />;
});

Divider.displayName = "Divider";

export default Divider;
