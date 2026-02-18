import { setBorderRadius } from "./utils";
import { AccentIndicatorStyles } from "./types";
import { Orientation, Position } from "../types/common";

export default {
  indicator: ({
    custombgcolor,
    orientation,
    alignment,
  }: AccentIndicatorStyles) => {
    const placementStyles =
      orientation === Orientation.Horizontal
        ? {
            width: "100%",
            height: "2px",
          }
        : {
            width: "2px",
            height: "100%",
          };

    return {
      backgroundColor: custombgcolor,
      borderRadius: setBorderRadius(alignment as Position),
      ...placementStyles,
    };
  },
};
