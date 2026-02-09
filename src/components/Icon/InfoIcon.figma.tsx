/**
 * Figma Code Connect Configuration for Info Icon
 * 
 * NOTE: Import InfoIcon from your actual icon library package.
 * Example: import { InfoIcon } from '@carrier-io/icons';
 */

import figma from "@figma/code-connect";
import Icon from "./Icon";
// TODO: Import from your actual icon library
// import { InfoIcon } from '@carrier-io/icons';

// Placeholder - replace with actual InfoIcon import
const InfoIcon = ({ variant, ...props }: any) => <span {...props}>InfoIcon</span>;

// TODO: Uncomment and update with real Figma URL when ready
// figma.connect(
//   InfoIcon,
//   "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=INFO-ICON-NODE-ID",
//   {
//     props: {
//       variant: figma.enum("variant", {
//         outlined: "outlined",
//         filled: "filled",
//       }),
//     },
//     example: ({ variant }) => (
//       <Icon fontSize="medium">
//         <InfoIcon variant={variant} />
//       </Icon>
//     ),
//   }
// );
