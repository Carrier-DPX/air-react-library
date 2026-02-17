import { forwardRef, Ref } from "react";

import {
  alpha,
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { TouchRippleActions } from "@mui/material/ButtonBase/TouchRipple";

import {
  activeShadowAlpha,
  baseMargin,
  basePadding,
  baseTransitionDuration,
  baseShadowVariant,
  TrackWidthMap,
  TrackHeightMap,
  ThumbSizeMap,
  ShadowRadiusMap,
} from "../utils/SwitchUtils";
import fleetPalette from "../theme/constants/colors";

export interface SwitchProps extends Omit<MuiSwitchProps, "color"> {
  /**
   *
   * Colors that make sense for this component
   * @default primary
   */
  color?:
    | "base"
    | "primary"
    | "secondary"
    | "warning"
    | "success"
    | "info"
    | "error";
  /**
   *
   * A ref that points to the TouchRipple element.
   */
  touchRippleRef?: Ref<TouchRippleActions>;
}

// overriding MUI switch style to match Air switch style
const StyledMuiSwitch = styled(MuiSwitch)<MuiSwitchProps>(({ theme }) => ({
  "&.MuiSwitch-root": {
    "& .MuiSwitch-switchBase": {
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.base?.state.disabledContent,
        borderRadius: 10,
        opacity: 1,
      },

      "& .MuiSwitch-thumb, & > svg": {
        borderRadius: "100%",
        boxShadow: theme.shadows[baseShadowVariant],
        boxSizing: "border-box",
      },

      "& .MuiSwitch-thumb, & > svg, & + .MuiSwitch-track": {
        transition: theme.transitions.create(["background-color", "color"], {
          duration: theme.transitions.duration.standard,
          easing: theme.transitions.easing.easeInOut,
        }),
      },

      "& > svg": {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.action.disabled,
      },

      //Common white token applied to Checked Thumb for all colors
      "&.Mui-checked .MuiSwitch-thumb": {
        backgroundColor: theme.palette.base?.common.white,
      },

      "&.Mui-checked:not(.Mui-disabled)": {
        "&.MuiSwitch-colorDefault": {
          "& + .MuiSwitch-track": {
            backgroundColor: theme.palette.primary.main,
            opacity: 1,
          },

          "& > svg": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },

          color: theme.palette.primary.main,
        },

        "&.MuiSwitch-colorError": {
          "& + .MuiSwitch-track": {
            backgroundColor: theme.palette.error.main,
            opacity: 1,
          },

          "& > svg": {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
          },

          color: theme.palette.error.main,
        },
        "&.MuiSwitch-colorBase": {
          "& + .MuiSwitch-track": {
            backgroundColor: theme.palette.base?.state.active,
            opacity: 1,
          },

          "&:hover, &.Mui-focusVisible": {
            "&.MuiSwitch-colorBase": {
              "& .MuiSwitch-thumb, & > svg": {
                boxShadow: `
                0 0 0 ${ShadowRadiusMap.medium} ${alpha(
                  fleetPalette.base?.dark,
                  activeShadowAlpha
                )},
                ${theme.shadows[baseShadowVariant]}`,
              },
            },
          },
          "&.Mui-disabled": {
            "&.MuiSwitch-colorBase": {
              "& + .MuiSwitch-track": {
                backgroundColor: theme.palette.base?.state.disabledBackground,
                opacity: 1,
              },
              "& .MuiSwitch-thumb": {
                backgroundColor: theme.palette.base?.background.paper,
              },
            },
          },
        },

        "&.MuiSwitch-colorInfo": {
          "& + .MuiSwitch-track": {
            backgroundColor: theme.palette.info.main,
            opacity: 1,
          },

          "& > svg": {
            backgroundColor: theme.palette.info.main,
            color: theme.palette.info.contrastText,
          },

          color: theme.palette.info.main,
        },

        "&.MuiSwitch-colorPrimary": {
          "& + .MuiSwitch-track": {
            backgroundColor: theme.palette.primary.main,
            opacity: 1,
          },

          "& > svg": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },

          color: theme.palette.primary.main,
        },

        "&.MuiSwitch-colorSecondary": {
          "& + .MuiSwitch-track": {
            backgroundColor: theme.palette.secondary.light,
            opacity: 1,
          },

          "& > svg": {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          },

          color: theme.palette.secondary.main,
        },

        "&.MuiSwitch-colorSuccess": {
          "& + .MuiSwitch-track": {
            backgroundColor: theme.palette.success.main,
            opacity: 1,
          },

          "& > svg": {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.success.contrastText,
          },

          color: theme.palette.success.main,
        },

        "&.MuiSwitch-colorWarning": {
          "& + .MuiSwitch-track": {
            backgroundColor: theme.palette.warning.main,
            opacity: 1,
          },

          "& > svg": {
            backgroundColor: theme.palette.warning.main,
            color: theme.palette.warning.contrastText,
          },

          color: theme.palette.warning.main,
        },
      },

      "&.Mui-disabled": {
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.action.disabledBackground,
          opacity: 1,
        },

        "& .MuiSwitch-thumb": {
          color: theme.palette.background.default,
        },

        "& > svg": {
          backgroundColor: theme.palette.background.default,
          color: theme.palette.action.disabled,
        },
      },

      margin: baseMargin,
      padding: basePadding,
      transitionDuration: baseTransitionDuration,
    },
    overflow: "visible",
    padding: basePadding,
  },

  "&.MuiSwitch-sizeMedium": {
    "& .MuiSwitch-switchBase": {
      "&.Mui-checked": {
        "&:hover, &.Mui-focusVisible": {
          "&.MuiSwitch-colorDefault": {
            "& .MuiSwitch-thumb, & > svg": {
              boxShadow: `
                0 0 0 ${ShadowRadiusMap.medium} ${alpha(
                theme.palette.primary.main,
                activeShadowAlpha
              )},
                ${theme.shadows[baseShadowVariant]}
              `,
            },
          },

          "&.MuiSwitch-colorError": {
            "& .MuiSwitch-thumb, & > svg": {
              boxShadow: `
                0 0 0 ${ShadowRadiusMap.medium} ${alpha(
                theme.palette.error.main,
                activeShadowAlpha
              )},
                ${theme.shadows[baseShadowVariant]}
              `,
            },
          },

          "&.MuiSwitch-colorInfo": {
            "& .MuiSwitch-thumb, & > svg": {
              boxShadow: `
                0 0 0 ${ShadowRadiusMap.medium} ${alpha(
                theme.palette.info.main,
                activeShadowAlpha
              )},
                ${theme.shadows[baseShadowVariant]}
              `,
            },
          },

          "&.MuiSwitch-colorPrimary": {
            "& .MuiSwitch-thumb, & > svg": {
              boxShadow: `
                0 0 0 ${ShadowRadiusMap.medium} ${alpha(
                theme.palette.primary.main,
                activeShadowAlpha
              )},
                ${theme.shadows[baseShadowVariant]}
              `,
            },
          },

          "&.MuiSwitch-colorSecondary": {
            "& .MuiSwitch-thumb, & > svg": {
              boxShadow: `
                0 0 0 ${ShadowRadiusMap.medium} ${alpha(
                theme.palette.secondary.main,
                activeShadowAlpha
              )},
                ${theme.shadows[baseShadowVariant]}
              `,
            },
          },

          "&.MuiSwitch-colorSuccess": {
            "& .MuiSwitch-thumb, & > svg": {
              boxShadow: `
                0 0 0 ${ShadowRadiusMap.medium} ${alpha(
                theme.palette.success.main,
                activeShadowAlpha
              )},
                ${theme.shadows[baseShadowVariant]}
              `,
            },
          },

          "&.MuiSwitch-colorWarning": {
            "& .MuiSwitch-thumb, & > svg": {
              boxShadow: `
                0 0 0 ${ShadowRadiusMap.medium} ${alpha(
                theme.palette.warning.main,
                activeShadowAlpha
              )},
                ${theme.shadows[baseShadowVariant]}
              `,
            },
          },
        },

        transform: "translateX(18px)",
      },

      "&:hover .MuiSwitch-thumb, &.Mui-focusVisible .MuiSwitch-thumb, &:hover > svg, &.Mui-focusVisible > svg":
        {
          boxShadow: `
                0 0 0 ${ShadowRadiusMap.medium} ${theme.palette.action.hover},
                ${theme.shadows[baseShadowVariant]}
              `,
        },
    },

    "& .MuiSwitch-thumb, & svg": {
      height: ThumbSizeMap.medium,
      width: ThumbSizeMap.medium,
    },

    height: TrackHeightMap.medium,
    width: TrackWidthMap.medium,
  },

  "&.MuiSwitch-sizeSmall": {
    "& .MuiSwitch-switchBase": {
      "&.Mui-checked": {
        "&:hover, &.Mui-focusVisible": {
          "&.MuiSwitch-colorDefault": {
            "& .MuiSwitch-thumb, & > svg": {
              boxShadow: `
                0 0 0 ${ShadowRadiusMap.small} ${alpha(
                theme.palette.primary.main,
                activeShadowAlpha
              )},
                ${theme.shadows[baseShadowVariant]}
              `,
            },
          },

          "&.MuiSwitch-colorError": {
            "& .MuiSwitch-thumb, & > svg": {
              boxShadow: `
                0 0 0 ${ShadowRadiusMap.small} ${alpha(
                theme.palette.error.main,
                activeShadowAlpha
              )},
                ${theme.shadows[baseShadowVariant]}
              `,
            },
          },
          "&.MuiSwitch-colorBase": {
            "& .MuiSwitch-thumb, & > svg": {
              boxShadow: `
                0 0 0 ${ShadowRadiusMap.small} ${alpha(
                theme.palette.secondary.main,
                activeShadowAlpha
              )},
                ${theme.shadows[baseShadowVariant]}
              `,
            },
          },

          "&.MuiSwitch-colorInfo": {
            "& .MuiSwitch-thumb, & > svg": {
              boxShadow: `
                0 0 0 ${ShadowRadiusMap.small} ${alpha(
                theme.palette.info.main,
                activeShadowAlpha
              )},
                ${theme.shadows[baseShadowVariant]}
              `,
            },
          },

          "&.MuiSwitch-colorPrimary": {
            "& .MuiSwitch-thumb, & > svg": {
              boxShadow: `
                0 0 0 ${ShadowRadiusMap.small} ${alpha(
                theme.palette.primary.main,
                activeShadowAlpha
              )},
                ${theme.shadows[baseShadowVariant]}
              `,
            },
          },

          "&.MuiSwitch-colorSecondary": {
            "& .MuiSwitch-thumb, & > svg": {
              boxShadow: `
                0 0 0 ${ShadowRadiusMap.small} ${alpha(
                theme.palette.secondary.main,
                activeShadowAlpha
              )},
                ${theme.shadows[baseShadowVariant]}
              `,
            },
          },

          "&.MuiSwitch-colorSuccess": {
            "& .MuiSwitch-thumb, & > svg": {
              boxShadow: `
                0 0 0 ${ShadowRadiusMap.small} ${alpha(
                theme.palette.success.main,
                activeShadowAlpha
              )},
                ${theme.shadows[baseShadowVariant]}
              `,
            },
          },

          "&.MuiSwitch-colorWarning": {
            "& .MuiSwitch-thumb, & > svg": {
              boxShadow: `
                0 0 0 ${ShadowRadiusMap.small} ${alpha(
                theme.palette.warning.main,
                activeShadowAlpha
              )},
                ${theme.shadows[baseShadowVariant]}
              `,
            },
          },
        },

        transform: "translateX(16px)",
      },

      "&:hover .MuiSwitch-thumb, &.Mui-focusVisible .MuiSwitch-thumb, &:hover > svg, &.Mui-focusVisible > svg":
        {
          boxShadow: `
                0 0 0 ${ShadowRadiusMap.small} ${theme.palette.action.hover},
                ${theme.shadows[baseShadowVariant]}
              `,
        },
    },

    "& .MuiSwitch-thumb, & svg": {
      height: ThumbSizeMap.small,
      width: ThumbSizeMap.small,
    },

    height: TrackHeightMap.small,
    width: TrackWidthMap.small,
  },
}));

/** The Switch component turns the state of a single setting on or off.
 *
 * `import Switch from '@carrier-io/air-react/Switch'`;
 */

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ color = "primary", ...otherProps }, ref) => {
    return <StyledMuiSwitch color={color as any} {...otherProps} ref={ref} />;
  }
);

Switch.displayName = "Switch";

export default Switch;
export type { SwitchProps };
