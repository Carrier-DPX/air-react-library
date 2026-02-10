import { forwardRef, SVGProps } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "../Box";
import Typography from "../Typography";

const STATUS_BAR_HEIGHT = 59;
const DYNAMIC_ISLAND_WIDTH = 125;
const DYNAMIC_ISLAND_HEIGHT = 37;

/** Inline iOS-style signal bars icon; fill uses currentColor. */
function IosSignalIcon({ sx, ...rest }: { sx?: object } & SVGProps<SVGSVGElement>) {
  return (
    <Box
      {...({
        component: "svg",
        width: 18,
        height: 12,
        viewBox: "0 0 18 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        sx: { flexShrink: 0, ...sx },
        ...rest,
      } as any)}
    >
      <path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="currentColor" />
      <path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="currentColor" />
      <path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="currentColor" />
      <path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="currentColor" />
    </Box>
  );
}

/** Inline iOS-style wifi icon; fill uses currentColor. */
function IosWifiIcon({ sx, ...rest }: { sx?: object } & SVGProps<SVGSVGElement>) {
  return (
    <Box
      {...({
        component: "svg",
        width: 17,
        height: 12,
        viewBox: "0 0 17 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        sx: { flexShrink: 0, ...sx },
        ...rest,
      } as any)}
    >
      <path d="M6.11524 8.91875C7.53496 7.69319 9.61439 7.69332 11.0342 8.91875C11.1056 8.98468 11.1475 9.07827 11.1494 9.17656C11.1514 9.2748 11.1136 9.36943 11.0449 9.43828L8.82129 11.7283C8.75619 11.7956 8.66781 11.8337 8.5752 11.8338C8.48249 11.8338 8.3933 11.7956 8.32813 11.7283L6.1045 9.43828C6.03589 9.3694 5.998 9.27476 6 9.17656C6.00204 9.07827 6.04375 8.98463 6.11524 8.91875Z" fill="currentColor" />
      <path d="M3.10938 6.17851C6.16846 3.27392 10.9058 3.27392 13.9648 6.17851C14.0339 6.24662 14.0732 6.34029 14.0742 6.43828C14.0751 6.53616 14.0373 6.63055 13.9697 6.7L12.6846 8.02519C12.5521 8.16047 12.338 8.16378 12.2022 8.03203C11.1977 7.1036 9.89123 6.58961 8.53614 6.58964C7.18182 6.59022 5.87597 7.10412 4.87208 8.03203C4.7362 8.16378 4.52209 8.16054 4.38965 8.02519L3.1045 6.7C3.03674 6.63064 2.99918 6.53621 3.00001 6.43828C3.00091 6.34031 3.04039 6.24661 3.10938 6.17851Z" fill="currentColor" />
      <path d="M0.107427 3.44218C4.79928 -1.14743 12.2007 -1.14736 16.8926 3.44218C16.9605 3.51037 16.9994 3.60373 17 3.70097C17.0005 3.79806 16.9625 3.89184 16.8955 3.96074L15.6094 5.28593C15.4769 5.42191 15.2616 5.42362 15.127 5.28984C13.3393 3.55507 10.9666 2.5878 8.5 2.58769C6.03337 2.58781 3.66078 3.55507 1.87305 5.28984C1.73851 5.42373 1.52304 5.42208 1.39063 5.28593L0.103521 3.96074C0.036551 3.89181 -0.000494227 3.79803 4.98051e-06 3.70097C0.0006317 3.60373 0.0394612 3.51032 0.107427 3.44218Z" fill="currentColor" />
    </Box>
  );
}

/** Inline iOS-style battery icon; fill uses currentColor. */
function IosBatteryIcon({ sx, ...rest }: { sx?: object } & SVGProps<SVGSVGElement>) {
  return (
    <Box
      {...({
        component: "svg",
        width: 28,
        height: 13,
        viewBox: "0 0 28 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        sx: { flexShrink: 0, ...sx },
        ...rest,
      } as any)}
    >
      <path d="M15 2C16.1046 2 17 2.89543 17 4V9C17 10.1046 16.1046 11 15 11H4C2.89543 11 2 10.1046 2 9V4C2 2.89543 2.89543 2 4 2H15Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M21 0C23.2091 4.62576e-07 25 1.79086 25 4V9C25 11.2091 23.2091 13 21 13H4C1.79086 13 1.2776e-07 11.2091 0 9V4C0 1.79086 1.79086 0 4 0H21ZM4 1C2.34315 1 1 2.34315 1 4V9C1 10.6569 2.34315 12 4 12H21C22.6569 12 24 10.6569 24 9V4C24 2.34315 22.6569 1 21 1H4Z" fill="currentColor" />
      <path d="M26 5C26.8491 5.35744 27.4014 6.18912 27.4014 7.11035C27.4013 8.03151 26.849 8.86329 26 9.2207V5Z" fill="currentColor" />
    </Box>
  );
}

export interface MobileStatusBarProps {
  /**
   * Time string shown on the left (e.g. "9:41").
   * @default "9:41"
   */
  time?: string;
  /**
   * Layout position. Use "fixed" for a sticky status bar; use "relative" or "static" when inside a layout.
   * @default "fixed"
   */
  position?: "fixed" | "relative" | "static";
  /**
   * Whether to show background color (base.background.paper) or transparent.
   * @default true
   */
  background?: boolean;
  /**
   * Additional sx passed to the root container.
   */
  sx?: object;
}

/** iOS-style mobile status bar: time, Dynamic Island pill, and status icons (signal, wifi, battery).
 *
 * Height 59px. Time and icons use theme common.black. Dynamic Island is 125×37px, #000, pill shape.
 *
 * // Default import
 * import MobileStatusBar from '@carrier-dpx/air-react-library/MobileStatusBar'
 *
 * // Named import
 * import { MobileStatusBar } from '@carrier-dpx/air-react-library'
 */
const MobileStatusBar = forwardRef<HTMLDivElement, MobileStatusBarProps>(
  ({ time = "9:41", position = "fixed", background = true, sx, ...rest }, ref) => {
    const theme = useTheme();
    const iconColor = theme.palette.common?.black ?? "#000000";

    return (
      <Box
        ref={ref}
        sx={{
          position,
          ...(position === "fixed" ? { top: 0, left: 0, right: 0, zIndex: theme.zIndex?.appBar ?? 1100 } : {}),
          height: STATUS_BAR_HEIGHT,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          backgroundColor: background 
            ? theme.palette.base?.background.paper 
            : "transparent",
          ...sx,
        }}
        {...rest}
      >
        <Typography
          variant="body1Bold"
          sx={{ color: iconColor }}
        >
          {time}
        </Typography>

        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: DYNAMIC_ISLAND_WIDTH,
            height: DYNAMIC_ISLAND_HEIGHT,
            backgroundColor: "#000",
            borderRadius: `${DYNAMIC_ISLAND_HEIGHT / 2}px`, // Pill shape: half of height (18.5px)
          }}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.75,
            color: iconColor,
          }}
        >
          <IosSignalIcon />
          <IosWifiIcon />
          <IosBatteryIcon />
        </Box>
      </Box>
    );
  }
);

MobileStatusBar.displayName = "MobileStatusBar";

export default MobileStatusBar;
