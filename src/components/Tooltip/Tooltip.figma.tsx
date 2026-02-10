/**
 * Figma Code Connect Configuration for Tooltip Component
 * 
 * This connects Figma's Tooltip component to the React Tooltip component.
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=6590-48770
 * 
 * Figma Properties:
 * - ✏️ Label (text property) → title prop
 * - color (white, black) → color prop
 * - placement (top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end) → placement prop
 * - arrow (true, false) → arrow prop
 */

import figma from "@figma/code-connect";
import Tooltip from "./Tooltip";

figma.connect(
  Tooltip,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=6590-48770",
  {
    props: {
      /**
       * TOOLTIP TEXT/TITLE
       * Maps text property "✏️ label" from nested TooltipContent component
       * The label is nested within TooltipContent component
       * Similar to how Icon properties are accessed in BottomNavigationAction
       */
      title: figma.nestedProps("TooltipContent", {
        label: figma.string("✏️ label"),
      }),

      /**
       * COLOR
       * Maps Figma's "color" property to React's "color" prop
       * Figma: white, black
       * React: "white", "black"
       */
      color: figma.enum("color", {
        white: "white",
        black: "black",
      }),

      /**
       * PLACEMENT
       * Maps Figma's "placement" property to React's "placement" prop
       * Controls where the tooltip appears relative to the target element
       */
      placement: figma.enum("placement", {
        top: "top",
        "top-start": "top-start",
        "top-end": "top-end",
        bottom: "bottom",
        "bottom-start": "bottom-start",
        "bottom-end": "bottom-end",
        left: "left",
        "left-start": "left-start",
        "left-end": "left-end",
        right: "right",
        "right-start": "right-start",
        "right-end": "right-end",
      }),

      /**
       * ARROW
       * Maps Figma's "arrow" boolean to React's "arrow" prop
       * Controls whether the tooltip displays an arrow pointing to the target
       */
      arrow: figma.boolean("arrow"),
    },
    /**
     * EXAMPLE CODE TEMPLATE
     * Shows how Tooltip should be used
     * Note: Tooltip wraps children - in actual usage, wrap the target element
     */
    example: ({ title, color, placement, arrow }) => (
      <Tooltip title={title.label} color={color} placement={placement} arrow={arrow}>
        <span>Hover me</span>
      </Tooltip>
    ),
  }
);
