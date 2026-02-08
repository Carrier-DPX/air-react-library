/**
 * Figma Code Connect Configuration for Close Icon
 * 
 * NOTE: Import CloseIcon from your actual icon library package.
 * Example: import { CloseIcon } from '@carrier-io/icons';
 */

import figma from "@figma/code-connect";
import Icon from "./Icon";
// TODO: Import from your actual icon library
// import { CloseIcon } from '@carrier-io/icons';

// Placeholder - replace with actual CloseIcon import
const CloseIcon = ({ variant, ...props }: any) => <span {...props}>CloseIcon</span>;

figma.connect(
  CloseIcon,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=CLOSE-ICON-NODE-ID",
  {
    props: {
      variant: figma.enum("variant", {
        outlined: "outlined",
        filled: "filled",
      }),
    },
    example: ({ variant }) => (
      <Icon fontSize="medium">
        <CloseIcon variant={variant} />
      </Icon>
    ),
  }
);
