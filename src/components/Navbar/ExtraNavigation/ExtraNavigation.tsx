import { FC } from "react";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useNavbarContext } from "../hooks/useNavbarContext";
import btnStyles from "../NavbarButtons/styles";
import extraNavigationStyles from "./styles";
import { ExtraNavigationProps } from "./types";
import Button from "../../Button";
import Box from "../../Box";
import { NavigationButton } from "../NavbarButtons";
import { NavbarButtonClasses } from "../NavbarButtons/types";
import Divider from "../../Divider";
import { NavigationItemType } from "../Navigation";

/**
 * The ExtraNavigation component allows adding extra navigation buttons.
 *
 * //Named Import
 * `import { ExtraNavigation } from '@carrier-io/air-react'`
 */

const ButtonStyled = styled(Button)(btnStyles[NavbarButtonClasses.NavbarBtn]);
const ContainerStyled = styled(Box)(extraNavigationStyles.container);

export const ExtraNavigation: FC<ExtraNavigationProps> = ({
  items,
  disableTooltip = false,
  expanded = false,
  onClickExpanded,
  disableRipple = false,
  disableTouchRipple = false,
  ...rest
}) => {
  const { openedDrawer } = useNavbarContext();

  return (
    <ContainerStyled {...rest}>
      {items?.length > 0 && (
        <>
          <ButtonStyled
            variant="text"
            onClick={() => onClickExpanded?.()}
            disableRipple={disableRipple}
            disableTouchRipple={disableTouchRipple}
          >
            {expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            &nbsp; External Apps
          </ButtonStyled>
          {expanded &&
            items?.map((item, idx) => {
              if (item.type === "DIVIDER") {
                return (
                  <Divider
                    key={`divider_${idx.toString()}`}
                    sx={{ margin: "9px 0" }}
                  >
                    {item.children}
                  </Divider>
                );
              }

              const { id, icon, label } = item as NavigationItemType;

              return (
                <NavigationButton
                  key={id}
                  data={{
                    id,
                    label,
                  }}
                  onClick={() => item.onClick?.()}
                  disableTooltip={disableTooltip}
                  disableRipple={disableRipple}
                  disableTouchRipple={disableTouchRipple}
                  withOffset={openedDrawer}
                >
                  {icon}
                </NavigationButton>
              );
            })}
        </>
      )}
    </ContainerStyled>
  );
};
