/**
 * Figma Code Connect Configuration for ListItem Component
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=22974-86899
 * 
 * Figma Properties:
 * - size (large: 48px, medium: 40px, small: 32px)
 * - padded (true, false)
 * - selected (true, false)
 * - disabled (true, false)
 * - disableGutters (true, false)
 * - state (enabled, hover, focus) - visual state, not a prop
 * - divider (true, false) - boolean hide/show
 * - nesting (true, false) - boolean hide/show
 * - startAdornment (true, false) - boolean hide/show
 * - endAdornment (true, false) - boolean hide/show
 * - statusStart (true, false) - boolean hide/show (uses AccentIndicator - to be added later)
 * - statusEnd (true, false) - boolean hide/show (uses AccentIndicator - to be added later)
 * 
 * Structure:
 * - Labels (nested component): Contains header, label, and helperText Typography components
 *   - header (true, false) - Typography component
 *   - label (true, false) - Typography component
 *   - helperText (true, false) - Typography component
 */

import figma from "@figma/code-connect";
import ListItem from "./ListItem";
import ListItemText from "./ListItemText";
import Typography from "../Typography";
import AccentIndicator from "../AccentIndicator";

figma.connect(
  ListItem,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=22974-86899",
  {
    props: {
      /**
       * SIZE MAPPING
       * Maps Figma's "size" property to React's "size" prop
       * Figma: large (48px), medium (40px), small (32px)
       */
      size: figma.enum("size", {
        "large: 48px": "large",
        "medium: 40px": "medium",
        "small: 32px": "small",
        large: "large",
        medium: "medium",
        small: "small",
      }),

      /**
       * PADDED MAPPING
       * Maps Figma's "padded" boolean to React's "padded" prop
       */
      padded: figma.boolean("padded"),

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
       * DISABLE GUTTERS
       * Maps Figma's "disableGutters" boolean to React's "disableGutters" prop
       */
      disableGutters: figma.boolean("disableGutters"),

      /**
       * DIVIDER VISIBILITY
       * Maps Figma's "divider" boolean - controls divider visibility
       */
      divider: figma.boolean("divider"),

      /**
       * NESTING VISIBILITY
       * Maps Figma's "nesting" boolean - controls nesting visibility
       */
      nesting: figma.boolean("nesting"),

      /**
       * START ADORNMENT VISIBILITY
       * Maps Figma's "startAdornment" boolean - controls start adornment visibility
       */
      startAdornment: figma.boolean("startAdornment"),

      /**
       * END ADORNMENT VISIBILITY
       * Maps Figma's "endAdornment" boolean - controls end adornment visibility
       */
      endAdornment: figma.boolean("endAdornment"),

      /**
       * STATUS START ACCENT INDICATOR
       * Maps nested AccentIndicator component instance when statusStart is visible
       * The AccentIndicator is nested within the statusStart layer
       * Uses figma.instance() to get the AccentIndicator component instance
       */
      statusStart: figma.instance("statusStart"),

      /**
       * STATUS END ACCENT INDICATOR
       * Maps nested AccentIndicator component instance when statusEnd is visible
       * The AccentIndicator is nested within the statusEnd layer
       * Uses figma.instance() to get the AccentIndicator component instance
       */
      statusEnd: figma.instance("statusEnd"),

      /**
       * LABELS NESTED PROPERTIES
       * Access properties from nested "Labels" component (layer name "Labels")
       * Contains header, label, and helperText Typography components
       */
      labels: figma.nestedProps("Labels", {
        /**
         * HEADER VISIBILITY
         * Maps Figma's "header" boolean from nested "Labels" component
         */
        header: figma.boolean("header"),

        /**
         * LABEL VISIBILITY
         * Maps Figma's "label" boolean from nested "Labels" component
         */
        label: figma.boolean("label"),

        /**
         * HELPER TEXT VISIBILITY
         * Maps Figma's "helperText" boolean from nested "Labels" component
         */
        helperText: figma.boolean("helperText"),

        /**
         * HEADER TEXT CONTENT
         * Maps text content from nested "header" Typography component
         */
        headerText: figma.nestedProps("header", {
          children: figma.children("header"),
        }),

        /**
         * LABEL TEXT CONTENT
         * Maps text content from nested "label" Typography component
         */
        labelText: figma.nestedProps("label", {
          children: figma.children("label"),
        }),

        /**
         * HELPER TEXT CONTENT
         * Maps text content from nested "helperText" Typography component
         */
        helperTextContent: figma.nestedProps("helperText", {
          children: figma.children("helperText"),
        }),
      }),
    },

    /**
     * EXAMPLE CODE TEMPLATE
     * Shows how ListItem should be used with optional labels, adornments, and AccentIndicators
     */
    example: ({ size, padded, selected, disabled, disableGutters, divider, labels, statusStart, statusEnd }) => {
      // Handle case with header, label, and helperText
      if (labels && labels.header && labels.headerText && labels.headerText.children && labels.label && labels.labelText && labels.labelText.children && labels.helperText && labels.helperTextContent && labels.helperTextContent.children) {
        return (
          <ListItem
            size={size}
            padded={padded}
            selected={selected}
            disabled={disabled}
            disableGutters={disableGutters}
            divider={divider}
          >
            {statusStart}
            <Typography variant="body1Semibold">
              {labels.headerText.children}
            </Typography>
            <ListItemText
              primary={labels.labelText.children}
              secondary={labels.helperTextContent.children}
            />
            {statusEnd}
          </ListItem>
        );
      }

      // Handle case with header and label (no helperText)
      if (labels && labels.header && labels.headerText && labels.headerText.children && labels.label && labels.labelText && labels.labelText.children) {
        return (
          <ListItem
            size={size}
            padded={padded}
            selected={selected}
            disabled={disabled}
            disableGutters={disableGutters}
            divider={divider}
          >
            {statusStart}
            <Typography variant="body1Semibold">
              {labels.headerText.children}
            </Typography>
            <ListItemText
              primary={labels.labelText.children}
            />
            {statusEnd}
          </ListItem>
        );
      }

      // Handle case with label and helperText (no header)
      if (labels && labels.label && labels.labelText && labels.labelText.children && labels.helperText && labels.helperTextContent && labels.helperTextContent.children) {
        return (
          <ListItem
            size={size}
            padded={padded}
            selected={selected}
            disabled={disabled}
            disableGutters={disableGutters}
            divider={divider}
          >
            {statusStart}
            <ListItemText
              primary={labels.labelText.children}
              secondary={labels.helperTextContent.children}
            />
            {statusEnd}
          </ListItem>
        );
      }

      // Handle case with only label
      if (labels && labels.label && labels.labelText && labels.labelText.children) {
        return (
          <ListItem
            size={size}
            padded={padded}
            selected={selected}
            disabled={disabled}
            disableGutters={disableGutters}
            divider={divider}
          >
            {statusStart}
            <ListItemText
              primary={labels.labelText.children}
            />
            {statusEnd}
          </ListItem>
        );
      }

      // Handle case with only header
      if (labels && labels.header && labels.headerText && labels.headerText.children) {
        return (
          <ListItem
            size={size}
            padded={padded}
            selected={selected}
            disabled={disabled}
            disableGutters={disableGutters}
            divider={divider}
          >
            {statusStart}
            <Typography variant="body1Semibold">
              {labels.headerText.children}
            </Typography>
            {statusEnd}
          </ListItem>
        );
      }

      // Fallback: ListItem with no labels
      return (
        <ListItem
          size={size}
          padded={padded}
          selected={selected}
          disabled={disabled}
          disableGutters={disableGutters}
          divider={divider}
        >
          {statusStart}
          {statusEnd}
        </ListItem>
      );
    },
  }
);
