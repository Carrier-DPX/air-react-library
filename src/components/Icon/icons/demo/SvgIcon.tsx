import { FC, SVGProps } from "react";
import { getIcon } from "./iconRegistry";

export interface SvgIconProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon name (e.g., "home", "devicemanager", "site", "warning")
   */
  name: string;
  /**
   * Variant (outlined or filled)
   * Note: Currently all icons are outlined, but this prop is here for future support
   */
  variant?: "outlined" | "filled";
}

/**
 * Generic SvgIcon component that loads icons dynamically by name
 * 
 * Available icons: "home", "devicemanager", "site", "warning", "alert"
 * 
 * Usage:
 * ```tsx
 * <SvgIcon name="home" />
 * <SvgIcon name="devicemanager" variant="outlined" />
 * <SvgIcon name="alert" /> // Same as warning
 * ```
 */
export const SvgIcon: FC<SvgIconProps> = ({ name, variant = "outlined", ...props }) => {
  const iconInfo = getIcon(name);

  if (!iconInfo) {
    console.warn(`Icon "${name}" not found in registry`);
    return null;
  }

  const IconComponent = iconInfo.component;

  return <IconComponent {...props} />;
};
