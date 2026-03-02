import { forwardRef } from "react";
import Link from "../Link";
import Icon from "../Icon";
import { styled } from "@mui/material/styles";
import { Theme } from "@mui/material";

export interface BreadcrumbLinkProps {
  /**
   * The color of the breadcrumb link
   */
  color?: "primary" | "base";
  /**
   * Whether the breadcrumb link is active
   */
  active?: boolean;
  /**
   * Whether the breadcrumb link is disabled
   */
  disabled?: boolean;
  /**
   * Icon element to display before the link text
   */
  icon?: React.ReactElement;
  /**
   * Link content (text)
   */
  children?: React.ReactNode;
  /**
   * href for the link
   */
  href?: string;
  /**
   * onClick handler
   */
  onClick?: () => void;
}

const StyledLink = styled(Link)<{ active?: boolean; disabled?: boolean }>(
  ({ theme, active, disabled }: { theme: Theme; active?: boolean; disabled?: boolean }) => ({
    ...(active && {
      color: theme.palette.base?.text.primary,
      fontWeight: 600,
    }),
    ...(disabled && {
      color: theme.palette.base?.text.disabled,
      cursor: "not-allowed",
      pointerEvents: "none",
    }),
  })
);

/** BreadcrumbLink component used within Breadcrumbs
 *
 * `import BreadcrumbLink from '@carrier-io/air-react/Breadcrumbs/BreadcrumbLink'`
 */

const BreadcrumbLink = forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ color, active, disabled, icon, children, href, onClick, ...rest }, ref) => {
    // If children is a Link component instance, extract its content
    const linkContent = children;
    
    return (
      <StyledLink
        ref={ref}
        href={href}
        onClick={onClick}
        active={active}
        disabled={disabled}
        color={color === "base" ? undefined : color}
        {...rest}
      >
        {icon}
        {linkContent}
      </StyledLink>
    );
  }
);

BreadcrumbLink.displayName = "BreadcrumbLink";

export default BreadcrumbLink;
export type { BreadcrumbLinkProps };
