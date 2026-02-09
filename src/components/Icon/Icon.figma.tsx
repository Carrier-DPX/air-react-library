/**
 * Figma Code Connect Configuration for Icon Component
 * 
 * This connects Figma's Icon component to the React Icon wrapper component.
 * The Icon wrapper handles fontSize and wraps icon components passed as children.
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=6594-47648
 * 
 * Figma Properties:
 * - fontSize: large (28px), medium (24px), small (20px), xsmall (16px)
 *   Note: Figma enum values are "large", "medium", "small", "xsmall" (without px)
 * - SVG: Instance swap property for swapping icon components
 */

import figma from "@figma/code-connect";
import Icon from "./Icon";

figma.connect(
  Icon,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=6594-47648",
  {
    props: {
      /**
       * FONT SIZE MAPPING
       * Maps Figma's fontSize property to React's fontSize prop
       * 
       * NOTE: If Figma enum values include "px" (e.g., "large: 32px"), 
       * update the left side of the mapping to match exactly what Figma shows.
       * 
       * Common patterns:
       * - "large" → "large" (if enum value is just "large")
       * - "large: 32px" → "large" (if enum value includes px)
       * - "32px" → "large" (if enum value is just the px value)
       */
      fontSize: figma.enum("fontSize", {
        // Map Figma enum values to React fontSize prop values
        // If Figma shows "large: 32px", use the left side as shown in Figma
        "large": "large",
        "medium": "medium", 
        "small": "small",
        "xsmall": "xsmall",
        // Alternative: If Figma enum values include px, try these:
        "large: 32px": "large",
        "medium: 24px": "medium",
        "small: 20px": "small",
        "xsmall: 16px": "xsmall",
      }),

      /**
       * SVG INSTANCE SWAP
       * Maps Figma's "SVG" instance swap property to React children
       * The property name is "SVG" (the layer it swaps is named "placeholder")
       * When users swap the SVG instance in Figma, it maps to the icon component passed as children
       */
      children: figma.instance("SVG"),
    },
    /**
     * EXAMPLE CODE TEMPLATE
     * Shows the Icon wrapper with fontSize and the swapped icon component as children
     * fontSize defaults to "medium" if not provided
     */
    example: ({ fontSize = "medium", children }) => (
      <Icon fontSize={fontSize}>
        {children}
      </Icon>
    ),
  }
);
