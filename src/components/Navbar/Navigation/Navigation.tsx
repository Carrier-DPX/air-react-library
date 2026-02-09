import { FC, useCallback, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  ActiveButtonType,
  ClickNavItem,
  NavigationItem,
  NavigationProps,
} from "./types";
import navigationStyles from "./styles";
import Box from "../../Box";
import Divider from "../../Divider";
import { NavigationButton } from "../NavbarButtons";
import { getCurrentNavItemByPath } from "./helpers";

/**
 * The Navigation component allows adding navigation buttons.
 *
 *  //Named Import
 * `import { Navigation } from '@carrier/air-react'`
 */

const ContainerStyled = styled(Box)(navigationStyles.container);

export const Navigation: FC<NavigationProps> = ({
  currentPathname,
  items,
  onClick,
  activeButtonType = ActiveButtonType.Basic,
  disableTooltip = false,
  disableRipple = false,
  disableTouchRipple = false,
  isDefaultActive = true,
  ...rest
}) => {
  const [selectedNavigationItem, setSelectedNavigationItem] = useState<
    NavigationItem | undefined
  >(isDefaultActive ? items[0] : undefined);

  useEffect(() => {
    const currentNavigationItem = getCurrentNavItemByPath(
      items,
      currentPathname
    );

    if (!isDefaultActive) {
      return setSelectedNavigationItem(currentNavigationItem);
    }
  }, []);

  useEffect(() => {
    const currentNavigationItem = getCurrentNavItemByPath(
      items,
      currentPathname
    );

    if (!isDefaultActive) {
      return setSelectedNavigationItem(currentNavigationItem);
    }
    setSelectedNavigationItem(currentNavigationItem ?? items[0]);
  }, [items, currentPathname]);

  const handleClick: ClickNavItem = useCallback(
    (params) => {
      if (onClick) {
        onClick(params);
      }
    },
    [onClick]
  );

  return (
    <ContainerStyled {...rest}>
      {items.map((item, idx) => {
        if (item.type === "DIVIDER") {
          return (
            <Divider key={`divider_${idx.toString()}`} sx={{ margin: "9px 0" }}>
              {item.children}
            </Divider>
          );
        }

        return (
          <NavigationButton
            key={item.id}
            data={{
              id: item.id,
              label: item.label,
            }}
            onClick={() =>
              handleClick({
                path: item.path || null,
                id: item.id,
              })
            }
            disableTooltip={disableTooltip}
            disabled={item.disabled}
            disableRipple={disableRipple}
            disableTouchRipple={disableTouchRipple}
            active={
              selectedNavigationItem &&
              (!selectedNavigationItem.type ||
                selectedNavigationItem.type === "ITEM") &&
              selectedNavigationItem.id === item.id
            }
            activeButtonType={activeButtonType}
          >
            {item.icon}
          </NavigationButton>
        );
      })}
    </ContainerStyled>
  );
};
