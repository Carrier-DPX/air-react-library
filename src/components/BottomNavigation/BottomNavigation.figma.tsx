/**
 * Figma Code Connect Configuration for BottomNavigation Component
 * 
 * This connects Figma's BottomNavigation component to the React BottomNavigation component.
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=6572-50307
 * 
 * Figma Properties:
 * - showLabels (on, selected-only, off) → showLabel prop
 */

import figma from "@figma/code-connect";
import BottomNavigation from "./BottomNavigation";
import BottomNavigationAction from "./BottomNavigationAction";

figma.connect(
  BottomNavigation,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=6572-50307",
  {
    props: {
      /**
       * SHOW LABELS
       * Maps Figma's "showLabels" property to React's "showLabel" prop
       * Figma: on, selected-only, off
       * React: "On", "Selected Only", "Off"
       */
      showLabel: figma.enum("showLabels", {
        on: "On",
        "selected-only": "Selected Only",
        off: "Off",
      }),

      /**
       * CHILDREN
       * Maps BottomNavigationAction instances as children
       * Use figma.instance() if BottomNavigationAction is an instance swap property
       */
      children: figma.instance("BottomNavigationAction"),
    },
    /**
     * EXAMPLE CODE TEMPLATE
     * Shows how BottomNavigation should be used with BottomNavigationAction children
     */
    example: ({ showLabel, children }) => (
      <BottomNavigation
        showLabel={showLabel}
        value={0}
        onChange={() => {}}
      >
        {children}
      </BottomNavigation>
    ),
  }
);
