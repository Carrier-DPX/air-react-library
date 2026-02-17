import { CSSObject } from "@mui/material";
import { Theme } from "@mui/material/styles";

import { getColorInner, getColorOuter } from "./utils";
import { StyleProps } from "./types";

export default {
  circleInner: ({ theme, severity, size }: StyleProps): CSSObject => ({
    height: size,
    width: size,
    borderRadius: "50%",
    backgroundColor: getColorInner(theme as unknown as Theme, severity),
    position: "absolute",
  }),
  circleOuter: ({ theme, severity, size }: StyleProps): CSSObject => {
    const roundedOuterSize = Math.round(size * 1.5);
    return {
      height: roundedOuterSize,
      width: roundedOuterSize,
      borderRadius: "50%",
      filter: `blur(${size / 6}px)`,
      backgroundColor: getColorOuter(theme as unknown as Theme, severity),
      "will-change": "transform",
    };
  },
  containerCircle: ({ size }: Pick<StyleProps, "size">): CSSObject => ({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: size,
    height: size,
  }),
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  } as CSSObject,
};
