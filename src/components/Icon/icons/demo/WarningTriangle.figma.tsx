/**
 * Figma Code Connect Configuration for WarningTriangle
 * 
 * This connects Figma's warning_triangle icon component to the React WarningTriangle component.
 */

import figma from "@figma/code-connect";
import Icon from "../../Icon";
import { WarningTriangle } from "./WarningTriangle";

figma.connect(
  WarningTriangle,
  "https://www.figma.com/design/RT43n0bKuuIt7ylllD3DR0/Icon-Library?node-id=29-54",
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
        <WarningTriangle variant={variant} />
      </Icon>
    ),
  }
);
