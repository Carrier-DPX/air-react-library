/**
 * Figma Code Connect Configuration for NotificationsIcon
 * 
 * Figma URL: https://www.figma.com/design/RT43n0bKuuIt7ylllD3DR0/Icon-Library?node-id=47-218
 */

import figma from "@figma/code-connect";
import Icon from "../../Icon";
import { NotificationsIcon } from "./NotificationsIcon";

figma.connect(
  NotificationsIcon,
  "https://www.figma.com/design/RT43n0bKuuIt7ylllD3DR0/Icon-Library?node-id=47-218",
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
        <NotificationsIcon variant={variant} />
      </Icon>
    ),
  }
);
