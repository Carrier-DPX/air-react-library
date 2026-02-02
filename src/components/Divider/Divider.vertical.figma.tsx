/**
 * Figma Code Connect Configuration for Divider Component (Vertical)
 */

import figma from "@figma/code-connect";
import Divider from "./Divider";

figma.connect(
  Divider,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=15556-68596",
  {
    props: {
      /**
       * VARIANT MAPPING
       */
      variant: figma.enum("variant", {
        full: "full",
        padded: "padded",
      }),

      /**
       * TEXT ALIGN MAPPING
       */
      textAlign: figma.enum("textAlign", {
        center: "center",
        left: "left",
        right: "right",
      }),

      /**
       * TEXT CONTENT
       * When text boolean is true, shows Typography children
       */
      children: figma.boolean("text") ? figma.children("*") : undefined,
    },

    /**
     * CODE EXAMPLE TEMPLATE
     * Vertical divider - sets orientation="vertical"
     */
    example: ({ variant, textAlign, children }) =>
      children ? (
        <Divider
          orientation="vertical"
          variant={variant}
          textAlign={textAlign}
        >
          {children}
        </Divider>
      ) : (
        <Divider orientation="vertical" variant={variant} />
      ),
  }
);
