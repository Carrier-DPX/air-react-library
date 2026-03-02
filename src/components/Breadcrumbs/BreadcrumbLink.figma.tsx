/**
 * Figma Code Connect Configuration for Breadcrumb Link Component
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=20464-143034
 * 
 * Figma Properties:
 * - color (primary, main)
 * - active (true, false)
 * - state (enabled, hover) - visual state, not a prop
 * - disabled (true, false)
 * - Icon (true, false) - boolean hide/show
 * - separator (true, false) - boolean hide/show
 * 
 * Structure:
 * - Icon: Nested Icon component instance (when Icon=true)
 * - Link: Nested Link component instance with text content
 */

import figma from "@figma/code-connect";
import BreadcrumbLink from "./BreadcrumbLink";
import Link from "../Link";
import Icon from "../Icon";

figma.connect(
  BreadcrumbLink,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=20464-143034",
  {
    props: {
      /**
       * COLOR MAPPING
       * Maps Figma's "color" property to React's "color" prop
       * Figma: primary, main → React: primary, base
       */
      color: figma.enum("color", {
        primary: "primary",
        main: "base",
      }),

      /**
       * ACTIVE STATE
       * Maps Figma's "active" boolean to React's "active" prop
       */
      active: figma.boolean("active"),

      /**
       * DISABLED STATE
       * Maps Figma's "disabled" boolean to React's "disabled" prop
       */
      disabled: figma.boolean("disabled"),

      /**
       * ICON VISIBILITY
       * Maps Figma's "Icon" boolean - controls visibility of nested Icon component
       */
      showIcon: figma.boolean("Icon"),

      /**
       * SEPARATOR VISIBILITY
       * Maps Figma's "separator" boolean - controls visibility of separator
       * Note: Separator is typically handled by parent Breadcrumbs component
       */
      showSeparator: figma.boolean("separator"),

      /**
       * ICON NESTED PROPERTIES
       * Access Icon's fontSize and SVG through nested properties
       * The Icon component is nested within BreadcrumbLink when Icon is visible
       */
      icon: figma.nestedProps("Icon", {
        fontSize: figma.enum("fontSize", {
          large: "large",
          medium: "medium",
          small: "small",
          xsmall: "xsmall",
        }),
        children: figma.instance("SVG"),
      }),

      /**
       * LINK COMPONENT INSTANCE
       * Maps nested Link component instance
       * The Link component is nested within BreadcrumbLink
       * Using figma.instance() to get the Link component instance
       */
      link: figma.instance("Link"),
    },

    /**
     * EXAMPLE CODE TEMPLATE
     * Shows how BreadcrumbLink should be used with optional icon and link
     */
    example: ({ color, active, disabled, showIcon, icon, link }) => {
      // Handle case with icon
      if (showIcon && icon && icon.fontSize && icon.children && link) {
        return (
          <BreadcrumbLink
            color={color}
            active={active}
            disabled={disabled}
            icon={
              <Icon fontSize={icon.fontSize}>
                {icon.children}
              </Icon>
            }
            href="#"
          >
            {link}
          </BreadcrumbLink>
        );
      }

      // Handle case without icon
      if (link) {
        return (
          <BreadcrumbLink
            color={color}
            active={active}
            disabled={disabled}
            href="#"
          >
            {link}
          </BreadcrumbLink>
        );
      }

      // Fallback
      return (
        <BreadcrumbLink
          color={color}
          active={active}
          disabled={disabled}
          href="#"
        />
      );
    },
  }
);
