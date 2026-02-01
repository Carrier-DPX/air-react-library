/**
 * Figma Code Connect Configuration for Button Component
 * 
 * This file creates the bridge between your Figma Button component
 * and your React Button component. It tells Figma Make:
 * 1. Which React component corresponds to which Figma component
 * 2. How Figma properties/variants map to React props
 * 3. How to generate code examples
 */

import figma from "@figma/code-connect";
import Button from "./Button";

/**
 * figma.connect() creates the connection between Figma and React
 * 
 * Parameters:
 * 1. Button - Your React component
 * 2. Figma URL - Points to your specific component in Figma
 * 3. Configuration object - Defines the prop mappings
 */
figma.connect(
  Button,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=20456-152342",
  {
    /**
     * PROPS MAPPING
     * 
     * This section maps Figma properties to React props.
     * 
     * Format options:
     * - figma.enum("PropertyName", { ... }) - for variant/dropdown properties
     * - figma.boolean("PropertyName") - for boolean properties
     * - figma.string("PropertyName") - for text properties
     * - figma.children("LayerName") - for nested content/children
     * - figma.instance("LayerName") - for nested component instances
     */
    props: {
      /**
       * VARIANT MAPPING
       * Maps Figma's "variant" property to React's "variant" prop
       * 
       * Figma: filled, outlined, text
       * React: contained, outlined, text
       * 
       * Note: "filled" in Figma maps to "contained" in Material-UI
       */
      variant: figma.enum("variant", {
        filled: "contained",
        outlined: "outlined",
        text: "text",
      }),

      /**
       * SIZE MAPPING
       * Maps Figma's "size" property to React's "size" prop
       * 
       * Figma size names include pixel values (e.g., "xlarge-56px")
       * React expects just the size name (e.g., "xlarge")
       */
      size: figma.enum("size", {
        "xlarge-56px": "xlarge",
        "large-48px": "large",
        "medium-40px": "medium",
        "small-32px": "small",
        "xsmall-24px": "xsmall",
      }),

      /**
       * COLOR MAPPING
       * Maps Figma's "color" property to React's "color" prop
       * 
       * Note: "base" is a custom color in the Carrier DPX theme palette
       * It's an extension of the standard Material-UI colors and provides
       * the foundation colors for the design system
       */
      color: figma.enum("color", {
        base: "base",
        primary: "primary",
        secondary: "secondary",
        error: "error",
        warning: "warning",
        success: "success",
        info: "info",
      }),

      /**
       * DISABLED STATE
       * Maps Figma's "disabled" boolean property to React's "disabled" prop
       */
      disabled: figma.boolean("disabled"),

      /**
       * BUTTON TEXT/CHILDREN
       * Maps the text content from the "Button Label" layer
       * Uses figma.children() to capture nested text content
       */
      children: figma.children("Button Label"),

      /**
       * START ICON
       * Maps Figma's "startIcon" layer (when visible) to React's startIcon prop
       * 
       * figma.instance() connects to nested component instances in Figma
       * The "startIcon" boolean property controls visibility in Figma
       */
      startIcon: figma.instance("startIcon"),

      /**
       * END ICON
       * Maps Figma's "endIcon" layer (when visible) to React's endIcon prop
       */
      endIcon: figma.instance("endIcon"),
    },

    /**
     * EXAMPLE CODE TEMPLATE
     * 
     * This defines how the component should appear in generated code.
     * The template uses the props mapped above.
     * 
     * When Figma Make generates code, it will substitute the actual
     * values based on the component instance properties.
     * 
     * Note: We're ignoring the "state" and "label" properties because:
     * - "state" (enabled/hover/focus) is a visual state in Figma, not a prop
     * - "label" is just a boolean to show/hide the text layer
     */
    example: ({ variant, color, size, disabled, startIcon, endIcon, children }) => (
      <Button
        variant={variant}
        color={color}
        size={size}
        disabled={disabled}
        startIcon={startIcon}
        endIcon={endIcon}
      >
        {children}
      </Button>
    ),
  }
);
