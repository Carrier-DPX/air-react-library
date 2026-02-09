/**
 * Figma Code Connect Configuration for Navbar Component
 * 
 * This connects Figma's Navbar component to the React Navbar component.
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=37601-412630
 * 
 * Figma Properties:
 * - expanded (true, false) - Controls drawer expanded state → disableHoverListener (inverted)
 *   When expanded=false, drawer is locked (disableHoverListener=true)
 *   When expanded=true, drawer can expand on hover (disableHoverListener=false)
 * - activeButtonType (basic, indicator) - Active button style type → Navigation.activeButtonType
 * - background (true, false) - Show/hide background layer → transparentBackground (inverted)
 * - logo (true, false) - Show/hide logo layer → controls Navbar.Logo visibility
 * - carrierLogo (true, false) - Show/hide carrierLogo layer → NavbarFooter.showCarrierLogo
 * - helpButton (true, false) - Show/hide helpButton layer → controls help button visibility
 * - border (true, false) - Show/hide border → border
 * 
 * Note: Navigation items are nested "Item" component instances that map to Navigation.items array
 */

import figma from "@figma/code-connect";
import { Navbar } from "./Navbar";
import { Navigation } from "./Navigation";
import { NavbarFooter } from "./NavbarFooter";
import { NavbarLogo } from "./NavbarLogo";

figma.connect(
  Navbar,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=37601-412630",
  {
    props: {
      /**
       * EXPANDED STATE → DISABLE HOVER LISTENER
       * Maps Figma's "expanded" property to React's disableHoverListener prop (inverted)
       * Figma: expanded=false means drawer is collapsed/locked
       * React: disableHoverListener=true means drawer cannot expand on hover
       * So we invert: expanded=false → disableHoverListener=true
       */
      expanded: figma.boolean("expanded"),

      /**
       * BACKGROUND VISIBILITY
       * Maps Figma's "background" boolean to React's transparentBackground prop
       * Figma: background=true means background is visible (not transparent)
       * React: transparentBackground=true means background is transparent
       * So we invert: background=false → transparentBackground=true
       */
      background: figma.boolean("background"),

      /**
       * BORDER
       * Maps Figma's "border" boolean to React's border prop
       */
      border: figma.boolean("border"),

      /**
       * ACTIVE BUTTON TYPE
       * Maps Figma's "activeButtonType" property - passed to Navigation component
       */
      activeButtonType: figma.enum("activeButtonType", {
        basic: "basic",
        indicator: "indicator",
      }),

      /**
       * LOGO VISIBILITY
       * Maps Figma's "logo" boolean - controls NavbarLogo visibility
       */
      logo: figma.boolean("logo"),

      /**
       * CARRIER LOGO VISIBILITY
       * Maps Figma's "carrierLogo" boolean - passed to NavbarFooter.showCarrierLogo
       */
      carrierLogo: figma.boolean("carrierLogo"),

      /**
       * HELP BUTTON VISIBILITY
       * Maps Figma's "helpButton" boolean - controls help button visibility
       */
      helpButton: figma.boolean("helpButton"),
    },
    /**
     * EXAMPLE CODE TEMPLATE
     * Shows how the Navbar component should be used in React code
     * Composes Navbar.Logo, Navbar.Navigation, and Navbar.Footer as children
     */
    example: ({ expanded, activeButtonType, background, border, logo, carrierLogo }) => {
      // Invert expanded: Figma expanded=false → React disableHoverListener=true
      const disableHoverListener = !expanded;
      
      // Invert background: Figma background=true → React transparentBackground=false
      const transparentBackground = !background;
      
      return (
        <Navbar
          disableHoverListener={disableHoverListener}
          transparentBackground={transparentBackground}
          border={border}
        >
          <NavbarLogo label="Logo">
            {/* Logo content - conditionally rendered based on logo prop */}
          </NavbarLogo>
          <Navigation
            activeButtonType={activeButtonType}
            currentPathname="/"
            items={[]}
            onClick={() => {}}
          />
          <NavbarFooter showCarrierLogo={carrierLogo}>
            {/* Footer content */}
          </NavbarFooter>
        </Navbar>
      );
    },
  }
);
