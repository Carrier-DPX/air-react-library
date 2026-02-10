/**
 * Figma Code Connect for MobileStatusBar
 *
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=40383-1657
 */

import figma from "@figma/code-connect";
import MobileStatusBar from "./MobileStatusBar";

figma.connect(
  MobileStatusBar,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=40383-1657",
  {
    props: {
      time: figma.string("time"),
      position: figma.enum("position", {
        fixed: "fixed",
        relative: "relative",
        static: "static",
      }),
    },
    example: (props) => <MobileStatusBar time={props.time ?? "9:41"} position={props.position} />,
  }
);
