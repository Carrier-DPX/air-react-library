import React, { FC } from "react";
import clsx from "clsx";
import Box from "../Box";
import styles from "./styles";
import { styled } from "@mui/material/styles";
import { Orientation, Position, AccentType } from "../types/common";
import { AccentIndicatorProps } from "./types";
import { getAccentColor } from "../utils/getAccentColor";

const AccentIndicatorStyled = styled(Box)(styles.indicator);

const baseClassName = "accent-indicator";

/** The AccentIndicator pattern is a visual cue intended to attract the user's attention and communicate severity level information.
 *
 *  //Default Import
 * `import AccentIndicator from '@carrier-io/air-react/AccentIndicator'`
 *
 *  //Named Import
 *  `import { AccentIndicator } from '@carrier-io/air-react'`
 */

export const AccentIndicator: FC<AccentIndicatorProps> = ({
  sx,
  className,
  severity = AccentType.Primary,
  customBgColor = "",
  orientation = Orientation.Vertical,
  alignment = Position.Right,
  ...rest
}) => {
  const bgColor = customBgColor || getAccentColor(severity);
  return (
    <AccentIndicatorStyled
      role="accent"
      severity={severity}
      alignment={alignment}
      custombgcolor={bgColor}
      orientation={orientation}
      className={clsx(
        baseClassName,
        className,
        `${baseClassName}--${orientation}`,
        `align--${alignment}`,
        {
          [`${baseClassName}--${severity}`]: customBgColor === "" && severity,
        }
      )}
      sx={sx}
      {...rest}
    />
  );
};

export default AccentIndicator;
export type { AccentIndicatorProps };
