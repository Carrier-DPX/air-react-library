/**
 * Figma Code Connect Configuration for TextField Component
 * 
 * Maps Figma TextField component to React TextField component
 */

import figma from "@figma/code-connect";
import TextField from "./TextField";

figma.connect(
  TextField,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=18128-89412",
  {
    props: {
      /**
       * SIZE MAPPING
       * Maps Figma size format (with px values) to React size prop
       */
      size: figma.enum("size", {
        "xlarge-56px": "xlarge",
        "large-48px": "large",
        "medium-40px": "medium",
        "small-32px": "small",
      }),

      /**
       * COLOR MAPPING
       * Maps Figma color variants to React color prop
       */
      color: figma.enum("color", {
        primary: "primary",
        error: "error",
        success: "success",
        warning: "warning",
        info: "info",
      }),

      /**
       * ERROR STATE
       * Maps Figma error boolean to React error prop
       */
      error: figma.boolean("error"),

      /**
       * DISABLED STATE
       * Maps Figma disabled boolean to React disabled prop
       */
      disabled: figma.boolean("disabled"),

      /**
       * SHOW BORDER
       * Maps Figma showBorder boolean to React showBorder prop
       */
      showBorder: figma.boolean("showBorder"),
    },

    /**
     * CODE EXAMPLE TEMPLATE
     * 
     * Shows how TextField should be used in React code
     * Note: label, placeholder, value, onChange etc. are runtime props
     * that aren't configured in Figma's static component
     */
    example: ({ size, color, error, disabled, showBorder }) => (
      <TextField
        size={size}
        color={color}
        error={error}
        disabled={disabled}
        showBorder={showBorder}
        label="Email"
        placeholder="Enter your email"
      />
    ),
  }
);
