/**
 * Figma Code Connect Configuration for IconButton Component
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=20767-170691
 * 
 * Figma Properties:
 * - size (large-48px, medium-40px, small-32px, xsmall-24px)
 * - color (base, primary, secondary, error, warning, info, success)
 * - state (enabled, hover, focus) - visual state, not a prop
 * - disabled (true, false)
 * - Icon component is nested within IconButton
 */

import figma from "@figma/code-connect";
import IconButton from "./IconButton";
import Icon from "../Icon";

figma.connect(
  IconButton,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=20767-170691",
  {
    props: {
      /**
       * SIZE MAPPING
       * Maps Figma's "size" property to React's "size" prop
       * Figma: large (48px), medium (40px), small (32px), xsmall (24px)
       */
      size: figma.enum("size", {
        large: "large",
        medium: "medium",
        small: "small",
        xsmall: "xsmall",
      }),

      /**
       * COLOR MAPPING
       * Maps Figma's "color" property to React's "color" prop
       */
      color: figma.enum("color", {
        base: "base",
        primary: "primary",
        secondary: "secondary",
        error: "error",
        warning: "warning",
        info: "info",
        success: "success",
      }),

      /**
       * DISABLED MAPPING
       * Maps Figma's "disabled" boolean property to React's "disabled" prop
       */
      disabled: figma.boolean("disabled"),

      /**
       * ICON NESTED PROPERTIES
       * Access Icon's fontSize and SVG through nested properties
       * The Icon component is nested within IconButton
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
    },

    /**
     * EXAMPLE CODE TEMPLATE
     * Shows how IconButton should be used with nested Icon component
     */
    example: ({ size, color, disabled, icon }) => (
      <IconButton
        size={size}
        color={color}
        disabled={disabled}
      >
        <Icon fontSize={icon.fontSize}>
          {icon.children}
        </Icon>
      </IconButton>
    ),
  }
);
