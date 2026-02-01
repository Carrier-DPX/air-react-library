/**
 * Figma Code Connect Configuration for Typography Component
 * 
 * Maps Figma Typography component to React Typography component
 */

import figma from "@figma/code-connect";
import Typography from "./Typography";

figma.connect(
  Typography,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=10984-58055",
  {
    props: {
      /**
       * VARIANT MAPPING
       * Maps Figma's "variant" property to React's "variant" prop
       * 
       * Figma variant names with spaces need to be converted to camelCase for React
       */
      variant: figma.enum("variant", {
        body1: "body1",
        "body1 semibold": "body1Semibold",
        "body1 bold": "body1Bold",
        body2: "body2",
        "body2 semibold": "body2Semibold",
        "body2 bold": "body2Bold",
        body3: "body3",
        "body3 semibold": "body3Semibold",
        "body3 bold": "body3Bold",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        caps1: "caps1",
        "caps1 bold": "caps1Bold",
        caps2: "caps2",
        "caps2 bold": "caps2Bold",
        caps3: "caps3",
        "caps3 bold": "caps3Bold",
        caps4: "caps4",
        "caps4 bold": "caps4Bold",
      }),

      /**
       * TEXT CONTENT
       * Maps the text content from Figma's "Label" layer
       * This is the editable text in the Typography component
       */
      children: figma.children("Label"),
    },

    /**
     * CODE EXAMPLE TEMPLATE
     * 
     * Shows how the Typography component should be used in React code
     */
    example: ({ variant, children }) => (
      <Typography variant={variant}>
        {children}
      </Typography>
    ),
  }
);
