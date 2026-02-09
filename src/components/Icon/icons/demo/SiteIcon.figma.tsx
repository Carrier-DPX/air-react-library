/**
 * Figma Code Connect Configuration for SiteIcon
 * 
 * TODO: Update the Figma URL below with the actual Figma component URL
 */

import figma from "@figma/code-connect";
import Icon from "../../Icon";
import { SiteIcon } from "./SiteIcon";

// TODO: Uncomment and update with real Figma URL when ready
figma.connect(
  SiteIcon,
  "https://www.figma.com/design/RT43n0bKuuIt7ylllD3DR0/Icon-Library?node-id=76-846",
  {
    props: {
      variant: figma.enum("State", {
        Outlined: "outlined",
        Filled: "filled",
      }),
    },
    example: ({ variant }) => (
      <Icon fontSize="medium">
        <SiteIcon variant={variant} />
      </Icon>
    ),
  }
);
