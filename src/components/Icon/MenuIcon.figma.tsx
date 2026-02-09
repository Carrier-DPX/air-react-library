/**
 * Figma Code Connect Configuration for Menu Icon
 * 
 * NOTE: Import MenuIcon from your actual icon library package.
 * Example: import { MenuIcon } from '@carrier-io/icons';
 */

import figma from "@figma/code-connect";
import Icon from "./Icon";
// TODO: Import from your actual icon library
// import { MenuIcon } from '@carrier-io/icons';

// Placeholder - replace with actual MenuIcon import
const MenuIcon = ({ variant, ...props }: any) => <span {...props}>MenuIcon</span>;

// TODO: Uncomment and update with real Figma URL when ready
// figma.connect(
//   MenuIcon,
//   "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=MENU-ICON-NODE-ID",
//   {
//     props: {
//       variant: figma.enum("variant", {
//         outlined: "outlined",
//         filled: "filled",
//       }),
//     },
//     example: ({ variant }) => (
//       <Icon fontSize="medium">
//         <MenuIcon variant={variant} />
//       </Icon>
//     ),
//   }
// );
