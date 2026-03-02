import { chipClasses } from "@mui/material/Chip";
import { Theme } from "@mui/material/styles";
import { StyledTagProps, TagProps } from "./types";
import { StyledComponentDefaultProps } from "../types/common";
import { ChipHeightMap } from "../utils/HeightUtils";

const getBackgroundColor = (
  theme: Theme,
  color: TagProps["color"] = "success"
) => {
  if (color === "base") {
    return theme.palette.base?.state.selected;
  }
  return (
    theme.palette[color]?.selectedHover ?? theme.palette.success.selectedHover
  );
};

const getContentColor = (
  theme: Theme,
  color: TagProps["color"] = "success"
) => {
  if (color === "base") {
    return theme.palette.base?.text.secondary;
  }
  if (color === "primary") {
    return theme.palette.primary.main;
  }
  if (color === "warning") {
    return theme.palette.warning.dark;
  }

  return (
    theme.palette[color]?.containedHoverBackground ??
    theme.palette.success.containedHoverBackground
  );
};
const styles = ({
  theme,
  color = "success",
  disabled,
  size,
}: StyledTagProps & StyledComponentDefaultProps) => {
  const commonLabelStyles = {
    fontSize: "0.75rem",
    itemSpacing: "4px",
    padding: "4px",
  };

  const commonIconStyles = {
    marginLeft: "4px",
    marginRight: "-4px",
    width: "16px",
    height: "16px",
    itemSpacing: "4px",
  };

  const sizeStyles = (size === "xsmall" || size === "micro") && {
    height: ChipHeightMap[size],
    [`.${chipClasses.label}`]: commonLabelStyles,
  };

  const disabledStyles = disabled && {
    backgroundColor: `${theme.palette.base?.state.disabledBackground}!important`,
    opacity: "1 !important",
    [`& .${chipClasses.label}`]: {
      color: theme.palette.base?.text.disabled,
    },
    [`& .${chipClasses.icon}`]: {
      ...commonIconStyles,
      color: theme.palette.base?.text.disabled,
    },
  };

  const enabledStyles = !disabled && {
    backgroundColor: getBackgroundColor(theme, color),
    [`& .${chipClasses.label}`]: {
      color: getContentColor(theme, color),
    },
    [`& .${chipClasses.icon}`]: {
      ...commonIconStyles,
      color: getContentColor(theme, color),
    },
  };

  return {
    ...sizeStyles,
    ...disabledStyles,
    ...enabledStyles,
  };
};

export default styles;
