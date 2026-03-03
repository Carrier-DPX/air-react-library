/**
 * Figma Code Connect Configuration for Tabs Component (Vertical)
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=23641-53725
 * 
 * Figma Properties:
 * - scrollable (true, false)
 * - disabled (true, false)
 * - divider (true, false)
 * 
 * Structure:
 * - Tab 1-8: Multiple Tab instances with numbered layer names
 */

import figma from "@figma/code-connect";
import Tabs from "./Tabs";
import Tab from "./Tab";

figma.connect(
  Tabs,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=23641-53725",
  {
    props: {
      /**
       * SCROLLABLE VARIANT
       * Maps Figma's "scrollable" boolean to React's "variant" prop
       * When true, variant="scrollable", otherwise variant="group-left" (default)
       */
      scrollable: figma.boolean("scrollable"),

      /**
       * DISABLED STATE
       * Maps Figma's "disabled" boolean to React's "disabled" prop
       */
      disabled: figma.boolean("disabled"),

      /**
       * DIVIDER VISIBILITY
       * Maps Figma's "divider" boolean - controls divider visibility
       */
      divider: figma.boolean("divider"),

      /**
       * TAB CHILDREN
       * Maps nested Tab instances from Figma
       * Each "Tab X" is an instance of the Tab component
       */
      tab1: figma.children("Tab 1"),
      tab2: figma.children("Tab 2"),
      tab3: figma.children("Tab 3"),
      tab4: figma.children("Tab 4"),
      tab5: figma.children("Tab 5"),
      tab6: figma.children("Tab 6"),
      tab7: figma.children("Tab 7"),
      tab8: figma.children("Tab 8"),
    },

    /**
     * EXAMPLE CODE TEMPLATE
     * Vertical Tabs - sets orientation="vertical"
     */
    example: ({ scrollable, disabled, tab1, tab2, tab3, tab4, tab5, tab6, tab7, tab8 }) => {
      let variant: "scrollable" | "group-left" = "group-left";
      if (scrollable) {
        variant = "scrollable";
      }

      return (
        <Tabs
          orientation="vertical"
          variant={variant}
          disabled={disabled}
          value={0}
          onChange={() => {}}
        >
          {tab1}
          {tab2}
          {tab3}
          {tab4}
          {tab5}
          {tab6}
          {tab7}
          {tab8}
        </Tabs>
      );
    },
  }
);
