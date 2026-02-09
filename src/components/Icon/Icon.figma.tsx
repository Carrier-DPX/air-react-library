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
       * Note: Figma uses "xmall" but React expects "xsmall" (corrected in mapping)
       */
      fontSize: figma.enum("fontSize", {
        large: "large",      // 28px
        medium: "medium",    // 24px
        small: "small",      // 20px
        xmall: "xsmall",     // 16px (Figma typo: "xmall" → React "xsmall")
      }),

      /**
       * SVG INSTANCE SWAP
       * Maps Figma's SVG instance swap property to React children
       * When users swap the SVG instance in Figma, it maps to the icon component passed as children
       */
      children: figma.instance("SVG"),
    },
    /**
     * EXAMPLE CODE TEMPLATE
     * Shows the Icon wrapper with fontSize and the swapped icon component as children
     */
    example: ({ fontSize, children }) => (
      <Icon fontSize={fontSize}>
        {children}
      </Icon>
    ),
  }
);
