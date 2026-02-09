export const NAV_ANIMATION = "width 0.25s";

export const NAV_ICON_PADDING = "4px";

export const NAV_ICON_SIZE_PX = "24px";

export let navBackgroundTransparent = false;

export let navChildHeightPx = 56;

export let navChildMarginPx = 0;

export let navIsInWideMode = false;

export let navMaxWidthPx = "288px";

export let navBorder = true;

export const navItemPaddingPx = (wideMode: boolean) =>
  `calc((${navItemSizePx(
    wideMode
  )} - ${NAV_ICON_SIZE_PX} - ${NAV_ICON_PADDING} * 2 ) / 2)`;

export const navItemSizePx = (wideMode: boolean) =>
  wideMode ? "72px" : "56px";

export const navLogoLeftMargin = (wideMode: boolean) =>
  wideMode ? "8px" : "0px";

export const navSetBackgroundTransparent = (transparent: boolean) =>
  (navBackgroundTransparent = transparent);

export const navSetChildHeightPx = (height: number) =>
  (navChildHeightPx = height);

export const navSetChildMarginPx = (margin: number) =>
  (navChildMarginPx = margin);

export const navSetMaxWidthPx = (maxWidth: number) =>
  (navMaxWidthPx = maxWidth + "px");

export const navSetWideMode = (wideMode: boolean) =>
  (navIsInWideMode = wideMode);

export const navSetBorder = (border: boolean) => (navBorder = border);
