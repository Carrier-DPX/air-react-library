import { CSSObject } from "@mui/material";
import {
  navItemSizePx,
  navLogoLeftMargin,
  navIsInWideMode,
} from "../constants";

export default {
  container: () =>
    ({
      width: "100%",
      "& button": {
        marginRight: navItemSizePx(navIsInWideMode),
        marginLeft: navLogoLeftMargin(navIsInWideMode),
        paddingLeft: "4px",
      },
    } as CSSObject),
};
