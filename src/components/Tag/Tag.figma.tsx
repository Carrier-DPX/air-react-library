/**
 * Figma Code Connect Configuration for Tag Component
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=20692-169354
 * 
 * Figma Properties:
 * - size (xsmall-24px, micro-small-20px)
 * - color (purple, primary, info, cyan, success, warning, orange, error, pink)
 * - uppercase (true, false)
 * - disabled (true, false)
 * - startIcon (true, false) - boolean hide/show
 * - ✏️ Text - text property with layer name "Label"
 */

import figma from "@figma/code-connect";
import Tag from "./Tag";
import Icon from "../Icon";

figma.connect(
  Tag,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=20692-169354",
  {
    props: {
      /**
       * SIZE MAPPING
       * Maps Figma's "size" property to React's "size" prop
       * Figma: xsmall-24px, micro-small-20px
       */
      size: figma.enum("size", {
        "xsmall-24px": "xsmall",
        "micro-small-20px": "micro",
        xsmall: "xsmall",
        micro: "micro",
      }),

      /**
       * COLOR MAPPING
       * Maps Figma's "color" property to React's "color" prop
       * Note: Some Figma colors may map to similar React colors
       * purple -> primary, cyan -> info, orange -> warning, pink -> error
       */
      color: figma.enum("color", {
        base: "base",
        purple: "primary",
        primary: "primary",
        info: "info",
        cyan: "info",
        success: "success",
        warning: "warning",
        orange: "warning",
        error: "error",
        pink: "error",
      }),

      /**
       * UPPERCASE MAPPING
       * Maps Figma's "uppercase" boolean to React's "uppercase" prop
       */
      uppercase: figma.boolean("uppercase"),

      /**
       * DISABLED STATE
       * Maps Figma's "disabled" boolean to React's "disabled" prop
       */
      disabled: figma.boolean("disabled"),

      /**
       * START ICON VISIBILITY
       * Maps Figma's "startIcon" boolean - controls visibility of icon
       */
      showStartIcon: figma.boolean("startIcon"),

      /**
       * START ICON NESTED PROPERTIES
       * Access Icon's fontSize and SVG through nested properties
       * The Icon component is nested within Tag when startIcon is visible
       */
      startIcon: figma.nestedProps("startIcon", {
        fontSize: figma.enum("fontSize", {
          large: "large",
          medium: "medium",
          small: "small",
          xsmall: "xsmall",
        }),
        children: figma.instance("SVG"),
      }),

      /**
       * TEXT CONTENT
       * Maps text property "✏️ Text" from layer "Label"
       */
      label: figma.string("✏️ Text"),
    },

    /**
     * EXAMPLE CODE TEMPLATE
     * Shows how Tag should be used with optional startIcon
     */
    example: ({ size, color, uppercase, disabled, showStartIcon, startIcon, label }) => {
      // Handle case with startIcon
      if (showStartIcon && startIcon && startIcon.fontSize && startIcon.children) {
        return (
          <Tag
            size={size}
            color={color}
            uppercase={uppercase}
            disabled={disabled}
            startIcon={
              <Icon fontSize={startIcon.fontSize}>
                {startIcon.children}
              </Icon>
            }
            label={label}
          />
        );
      }

      // Handle case without startIcon
      return (
        <Tag
          size={size}
          color={color}
          uppercase={uppercase}
          disabled={disabled}
          label={label}
        />
      );
    },
  }
);
