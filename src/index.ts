export { default as Button } from "./components/Button";
export type { ButtonProps } from "./components/Button";
export { default as Typography } from "./components/Typography";
export type { TypographyProps } from "./components/Typography";
export { default as TextField } from "./components/TextField";
export type { TextFieldProps, TextFieldInputProps } from "./components/TextField";
export { default as Link } from "./components/Link";
export type { LinkProps } from "./components/Link";
export { default as Divider } from "./components/Divider";
export type { DividerProps } from "./components/Divider";
export { default as Box } from "./components/Box";
export type { BoxProps } from "./components/Box";
export { default as Tooltip } from "./components/Tooltip";
export type { TooltipProps } from "./components/Tooltip";
export { default as Copyright } from "./components/Copyright";
export type { CopyrightProps } from "./components/Copyright";
export { default as Icon } from "./components/Icon";
export type { IconProps } from "./components/Icon";
export * from "./components/Navbar";
export type { NavbarProps } from "./components/Navbar";
export { default as BottomNavigation } from "./components/BottomNavigation";
export { default as BottomNavigationAction } from "./components/BottomNavigation/BottomNavigationAction";
export type { BottomNavigationProps } from "./components/BottomNavigation";
export type { BottomNavigationActionProps } from "./components/BottomNavigation/BottomNavigationAction";
export { default as AppBar } from "./components/AppBar";
export type { AppBarProps } from "./components/AppBar";
export * from "./components/theme";

// Demo Icons - exported from main index to avoid deep-path imports
export {
  HomeIcon,
  DeviceManagerIcon,
  SiteIcon,
  WarningTriangle,
  MenuIcon,
  MoreVerticalIcon,
  SvgIcon,
  iconRegistry,
  getIcon,
  getIconNames,
} from "./components/Icon/icons/demo";
export type {
  HomeIconProps,
  DeviceManagerIconProps,
  SiteIconProps,
  WarningTriangleProps,
  MenuIconProps,
  MoreVerticalIconProps,
  SvgIconProps,
  IconInfo,
} from "./components/Icon/icons/demo";
