/**
 * Figma Code Connect Configuration for Avatar Component
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=6587-47403
 * 
 * Figma Properties:
 * - variant (circle, rounded)
 * - size (large: 48px, medium: 40px, small: 32px, xsmall: 24px, micro: 20px)
 * - type (image, letter, icon)
 * - ✏️ Letter (text property) - layer name "Letter"
 */

import figma from "@figma/code-connect";
import Avatar from "./Avatar";
import Icon from "../Icon";

figma.connect(
  Avatar,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=6587-47403",
  {
    props: {
      /**
       * VARIANT MAPPING
       * Maps Figma's "variant" property to React's "variant" prop
       * Figma: circle → React: "circular"
       * Figma: rounded → React: "rounded"
       */
      variant: figma.enum("variant", {
        circle: "circular",
        rounded: "rounded",
      }),

      /**
       * SIZE MAPPING
       * Maps Figma's "size" property to React's "size" prop
       * Figma: large (48px), medium (40px), small (32px), xsmall (24px), micro (20px)
       */
      size: figma.enum("size", {
        large: "large",
        medium: "medium",
        small: "small",
        xsmall: "xsmall",
        micro: "micro",
      }),

      /**
       * TYPE MAPPING
       * Maps Figma's "type" property to determine how Avatar is rendered
       * - image: uses src prop
       * - letter: uses children with text from "✏️ Letter"
       * - icon: uses children with Icon component
       */
      type: figma.enum("type", {
        image: "image",
        letter: "letter",
        icon: "icon",
      }),

      /**
       * LETTER TEXT
       * Maps text property "✏️ Letter" from layer "Letter"
       * Used when type="letter"
       */
      letter: figma.string("✏️ Letter"),

      /**
       * ICON NESTED PROPERTIES
       * Access Icon's fontSize and SVG through nested properties
       * Used when type="icon"
       */
      icon: figma.nestedProps("Icon", {
        fontSize: figma.enum("fontSize", {
          large: "large",
          medium: "medium",
          small: "small",
          xsmall: "xsmall",
        }),
        children: figma.instance("SVG"),
      }),
    },

    /**
     * EXAMPLE CODE TEMPLATE
     * Shows how Avatar should be used based on type
     */
    example: ({ variant, size, type, letter, icon }) => {
      if (type === "icon") {
        return (
          <Avatar variant={variant} size={size}>
            <Icon fontSize={icon.fontSize}>
              {icon.children}
            </Icon>
          </Avatar>
        );
      }
      
      // Default to letter type (or image if src is provided via sx)
      return (
        <Avatar variant={variant} size={size}>
          {letter}
        </Avatar>
      );
    },
  }
);
