/**
 * Figma Code Connect Configuration for DeviceManagerIcon
 * 
 * TODO: Update the Figma URL below with the actual Figma component URL
 * Get the URL by:
 * 1. Opening the icon component in Figma
 * 2. Right-clicking → "Copy link to selection"
 * 3. Replace the URL in the figma.connect() call below
 */

import figma from "@figma/code-connect";
import Icon from "../../Icon";
import { DeviceManagerIcon } from "./DeviceManagerIcon";

// TODO: Uncomment and update with real Figma URL when ready
figma.connect(
  DeviceManagerIcon,
  "https://www.figma.com/design/RT43n0bKuuIt7ylllD3DR0/Icon-Library?node-id=1380-3039",
  {
    props: {
      /**
       * STYLE/VARIANT MAPPING
       * Maps Figma's "Style" property to React's "variant" prop
       * Figma: Style="Outlined" → React: variant="outlined"
       * Figma: Style="Filled" → React: variant="filled"
       */
      variant: figma.enum("Style", {
        Outlined: "outlined",
        Filled: "filled",
      }),
    },
    example: ({ variant }) => (
      <Icon fontSize="medium">
        <DeviceManagerIcon variant={variant} />
      </Icon>
    ),
  }
);
