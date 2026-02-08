/**
 * Figma Code Connect Configuration for Settings Icon
 * 
 * This connects Figma's SettingsIcon component to the React SettingsIcon component.
 * The icon component is wrapped in the Icon wrapper for fontSize control.
 * 
 * Figma URL: https://www.figma.com/design/RT43n0bKuuIt7ylllD3DR0/Icon-Library?node-id=1401-6386
 * 
 * NOTE: Import SettingsIcon from your actual icon library package.
 * Example: import { SettingsIcon } from '@carrier-io/icons';
 */

import figma from "@figma/code-connect";
import Icon from "./Icon";
// TODO: Import from your actual icon library
// import { SettingsIcon } from '@carrier-io/icons';

// Placeholder - replace with actual SettingsIcon import
const SettingsIcon = ({ variant, ...props }: any) => <span {...props}>SettingsIcon</span>;

figma.connect(
  SettingsIcon,
  "https://www.figma.com/design/RT43n0bKuuIt7ylllD3DR0/Icon-Library?node-id=1401-6386",
  {
    props: {
      /**
       * STYLE MAPPING
       * Maps Figma's "Style" property to the icon component's "variant" prop
       * Figma uses "Style" with values "Outlined" and "Filled"
       * React icon component expects "variant" with values "outlined" and "filled"
       */
      variant: figma.enum("Style", {
        Outlined: "outlined",
        Filled: "filled",
      }),
      
      /**
       * FONT SIZE MAPPING (optional)
       * If your Figma icon component has a fontSize property, map it here
       * Otherwise, fontSize is set on the Icon wrapper component
       */
      // fontSize: figma.enum("fontSize", {
      //   "xsmall-12px": "xsmall",
      //   "small-16px": "small",
      //   "medium-24px": "medium",
      //   "large-32px": "large",
      // }),
    },
    /**
     * EXAMPLE CODE TEMPLATE
     * Shows the icon component wrapped in Icon for fontSize control.
     * The Icon wrapper handles fontSize (xsmall, small, medium, large).
     * The icon component handles variant (outlined, filled).
     */
    example: ({ variant }) => (
      <Icon fontSize="medium">
        <SettingsIcon variant={variant} />
      </Icon>
    ),
  }
);
