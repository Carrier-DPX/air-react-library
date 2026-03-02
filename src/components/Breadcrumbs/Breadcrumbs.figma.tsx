/**
 * Figma Code Connect Configuration for Breadcrumbs Component
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=20464-143181
 * 
 * Figma Properties:
 * - color (primary, main)
 * - icon (true, false)
 * - separator (slash, icon)
 * - collapsed (true, false)
 * - mobile (true, false)
 * 
 * Structure:
 * - Breadcrumb 01-06: Multiple Breadcrumb Link instances with numbered layer names
 */

import figma from "@figma/code-connect";
import Breadcrumbs from "./Breadcrumbs";

figma.connect(
  Breadcrumbs,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=20464-143181",
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
       * ICON VISIBILITY
       * Maps Figma's "icon" boolean property
       * Controls visibility of icons in breadcrumbs
       */
      icon: figma.boolean("icon"),

      /**
       * SEPARATOR TYPE
       * Maps Figma's "separator" property to React separator prop
       * Figma: slash, icon → React: "/", icon component
       */
      separator: figma.enum("separator", {
        slash: "/",
        icon: "icon",
      }),

      /**
       * COLLAPSED STATE
       * Maps Figma's "collapsed" boolean property
       * Controls collapsed state of breadcrumbs
       */
      collapsed: figma.boolean("collapsed"),

      /**
       * MOBILE STATE
       * Maps Figma's "mobile" boolean property
       * Controls mobile-specific behavior
       */
      mobile: figma.boolean("mobile"),

      /**
       * BREADCRUMB LINK CHILDREN
       * Maps nested Breadcrumb Link instances from Figma
       * Each "Breadcrumb XX" is an instance of the Breadcrumb Link component
       * We map each one individually using the exact layer names
       */
      breadcrumb01: figma.children("Breadcrumb 01"),
      breadcrumb02: figma.children("Breadcrumb 02"),
      breadcrumb03: figma.children("Breadcrumb 03"),
      breadcrumb04: figma.children("Breadcrumb 04"),
      breadcrumb05: figma.children("Breadcrumb 05"),
      breadcrumb06: figma.children("Breadcrumb 06"),
    },

    /**
     * EXAMPLE CODE TEMPLATE
     * Shows how Breadcrumbs should be used with Breadcrumb Link children
     * Note: separator prop handling may need adjustment based on actual implementation
     */
    example: ({ color, separator, breadcrumb01, breadcrumb02, breadcrumb03, breadcrumb04, breadcrumb05, breadcrumb06 }) => {
      // Determine separator value
      const separatorValue = separator === "icon" ? undefined : separator;
      
      return (
        <Breadcrumbs
          color={color}
          separator={separatorValue}
        >
          {breadcrumb01}
          {breadcrumb02}
          {breadcrumb03}
          {breadcrumb04}
          {breadcrumb05}
          {breadcrumb06}
        </Breadcrumbs>
      );
    },
  }
);
