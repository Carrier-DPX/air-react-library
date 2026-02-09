/**
 * Figma Code Connect Configuration for Search Icon
 * 
 * NOTE: Import SearchIcon from your actual icon library package.
 * Example: import { SearchIcon } from '@carrier-io/icons';
 */

import figma from "@figma/code-connect";
import Icon from "./Icon";
// TODO: Import from your actual icon library
// import { SearchIcon } from '@carrier-io/icons';

// Placeholder - replace with actual SearchIcon import
const SearchIcon = ({ variant, ...props }: any) => <span {...props}>SearchIcon</span>;

// TODO: Uncomment and update with real Figma URL when ready
// figma.connect(
//   SearchIcon,
//   "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=SEARCH-ICON-NODE-ID",
//   {
//     props: {
//       variant: figma.enum("variant", {
//         outlined: "outlined",
//         filled: "filled",
//       }),
//     },
//     example: ({ variant }) => (
//       <Icon fontSize="medium">
//         <SearchIcon variant={variant} />
//       </Icon>
//     ),
//   }
// );
