import { FC, SyntheticEvent, useState } from "react";
import Tooltip, { TooltipProps } from "../../Tooltip";
import Typography from "../../Typography";
import Fade from "../../Fade";
import { useNavbarContext } from "../hooks/useNavbarContext";

/**
 * The NavbarTooltip used for navigation and extra buttons.
 *   
 *  //Named Import
 * `import { NavbarTooltip } from '@carrier-io/air-react'`
 */

interface NavbarTooltipProps extends TooltipProps {}

export const NavbarTooltip: FC<NavbarTooltipProps> = ({
  title,
  children,
  TransitionComponent = Fade,
  disableHoverListener,
  ...rest
}) => {
  const enabled = rest.open;

  const [open, setOpen] = useState<boolean>(false);
  const { tooltipProps: NavbarTooltipProps = {} } = useNavbarContext();

  const handleOpenTooltip = (_e: SyntheticEvent) => {
    setOpen(true);
  };

  const handleCloseTooltip = (_e: SyntheticEvent | Event) => {
    setOpen(false);
  };

  return (
    <Tooltip
      open={enabled && open}
      onOpen={handleOpenTooltip}
      onClose={handleCloseTooltip}
      title={
        <Typography variant="caption" component="span">
          <b>{title}</b>
        </Typography>
      }
      placement="right"
      arrow
      enterDelay={800}
      TransitionComponent={TransitionComponent}
      disableHoverListener={disableHoverListener}
      {...NavbarTooltipProps}
    >
      {children}
    </Tooltip>
  );
};
