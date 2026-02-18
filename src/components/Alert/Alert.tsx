import { forwardRef } from "react";

import MuiAlert from "@mui/material/Alert";
import { styled } from "@mui/material/styles";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

import IconButton from "../IconButton";
import styles from "./styles";
import { AlertProps } from "./types";

const StyledAlert = styled(MuiAlert)(styles);

/** The Alert component provides contextual feedback through description, iconography, and color.
 *
 * // Default import
 * import Alert from '@carrier-io/air-react/Alert'
 *
 * // Named import
 * import { Alert } from '@carrier-io/air-react'
 */
const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      onClose,
      severity = "warning",
      variant = "standard",
      color,
      iconMapping = {
        // Default value for success icon passed here to prevent import React inside FleetThemeConfigs
        success: <CheckCircleIcon fontSize="inherit" />,
      },
      action,
      ...rest
    },
    ref
  ) => {
    const alertColor = color ?? severity;

    const resolvedIconMapping = {
      warning: <WarningIcon fontSize="inherit" />,
      error: <ErrorIcon fontSize="inherit" />,
      info: <InfoIcon fontSize="inherit" />,
      success: <CheckCircleIcon fontSize="inherit" />,
      ...iconMapping,
    };

    return (
      <StyledAlert
        color={color}
        severity={severity}
        variant={variant}
        iconMapping={resolvedIconMapping}
        action={
          <>
            {action}
            {onClose && (
              <IconButton
                aria-label="Close"
                onClick={onClose}
                sx={{
                  width: "28px",
                  height: "28px",
                  fontSize: "20px",
                  color: (theme) =>
                    variant == "filled"
                      ? theme.palette[alertColor]?.contrastText
                      : theme.palette.base?.state.active,
                  marginLeft: "12px",
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            )}
          </>
        }
        {...rest}
        ref={ref}
      />
    );
  }
);

Alert.displayName = "Alert";

export default Alert;
export type { AlertProps };
