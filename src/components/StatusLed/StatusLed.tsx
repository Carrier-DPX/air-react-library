import React from "react";
import { styled } from "@mui/material/styles";
import Box from "../Box";
import { Severity, StatusLedProps, StyleProps } from "./types";
import Typography from "../Typography";
import styles from "./styles";

const CircleInnerStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "size",
})<Omit<StyleProps, "theme">>(styles.circleInner);

const CircleOuterStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "size",
})<Omit<StyleProps, "theme">>(styles.circleOuter);

const BoxCircleStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "size",
})<Pick<StyleProps, "size">>(styles.containerCircle);

const BoxStyled = styled(Box)(styles.container);

/**
 * The StatusLED pattern provides on and off states and serves as a visual cue intended to attract
 * the user's attention and communicate severity level information.
 *
 * //Default Import
 * `import StatusLed from '@carrier-io/air-react/StatusLed'`
 */
const StatusLed: React.FC<StatusLedProps> = ({
  severity = Severity.Default,
  glow = false,
  size = 12,
  label,
  labelPosition = "end",
  ...rest
}) => {
  const circleSize = size * 2;

  return (
    <BoxStyled data-testid={rest["data-testid"]}>
      {label && labelPosition === "start" && (
        <Typography
          variant="body2"
          aria-label="label"
          sx={(theme) => ({ mr: 0.5, color: theme.palette.base?.text.primary })}
        >
          {label}
        </Typography>
      )}
      <BoxCircleStyled size={circleSize}>
        {glow && (
          <CircleOuterStyled
            severity={severity}
            size={size}
            aria-label="circle-outer"
          />
        )}
        <CircleInnerStyled
          severity={severity}
          size={size}
          aria-label="circle-inner"
        />
      </BoxCircleStyled>
      {label && labelPosition === "end" && (
        <Typography
          variant="body2"
          aria-label="label"
          sx={(theme) => ({ mr: 0.5, color: theme.palette.base?.text.primary })}
        >
          {label}
        </Typography>
      )}
    </BoxStyled>
  );
};

export default StatusLed;
export type { StatusLedProps };
