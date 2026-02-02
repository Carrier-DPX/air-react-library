import { forwardRef, useState, ChangeEvent } from "react";

import MuiTextField, {
  StandardTextFieldProps as MuiTextFieldProps,
} from "@mui/material/TextField";
import { InputProps } from "@mui/material/Input";
import { InputMaxHeightMap } from "../utils/HeightUtils";
import { getSxStyles } from "../utils/styles";
import { CSSObject } from "@mui/material";
import { fleetPalette } from "../theme";
import { styleTokens } from "../theme/constants/styleTokens";

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    xlarge: true;
    large: true;
  }
}
export interface TextFieldInputProps
  extends Omit<InputProps, "disableUnderline"> {}

export interface TextFieldProps
  extends Omit<
    MuiTextFieldProps,
    "variant" | "margin" | "classes" | "hiddenLabel"
  > {
  /** Set to true to remove background color. */
  hideBackgroundColor?: boolean;

  /** Input Node for Child Input. */
  inputSetting?: TextFieldInputProps;

  // Renamed 'hiddenLabel' to hideLabel for consistency.
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hideLabel?: boolean;

  /** Set to true to show a border around the TextField.*/
  showBorder?: boolean;

  /** Toggles the counter visibility. Setting to `true` will display the counter and respect the characterMax if set. `false` will hide the counter and ignore `characterMax`.
   * @default false
   */
  characterCounter?: boolean;

  /** Sets a counter character limit while `characterCounter` is enabled. */
  characterMax?: number;
}

/** The TextField component allows users to enter or edit free-form text data.
 *
 * `import TextField from '@carrier-io/air-react/TextField'`
 */

const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      hideBackgroundColor = false,
      inputSetting = {},
      InputProps = {},
      label,
      showBorder = false,
      size = "large",
      type = "text",
      sx = {},
      hideLabel,
      InputLabelProps = {},
      FormHelperTextProps = {},
      helperText,
      characterCounter,
      characterMax,
      defaultValue,
      onChange,
      ...rest
    },
    ref
  ) => {
    const [value, setValue] = useState<string | number>(
      defaultValue as string | number
    );

    const handleChange = (event: ChangeEvent) => {
      const targetValue = (event.target as HTMLInputElement).value;
      if (
        characterCounter &&
        characterMax &&
        targetValue?.length > characterMax
      ) {
        return;
      }
      if (onChange) {
        onChange(event as ChangeEvent<HTMLInputElement>);
      }
      setValue(targetValue);
    };

    const joinInputLabelProps = {
      sx: {
        ...(showBorder ? { paddingLeft: "2px" } : { paddingLeft: "0px" }),
        "& .MuiInputLabel-asterisk": {
          color: fleetPalette.base?.filledInput.required,
        },
        "&.Mui-focused .MuiInputLabel-asterisk": {
          color: "inherit",
        },

        ...InputLabelProps.sx,
      },
      ...InputLabelProps,
    };

    const joinFormHelperTextProps: typeof FormHelperTextProps = {
      sx: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        m: "2px",
        pl: "2px",
        ...FormHelperTextProps.sx,
      },
      ...FormHelperTextProps,
    };

    const input = {
      ...InputProps,
      ...inputSetting,
      disableUnderline: true,
      size: size,
    };

    const inputSx = input.sx;

    input.sx = (theme) =>
      ({
        ...getSxStyles(theme, inputSx),
        // Conditionally apply properties
        ...(!rest.multiline && { height: InputMaxHeightMap[size] }),
        ...(!showBorder && !rest.error && { border: "0px!important" }),
        ...(hideBackgroundColor && { backgroundColor: "inherit!important" }),
        borderRadius: `${styleTokens.borderRadius.large}`,
        "&.MuiInputBase-root": {
          "&:hover": {
            backgroundColor: `${fleetPalette.base?.filledInput.backgroundHover} !important`,
          },
        },
      } as CSSObject);

    const getHelperText = () => {
      return (
        <>
          {helperText}
          {characterCounter && (
            <span
              style={{
                float: "right",
                padding: `0px 2px`,
              }}
            >
              {value ? value?.toString().length : "0"}
              {!!characterMax && `/${characterMax}`}
            </span>
          )}
        </>
      );
    };

    let largeSizeLabelValue: string | number;
    if (size === "large") {
      largeSizeLabelValue = "16px";
    } else if (size === "xlarge") {
      largeSizeLabelValue = "24px";
    } else {
      largeSizeLabelValue = 0;
    }

    const largeSizeLabelSX = {
      "& .MuiFormLabel-root": {
        lineHeight: largeSizeLabelValue,
      },
    };

    return (
      <MuiTextField
        variant="filled"
        type={type}
        margin={size === "medium" ? "dense" : "none"}
        color={rest.error ? "error" : rest.color}
        hiddenLabel={size === "small" || size === "medium" || hideLabel}
        InputProps={input}
        InputLabelProps={joinInputLabelProps}
        FormHelperTextProps={joinFormHelperTextProps}
        helperText={getHelperText()}
        onChange={handleChange}
        value={value}
        sx={(theme) =>
          ({
            ...getSxStyles(theme, sx),
            "& .MuiInputBase-root.MuiFilledInput-root": {
              borderRadius: `${styleTokens.borderRadius.large}`,
              "& .MuiInputBase-input::placeholder": {
                color: fleetPalette.base?.filledInput.placeholderLabel,
              },
              "& .MuiInputBase-input.MuiFilledInput-input::-webkit-input-placeholder":
                {
                  opacity: "unset",
                },
            },

            ...((size === "large" || size === "xlarge") && largeSizeLabelSX),
            "& .MuiInputBase-root.Mui-focused": {
              backgroundColor:
                fleetPalette.base?.background.paper + " !important",
              ...((rest.error === false || rest.error === undefined) && {
                "&.MuiInputBase-colorPrimary": {
                  border: `1px solid ${theme.palette.primary.main} !important`,
                },
                "&.MuiInputBase-colorSecondary": {
                  border: `1px solid ${theme.palette.secondary.main} !important`,
                },
                "&.MuiInputBase-colorBase": {
                  border: `1px solid ${theme.palette.base?.main} !important`,
                },
                "&.MuiInputBase-colorWarning": {
                  border: `1px solid ${theme.palette.warning.main} !important`,
                },
                "&.MuiInputBase-colorSuccess": {
                  border: `1px solid ${theme.palette.success.main} !important`,
                },
                "&.MuiInputBase-colorInfo": {
                  border: `1px solid ${theme.palette.info.main} !important`,
                },
                "&.MuiInputBase-colorError": {
                  border: `1px solid ${theme.palette.error.main} !important`,
                },
              }),
            },
          } as CSSObject)
        }
        label={!(size === "small" || size === "medium" || hideLabel) && label}
        {...rest}
        ref={ref}
      />
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
