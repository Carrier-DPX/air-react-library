import { CSSObject } from "@mui/material";

export default {
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "24px",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
} as {
  [key in "container"]: CSSObject;
};
