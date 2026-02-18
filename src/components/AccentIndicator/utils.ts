import { Position } from "../types/common";

export const setBorderRadius = (align: Position): string => {
  switch (align) {
    case "top":
      return "4px 4px 0 0";
    case "bottom":
      return "0 0 4px 4px";
    case "right":
      return "0 4px 4px 0";
    default:
      return "4px 0 0 4px";
  }
};
