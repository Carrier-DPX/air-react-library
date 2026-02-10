/**
 * Figma Code Connect Configuration for AppBar Component
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=31342-130614
 */

import figma from "@figma/code-connect";
import AppBar from "./AppBar";
import { Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "../Typography";
import Button from "../Button";
import Icon from "../Icon";
import { MenuIcon } from "../Icon/icons/demo";

figma.connect(
  AppBar,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=31342-130614",
  {
    props: {
      /**
       * SIZE MAPPING
       * Maps Figma's "size" property to React's "size" prop
       * Figma: dense (48px), basic (64px), prominent (128px)
       */
      size: figma.enum("size", {
        dense: "dense",
        basic: "basic",
        prominent: "prominent",
      }),

      /**
       * COLOR MAPPING
       * Maps Figma's "color" property to React's "color" prop
       */
      color: figma.enum("color", {
        paper: "paper",
        primary: "primary",
        base: "base",
        transparent: "transparent",
        accent: "accent",
      }),

      /**
       * DIVIDER MAPPING
       * Maps Figma's "divider" boolean property to React's "divider" prop
       */
      divider: figma.boolean("divider"),

      /**
       * ELEVATION MAPPING
       * Maps Figma's "elevation" boolean property to React's "elevation" prop
       */
      elevation: figma.boolean("elevation"),
    },

    /**
     * CODE EXAMPLE TEMPLATE
     * 
     * Shows how AppBar should be used with Toolbar and content
     * Note: position is set to "static" by default (not mapped from Figma)
     */
    example: ({ size, color, divider, elevation }) => (
      <AppBar 
        size={size} 
        color={color} 
        divider={divider} 
        elevation={elevation}
        position="static"
      >
        <Toolbar>
          <IconButton
            aria-label="menu"
            color="inherit"
            edge="start"
            size="large"
            sx={{ mr: 2 }}
          >
            <Icon fontSize="medium">
              <MenuIcon />
            </Icon>
          </IconButton>
          <Typography
            sx={{ flexGrow: 1 }}
            variant="h6"
          >
            News
          </Typography>
          <Button color="primary">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    ),
  }
);
