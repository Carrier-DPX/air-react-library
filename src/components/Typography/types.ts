import { ElementType, CSSProperties } from "react";
import { ResponsiveStyleValue, AllSystemCSSProperties } from "@mui/system";
import { TypographyProps as MuiTypographyProps } from "@mui/material/Typography";

export interface AdditionalTypographyVariants {
  body3: CSSProperties;
  buttonLarge: CSSProperties;
  buttonMedium: CSSProperties;
  buttonSmall: CSSProperties;
  avatarLetter: CSSProperties;
  inputText1: CSSProperties;
  inputText2: CSSProperties;
  alertTitle: CSSProperties;
  tableHeader1: CSSProperties;
  tableHeader2: CSSProperties;
  inputLabel: CSSProperties;
  chip: CSSProperties;
  helperText: CSSProperties;
  badge: CSSProperties;
  tooltip: CSSProperties;
  body1Semibold: CSSProperties;
  body1Bold: CSSProperties;
  body2Semibold: CSSProperties;
  body2Bold: CSSProperties;
  body3Semibold: CSSProperties;
  body3Bold: CSSProperties;
  caps1: CSSProperties;
  caps1Bold: CSSProperties;
  caps2: CSSProperties;
  caps2Bold: CSSProperties;
  caps3: CSSProperties;
  caps3Bold: CSSProperties;
  caps4: CSSProperties;
  caps4Bold: CSSProperties;
  body4Semibold: CSSProperties;
}

export interface ExtraTypographyFontWeightOptions {
  fontWeightExtraLight?: CSSProperties["fontWeight"];
  fontWeightSemiBold?: CSSProperties["fontWeight"];
  fontWeightExtraBold?: CSSProperties["fontWeight"];
  fontWeightBlack?: CSSProperties["fontWeight"];
}

export type UnnecessaryTypographyVariants = "button";

export type CustomTypographyVariant =
  | "body3"
  | "buttonLarge"
  | "buttonMedium"
  | "buttonSmall"
  | "avatarLetter"
  | "inputLabel"
  | "chip"
  | "helperText"
  | "badge"
  | "tooltip"
  | "inputText1"
  | "inputText2"
  | "alertTitle"
  | "tableHeader1"
  | "tableHeader2"
  | "body1Semibold"
  | "body1Bold"
  | "body2Semibold"
  | "body2Bold"
  | "body3Semibold"
  | "body3Bold"
  | "caps1"
  | "caps1Bold"
  | "caps2"
  | "caps2Bold"
  | "caps3"
  | "caps3Bold"
  | "caps4"
  | "caps4Bold"
  | "body4Semibold";

declare module "@mui/material/styles" {
  /**
   * Extended TypographyVariants
   */
  interface TypographyVariants
    extends AdditionalTypographyVariants,
      ExtraTypographyFontWeightOptions {}
  /**
   * Extended TypographyVariantsOptions (allow configuration using `createTheme`)
   */
  interface TypographyVariantsOptions
    extends AdditionalTypographyVariants,
      ExtraTypographyFontWeightOptions {}
}

declare module "@mui/material/Typography" {
  /**
   * Update the Typography's variant prop options
   */
  interface TypographyPropsVariantOverrides {
    body3: true;
    button: false;
    buttonLarge: true;
    buttonMedium: true;
    buttonSmall: true;
    avatarLetter: true;
    inputText1: true;
    inputText2: true;
    alertTitle: true;
    tableHeader1: true;
    tableHeader2: true;
    inputLabel: true;
    chip: true;
    helperText: true;
    badge: true;
    tooltip: true;
    body1Semibold: true;
    body1Bold: true;
    body2Semibold: true;
    body2Bold: true;
    body3Semibold: true;
    body3Bold: true;
    caps1: true;
    caps1Bold: true;
    caps2: true;
    caps2Bold: true;
    caps3: true;
    caps3Bold: true;
    caps4: true;
    caps4Bold: true;
    body4Semibold: true;
  }
}

export interface TypographyProps
  extends Omit<MuiTypographyProps, "variant" | "variantMapping"> {
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant?:
    | Exclude<MuiTypographyProps["variant"], UnnecessaryTypographyVariants>
    | CustomTypographyVariant;
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   body3: 'p',
   *   inherit: 'p',
   *   buttonLarge: "span",
   *   buttonMedium: "span",
   *   buttonSmall: "span",
   *   avatarLetter: "span",
   *   inputText1: "span",
   *   inputText2: "span",
   *   alertTitle: "span",
   *   tableHeader1: "span",
   *   tableHeader2: "span",
   *   inputLabel: "span",
   *   chip: "span",
   *   helperText: "span",
   *   badge: "span",
   *   tooltip: "span",
   * }
   */
  variantMapping?: MuiTypographyProps["variantMapping"];
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: ElementType;
  /**
   * Specifies how to capitalize an element's text
   */
  textTransform?: ResponsiveStyleValue<AllSystemCSSProperties["textTransform"]>;
}
