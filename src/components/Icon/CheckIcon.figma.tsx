/**
 * Figma Code Connect Configuration for Check Icon
 * 
 * NOTE: Import CheckIcon from your actual icon library package.
 * Example: import { CheckIcon } from '@carrier-io/icons';
 */

import figma from "@figma/code-connect";
import Icon from "./Icon";
// TODO: Import from your actual icon library
// import { CheckIcon } from '@carrier-io/icons';

// Placeholder - replace with actual CheckIcon import
const CheckIcon = ({ variant, ...props }: any) => <span {...props}>CheckIcon</span>;

// TODO: Uncomment and update with real Figma URL when ready
// figma.connect(
//   CheckIcon,
//   "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=CHECK-ICON-NODE-ID",
//   {
//     props: {
//       variant: figma.enum("variant", {
//         outlined: "outlined",
//         filled: "filled",
//       }),
//     },
//     example: ({ variant }) => (
//       <Icon fontSize="medium">
//         <CheckIcon variant={variant} />
//       </Icon>
//     ),
//   }
// );
