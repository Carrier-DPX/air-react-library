/**
 * Figma Code Connect Configuration for Link Component
 */

import figma from "@figma/code-connect";
import Link from "./Link";

figma.connect(
  Link,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=6574-50682",
  {
    props: {
      /**
       * VARIANT MAPPING
       * Same variants as Typography component
       */
      variant: figma.enum("variant", {
        body1: "body1",
        "body1 semibold": "body1Semibold",
        "body1 bold": "body1Bold",
        body2: "body2",
        "body2 semibold": "body2Semibold",
        "body2 bold": "body2Bold",
        body3: "body3",
        "body3 semibold": "body3Semibold",
        "body3 bold": "body3Bold",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        caps1: "caps1",
        "caps1 bold": "caps1Bold",
        caps2: "caps2",
        "caps2 bold": "caps2Bold",
        caps3: "caps3",
        "caps3 bold": "caps3Bold",
        caps4: "caps4",
        "caps4 bold": "caps4Bold",
      }),

      /**
       * UNDERLINE MAPPING
       * Maps Figma underline style to React underline prop
       */
      underline: figma.enum("underline", {
        always: "always",
        hover: "hover",
        none: "none",
      }),

      /**
       * TEXT CONTENT
       * Maps text property "✏️ Text" from Link component
       * The text property must be surfaced from the "Label" layer
       * Similar to Button and BottomNavigationAction which use surfaced text properties
       */
      children: figma.string("✏️ Text"),
    },

    /**
     * CODE EXAMPLE TEMPLATE
     * Note: href is a runtime prop, not configured in static Figma component
     */
    example: ({ variant, underline, children }) => (
      <Link variant={variant} underline={underline} href="#">
        {children}
      </Link>
    ),
  }
);
