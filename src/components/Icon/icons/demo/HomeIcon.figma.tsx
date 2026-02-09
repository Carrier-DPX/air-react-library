/**
 * Figma Code Connect Configuration for HomeIcon
 * 
 * TODO: Update the Figma URL below with the actual Figma component URL
 */

import figma from "@figma/code-connect";
import Icon from "../../Icon";
import { HomeIcon } from "./HomeIcon";

figma.connect(
  HomeIcon,
  "https://www.figma.com/design/RT43n0bKuuIt7ylllD3DR0/Icon-Library?node-id=38-171",
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
        <HomeIcon variant={variant} />
      </Icon>
    ),
  }
);
