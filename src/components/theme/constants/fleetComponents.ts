import { Components } from "@mui/material/styles";
import { TypographyVariantMapping, fleetTypography } from "./typography";
import fleetPalette from "./colors";

const fleetComponents: Components = {
  MuiCssBaseline: {
    defaultProps: {
      enableColorScheme: false,
    },
  },
  MuiAccordion: {
    defaultProps: {
      defaultExpanded: false,
      disabled: false,
      disableGutters: true,
      square: false,
      elevation: 0,
    },
  },
  MuiAccordionActions: {
    defaultProps: {
      disableSpacing: false,
    },
  },
  MuiAvatar: {
    defaultProps: {
      variant: "rounded",
    },
  },
  MuiSnackbar: {
    defaultProps: {
      anchorOrigin: { horizontal: "right", vertical: "bottom" },
      autoHideDuration: null,
      disableWindowBlurListener: false,
      open: false,
      TransitionProps: {},
    },
  },
  MuiSnackbarContent: {
    defaultProps: {
      elevation: 3,
    },
  },
  MuiBackdrop: {
    defaultProps: {
      invisible: false,
      open: false,
    },
  },
  MuiBadge: {
    defaultProps: {
      color: "primary",
    },
  },
  MuiBottomNavigation: {
    defaultProps: {
      showLabels: false,
    },
  },
  MuiBottomNavigationAction: {
    defaultProps: {
      showLabel: false,
    },
  },
  MuiButtonBase: {
    defaultProps: {
      centerRipple: false,
      disabled: false,
      disableRipple: true,
      disableTouchRipple: true,
      focusRipple: true,
      LinkComponent: "a",
    },
  },
  MuiButton: {
    defaultProps: {
      size: "large",
    },
    styleOverrides: {
      root: {
        "&.MuiButton-sizeXsmall": {
          ...fleetTypography.body3Bold,
          height: "24px",
        },
        "&.MuiButton-sizeSmall": {
          ...fleetTypography.body3Bold,
          height: "32px",
        },
        "&.MuiButton-sizeMedium": {
          ...fleetTypography.body2Bold,
          height: "40px",
        },
        "&.MuiButton-sizeLarge": {
          ...fleetTypography.body1Bold,
          height: "48px",
        },
        "&.MuiButton-sizeXlarge": {
          ...fleetTypography.body1Bold,
          height: "56px",
        },
      },
    },
  },
  MuiCard: {
    defaultProps: {
      raised: false,
    },
  },
  MuiCardActions: {
    defaultProps: {
      disableSpacing: false,
    },
  },
  MuiCardHeader: {
    defaultProps: {
      disableTypography: false,
    },
  },
  MuiBreadcrumbs: {
    defaultProps: {
      expandText: "Show path",
      itemsAfterCollapse: 1,
      itemsBeforeCollapse: 1,
      maxItems: 8,
      separator: "/",
    },
  },
  MuiDivider: {
    defaultProps: {
      absolute: false,
      flexItem: false,
      orientation: "horizontal",
      textAlign: "center",
      variant: "full",
    },
    styleOverrides: {
      root: {
        "&.MuiDivider-light": {
          "::before, ::after": {
            borderColor: fleetPalette.base.filledInput.background,
          },
        },
      },
    },
  },
  MuiDrawer: {
    defaultProps: {
      anchor: "left",
      elevation: 2,
      hideBackdrop: false,
      ModalProps: {},
      open: false,
      PaperProps: {},
      variant: "temporary",
    },
  },
  MuiFab: {
    defaultProps: {
      color: "base",
      disabled: false,
      disableFocusRipple: true,
      disableRipple: true,
      disableTouchRipple: true,
      size: "large",
      variant: "circular",
    },
  },

  MuiFilledInput: {
    styleOverrides: {
      root: {
        backgroundColor: fleetPalette.base.filledInput.background,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 4,
        borderColor: fleetPalette.base?.filledInput.outlinedBorder,
        "&.Mui-focused": {
          borderWidth: 1,
          borderColor: fleetPalette.primary?.main,
          backgroundColor: fleetPalette.base?.filledInput.background,
        },
        "&.Mui-error": {
          borderColor: fleetPalette.error?.main,
          "&:focus-within": {
            borderWidth: 1,
            borderColor: fleetPalette.error?.dark,
          },
        },
        "&.MuiInputBase-colorError": {
          border: 1,
          borderStyle: "solid",
          borderRadius: 4,
          borderColor: fleetPalette.error?.main,
          "&:focus-within": {
            borderWidth: 1,
            borderColor: fleetPalette.error?.dark,
          },
        },
        "&.MuiInputBase-colorWarning": {
          border: 1,
          borderStyle: "solid",
          borderRadius: 4,
          borderColor: fleetPalette.warning?.main,
          "&:focus-within": {
            borderWidth: 1,
            borderColor: fleetPalette.warning?.dark,
          },
        },
        "&.MuiInputBase-colorSuccess": {
          border: 1,
          borderStyle: "solid",
          borderRadius: 4,
          borderColor: fleetPalette.success?.main,
          "&:focus-within": {
            borderWidth: 1,
            borderColor: fleetPalette.success?.dark,
          },
        },
        "&.MuiInputBase-colorInfo": {
          backgroundColor: fleetPalette.base?.filledInput.background,
          border: 1,
          borderStyle: "solid",
          borderRadius: 4,
          borderColor: fleetPalette.info?.main,
          "&:focus-within": {
            borderWidth: 1,
            borderColor: fleetPalette.info?.dark,
          },
        },
        "&.Mui-disabled": {
          backgroundColor: fleetPalette.base?.state.disabledBackground,
        },
      },
      colorSecondary: {
        backgroundColor: fleetPalette.secondary?.outlinedHoverBackground,
        border: 1,
        borderStyle: "solid",
        borderRadius: 4,
        borderColor: fleetPalette.base?.filledInput.outlinedBorder,
        "&:focus-within": {
          borderWidth: 1,
          borderColor: fleetPalette.secondary?.dark,
        },
      },
    },
  },
  MuiGrid: {
    defaultProps: {
      columns: 12,
      container: false,
      direction: "row",
      item: false,
      lg: false,
      md: false,
      sm: false,
      spacing: 0,
      wrap: "wrap",
      xl: false,
      xs: false,
      zeroMinWidth: false,
    },
  },
  MuiLink: {
    defaultProps: {
      color: "primary",
      underline: "always",
      variant: "inherit",
    },
    variants: [
      {
        props: { color: "primary" },
        style: {
          color: fleetPalette.primary?.main,
        },
      },
    ],
  },
  MuiList: {
    defaultProps: {
      dense: false,
      disablePadding: false,
    },
  },
  MuiListItemButton: {
    defaultProps: {
      alignItems: "center",
      autoFocus: false,
      dense: false,
      disabled: false,
      disableGutters: false,
      divider: false,
      selected: false,
    },
    styleOverrides: {
      root: {
        "&.Mui-selected": {
          backgroundColor: fleetPalette.base?.state.selected,
        },
        "&.Mui-selected:hover": {
          backgroundColor: fleetPalette.base?.state.hover,
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        "&.MuiPaper-rounded": {
          // Needed for custom picker select styling on Date Suite
          ".MuiPickersYear-yearButton": {
            borderRadius: "4px!important",
            "&:hover": {
              height: "32px",
              backgroundColor: `${fleetPalette.base.state.hover}`,
            },
            "&.Mui-selected": {
              height: "32px",
              backgroundColor: `${fleetPalette.primary.main}`,
            },
          },
          ".MuiPickersMonth-monthButton": {
            borderRadius: "4px!important",
            "&:hover": {
              height: "32px",
              backgroundColor: `${fleetPalette.base.state.hover}`,
            },
            "&.Mui-selected": {
              height: "32px",
              backgroundColor: `${fleetPalette.primary.main}`,
            },
          },
          // Needed for custom picker styling Time Picker
          ".MuiMultiSectionDigitalClockSection-item": {
            borderRadius: "4px!important",
            "&:hover": {
              backgroundColor: `${fleetPalette.base.state.hover}`,
            },
            "&.Mui-selected": {
              backgroundColor: `${fleetPalette.primary.main}`,
            },
          },
        },
      },
    },
    defaultProps: {
      elevation: 2,
      square: false,
      variant: "elevation",
    },
  },
  MuiPopover: {
    defaultProps: {
      anchorOrigin: { horizontal: "left", vertical: "top" },
      anchorReference: "anchorEl",
      elevation: 2,
      marginThreshold: 16,
      open: false,
      PaperProps: {},
      transformOrigin: { horizontal: "left", vertical: "top" },
      transitionDuration: "auto",
      TransitionProps: {},
    },
  },
  MuiPagination: {
    defaultProps: {
      boundaryCount: 1,
      color: "standard",
      count: 1,
      defaultPage: 1,
      disabled: false,
      hideNextButton: false,
      hidePrevButton: false,
      shape: "circular",
      showFirstButton: false,
      showLastButton: false,
      siblingCount: 1,
      size: "medium",
      variant: "text",
    },
  },
  MuiPaginationItem: {
    defaultProps: {
      color: "standard",
      disabled: false,
      selected: false,
      shape: "circular",
      size: "medium",
      type: "page",
      variant: "text",
    },
  },
  MuiSkeleton: {
    defaultProps: {
      animation: "pulse",
      variant: "text",
    },
  },
  MuiSwitch: {
    defaultProps: {
      color: "primary",
      disabled: false,
      disableRipple: true,
      edge: false,
      required: false,
      size: "medium",
    },
  },
  MuiSpeedDial: {
    defaultProps: {
      direction: "up",
      FabProps: {},
      hidden: false,
      open: false,
    },
  },
  MuiSpeedDialAction: {
    defaultProps: {
      delay: 0,
      FabProps: {},
      open: false,
      tooltipOpen: false,
      tooltipPlacement: "left",
    },
    styleOverrides: {
      fab: {
        minWidth: 36,
        minHeight: 36,
        borderRadius: "50%",
        svg: {
          width: 20,
          height: 20,
        },
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        color: fleetPalette.base.state.active,
        "&.Mui-selected": {
          color: fleetPalette.base.text?.primary,
        },
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      indicator: {
        borderRadius: "4px 4px 0 0",
      },
      root: {
        "&.MuiTab-indicator": {
          "&__content": {
            ".MuiTab-root": {
              margin: "0 16px",
              padding: "12px 0",
            },
          },
          "&__full": {
            ".MuiTab-root": {
              margin: 0,
              padding: "12px 16px",
            },
          },
          "&__line": {
            ".MuiTabs-indicator": {
              height: "2px",
              borderRadius: 0,
            },
          },
          "&__standard": {
            ".MuiTabs-indicator": {
              height: "4px",
            },
          },
        },
        ".MuiTab-root": {
          minWidth: "auto",
        },
      },
      vertical: {
        "&.MuiTab-indicator": {
          "&__content": {
            ".MuiTab-root": {
              margin: "15px 16px",
              minHeight: "auto",
              padding: 0,
            },
          },
          "&__line": {
            ".MuiTabs-indicator": {
              width: "2px",
              borderRadius: 0,
            },
          },
          "&__standard": {
            ".MuiTabs-indicator": {
              width: "4px",
            },
          },
        },
        ".MuiTabs-indicator": {
          borderRadius: "4px 0 0 4px",
        },
        ".MuiTab-root": {
          padding: 0,
          "&.Mui-selected > .MuiBox-root": {
            paddingTop: 0,
          },
          "&.Mui-selected > .MuiBox-root:after": {
            marginTop: 0,
            width: 0,
          },
        },
      },
    },
  },
  MuiTable: {
    defaultProps: {
      padding: "normal",
      size: "medium",
      stickyHeader: false,
    },
  },
  MuiTableCell: {
    defaultProps: {
      align: "inherit",
    },
  },
  MuiTablePagination: {
    defaultProps: {
      labelRowsPerPage: "Rows per page:",
      rowsPerPageOptions: [10, 20, 50, 100],
      SelectProps: {},
      showFirstButton: false,
      showLastButton: false,
    },
  },
  MuiTableRow: {
    defaultProps: {
      hover: false,
      selected: false,
    },
  },
  MuiToggleButton: {
    defaultProps: {
      disabled: false,
      disableFocusRipple: true,
      disableRipple: true,
      fullWidth: false,
      selected: false,
      size: "medium",
    },
  },
  MuiTooltip: {
    defaultProps: {
      arrow: false,
      components: {},
      componentsProps: {},
      describeChild: false,
      disableFocusListener: false,
      disableHoverListener: false,
      disableInteractive: false,
      disableTouchListener: false,
      enterDelay: 100,
      enterNextDelay: 0,
      enterTouchDelay: 700,
      followCursor: false,
      leaveDelay: 0,
      leaveTouchDelay: 1500,
      placement: "bottom",
      PopperProps: {},
    },
  },
  MuiTypography: {
    defaultProps: {
      align: "inherit",
      gutterBottom: false,
      noWrap: false,
      paragraph: false,
      variant: "body1",
      variantMapping: TypographyVariantMapping,
    },
  },
  MuiIcon: {
    defaultProps: {
      baseClassName: "material-icons-round",
      color: "inherit",
      fontSize: "medium",
    },
    styleOverrides: {
      root: {
        fontSize: "18px",
      },
      fontSizeSmall: {
        fontSize: "15px",
      },
      fontSizeLarge: {
        fontSize: "21px",
      },
      fontSizeInherit: {
        fontSize: "inherit",
      },
    },
    variants: [
      {
        props: { fontSize: "xsmall" },
        style: {
          fontSize: "12px",
        },
      },
    ],
  },
  MuiStack: {
    defaultProps: {
      direction: "column",
      spacing: 0,
    },
  },
  MuiContainer: {
    defaultProps: {
      disableGutters: false,
      fixed: false,
      maxWidth: "lg",
    },
  },
  MuiCircularProgress: {
    defaultProps: {
      color: "primary",
      disableShrink: false,
      size: 40,
      thickness: 3.6,
      value: 0,
      variant: "indeterminate",
    },
  },
  MuiLinearProgress: {
    defaultProps: {
      color: "primary",
      valueBuffer: 0,
      value: 0,
      variant: "indeterminate",
    },
  },
  MuiMenu: {
    defaultProps: {
      autoFocus: true,
      disableAutoFocusItem: false,
      MenuListProps: {},
      open: false,
      transitionDuration: "auto",
      TransitionProps: {},
      variant: "selectedMenu",
    },
  },
  MuiMenuItem: {
    defaultProps: {
      autoFocus: false,
      dense: false,
      disableGutters: false,
      divider: false,
    },
    styleOverrides: {
      root: {
        lineHeight: 1.2,
        color: fleetPalette.base.text?.primary,
        "&.Mui-selected": {
          backgroundColor: fleetPalette.base?.state.selected,
        },
        "&.Mui-selected:hover": {
          backgroundColor: fleetPalette.base?.state.hover,
        },
        "&.Mui-focusVisible": {
          backgroundColor: fleetPalette.base?.state.focus,
        },
        "&.Mui-selected.Mui-focusVisible": {
          backgroundColor: fleetPalette.base?.state.focus,
        },
      },
      divider: {
        borderBottom: "none",
        "& + .MuiDivider-root": {
          marginBottom: 0,
          marginTop: 0,
        },
      },
    },
  },
  MuiModal: {
    defaultProps: {
      open: false,
      closeAfterTransition: false,
      components: {},
      componentsProps: {},
      disableAutoFocus: false,
      disableEnforceFocus: false,
      disableEscapeKeyDown: false,
      disablePortal: false,
      disableRestoreFocus: false,
      disableScrollLock: false,
      hideBackdrop: false,
      keepMounted: false,
    },
  },
  MuiAppBar: {
    defaultProps: {
      color: "primary",
      enableColorOnDark: false,
      position: "fixed",
    },
  },
  MuiDialog: {
    defaultProps: {
      open: false,
      disableEscapeKeyDown: false,
      fullScreen: false,
      fullWidth: false,
      maxWidth: "sm",
      scroll: "paper",
    },
    styleOverrides: {
      paperWidthMd: {
        maxWidth: 960,
      },
      paperWidthLg: {
        maxWidth: 1280,
      },
      paperWidthXl: {
        maxWidth: 1920,
      },
    },
  },
  MuiDialogActions: {
    defaultProps: {
      disableSpacing: false,
    },
  },
  MuiDialogContentText: {
    styleOverrides: {
      root: {
        color: fleetPalette.base.text?.primary,
      },
    },
  },
  MuiDialogContent: {
    defaultProps: {
      dividers: false,
    },
    styleOverrides: {
      root: {
        paddingBottom: 8,
        ".MuiDialogTitle-root + &": {
          paddingTop: 8,
        },
        "&.MuiDialogContent-root": {
          padding: "5px 20px 20px 24px",
        },
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontWeight: "bold",
        "&.MuiDialogTitle-root": {
          padding: "16px 16px 5px 24px",
        },
      },
    },
  },
  MuiAlert: {
    defaultProps: {
      closeText: "Close",
      role: "alert",
    },
  },
  MuiStepper: {
    defaultProps: {
      activeStep: 0,
      alternativeLabel: false,
      nonLinear: false,
      orientation: "horizontal",
    },
  },
  MuiStep: {
    defaultProps: {
      /**
       * `false` is not used here, because in Mui Step component props are merged with default theme props
       * and there is check for undefined for active/completed/disabled
       * active/completed/disabled/last can be set based on context values passed from Stepper
       */
      active: undefined,
      completed: undefined,
      expanded: false,
      disabled: undefined,
      last: undefined,
    },
    styleOverrides: {
      vertical: {
        "&.MuiStep-alternativeLabel": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      },
    },
  },
  MuiStepConnector: {
    styleOverrides: {
      vertical: {
        "&.MuiStepConnector-alternativeLabel": {
          position: "initial",
          marginLeft: 0,
          top: 0,
          left: 0,
          right: 0,
        },
      },
    },
  },
  MuiStepContent: {
    defaultProps: {
      transitionDuration: "auto",
    },
    styleOverrides: {
      root: {
        ".MuiStep-alternativeLabel &": {
          border: "none",
        },
      },
    },
  },
  MuiStepIcon: {
    defaultProps: {
      active: true,
      completed: true,
      error: true,
    },
  },
  MuiStepLabel: {
    defaultProps: {
      componentsProps: {},
      error: false,
    },
    styleOverrides: {
      root: {
        "&.MuiStepLabel-alternativeLabel": {
          ".MuiTypography-root": {
            textAlign: "center",
            display: "block",
          },
        },
      },
      label: {
        "&.Mui-active": {
          fontWeight: 600,
        },
        "&.Mui-completed": {
          fontWeight: 600,
        },
      },
    },
  },
  MuiChip: {
    defaultProps: {
      variant: "filled",
      size: "small",
    },
  },
};

export default fleetComponents;
