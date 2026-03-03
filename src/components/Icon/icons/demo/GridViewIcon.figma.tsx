/**
 * Figma Code Connect Configuration for GridViewIcon
 * 
 * Figma URL: https://www.figma.com/design/RT43n0bKuuIt7ylllD3DR0/Icon-Library?node-id=346-1469
 */

import figma from "@figma/code-connect";
import Icon from "../../Icon";
import { GridViewIcon } from "./GridViewIcon";

figma.connect(
  GridViewIcon,
  "https://www.figma.com/design/RT43n0bKuuIt7ylllD3DR0/Icon-Library?node-id=346-1469",
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
        <GridViewIcon variant={variant} />
      </Icon>
    ),
  }
);
