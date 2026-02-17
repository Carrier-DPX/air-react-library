import { Theme } from "@mui/material";

export const baseRadioSx = (theme: Theme, disableHover: boolean) => ({
  "&.Mui-disabled": {
    svg: {
      stroke: theme.palette.base?.text.disabled,
    },
    fill: theme.palette.base?.text.disabled,
    stroke: theme.palette.base?.text.disabled,
  },
  svg: {
    stroke: theme.palette.base?.state.active,
    strokeWidth: 0,
  },
  p: 0,
  ...(disableHover && {
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-checked:hover": {
      backgroundColor: "transparent",
    },
  }),
  fill: theme.palette.primary?.main,
  stroke: theme.palette.base?.standardInputLine,
  "&.Mui-checked": {
    stroke: theme.palette.primary?.main,
  },
  "&.MuiRadio-colorError": {
    fill: theme.palette.error?.main,
    stroke: theme.palette.base?.standardInputLine,
    "&.Mui-checked": {
      stroke: theme.palette.error?.main,
    },
    "&.Mui-disabled": {
      fill: theme.palette.base?.text.disabled,
      stroke: theme.palette.base?.text.disabled,
    },
  },
  "&.MuiRadio-colorWarning": {
    fill: theme.palette.warning?.main,
    stroke: theme.palette.base?.standardInputLine,
    "&.Mui-checked": {
      stroke: theme.palette.warning?.main,
    },
    "&.Mui-disabled": {
      fill: theme.palette.base?.text.disabled,
      stroke: theme.palette.base?.text.disabled,
    },
  },
  "&.MuiRadio-colorSuccess": {
    fill: theme.palette.success?.main,
    stroke: theme.palette.base?.standardInputLine,
    "&.Mui-checked": {
      stroke: theme.palette.success?.main,
    },
    "&.Mui-disabled": {
      fill: theme.palette.base?.text.disabled,
      stroke: theme.palette.base?.text.disabled,
    },
  },
  "&.MuiRadio-colorInfo": {
    fill: theme.palette.info?.main,
    stroke: theme.palette.base?.standardInputLine,
    "&.Mui-checked": {
      stroke: theme.palette.info?.main,
    },
    "&.Mui-disabled": {
      fill: theme.palette.base?.text.disabled,
      stroke: theme.palette.base?.text.disabled,
    },
  },
  "&.MuiRadio-colorBase": {
    fill: theme.palette.base?.main,
    stroke: theme.palette.base?.state.active,
    "&.Mui-checked": {
      stroke: theme.palette.base?.main,
    },
    "&.Mui-disabled": {
      fill: theme.palette.base?.state.disabledContent,
      stroke: theme.palette.base?.state.disabledContent,
    },
  },
  "&.MuiRadio-colorSecondary": {
    fill: theme.palette.secondary.main,
    stroke: theme.palette.base?.standardInputLine,
    "&.Mui-checked": {
      stroke: theme.palette.secondary.dark,
      color: theme.palette.secondary.dark,
    },
    "&.Mui-disabled": {
      fill: theme.palette.base?.state.disabledContent,
      stroke: theme.palette.base?.state.disabledContent,
    },
  },
  colorSecondary: {
    fill: theme.palette.secondary?.main,
    "&.Mui-checked": {
      color: theme.palette.secondary?.dark,
      stroke: theme.palette.secondary?.dark,
    },
    "&.Mui-disabled": {
      fill: theme.palette.base?.text.disabled,
      stroke: theme.palette.base?.text.disabled,
    },
  },
});
