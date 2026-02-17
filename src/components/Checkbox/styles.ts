import { Theme } from "@mui/material";

export const disableHoverSx = {
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&.Mui-checked:hover": {
    backgroundColor: "transparent",
  },
};

export const baseCheckboxSx = {
  "&:hover": {
    backgroundColor: (theme: Theme) =>
      theme.palette.base?.state.disabledBackground,
  },
  "&.Mui-checked": {
    fill: (theme: Theme) => theme.palette.primary?.main,

    "&:hover": {
      backgroundColor: (theme: Theme) =>
        theme.palette.primary?.outlinedHoverBackground,
    },
  },
  "&.MuiCheckbox-colorPrimary": {
    "&.Mui-checked": {
      fill: (theme: Theme) => theme.palette.primary?.main,
    },
    "&.Mui-disabled": {
      fill: (theme: Theme) => theme.palette.base?.text.disabled,
    },
    "&:hover": {
      backgroundColor: (theme: Theme) =>
        theme.palette.primary?.outlinedHoverBackground,
    },
  },
  "&.MuiCheckbox-colorBase": {
    "&.Mui-checked": {
      fill: (theme: Theme) => theme.palette.base?.dark,
    },
    "&.Mui-disabled": {
      fill: (theme: Theme) => theme.palette.base?.text.disabled,
    },
    "&:hover": {
      backgroundColor: (theme: Theme) => theme.palette.base?.state.hover,
    },
  },
  "&.Mui-disabled": {
    fill: (theme: Theme) => theme.palette.base?.text.disabled,
  },
  "&.MuiCheckbox-colorSecondary": {
    "&.Mui-checked": {
      fill: (theme: Theme) => theme.palette.secondary?.dark,
    },
    "&.Mui-disabled": {
      fill: (theme: Theme) => theme.palette.base?.text.disabled,
    },
    "&:hover": {
      backgroundColor: (theme: Theme) =>
        theme.palette.secondary?.outlinedHoverBackground,
    },
  },
  "&.MuiCheckbox-colorWarning": {
    "&.Mui-checked": {
      fill: (theme: Theme) => theme.palette.warning?.main,
    },
    "&.Mui-disabled": {
      fill: (theme: Theme) => theme.palette.base?.text.disabled,
    },
    "&:hover": {
      backgroundColor: (theme: Theme) =>
        theme.palette.warning?.outlinedHoverBackground,
    },
  },
  "&.MuiCheckbox-colorSuccess": {
    "&.Mui-checked": {
      fill: (theme: Theme) => theme.palette.success?.main,
    },
    "&.Mui-disabled": {
      fill: (theme: Theme) => theme.palette.base?.text.disabled,
    },
    "&:hover": {
      backgroundColor: (theme: Theme) =>
        theme.palette.success?.outlinedHoverBackground,
    },
  },
  "&.MuiCheckbox-colorInfo": {
    "&.Mui-checked": {
      fill: (theme: Theme) => theme.palette.info?.main,
    },
    "&.Mui-disabled": {
      fill: (theme: Theme) => theme.palette.base?.text.disabled,
    },
    "&:hover": {
      backgroundColor: (theme: Theme) =>
        theme.palette.info?.outlinedHoverBackground,
    },
  },
  "&.MuiCheckbox-colorError": {
    "&.Mui-checked": {
      fill: (theme: Theme) => theme.palette.error?.main,
    },
    "&.Mui-disabled": {
      fill: (theme: Theme) => theme.palette.base?.text.disabled,
    },
    "&:hover": {
      backgroundColor: (theme: Theme) =>
        theme.palette.error?.outlinedHoverBackground,
    },
  },
};
