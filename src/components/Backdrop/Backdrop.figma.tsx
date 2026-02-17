/**
 * Figma Code Connect Configuration for Backdrop Component
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=6643-52207
 * 
 * Note: This component has no props in design - it's a simple backdrop overlay component
 */

import figma from "@figma/code-connect";
import Backdrop from "./Backdrop";

figma.connect(
  Backdrop,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=6643-52207",
  {
    props: {
      // No props in design - Backdrop is used as-is
    },

    /**
     * EXAMPLE CODE TEMPLATE
     * Shows how Backdrop should be used
     */
    example: () => (
      <Backdrop open={true}>
        {/* Content goes here */}
      </Backdrop>
    ),
  }
);
