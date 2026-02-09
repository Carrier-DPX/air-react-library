# Figma Make Prompt: BottomNavigation Component Test

Use this prompt in Figma Make to test the BottomNavigation component:

---

## Prompt for Figma Make

```
Create a React component that displays a BottomNavigation component with 4 navigation items.

REQUIREMENTS:
- Import ONLY from '@carrier-dpx/air-react-library' package
- DO NOT use Tailwind CSS, Material-UI directly, or Shadcn components
- Wrap everything in FleetThemeProvider with theme="AirLight"
- Use BottomNavigation component with showLabel="On"
- Include 4 BottomNavigationAction items with:
  - First item: selected={true}, label="Home", icon with HomeIcon
  - Second item: selected={false}, label="Devices", icon with DeviceManagerIcon  
  - Third item: selected={false}, label="Sites", icon with SiteIcon
  - Fourth item: selected={false}, label="Alerts", icon with WarningTriangle
- Each BottomNavigationAction should have labelvisibility="On"
- Wrap icons in Icon component with fontSize="medium"
- Use Typography component with variant="body3Semibold" for labels

IMPORTS TO USE:
- FleetThemeProvider from '@carrier-dpx/air-react-library'
- BottomNavigation from '@carrier-dpx/air-react-library'
- BottomNavigationAction from '@carrier-dpx/air-react-library'
- Icon from '@carrier-dpx/air-react-library'
- Typography from '@carrier-dpx/air-react-library'
- HomeIcon, DeviceManagerIcon, SiteIcon, WarningTriangle from '@carrier-dpx/air-react-library/src/components/Icon/icons/demo'

DO NOT IMPORT FROM:
- @mui/material (except through the library)
- tailwindcss
- @radix-ui
- shadcn/ui
- Any other UI library

The component should be fully functional and ready to use.
```

---

## Expected Output Structure

The generated code should look like this:

```tsx
import React from 'react';
import { 
  FleetThemeProvider,
  BottomNavigation,
  BottomNavigationAction,
  Icon,
  Typography
} from '@carrier-dpx/air-react-library';
import { 
  HomeIcon, 
  DeviceManagerIcon, 
  SiteIcon, 
  WarningTriangle 
} from '@carrier-dpx/air-react-library/src/components/Icon/icons/demo';

function BottomNavigationDemo() {
  const [value, setValue] = React.useState(0);

  return (
    <FleetThemeProvider theme="AirLight">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        showLabel="On"
      >
        <BottomNavigationAction
          selected={value === 0}
          labelvisibility="On"
          icon={
            <Icon fontSize="medium">
              <HomeIcon variant="outlined" />
            </Icon>
          }
          label={
            <Typography variant="body3Semibold">Home</Typography>
          }
        />
        <BottomNavigationAction
          selected={value === 1}
          labelvisibility="On"
          icon={
            <Icon fontSize="medium">
              <DeviceManagerIcon variant="outlined" />
            </Icon>
          }
          label={
            <Typography variant="body3Semibold">Devices</Typography>
          }
        />
        <BottomNavigationAction
          selected={value === 2}
          labelvisibility="On"
          icon={
            <Icon fontSize="medium">
              <SiteIcon variant="outlined" />
            </Icon>
          }
          label={
            <Typography variant="body3Semibold">Sites</Typography>
          }
        />
        <BottomNavigationAction
          selected={value === 3}
          labelvisibility="On"
          icon={
            <Icon fontSize="medium">
              <WarningTriangle variant="outlined" />
            </Icon>
          }
          label={
            <Typography variant="body3Semibold">Alerts</Typography>
          }
        />
      </BottomNavigation>
    </FleetThemeProvider>
  );
}

export default BottomNavigationDemo;
```

---

## Verification Checklist

After generating the code, verify:

- [ ] ✅ All imports are from `@carrier-dpx/air-react-library` only
- [ ] ✅ FleetThemeProvider wraps the component
- [ ] ✅ No Tailwind CSS classes or imports
- [ ] ✅ No direct Material-UI imports (only through the library)
- [ ] ✅ No Shadcn or Radix UI imports
- [ ] ✅ BottomNavigation uses `showLabel="On"` prop
- [ ] ✅ BottomNavigationAction components use `labelvisibility="On"`
- [ ] ✅ Icons are wrapped in Icon component with `fontSize="medium"`
- [ ] ✅ Labels use Typography with `variant="body3Semibold"`
- [ ] ✅ Component includes state management for selected item
- [ ] ✅ onChange handler updates the selected value

---

## Alternative Simplified Prompt

If the above is too complex, use this shorter version:

```
Create a BottomNavigation component with 4 items (Home, Devices, Sites, Alerts) using ONLY @carrier-dpx/air-react-library. Wrap in FleetThemeProvider with theme="AirLight". Use Icon components with fontSize="medium" and Typography for labels. Do not use Tailwind, MUI directly, or Shadcn.
```
