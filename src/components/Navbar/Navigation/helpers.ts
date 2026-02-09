import { NavigationItem } from "./types";

export const getCurrentNavItemByPath = (
  items: NavigationItem[],
  path: string
) =>
  items.find(
    (item) => (!item.type || item.type === "ITEM") && item.path === path
  );
