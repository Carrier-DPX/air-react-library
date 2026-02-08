/**
 * Figma Code Connect Configuration for ArrowLeft Icon
 * 
 * NOTE: Import ArrowLeftIcon from your actual icon library package.
 * Example: import { ArrowLeftIcon } from '@carrier-io/icons';
 */

import figma from "@figma/code-connect";
import Icon from "./Icon";
// TODO: Import from your actual icon library
// import { ArrowLeftIcon } from '@carrier-io/icons';

// Placeholder - replace with actual ArrowLeftIcon import
const ArrowLeftIcon = ({ variant, ...props }: any) => <span {...props}>ArrowLeftIcon</span>;

figma.connect(
  ArrowLeftIcon,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=ARROW-LEFT-ICON-NODE-ID",
  {
    props: {
      variant: figma.enum("variant", {
        outlined: "outlined",
        filled: "filled",
      }),
    },
    example: ({ variant }) => (
      <Icon fontSize="medium">
        <ArrowLeftIcon variant={variant} />
      </Icon>
    ),
  }
);
