import React, { FC, useMemo } from "react";
import { styled } from "@mui/material/styles";
import styles from "./styles";
import Button, { ButtonProps } from "../../Button";
import Box from "../../Box";
import { CSSObject } from "@mui/material";
import { getSxStyles } from "../../utils/styles";
import { NavbarButtonClasses } from "./types";

/**
 * The NavbarFooterButton used for footer.
 *
 *  //Named Import
 * `import { NavbarFooterButton } from '@carrier-io/air-react'`
 */

export interface NavbarFooterButtonProps
  extends Pick<
    ButtonProps,
    "sx" | "children" | "onClick" | "id" | "size" | "disabled"
  > {
  /** The color of the component. */
  color?: "primary" | "secondary" | "info";
}

const ContainerFooterButtonStyled = styled(Box)(
  styles[NavbarButtonClasses.ContainerFooterBtn]
);

export const NavbarFooterButton: FC<NavbarFooterButtonProps> = ({
  size = "large",
  ...props
}) => {
  const maxSize = useMemo(() => {
    if (size === "large") return 42;
    if (size === "medium") return 36;
    return 30;
  }, [size]);

  return (
    <ContainerFooterButtonStyled
      className={NavbarButtonClasses.ContainerFooterBtn}
    >
      <Button
        {...props}
        size={size}
        sx={(theme) =>
          ({
            ...getSxStyles(theme, props.sx),
            maxHeight: maxSize,
            maxWidth: maxSize,
          } as CSSObject)
        }
      />
    </ContainerFooterButtonStyled>
  );
};
