/**
 * Figma Code Connect Configuration for Menu Component
 * 
 * Figma URL: https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=18984-110767
 * 
 * Figma Properties:
 * - subheader (true, false) - boolean hide/show
 * 
 * Structure:
 * - Container: Frame wrapping Subheader and ListItem components (same as List)
 * - Subheader: Nested component "ListItems/List Subheader" with layer name "Subheader"
 *   - Contains Typography component with layer name "↪ Subheader"
 * - List Item 1-10: Multiple ListItem instances with numbered layer names
 */

import figma from "@figma/code-connect";
import Menu from "./Menu";
import ListSubheader from "../List/ListSubheader";
import ListItem from "../List/ListItem";
import Typography from "../Typography";

figma.connect(
  Menu,
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=18984-110767",
  {
    props: {
      /**
       * SUBHEADER VISIBILITY
       * Maps Figma's "subheader" boolean property
       * When true, shows the nested "Subheader" component
       */
      subheader: figma.boolean("subheader"),

      /**
       * SUBHEADER TEXT CONTENT
       * Maps text content from nested Typography component with layer name "Subheader/↪ Subheader"
       * Using full path to avoid nested nestedProps
       */
      subheaderText: figma.nestedProps("Subheader/↪ Subheader", {
        children: figma.children("Subheader/↪ Subheader"),
      }),

      /**
       * LIST ITEM CHILDREN
       * Maps nested ListItem instances from Figma
       * Each "List Item X" is an instance of the ListItem component
       * We map each one individually using the exact layer names
       */
      listItem1: figma.children("List Item 1"),
      listItem2: figma.children("List Item 2"),
      listItem3: figma.children("List Item 3"),
      listItem4: figma.children("List Item 4"),
      listItem5: figma.children("List Item 5"),
      listItem6: figma.children("List Item 6"),
      listItem7: figma.children("List Item 7"),
      listItem8: figma.children("List Item 8"),
      listItem9: figma.children("List Item 9"),
      listItem10: figma.children("List Item 10"),
    },

    /**
     * EXAMPLE CODE TEMPLATE
     * Shows how Menu should be used with optional subheader and ListItem children
     * Note: This example handles up to 10 list items. Adjust based on your design needs.
     */
    example: ({ subheader, subheaderText, listItem1, listItem2, listItem3, listItem4, listItem5, listItem6, listItem7, listItem8, listItem9, listItem10 }) => {
      // Handle case with subheader and multiple list items
      if (subheader && subheaderText && subheaderText.children) {
        return (
          <Menu
            open={true}
            anchorEl={null}
            onClose={() => {}}
            MenuListProps={{
              subheader: (
                <ListSubheader>
                  <Typography variant="body2Semibold">
                    {subheaderText.children}
                  </Typography>
                </ListSubheader>
              ),
            }}
          >
            {listItem1}
            {listItem2}
            {listItem3}
            {listItem4}
            {listItem5}
            {listItem6}
            {listItem7}
            {listItem8}
            {listItem9}
            {listItem10}
          </Menu>
        );
      }

      // Handle case without subheader
      return (
        <Menu
          open={true}
          anchorEl={null}
          onClose={() => {}}
        >
          {listItem1}
          {listItem2}
          {listItem3}
          {listItem4}
          {listItem5}
          {listItem6}
          {listItem7}
          {listItem8}
          {listItem9}
          {listItem10}
        </Menu>
      );
    },
  }
);
