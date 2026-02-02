/**
 * Figma Code Connect Configuration for Copyright Component
 */

import figma from "@figma/code-connect";
import Copyright from "./Copyright";

figma.connect(
  Copyright,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=37592-67050",
  {
    props: {
      /**
       * TEXT CONTENT
       * Copyright component shows © {year} {text}
       * The year is automatically generated, so we just need the text
       */
      text: figma.string("*"),
    },

    /**
     * CODE EXAMPLE TEMPLATE
     * Copyright automatically adds © symbol and current year
     */
    example: ({ text }) => <Copyright text={text || "Carrier"} />,
  }
);
