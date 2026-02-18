/**
 * Figma Code Connect Configuration for AccentIndicator Component (Vertical)
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=37586-2779
 * 
 * Figma Properties:
 * - type (primary, secondary, error, warning, success, info)
 * - alignment (left, right)
 */

import figma from "@figma/code-connect";
import AccentIndicator from "./AccentIndicator";

figma.connect(
  AccentIndicator,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=37586-2779",
  {
    props: {
      /**
       * TYPE MAPPING
       * Maps Figma's "type" property to React's "severity" prop
       * Controls the color of the AccentIndicator
       */
      severity: figma.enum("type", {
        primary: "primary",
        secondary: "secondary",
        error: "error",
        warning: "warning",
        success: "success",
        info: "info",
      }),

      /**
       * ALIGNMENT MAPPING
       * Maps Figma's "alignment" property to React's "alignment" prop
       * Vertical orientation supports: left, right
       */
      alignment: figma.enum("alignment", {
        left: "left",
        right: "right",
      }),
    },

    /**
     * EXAMPLE CODE TEMPLATE
     * Vertical AccentIndicator - sets orientation="vertical"
     */
    example: ({ severity, alignment }) => (
      <AccentIndicator
        severity={severity}
        orientation="vertical"
        alignment={alignment}
      />
    ),
  }
);
