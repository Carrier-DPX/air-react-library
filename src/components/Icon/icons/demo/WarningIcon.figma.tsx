/**
 * Figma Code Connect Configuration for WarningIcon
 * 
 * TODO: Update the Figma URL below with the actual Figma component URL
 */

import figma from "@figma/code-connect";
import Icon from "../../Icon";
import { WarningIcon } from "./WarningIcon";

// TODO: Uncomment and update with real Figma URL when ready
figma.connect(
  WarningIcon,
  "https://www.figma.com/design/RT43n0bKuuIt7ylllD3DR0/Icon-Library?node-id=29-54",
  {
    props: {
      variant: figma.enum("State", {
        Outlined: "outlined",
        Filled: "filled",
      }),
    },
    example: ({ variant }) => (
      <Icon fontSize="medium">
        <WarningIcon variant={variant} />
      </Icon>
    ),
  }
);
