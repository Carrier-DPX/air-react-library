import { forwardRef } from "react";

import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import { AllSystemCSSProperties, ResponsiveStyleValue } from "@mui/system";
import { useTheme } from "@mui/material";
import { TypographyProps } from "@mui/material/Typography";

// List of variants we want to exclude
type ExcludedVariants =
  | "overline"
  | "avatarLetter"
  | "buttonLarge"
  | "buttonMedium"
  | "buttonSmall"
  | "caption"
  | "inputLabel"
  | "inputText1"
  | "inputText2"
  | "helperText"
  | "alertTitle"
  | "tableHeader1"
  | "tableHeader2"
  | "badge"
  | "chip"
  | "tooltip";

// Get all valid variant options from MUI's Typography component
type MUIValidVariants = Exclude<TypographyProps["variant"], ExcludedVariants>;

export interface LinkProps extends Omit<MuiLinkProps, "variant"> {
  /**
   * Specifies how to capitalize an element's text
   */
  textTransform?: ResponsiveStyleValue<AllSystemCSSProperties["textTransform"]>;
  /**
   * The target attribute specifies where to open the linked document:
   */
  target?: string;
  /**
   * Applies the theme typography styles.
   */
  variant?: MUIValidVariants;
}

/** The Link component allows you to easily customize anchor elements with your theme colors and typography styles.
 *
 * `import Link from '@carrier-io/air-react/Link'`
 */

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ color, variant = "body2", ...rest }, ref) => {
    const theme = useTheme();
    const resolvedColor = color ?? theme.palette.primary.main;

    return (
      <MuiLink
        {...rest}
        color={resolvedColor}
        ref={ref}
        variant={variant}
        sx={{ cursor: "pointer", textUnderlineOffset: "4px" }}
      />
    );
  }
);

Link.displayName = "Link";

export default Link;
