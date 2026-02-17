import { Theme } from "@mui/material/styles";

export enum Severity {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error",
  Default = "default",
  Static = "static",
}

export interface StyleProps {
  severity: Severity;
  size: number;
  theme: Theme;
}

export interface StatusLedProps {
  /**
   * The severity of the StatusLed. This defines the color.
   *
   * @default 'default'
   */
  severity?: Severity;

  /**
   * A boolean that controls the presence of outer circle (glow) of the StatusLed.
   * The overall size is rounded 150% of the size property value if glow is enabled
   *
   * @default False
   */
  glow?: boolean;

  /**
   * The size of the inner circle in pixels.
   * The size of the outer circle (glow) is rounded 50% larger if present.
   *
   * @default 12
   */
  size?: number;

  /**
   * The label content.
   */
  label?: string;

  /**
   * Controls where the label should be placed.
   *
   * @default end
   */

  labelPosition?: "start" | "end";

  /**
   * For testing purposes
   */
  "data-testid"?: string;
}
