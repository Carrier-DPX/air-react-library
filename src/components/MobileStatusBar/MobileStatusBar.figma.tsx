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
    example: () => <MobileStatusBar time="9:41" position="fixed" />,
  }
);
