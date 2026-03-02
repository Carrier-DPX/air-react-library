import muiUseMediaQuery from "@mui/material/useMediaQuery";

export interface Options {
  /**
   * As `window.matchMedia()` is unavailable on the server,
   * `useMediaQuery` returns `false` during server-side rendering by default.
   * To change this behavior, set `noSsr` to `true`.
   */
  noSsr?: boolean;
  /**
   * You can provide a custom `matchMedia` implementation. This can be used for handling an `iframe` content window.
   */
  matchMedia?: (query: string) => MediaQueryList;
  /**
   * The default value to return when the hook is called on the server.
   */
  defaultMatches?: boolean;
}

export type QueryInput = string | ((theme: unknown) => string);

/** useMediaQuery
 *
 *  This is a CSS media query hook for React. It listens for matches to a CSS media query.
 *  It allows the rendering of components based on whether the query matches or not.
 *
 * `import useMediaQuery from '@carrier-io/air-react/useMediaQuery'`
 */

export default function useMediaQuery(
  queryInput: QueryInput,
  options?: Options
): boolean {
  return muiUseMediaQuery(queryInput, options);
}
