/**
 * Figma Code Connect Configuration for MenuIcon
 * 
 * Figma URL: https://www.figma.com/design/RT43n0bKuuIt7ylllD3DR0/Icon-Library?node-id=8-98
 */

import figma from "@figma/code-connect";
import Icon from "../../Icon";
import { MenuIcon } from "./MenuIcon";

figma.connect(
  MenuIcon,
  "https://www.figma.com/design/RT43n0bKuuIt7ylllD3DR0/Icon-Library?node-id=8-98",
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
        <MenuIcon variant={variant} />
      </Icon>
    ),
  }
);
