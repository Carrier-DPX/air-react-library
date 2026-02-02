/**
 * Figma Code Connect Configuration for Copyright Component
 */

import figma from "@figma/code-connect";
import Copyright from "./Copyright";

figma.connect(
  Copyright,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=37592-67050",
  {
    /**
     * CODE EXAMPLE TEMPLATE
     * Copyright automatically adds © symbol and current year
     * Since Figma component has no props, we provide a default example
     */
    example: () => <Copyright text="Carrier" />,
  }
);
