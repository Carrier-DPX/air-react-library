/**
 * Figma Code Connect Configuration for Home Icon
 * 
 * NOTE: Import HomeIcon from your actual icon library package.
 * Example: import { HomeIcon } from '@carrier-io/icons';
 */

import figma from "@figma/code-connect";
import Icon from "./Icon";
// TODO: Import from your actual icon library
// import { HomeIcon } from '@carrier-io/icons';

// Placeholder - replace with actual HomeIcon import
const HomeIcon = ({ variant, ...props }: any) => <span {...props}>HomeIcon</span>;

figma.connect(
  HomeIcon,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=HOME-ICON-NODE-ID",
  {
    props: {
      variant: figma.enum("variant", {
        outlined: "outlined",
        filled: "filled",
      }),
    },
    example: ({ variant }) => (
      <Icon fontSize="medium">
        <HomeIcon variant={variant} />
      </Icon>
    ),
  }
);
