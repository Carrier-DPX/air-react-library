/**
 * Figma Code Connect Configuration for Tab Component (Horizontal)
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=23369-17683
 * 
 * Figma Properties:
 * - selected (true, false)
 * - indicatorWidth (content, full)
 * - invertIndicator (true, false)
 * - disabled (true, false)
 * - state (enabled, hover, focus) - visual state, not a prop
 * - label (true, false) - boolean hide/show
 * - startAdornment (true, false) - boolean hide/show
 * - endAdornment (true, false) - boolean hide/show
 * 
 * Note: indicatorWidth and invertIndicator are Tabs-level props, but are included
 * here as they may be visually represented in Figma's Tab component.
 */

import figma from "@figma/code-connect";
import Tab from "./Tab";

figma.connect(
  Tab,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=23369-17683",
  {
    props: {
      /**
       * SELECTED STATE
       * Maps Figma's "selected" boolean to React's "selected" prop
       */
      selected: figma.boolean("selected"),

      /**
       * INDICATOR WIDTH
       * Maps Figma's "indicatorWidth" property
       * Note: This is typically a Tabs-level prop, but may be visually represented in Figma
       */
      indicatorWidth: figma.enum("indicatorWidth", {
        content: "content",
        full: "full",
      }),

      /**
       * INVERT INDICATOR
       * Maps Figma's "invertIndicator" boolean
       * Note: This is typically a Tabs-level prop, but may be visually represented in Figma
       */
      invertIndicator: figma.boolean("invertIndicator"),

      /**
       * DISABLED STATE
       * Maps Figma's "disabled" boolean to React's "disabled" prop
       */
      disabled: figma.boolean("disabled"),

      /**
       * LABEL VISIBILITY
       * Maps Figma's "label" boolean - controls visibility of label text
       */
      showLabel: figma.boolean("label"),

      /**
       * LABEL TEXT CONTENT
       * Maps text content from nested "Label" Typography component
       */
      labelText: figma.nestedProps("Label", {
        children: figma.children("Label"),
      }),

      /**
       * START ADORNMENT VISIBILITY
       * Maps Figma's "startAdornment" boolean - controls visibility of start icon
       */
      showStartAdornment: figma.boolean("startAdornment"),

      /**
       * START ADORNMENT ICON INSTANCE
       * Maps nested Icon component instance when startAdornment is visible
       * Uses figma.instance() to get the Icon component instance
       */
      startIcon: figma.instance("startAdornment"),

      /**
       * END ADORNMENT VISIBILITY
       * Maps Figma's "endAdornment" boolean - controls visibility of end icon
       */
      showEndAdornment: figma.boolean("endAdornment"),

      /**
       * END ADORNMENT ICON INSTANCE
       * Maps nested Icon component instance when endAdornment is visible
       * Uses figma.instance() to get the Icon component instance
       */
      endIcon: figma.instance("endAdornment"),
    },

    /**
     * EXAMPLE CODE TEMPLATE
     * Horizontal Tab - handles label, startAdornment, and endAdornment visibility
     */
    example: ({ selected, disabled, showLabel, labelText, showStartAdornment, startIcon, showEndAdornment, endIcon }) => {
      // Handle case with label and both adornments
      // Note: MUI Tab only supports one icon, so we prioritize startAdornment
      if (showLabel && labelText && labelText.children && showStartAdornment && startIcon && showEndAdornment && endIcon) {
        return (
          <Tab
            selected={selected}
            disabled={disabled}
            label={labelText.children}
            icon={startIcon}
            iconPosition="start"
          />
        );
      }

      // Handle case with label and startAdornment only
      if (showLabel && labelText && labelText.children && showStartAdornment && startIcon) {
        return (
          <Tab
            selected={selected}
            disabled={disabled}
            label={labelText.children}
            icon={startIcon}
            iconPosition="start"
          />
        );
      }

      // Handle case with label and endAdornment only
      if (showLabel && labelText && labelText.children && showEndAdornment && endIcon) {
        return (
          <Tab
            selected={selected}
            disabled={disabled}
            label={labelText.children}
            icon={endIcon}
            iconPosition="end"
          />
        );
      }

      // Handle case with label only
      if (showLabel && labelText && labelText.children) {
        return (
          <Tab
            selected={selected}
            disabled={disabled}
            label={labelText.children}
          />
        );
      }

      // Handle case with startAdornment only (no label)
      if (showStartAdornment && startIcon) {
        return (
          <Tab
            selected={selected}
            disabled={disabled}
            icon={startIcon}
          />
        );
      }

      // Handle case with endAdornment only (no label)
      if (showEndAdornment && endIcon) {
        return (
          <Tab
            selected={selected}
            disabled={disabled}
            icon={endIcon}
          />
        );
      }

      // Default case - no label, no adornments
      return (
        <Tab
          selected={selected}
          disabled={disabled}
        />
      );
    },
  }
);
