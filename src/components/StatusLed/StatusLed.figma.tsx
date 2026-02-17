/**
 * Figma Code Connect Configuration for StatusLed Component
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=37599-424674
 * 
 * Figma Properties:
 * - severity (error, warning, success, info, default, static)
 * - size (xsmall: 24px, micro: 20px)
 * - labelPosition (start, end)
 * - label (true, false) - controls visibility of nested "Label" Typography component
 * 
 * Notes:
 * - labelPosition changes where the label is placed, either before or after the StatusLED
 * - The "label" boolean prop hides/shows the nested "Label" component which is an instance of the Typography component
 * - Size can be customized in code for any size, but design only supports two sizes
 * - Size mapping: xsmall (24px) → size 12, micro (20px) → size 10 (since circleSize = size * 2)
 */

import figma from "@figma/code-connect";
import StatusLed from "./StatusLed";

figma.connect(
  StatusLed,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=37599-424674",
  {
    props: {
      /**
       * SEVERITY MAPPING
       * Maps Figma's "severity" property to React's "severity" prop
       * Controls the color of the StatusLED
       */
      severity: figma.enum("severity", {
        error: "error",
        warning: "warning",
        success: "success",
        info: "info",
        default: "default",
        static: "static",
      }),

      /**
       * SIZE MAPPING
       * Maps Figma's "size" property to React's "size" prop
       * Figma: xsmall (24px), micro (20px)
       * React: size is the inner circle size in pixels
       * - xsmall (24px total) → size 12 (12 * 2 = 24)
       * - micro (20px total) → size 10 (10 * 2 = 20)
       */
      size: figma.enum("size", {
        "xsmall: 24px": 12,
        "micro: 20px": 10,
        // Handle cases where Figma might show just the size name
        xsmall: 12,
        micro: 10,
      }),

      /**
       * LABEL POSITION MAPPING
       * Maps Figma's "labelPosition" property to React's "labelPosition" prop
       * Controls where the label is placed relative to the StatusLED
       */
      labelPosition: figma.enum("labelPosition", {
        start: "start",
        end: "end",
      }),

      /**
       * LABEL VISIBILITY
       * Maps Figma's "label" boolean property
       * When true, shows the nested "Label" Typography component
       * When false, hides the label
       */
      showLabel: figma.boolean("label"),

      /**
       * LABEL TEXT CONTENT
       * Maps text property "✏️ Label" from the nested "Label" Typography component
       * The Label is an instance of the Typography component
       * The text property must be surfaced from the "Label" layer
       * Only used when showLabel is true
       */
      label: figma.string("✏️ Label"),
    },

    /**
     * EXAMPLE CODE TEMPLATE
     * Shows how StatusLed should be used with optional label
     */
    example: ({ severity, size, labelPosition, showLabel, label }) => (
      <StatusLed
        severity={severity}
        size={size}
        labelPosition={labelPosition}
        label={showLabel ? label : undefined}
      />
    ),
  }
);
