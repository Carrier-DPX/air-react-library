/**
 * Figma Code Connect Configuration for Alert Component
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=6595-48211
 * 
 * Figma Properties:
 * - variant (standard, outlined, filled)
 * - color (error, success, info, warning)
 * - title (true, false) - from nested "Content" component (UnstyledAlert), shows/hides Title Typography
 * - action (true, false) - from nested "Content" component (UnstyledAlert), shows/hides Action Button
 * 
 * Structure:
 * - Content (UnstyledAlert): Contains Title and Description Typography components
 * - Title: Typography component (shown when title=true)
 * - Description: Typography component (children of Alert)
 */

import figma from "@figma/code-connect";
import Alert from "./Alert";
import AlertTitle from "./AlertTitle";
import Typography from "../Typography";
import Button from "../Button";

figma.connect(
  Alert,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=6595-48211",
  {
    props: {
      /**
       * VARIANT MAPPING
       * Maps Figma's "variant" property to React's "variant" prop
       */
      variant: figma.enum("variant", {
        standard: "standard",
        outlined: "outlined",
        filled: "filled",
      }),

      /**
       * COLOR MAPPING
       * Maps Figma's "color" property to React's "color" prop
       */
      color: figma.enum("color", {
        error: "error",
        success: "success",
        info: "info",
        warning: "warning",
      }),

      /**
       * CONTENT NESTED PROPERTIES
       * Access properties from nested "Content" component (UnstyledAlert)
       * Contains title/action booleans and nested Typography components
       */
      content: figma.nestedProps("Content", {
        /**
         * TITLE VISIBILITY
         * Maps Figma's "title" boolean from nested "Content" component
         * When true, shows the nested "Title" Typography component
         */
        title: figma.boolean("title"),

        /**
         * ACTION BUTTON VISIBILITY
         * Maps Figma's "action" boolean from nested "Content" component
         * When true, shows the Action Button
         */
        action: figma.boolean("action"),

        /**
         * TITLE TEXT CONTENT
         * Maps text content from nested "Title" Typography component
         * The Title is an instance of the Typography component
         */
        titleText: figma.nestedProps("Title", {
          children: figma.children("Title"),
        }),

        /**
         * DESCRIPTION TEXT CONTENT
         * Maps text content from nested "Description" Typography component
         * The Description is an instance of the Typography component
         */
        descriptionText: figma.nestedProps("Description", {
          children: figma.children("Description"),
        }),
      }),
    },

    /**
     * EXAMPLE CODE TEMPLATE
     * Shows how Alert should be used with optional title and action button
     */
    example: ({ variant, color, content }) => {
      // Handle case with title, description, and action
      if (content && content.title && content.action && content.titleText && content.titleText.children && content.descriptionText && content.descriptionText.children) {
        return (
          <Alert
            variant={variant}
            color={color}
            action={<Button variant="text" size="small">Action</Button>}
          >
            <AlertTitle>
              {content.titleText.children}
            </AlertTitle>
            {content.descriptionText.children}
          </Alert>
        );
      }
      
      // Handle case with title and description (no action)
      if (content && content.title && content.titleText && content.titleText.children && content.descriptionText && content.descriptionText.children) {
        return (
          <Alert
            variant={variant}
            color={color}
          >
            <AlertTitle>
              {content.titleText.children}
            </AlertTitle>
            {content.descriptionText.children}
          </Alert>
        );
      }
      
      // Handle case with description and action (no title)
      if (content && content.action && content.descriptionText && content.descriptionText.children) {
        return (
          <Alert
            variant={variant}
            color={color}
            action={<Button variant="text" size="small">Action</Button>}
          >
            {content.descriptionText.children}
          </Alert>
        );
      }
      
      // Handle case with only description
      if (content && content.descriptionText && content.descriptionText.children) {
        return (
          <Alert
            variant={variant}
            color={color}
          >
            {content.descriptionText.children}
          </Alert>
        );
      }
      
      // Fallback: Alert with no content
      return (
        <Alert
          variant={variant}
          color={color}
        />
      );
    },
  }
);
