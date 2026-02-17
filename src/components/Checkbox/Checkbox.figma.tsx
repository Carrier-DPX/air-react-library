/**
 * Figma Code Connect Configuration for Checkbox Component
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=6543-43052
 * 
 * Figma Properties:
 * - size (medium-40px, small-32px)
 * - checked (true, false)
 * - indeterminate (true, false)
 * - disabled (true, false)
 * - color (primary, secondary, base, error, warning, success, info)
 * - state (enabled, hover, focus) - visual state, not a prop
 * - labelPosition (end, start, top, bottom)
 * - showLabel (true, false)
 * - ✏️ Text (text label with layer name "Label")
 */

import figma from "@figma/code-connect";
import Checkbox from "./Checkbox";
import { FormControlLabel } from "@mui/material";

figma.connect(
  Checkbox,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=6543-43052",
  {
    props: {
      /**
       * SIZE MAPPING
       * Maps Figma's "size" property to React's "size" prop
       * Figma: medium (40px), small (32px)
       */
      size: figma.enum("size", {
        "medium-40px": "medium",
        "small-32px": "small",
        // Handle cases where Figma might show just the size name
        medium: "medium",
        small: "small",
      }),

      /**
       * CHECKED STATE
       * Maps Figma's "checked" boolean to React's "checked" prop
       */
      checked: figma.boolean("checked"),

      /**
       * INDETERMINATE STATE
       * Maps Figma's "indeterminate" boolean to React's "indeterminate" prop
       */
      indeterminate: figma.boolean("indeterminate"),

      /**
       * DISABLED STATE
       * Maps Figma's "disabled" boolean to React's "disabled" prop
       */
      disabled: figma.boolean("disabled"),

      /**
       * COLOR MAPPING
       * Maps Figma's "color" property to React's "color" prop
       */
      color: figma.enum("color", {
        primary: "primary",
        secondary: "secondary",
        base: "base",
        error: "error",
        warning: "warning",
        success: "success",
        info: "info",
      }),

      /**
       * LABEL POSITION
       * Maps Figma's "labelPosition" property
       * Used with FormControlLabel to position the label
       */
      labelPosition: figma.enum("labelPosition", {
        end: "end",
        start: "start",
        top: "top",
        bottom: "bottom",
      }),

      /**
       * LABEL VISIBILITY
       * Maps Figma's "showLabel" boolean property
       * When true, shows the label; when false, hides it
       */
      showLabel: figma.boolean("showLabel"),

      /**
       * LABEL TEXT CONTENT
       * Maps text property "✏️ Text" from the "Label" layer
       * The text property must be surfaced from the "Label" layer
       */
      label: figma.string("✏️ Text"),
    },

    /**
     * EXAMPLE CODE TEMPLATE
     * Shows how Checkbox should be used, optionally with FormControlLabel for labels
     */
    example: ({ size, checked, indeterminate, disabled, color, labelPosition, showLabel, label }) => {
      const checkbox = (
        <Checkbox
          size={size}
          checked={checked}
          indeterminate={indeterminate}
          disabled={disabled}
          color={color}
        />
      );

      // If label should be shown, wrap with FormControlLabel
      if (showLabel && label) {
        const placement = labelPosition ? labelPosition : "end";
        return (
          <FormControlLabel
            control={checkbox}
            label={label}
            labelPlacement={placement}
          />
        );
      }

      return checkbox;
    },
  }
);
