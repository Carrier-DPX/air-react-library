# Demo Icons Usage Guide

This guide shows how to use the demo icons in BottomNavigation for your Leadership demo.

## Available Icons

- `devicemanager` - Device Manager icon
- `home` - Home icon  
- `site` - Site icon
- `warning` - Warning icon

## Usage in BottomNavigation

### Option 1: Using SvgIcon Component (Recommended)

```tsx
import BottomNavigation from '@carrier-dpx/air-react-library/BottomNavigation';
import BottomNavigationAction from '@carrier-dpx/air-react-library/BottomNavigationAction';
import Typography from '@carrier-dpx/air-react-library/Typography';
import Icon from '@carrier-dpx/air-react-library/Icon';
import { SvgIcon } from './icons/demo/SvgIcon';

function DemoBottomNavigation() {
  return (
    <BottomNavigation value={0} onChange={() => {}} showLabel="On">
      <BottomNavigationAction
        icon={
          <Icon fontSize="medium">
            <SvgIcon name="home" />
          </Icon>
        }
        label={<Typography variant="body3Semibold">Home</Typography>}
        labelvisibility="On"
      />
      <BottomNavigationAction
        icon={
          <Icon fontSize="medium">
            <SvgIcon name="devicemanager" />
          </Icon>
        }
        label={<Typography variant="body3Semibold">Devices</Typography>}
        labelvisibility="On"
      />
      <BottomNavigationAction
        icon={
          <Icon fontSize="medium">
            <SvgIcon name="site" />
          </Icon>
        }
        label={<Typography variant="body3Semibold">Sites</Typography>}
        labelvisibility="On"
      />
      <BottomNavigationAction
        icon={
          <Icon fontSize="medium">
            <SvgIcon name="warning" />
          </Icon>
        }
        label={<Typography variant="body3Semibold">Alerts</Typography>}
        labelvisibility="On"
      />
    </BottomNavigation>
  );
}
```

### Option 2: Using Individual Icon Components

If you prefer individual components (already created):

```tsx
import { DeviceManagerIcon, HomeIcon, SiteIcon, WarningIcon } from './icons/demo';

// Usage:
<Icon fontSize="medium">
  <HomeIcon variant="outlined" />
</Icon>
```

## Scaling to 700 Icons

For 700 icons, you would:

1. **Generate the icon registry programmatically** from your SVG folder:
   ```typescript
   // scripts/generateIconRegistry.ts
   // Reads all SVG files and generates iconRegistry.ts
   ```

2. **Use the SvgIcon component** with icon names:
   ```tsx
   <SvgIcon name="iconname" />
   ```

3. **For Figma Code Connect**, you have two options:
   - **Option A**: Create individual wrapper components programmatically (one per icon)
   - **Option B**: Use a single generic component and map icon names in Figma

## Figma Code Connect Setup

For Figma connections, you'll need individual React components. You can:

1. **Generate components programmatically** from SVG files
2. **Create Figma connection files** for each icon

See the individual `.figma.tsx` files in this directory for examples.

## Notes

- Icons use `fill="currentColor"` so they inherit the text color from their parent
- Icons are wrapped in the `Icon` component for `fontSize` control
- The `BottomNavigationAction` component uses `figma.nestedProps()` to access icon properties
- For production with 700 icons, consider creating a build script to generate components from SVG files
