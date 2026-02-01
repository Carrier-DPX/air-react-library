import { TypographyOptions as MuiTypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body1Semibold: React.CSSProperties;
    body1Bold: React.CSSProperties;
    body2Semibold: React.CSSProperties;
    body2Bold: React.CSSProperties;
    body3: React.CSSProperties;
    body3Semibold: React.CSSProperties;
    body3Bold: React.CSSProperties;
    body4Semibold: React.CSSProperties;
    caps1: React.CSSProperties;
    caps1Bold: React.CSSProperties;
    caps2: React.CSSProperties;
    caps2Bold: React.CSSProperties;
    caps3: React.CSSProperties;
    caps3Bold: React.CSSProperties;
    caps4: React.CSSProperties;
    caps4Bold: React.CSSProperties;
    buttonLarge: React.CSSProperties;
    buttonMedium: React.CSSProperties;
    buttonSmall: React.CSSProperties;
    avatarLetter: React.CSSProperties;
    inputText1: React.CSSProperties;
    inputText2: React.CSSProperties;
    alertTitle: React.CSSProperties;
    tableHeader1: React.CSSProperties;
    tableHeader2: React.CSSProperties;
    inputLabel: React.CSSProperties;
    chip: React.CSSProperties;
    helperText: React.CSSProperties;
    badge: React.CSSProperties;
    tooltip: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body1Semibold?: React.CSSProperties;
    body1Bold?: React.CSSProperties;
    body2Semibold?: React.CSSProperties;
    body2Bold?: React.CSSProperties;
    body3?: React.CSSProperties;
    body3Semibold?: React.CSSProperties;
    body3Bold?: React.CSSProperties;
    body4Semibold?: React.CSSProperties;
    caps1?: React.CSSProperties;
    caps1Bold?: React.CSSProperties;
    caps2?: React.CSSProperties;
    caps2Bold?: React.CSSProperties;
    caps3?: React.CSSProperties;
    caps3Bold?: React.CSSProperties;
    caps4?: React.CSSProperties;
    caps4Bold?: React.CSSProperties;
    buttonLarge?: React.CSSProperties;
    buttonMedium?: React.CSSProperties;
    buttonSmall?: React.CSSProperties;
    avatarLetter?: React.CSSProperties;
    inputText1?: React.CSSProperties;
    inputText2?: React.CSSProperties;
    alertTitle?: React.CSSProperties;
    tableHeader1?: React.CSSProperties;
    tableHeader2?: React.CSSProperties;
    inputLabel?: React.CSSProperties;
    chip?: React.CSSProperties;
    helperText?: React.CSSProperties;
    badge?: React.CSSProperties;
    tooltip?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body1Semibold: true;
    body1Bold: true;
    body2Semibold: true;
    body2Bold: true;
    body3: true;
    body3Semibold: true;
    body3Bold: true;
    body4Semibold: true;
    caps1: true;
    caps1Bold: true;
    caps2: true;
    caps2Bold: true;
    caps3: true;
    caps3Bold: true;
    caps4: true;
    caps4Bold: true;
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
  }
}

export interface TypographyOptions extends MuiTypographyOptions {
  body1Semibold?: React.CSSProperties;
  body1Bold?: React.CSSProperties;
  body2Semibold?: React.CSSProperties;
  body2Bold?: React.CSSProperties;
  body3?: React.CSSProperties;
  body3Semibold?: React.CSSProperties;
  body3Bold?: React.CSSProperties;
  body4Semibold?: React.CSSProperties;
  caps1?: React.CSSProperties;
  caps1Bold?: React.CSSProperties;
  caps2?: React.CSSProperties;
  caps2Bold?: React.CSSProperties;
  caps3?: React.CSSProperties;
  caps3Bold?: React.CSSProperties;
  caps4?: React.CSSProperties;
  caps4Bold?: React.CSSProperties;
  buttonLarge?: React.CSSProperties;
  buttonMedium?: React.CSSProperties;
  buttonSmall?: React.CSSProperties;
  avatarLetter?: React.CSSProperties;
  inputText1?: React.CSSProperties;
  inputText2?: React.CSSProperties;
  alertTitle?: React.CSSProperties;
  tableHeader1?: React.CSSProperties;
  tableHeader2?: React.CSSProperties;
  inputLabel?: React.CSSProperties;
  chip?: React.CSSProperties;
  helperText?: React.CSSProperties;
  badge?: React.CSSProperties;
  tooltip?: React.CSSProperties;
}
