/**
 * Figma Code Connect Configuration for User Icon
 * 
 * NOTE: Import UserIcon from your actual icon library package.
 * Example: import { UserIcon } from '@carrier-io/icons';
 */

import figma from "@figma/code-connect";
import Icon from "./Icon";
// TODO: Import from your actual icon library
// import { UserIcon } from '@carrier-io/icons';

// Placeholder - replace with actual UserIcon import
const UserIcon = ({ variant, ...props }: any) => <span {...props}>UserIcon</span>;

figma.connect(
  UserIcon,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=USER-ICON-NODE-ID",
  {
    props: {
      variant: figma.enum("variant", {
        outlined: "outlined",
        filled: "filled",
      }),
    },
    example: ({ variant }) => (
      <Icon fontSize="medium">
        <UserIcon variant={variant} />
      </Icon>
    ),
  }
);
