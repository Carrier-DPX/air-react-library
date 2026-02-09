/**
 * Figma Code Connect Configuration for BottomNavigationAction Component
 * 
 * This connects Figma's BottomNavigationAction component to the React BottomNavigationAction component.
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=6572-50288
 * 
 * Figma Properties:
 * - selected (true, false) → selected prop
 * - disabled (true, false) → disabled prop
 * - focus (true, false) → Visual state (not a prop)
 * - showLabel (true, false) → labelvisibility prop ("On" when true, "Off" when false)
 * - ✏️ label (text property) → label prop (Typography component)
 * - Icon (nested component) → icon prop
 */

import figma from "@figma/code-connect";
import BottomNavigationAction from "./BottomNavigationAction";
import Typography from "../Typography";
import Icon from "../Icon";

figma.connect(
  BottomNavigationAction,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=6572-50288",
  {
    props: {
      /**
       * SELECTED STATE
       * Maps Figma's "selected" boolean to React's "selected" prop
       */
      selected: figma.boolean("selected"),

      /**
       * DISABLED STATE
       * Maps Figma's "disabled" boolean to React's "disabled" prop
       */
      disabled: figma.boolean("disabled"),

      /**
       * LABEL VISIBILITY
       * Maps Figma's "showLabel" boolean as an enum to React's "labelvisibility" prop
       * Figma: showLabel=true → React: labelvisibility="On"
       * Figma: showLabel=false → React: labelvisibility="Off"
       */
      labelvisibility: figma.enum("showLabel", {
        true: "On",
        false: "Off",
      }),


      /**
       * LABEL TEXT
       * Maps text property "✏️ Label" from BottomNavigationAction component
       * This requires the "✏️ Label" text property to be surfaced from the "Label" layer
       * Similar to Navbar Item which uses figma.string("✏️ Label")
       * The label is rendered as a Typography component in React
       */
      label: figma.string("✏️ Label"),


      /**
       * ICON NESTED PROPERTIES
       * Access Icon's fontSize and SVG through nested properties
       */
      icon: figma.nestedProps("Icon", {
        fontSize: figma.enum("fontSize", {
          "medium": "medium",
          "large": "large",
          "small": "small",
          "xsmall": "xsmall",
        }),
        children: figma.instance("SVG"), // The SVG instance swap
      }),
    },
    /**
     * EXAMPLE CODE TEMPLATE
     * Shows how BottomNavigationAction should be used
     */
    example: ({ selected, disabled, labelvisibility, label, icon }) => (
      <BottomNavigationAction
        selected={selected}
        disabled={disabled}
        labelvisibility={labelvisibility}
        icon={<Icon fontSize={icon.fontSize}>{icon.children}</Icon>}
        label={<Typography variant="body3Semibold">{label}</Typography>}
      />
    ),
  }
);
