/**
 * Figma Code Connect Configuration for AlertIcon
 * 
 * This connects Figma's warning_triangle icon component to the React AlertIcon component.
 * Also known as WarningIcon in some contexts.
 */

import figma from "@figma/code-connect";
import Icon from "../../Icon";
import { AlertIcon } from "./AlertIcon";

figma.connect(
  AlertIcon,
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
        <AlertIcon variant={variant} />
      </Icon>
    ),
  }
);
