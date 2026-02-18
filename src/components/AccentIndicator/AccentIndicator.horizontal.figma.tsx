/**
 * Figma Code Connect Configuration for AccentIndicator Component (Horizontal)
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=37586-2804
 * 
 * Figma Properties:
 * - type (primary, secondary, error, warning, success, info)
 * - alignment (top, bottom)
 */

import figma from "@figma/code-connect";
import AccentIndicator from "./AccentIndicator";

figma.connect(
  AccentIndicator,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=37586-2804",
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
       * Horizontal orientation supports: top, bottom
       */
      alignment: figma.enum("alignment", {
        top: "top",
        bottom: "bottom",
      }),
    },

    /**
     * EXAMPLE CODE TEMPLATE
     * Horizontal AccentIndicator - sets orientation="horizontal"
     */
    example: ({ severity, alignment }) => (
      <AccentIndicator
        severity={severity}
        orientation="horizontal"
        alignment={alignment}
      />
    ),
  }
);
