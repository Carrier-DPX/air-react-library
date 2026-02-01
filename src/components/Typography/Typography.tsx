import { forwardRef } from "react";
import MuiTypography from "@mui/material/Typography";
import { TypographyProps } from "./types";

/** The Typography component provides access to available font variations within the FDS theme and is useful for creating content hierarchy and instance swapping.
 *
 * `import Typography from '@carrier-io/air-react/Typography'`
 */
const Typography = forwardRef<HTMLSpanElement, TypographyProps>(
  (props, ref) => {
    return <MuiTypography {...props} ref={ref} />;
  }
);

Typography.displayName = "Typography";

export default Typography;
