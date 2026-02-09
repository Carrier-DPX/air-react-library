/**
 * Figma Code Connect Configuration for Navbar Item Component
 * 
 * This connects Figma's "Item" component to the React NavigationButton component.
 * Items are used within the Navbar Navigation component.
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=37601-412122
 * 
 * Figma Properties:
 * - activeButtonType (basic, indicator) → NavigationButton.activeButtonType
 * - expanded (true, false) → Visual state (Navbar expands on hover by default)
 * - selected (true, false) → NavigationButton.active
 * - disabled (true, false) → NavigationButton.disabled
 * - state (enabled, hover, focus) → Visual state (not a prop)
 * - invertIndicator (true, false) → May affect styling
 * - tooltip (true, false) → NavigationButton.disableTooltip (inverted)
 * - divider (true, false) → If true, renders Divider component below Item
 * 
 * Structure:
 * - Label layer: Contains the text label
 * - Icon: Nested within UnstyledButton component, swapped via Icon component instance
 */

import figma from "@figma/code-connect";
import { NavigationButton } from "./NavigationButton";
import Divider from "../../Divider";

figma.connect(
  NavigationButton,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=37601-412122",
  {
    props: {
      /**
       * ACTIVE BUTTON TYPE
       * Maps Figma's "activeButtonType" property to NavigationButton.activeButtonType
       */
      activeButtonType: figma.enum("activeButtonType", {
        basic: "basic",
        indicator: "indicator",
      }),

      /**
       * SELECTED STATE
       * Maps Figma's "selected" boolean to NavigationButton.active prop
       */
      active: figma.boolean("selected"),

      /**
       * DISABLED STATE
       * Maps Figma's "disabled" boolean to NavigationButton.disabled prop
       */
      disabled: figma.boolean("disabled"),

      /**
       * TOOLTIP VISIBILITY
       * Maps Figma's "tooltip" boolean to NavigationButton.disableTooltip (inverted)
       * Figma: tooltip=true means tooltip is visible
       * React: disableTooltip=true means tooltip is disabled
       */
      tooltip: figma.boolean("tooltip"),

      /**
       * DIVIDER FLAG
       * Maps Figma's "divider" boolean - if true, renders Divider below
       */
      divider: figma.boolean("divider"),

      /**
       * LABEL TEXT
       * Maps text property "✏️ Label" from Item component
       */
      label: figma.string("✏️ Label"),

      /**
       * ITEM ID
       * Maps text property "🆔 ID" from Item component
       */
      id: figma.string("🆔 ID"),

      /**
       * ICON
       * Maps Icon component instance from Item component
       * Since Icon component properties are surfaced to Item, the instance swap property
       * should be named after the component ("Icon"), not the layer name ("Start Icon")
       */
      children: figma.instance("Icon"),
    },
    /**
     * EXAMPLE CODE TEMPLATE
     * Shows how NavigationButton should be used
     * If divider=true, renders Divider component below the NavigationButton
     * 
     * NOTE: Instance name for id mapping may need iteration after testing in Figma Make.
     * Currently generating id from label as fallback.
     */
    example: ({ activeButtonType, active, disabled, tooltip, divider, label, id, children }) => {
      const disableTooltip = !tooltip;
      
      if (divider) {
        return <Divider sx={{ margin: "9px 0" }} />;
      }
      
      return (
        <NavigationButton
          data={{ id: id, label: label }}
          activeButtonType={activeButtonType}
          active={active}
          disabled={disabled}
          disableTooltip={disableTooltip}
          onClick={() => {}}
        >
          {children}
        </NavigationButton>
      );
    },
  }
);
