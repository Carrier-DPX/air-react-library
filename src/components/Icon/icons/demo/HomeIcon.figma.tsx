/**
 * Figma Code Connect Configuration for HomeIcon
 * 
 * TODO: Update the Figma URL below with the actual Figma component URL
 */

import figma from "@figma/code-connect";
import Icon from "../../Icon";
import { HomeIcon } from "./HomeIcon";

// TODO: Uncomment and update with real Figma URL when ready
figma.connect(
  HomeIcon,
  "https://www.figma.com/design/RT43n0bKuuIt7ylllD3DR0/Icon-Library?node-id=38-171",
  {
    props: {
      variant: figma.enum("State", {
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
