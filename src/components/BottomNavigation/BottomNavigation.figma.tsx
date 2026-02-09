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
// Import BottomNavigationAction so Figma Code Connect can resolve component instances
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
       * Maps nested BottomNavigationAction instances from Figma
       * Each "Nav Item X" is an instance of the BottomNavigationAction component
       * We map each one individually using the exact layer names, then combine them
       */
      navItem1: figma.children("Nav Item 1"),
      navItem2: figma.children("Nav Item 2"),
      navItem3: figma.children("Nav Item 3"),
      navItem4: figma.children("Nav Item 4"),
      navItem5: figma.children("Nav Item 5"),
    },
    /**
     * EXAMPLE CODE TEMPLATE
     * Shows how BottomNavigation should be used with BottomNavigationAction children
     */
    example: ({ showLabel, navItem1, navItem2, navItem3, navItem4, navItem5 }) => (
      <BottomNavigation
        showLabel={showLabel}
        value={0}
        onChange={() => {}}
      >
        {navItem1}
        {navItem2}
        {navItem3}
        {navItem4}
        {navItem5}
      </BottomNavigation>
    ),
  }
);
