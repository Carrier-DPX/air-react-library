/**
 * Figma Code Connect Configuration for AvatarGroup Component
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=15889-77636
 * 
 * Figma Properties:
 * - spacing (small, medium)
 * - size (large: 48px, medium: 40px, small: 32px, xsmall: 24px)
 */

import figma from "@figma/code-connect";
import AvatarGroup from "./AvatarGroup";
import Avatar from "./Avatar";

figma.connect(
  AvatarGroup,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=15889-77636",
  {
    props: {
      /**
       * SPACING MAPPING
       * Maps Figma's "spacing" property to React's "spacing" prop
       * Figma: small, medium
       */
      spacing: figma.enum("spacing", {
        small: "small",
        medium: "medium",
      }),

      /**
       * SIZE MAPPING
       * Maps Figma's "size" property - size is applied to Avatar children, not the group
       * Figma: large (48px), medium (40px), small (32px), xsmall (24px)
       */
      size: figma.enum("size", {
        large: "large",
        medium: "medium",
        small: "small",
        xsmall: "xsmall",
      }),

      /**
       * CHILDREN
       * Maps Avatar instances within the AvatarGroup
       */
      children: figma.children("Avatar"),
    },

    /**
     * EXAMPLE CODE TEMPLATE
     * Shows how AvatarGroup should be used with Avatar children
     * Note: size prop is passed to individual Avatar components, not the group
     */
    example: ({ spacing, size, children }) => (
      <AvatarGroup spacing={spacing}>
        {children}
      </AvatarGroup>
    ),
  }
);
