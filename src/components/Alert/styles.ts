import { AlertProps, alertClasses } from "@mui/material/Alert";
import { StyledComponentDefaultProps } from "../types/common";

const styles = ({
  theme,
  color,
  variant,
  severity = "warning",
}: AlertProps & StyledComponentDefaultProps) => {
  const alertColor = color ?? severity;

  // Standard variant styles
  const standardStyles =
    variant === "standard"
      ? {
          backgroundColor: theme.palette[alertColor]?.background,
          color: theme.palette.base?.text.primary,
        }
      : {};

  // Outlined variant styles
  const outlinedStyles =
    variant === "outlined"
      ? {
          backgroundColor: theme.palette.base?.background.paper,
          borderColor: theme.palette[alertColor]?.main,
          color: theme.palette.base?.text.primary,
        }
      : {};

  // Filled variant styles
  const filledStyles =
    variant === "filled"
      ? {
          backgroundColor: theme.palette[alertColor]?.main,
          color: theme.palette[alertColor]?.contrastText,
        }
      : {};

  // Icon color based on variant
  const iconColor =
    variant === "filled"
      ? theme.palette[alertColor]?.contrastText
      : theme.palette[alertColor]?.main;

  return {
    ...standardStyles,
    ...outlinedStyles,
    ...filledStyles,
    [`.${alertClasses.icon}`]: {
      opacity: 1,
      alignItems: "center",
      fontSize: "20px",
      color: iconColor,
    },
    "&.MuiPaper-rounded": {
      borderRadius: 4,
    },
    "& .MuiAlert-message": {
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      ...theme.typography.body2Semibold,
    },
    "& .MuiAlert-action": {
      alignItems: "center",
      paddingTop: 0,
      marginRight: 0,
      "& .MuiButtonBase-root.MuiButton-root": {
        color: `${theme.palette[alertColor]?.main} !important`,
        "&:hover": {
          color: `${theme.palette[alertColor]?.main} !important`,
        },
      },
    },
  };
};

export default styles;
