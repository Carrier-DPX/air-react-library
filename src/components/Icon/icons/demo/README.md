# Demo Icons

Place your SVG files here for the Leadership demo.

## Structure

```
icons/demo/
  ├── icon1.svg
  ├── icon2.svg
  ├── icon3.svg
  └── ...
```

## Usage

After placing your SVG files here, create React icon components that import them. See the example below.

## Example Icon Component

Create a file like `DemoIcon1.tsx`:

```tsx
import { FC } from "react";
import { ReactComponent as Icon1Svg } from "./icon1.svg";

export interface DemoIcon1Props {
  variant?: "outlined" | "filled";
}

export const DemoIcon1: FC<DemoIcon1Props> = ({ variant = "outlined", ...props }) => {
  // If you have separate SVG files for outlined/filled:
  // const IconSvg = variant === "filled" ? Icon1FilledSvg : Icon1OutlinedSvg;
  
  return <Icon1Svg {...props} />;
};
```

## Alternative: Inline SVG

If you prefer to inline the SVG content directly in the component:

```tsx
import { FC } from "react";

export interface DemoIcon1Props {
  variant?: "outlined" | "filled";
}

export const DemoIcon1: FC<DemoIcon1Props> = ({ variant = "outlined", ...props }) => {
  return (
    <svg {...props} viewBox="0 0 24 24">
      {/* Paste your SVG path/content here */}
    </svg>
  );
};
```
