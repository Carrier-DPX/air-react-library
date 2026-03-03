import MuiTabContext, {
  TabContextProps as MuiTabContextProps,
} from "@mui/lab/TabContext";

export interface TabContextProps extends MuiTabContextProps {}

/** TabContext
 *
 * `import { TabContext } from '@carrier-io/air-react'`
 */
export default function TabContext(props: TabContextProps) {
  return <MuiTabContext {...props} />;
}

export type { TabContextProps };
