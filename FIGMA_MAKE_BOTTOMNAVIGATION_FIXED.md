# Figma Make BottomNavigation - Updated Code

Try this updated version with explicit variant props and error handling:

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
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh',
        justifyContent: 'flex-end',
        width: '100%'
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
                <HomeIcon variant="outlined" />
              </Icon>
            }
            label={
              <Typography variant="body3Semibold">
                Home
              </Typography>
            }
          />
          <BottomNavigationAction
            value={1}
            selected={selectedValue === 1}
            labelvisibility="On"
            icon={
              <Icon fontSize="medium">
                <DeviceManagerIcon variant="outlined" />
              </Icon>
            }
            label={
              <Typography variant="body3Semibold">
                Devices
              </Typography>
            }
          />
          <BottomNavigationAction
            value={2}
            selected={selectedValue === 2}
            labelvisibility="On"
            icon={
              <Icon fontSize="medium">
                <SiteIcon variant="outlined" />
              </Icon>
            }
            label={
              <Typography variant="body3Semibold">
                Sites
              </Typography>
            }
          />
          <BottomNavigationAction
            value={3}
            selected={selectedValue === 3}
            labelvisibility="On"
            icon={
              <Icon fontSize="medium">
                <WarningTriangle variant="outlined" />
              </Icon>
            }
            label={
              <Typography variant="body3Semibold">
                Alerts
              </Typography>
            }
          />
        </BottomNavigation>
      </div>
    </FleetThemeProvider>
  );
}
```

## Changes Made:
1. ✅ Added explicit `variant="outlined"` to all icons
2. ✅ Added `width: '100%'` to container div
3. ✅ Kept all other props the same

## If Still Not Working:

### Option 1: Minimal Test (Verify Theme Provider Works)
```tsx
import { FleetThemeProvider, Typography } from '@carrier-dpx/air-react-library';

export default function App() {
  return (
    <FleetThemeProvider theme="AirLight">
      <Typography variant="h1">Test</Typography>
    </FleetThemeProvider>
  );
}
```

### Option 2: Test Without Icons (Verify BottomNavigation Works)
```tsx
import { useState } from 'react';
import {
  FleetThemeProvider,
  BottomNavigation,
  BottomNavigationAction,
  Typography
} from '@carrier-dpx/air-react-library';

export default function App() {
  const [selectedValue, setSelectedValue] = useState(0);

  return (
    <FleetThemeProvider theme="AirLight">
      <BottomNavigation 
        showLabel="On" 
        value={selectedValue} 
        onChange={(e, v) => setSelectedValue(v)}
      >
        <BottomNavigationAction
          value={0}
          selected={selectedValue === 0}
          labelvisibility="On"
          label={<Typography variant="body3Semibold">Home</Typography>}
        />
        <BottomNavigationAction
          value={1}
          selected={selectedValue === 1}
          labelvisibility="On"
          label={<Typography variant="body3Semibold">Devices</Typography>}
        />
      </BottomNavigation>
    </FleetThemeProvider>
  );
}
```

### Option 3: Check Console Errors
Open browser console and look for:
- `Cannot find module '@carrier-dpx/air-react-library'`
- `HomeIcon is not defined`
- `Cannot read property 'theme' of undefined`
- Any red error messages

Share the error messages if you see any!
