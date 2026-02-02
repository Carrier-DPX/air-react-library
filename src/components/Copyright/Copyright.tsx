import { FC, useMemo } from "react";
import { CSSObject, styled } from "@mui/material/styles";
import Typography from "../Typography";
import { CopyrightProps } from "./types";
import clsx from "clsx";
import styles from "./styles";
import { getSxStyles } from "../utils/styles";

const CopyrightStyled = styled(Typography)(styles);
const baseClassName = "copyright";

/** The Copyright pattern provides legal confirmation for time of ownership.
 *  //Default Import
 * `import Copyright from '@carrier-io/air-react/Copyright'`
 *  //Named Import
 *  `import { Copyright } from '@carrier-io/air-react'`
 */
const Copyright: FC<CopyrightProps> = ({ text, sx, className }) => {
  const currentYear = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <CopyrightStyled
      variant="body3"
      sx={(theme) =>
        ({ fontSize: "12px", ...getSxStyles(theme, sx) } as CSSObject)
      }
      className={clsx(baseClassName, className)}
    >
      © {currentYear} {text}
    </CopyrightStyled>
  );
};

export default Copyright;
