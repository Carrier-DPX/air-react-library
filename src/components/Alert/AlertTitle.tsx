import { forwardRef } from "react";

import MuiAlertTitle, {
  AlertTitleProps as MuiAlertTitleProps,
} from "@mui/material/AlertTitle";
import { styled } from "@mui/material/styles";

export interface AlertTitleProps extends MuiAlertTitleProps {
  // this may be updated later if Design needs any props to be removed
}

/** AlertTitle
 * An AlertTitle is used to add a title to the Alert Component. It is used as a sub-component/child along with the Alert Component.
 *
 * // Default import
 * import AlertTitle from '@carrier-io/air-react/Alert'
 *
 * // Named import
 * import { AlertTitle } from '@carrier-io/air-react'
 */

const MuiAlertTitleStyled = styled(MuiAlertTitle)(({ theme }) => ({
  margin: 0,
  ...theme.typography.body1Semibold,
}));

const AlertTitle = forwardRef<HTMLDivElement, AlertTitleProps>((props, ref) => {
  return <MuiAlertTitleStyled {...props} ref={ref} />;
});

AlertTitle.displayName = "AlertTitle";

export default AlertTitle;
export type { AlertTitleProps };
