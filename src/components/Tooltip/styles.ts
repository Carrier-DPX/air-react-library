import { Theme } from "@mui/material";

const tooltipArrowBeforeSx = {
  "&:before": {
    backgroundColor: (theme: Theme) => theme.palette.base?.background?.paper,
    boxShadow: (theme: Theme) => theme.shadows[2],
  },
};

export const baseTooltipSx = {
  backgroundColor: (theme: Theme) => theme.palette.base?.background?.paper,
  color: (theme: Theme) => theme.palette.base?.text?.primary,
  boxShadow: (theme: Theme) => theme.shadows[2],
  fontSize: "12px",
  lineHeight: "14px",
  "&.MuiTooltip-tooltipPlacementLeft": {
    "& .MuiTooltip-arrow": {
      marginRight: "-0.6em!important",
      ...tooltipArrowBeforeSx,
    },
  },
  "&.MuiTooltip-tooltipPlacementTop": {
    "& .MuiTooltip-arrow": {
      marginBottom: "-0.6em!important",
      ...tooltipArrowBeforeSx,
    },
  },
  "&.MuiTooltip-tooltipPlacementRight": {
    "& .MuiTooltip-arrow": {
      marginLeft: "-0.6em!important",
      ...tooltipArrowBeforeSx,
    },
  },
  "&.MuiTooltip-tooltipPlacementBottom": {
    "& .MuiTooltip-arrow": {
      marginTop: "-0.6em !important",
      ...tooltipArrowBeforeSx,
    },
  },
};
