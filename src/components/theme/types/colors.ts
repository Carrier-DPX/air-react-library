// https://mui.com/customization/palette/#adding-new-colors

// https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
declare module "@mui/material/styles/createPalette" {
  interface Palette {
    base?: BaseColors;
  }

  export interface PaletteOptions {
    base?: BaseColors;
  }

  interface PaletteColor extends AdditionalPaletteColor {}

  interface SimplePaletteColorOptions extends AdditionalPaletteColor {}
}

export interface BaseColors {
  dark: string;
  light: string;
  main: string;
  contrastText: string;
  backdropOverlay: string;
  divider: string;
  standardInputLine: string;
  background: {
    accent: string;
    appBar: string;
    paper: string;
    skeleton: string;
    snackbar: string;
  };
  common: {
    black: string;
    white: string;
  };
  filledInput: {
    background: string;
    backgroundHover: string;
    outlinedBorder: string;
    outlinedBorderHover: string;
    placeholderLabel: string;
    required: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  state: {
    hover: string;
    disabledBackground: string;
    disabledContent: string;
    selected: string;
    selectedHover: string;
    focus: string;
    active: string;
  };
}
interface AdditionalPaletteColor {
  containedHoverBackground?: string;
  outlinedHoverBackground?: string;
  outlinedRestingBorder?: string;
  content?: string;
  background?: string;
  selectedHover?: string;
}
