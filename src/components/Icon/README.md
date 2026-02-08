# Icon Component with Figma Code Connect

This directory contains the Icon wrapper component and Figma Code Connect mappings for individual icon components.

## Architecture

### Icon Wrapper + Individual Icon Components

The Icon system uses:
- **One Icon wrapper component** (`Icon.tsx`) - Material-UI Icon wrapper that handles `fontSize` (xsmall, small, medium, large)
- **Individual icon components** - Separate components for each icon (SettingsIcon, HomeIcon, etc.) that handle `variant` (outlined, filled)
- **Individual Figma connections** - One `.figma.tsx` file per icon component

## Component Usage

```tsx
import { Icon } from '@carrier-dpx/air-react-library';
import { SettingsIcon, HomeIcon } from '@carrier-io/icons'; // Your icon library

// Basic usage
<Icon fontSize="medium">
  <SettingsIcon variant="filled" />
</Icon>

// Different sizes
<Icon fontSize="xsmall">
  <HomeIcon variant="outlined" />
</Icon>

<Icon fontSize="large">
  <SettingsIcon variant="filled" />
</Icon>
```

## Figma Code Connect Pattern

Each icon has its own `.figma.tsx` file that:

1. **Imports the icon component** (from your icon library)
2. **Imports the Icon wrapper** (for fontSize)
3. **Maps to a specific Figma icon component** (via Figma URL)
4. **Maps variant and optionally fontSize** props

### Example: SettingsIcon.figma.tsx

```tsx
import figma from "@figma/code-connect";
import Icon from "./Icon";
import { SettingsIcon } from '@carrier-io/icons'; // Your icon library

figma.connect(
  SettingsIcon, // The actual icon component
  "https://www.figma.com/design/.../SettingsIcon",
  {
    props: {
      // Variant is handled by the icon component
      variant: figma.enum("variant", {
        outlined: "outlined",
        filled: "filled",
      }),
      
      // fontSize is optional - can be mapped from Figma or set manually
      // fontSize: figma.enum("fontSize", {
      //   "xsmall-12px": "xsmall",
      //   "small-16px": "small",
      //   "medium-24px": "medium",
      //   "large-32px": "large",
      // }),
    },
    example: ({ variant }) => (
      <Icon fontSize="medium">
        <SettingsIcon variant={variant} />
      </Icon>
    ),
  }
);
```

**Key Points**:
- The icon component (SettingsIcon) is what Figma connects to
- The Icon wrapper handles fontSize
- Each icon gets its own `.figma.tsx` file so Figma recognizes them separately

## Icon Component Structure

Your icon components should follow this pattern:

```tsx
// SettingsIcon.tsx (in your icon library)
export interface SettingsIconProps {
  variant?: "outlined" | "filled";
  // ... other props
}

export const SettingsIcon: FC<SettingsIconProps> = ({ variant = "outlined", ...props }) => {
  // Render SVG based on variant
  return <svg>...</svg>;
};
```

## Adding New Icons

To add a new icon to the Figma integration:

1. **Ensure the icon component exists** in your icon library (Bitbucket repo)

2. **Create a new `.figma.tsx` file** following the pattern:
   ```tsx
   // {IconName}Icon.figma.tsx
   import figma from "@figma/code-connect";
   import Icon from "./Icon";
   import { YourIconName } from '@carrier-io/icons'; // Your icon library
   
   figma.connect(
     YourIconName,
     "YOUR_FIGMA_ICON_URL_HERE",
     {
       props: {
         variant: figma.enum("variant", {
           outlined: "outlined",
           filled: "filled",
         }),
       },
       example: ({ variant }) => (
         <Icon fontSize="medium">
           <YourIconName variant={variant} />
         </Icon>
       ),
     }
   );
   ```

3. **Get the Figma URL** by:
   - Opening the icon component in Figma
   - Right-clicking → "Copy link to selection"
   - Replacing the URL in the `figma.connect()` call

## Scaling to 700 Icons

### Option 1: Manual Creation
Create individual `.figma.tsx` files for each icon. This gives you full control.

### Option 2: Code Generation Script
Create a script that generates `.figma.tsx` files from a list of icons:

```typescript
// scripts/generateIconConnections.ts
const icons = [
  { name: "SettingsIcon", figmaNodeId: "SETTINGS-ICON-NODE-ID" },
  { name: "HomeIcon", figmaNodeId: "HOME-ICON-NODE-ID" },
  // ... 698 more icons
];

icons.forEach(({ name, figmaNodeId }) => {
  const content = `
import figma from "@figma/code-connect";
import Icon from "./Icon";
import { ${name} } from '@carrier-io/icons';

figma.connect(
  ${name},
  "https://www.figma.com/design/vkoHdM6rchIhH9IWetZeP0/Air--Components?node-id=${figmaNodeId}",
  {
    props: {
      variant: figma.enum("variant", {
        outlined: "outlined",
        filled: "filled",
      }),
    },
    example: ({ variant }) => (
      <Icon fontSize="medium">
        <${name} variant={variant} />
      </Icon>
    ),
  }
);
  `;
  // Write to file: ${name}.figma.tsx
});
```

## Icon Library Integration

The icon components should be imported from your icon library package (Bitbucket repo). Update the imports in each `.figma.tsx` file to point to your actual icon library:

```tsx
// Replace placeholder imports with actual icon library imports
import { SettingsIcon, HomeIcon, UserIcon } from '@carrier-io/icons';
```

## Testing

The current setup includes sample Figma connections for testing. To test:

1. **Update imports** in `.figma.tsx` files to point to your actual icon library
2. **Update Figma URLs** with real node IDs from your Figma file
3. **Run** `npm run figma:connect` to publish connections
4. **Open Figma** and check Dev Mode
5. **Select an icon component** → verify it shows the correct React code

## Notes

- Each icon needs its own Figma component with a "variant" property (outlined/filled)
- The Icon wrapper handles fontSize (xsmall, small, medium, large)
- Icon components handle variant (outlined, filled)
- Icon components are imported from your icon library (Bitbucket repo)
- The Figma URL must point to the specific icon component instance
