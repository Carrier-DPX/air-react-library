# Figma Make Prompt: BottomNavigation Component Test

Use this prompt in Figma Make to test the BottomNavigation component with 4 navigation items.

---

## Prompt for Figma Make

```
Create a React component that displays a BottomNavigation component with 4 navigation items.

REQUIREMENTS:
- Import ONLY from '@carrier-dpx/air-react-library' package
- DO NOT use Tailwind CSS, Material-UI directly, or Shadcn components
- Wrap everything in FleetThemeProvider with theme="AirLight"
- Use BottomNavigation component with showLabel="On" and value state management
- Include 4 BottomNavigationAction items:
  - Home: selected={true}, label="Home", icon with HomeIcon
  - Devices: selected={false}, label="Devices", icon with DeviceManagerIcon  
  - Sites: selected={false}, label="Sites", icon with SiteIcon
  - Alerts: selected={false}, label="Alerts", icon with WarningTriangle
- Each BottomNavigationAction should have labelvisibility="On"
- Wrap icons in Icon component with fontSize="medium"
- Use Typography component with variant="body3Semibold" for labels
- Use useState to manage the selected value (0, 1, 2, 3)
- Add onChange handler to update selected value

IMPORTS TO USE:
- FleetThemeProvider from '@carrier-dpx/air-react-library'
- BottomNavigation from '@carrier-dpx/air-react-library'
- BottomNavigationAction from '@carrier-dpx/air-react-library'
- Icon from '@carrier-dpx/air-react-library'
- Typography from '@carrier-dpx/air-react-library'
- HomeIcon, DeviceManagerIcon, SiteIcon, WarningTriangle from '@carrier-dpx/air-react-library'

DO NOT IMPORT FROM:
- @mui/material (except through the library)
- tailwindcss
- @radix-ui
- shadcn/ui
- Any other UI library
- Deep paths like '@carrier-dpx/air-react-library/src/...'

The component should be fully functional with state management and ready to use.
```

---

## Expected Output Structure

The generated code should look like this:

```tsx
import { useState } from 'react';
import { 
  FleetThemeProvider,
  BottomNavigation,
  BottomNavigationAction,
  Icon,
  Typography,
  HomeIcon,
  DeviceManagerIcon,
  SiteIcon,
  WarningTriangle
} from '@carrier-dpx/air-react-library';

export default function App() {
  const [selectedValue, setSelectedValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedValue(newValue);
  };

  return (
    <FleetThemeProvider theme="AirLight">
      <div style={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-end' 
      }}>
        <BottomNavigation 
          showLabel="On" 
          value={selectedValue} 
          onChange={handleChange}
        >
          <BottomNavigationAction
            value={0}
            selected={selectedValue === 0}
            labelvisibility="On"
            icon={
              <Icon fontSize="medium">
                <HomeIcon />
              </Icon>
            }
            label={
              <Typography variant="body3Semibold">Home</Typography>
            }
          />
          <BottomNavigationAction
            value={1}
            selected={selectedValue === 1}
            labelvisibility="On"
            icon={
              <Icon fontSize="medium">
                <DeviceManagerIcon />
              </Icon>
            }
            label={
              <Typography variant="body3Semibold">Devices</Typography>
            }
          />
          <BottomNavigationAction
            value={2}
            selected={selectedValue === 2}
            labelvisibility="On"
            icon={
              <Icon fontSize="medium">
                <SiteIcon />
              </Icon>
            }
            label={
              <Typography variant="body3Semibold">Sites</Typography>
            }
          />
          <BottomNavigationAction
            value={3}
            selected={selectedValue === 3}
            labelvisibility="On"
            icon={
              <Icon fontSize="medium">
                <WarningTriangle />
              </Icon>
            }
            label={
              <Typography variant="body3Semibold">Alerts</Typography>
            }
          />
        </BottomNavigation>
      </div>
    </FleetThemeProvider>
  );
}
```

---

## Verification Checklist

After generating the code, verify:

- [ ] ✅ All imports are from `@carrier-dpx/air-react-library` only (no deep paths)
- [ ] ✅ FleetThemeProvider wraps the component
- [ ] ✅ No Tailwind CSS classes or imports
- [ ] ✅ No direct Material-UI imports (only through the library)
- [ ] ✅ Icons are imported directly from main package (not from `/src/...`)
- [ ] ✅ Icons are wrapped in Icon component with fontSize="medium"
- [ ] ✅ Labels use Typography component with variant="body3Semibold"
- [ ] ✅ State management with useState for selectedValue
- [ ] ✅ onChange handler updates the selected value
- [ ] ✅ Each BottomNavigationAction has value, selected, labelvisibility props
