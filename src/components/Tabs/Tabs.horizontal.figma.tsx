/**
 * Figma Code Connect Configuration for Tabs Component (Horizontal)
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=17801-86244
 * 
 * Figma Properties:
 * - variant (group-left, group-center, group-right, full-width, scrollable)
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
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=17801-86244",
  {
    props: {
      /**
       * VARIANT MAPPING
       * Maps Figma's "variant" property to React's "variant" prop
       */
      variant: figma.enum("variant", {
        "group-left": "group-left",
        "group-center": "group-center",
        "group-right": "group-right",
        "full-width": "full-width",
        scrollable: "scrollable",
      }),

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
     * Horizontal Tabs - sets orientation="horizontal"
     */
    example: ({ variant, disabled, tab1, tab2, tab3, tab4, tab5, tab6, tab7, tab8 }) => (
      <Tabs
        orientation="horizontal"
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
    ),
  }
);
