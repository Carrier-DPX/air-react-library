# Figma Make Troubleshooting Guide

## Issue: Component Not Rendering

If the BottomNavigation component isn't rendering in Figma Make, try these steps:

### 1. Check Browser Console
Open the browser developer console (F12) and look for:
- Import errors
- Runtime errors
- Missing dependency errors

### 2. Verify Package Version
Make sure Figma Make is using the latest version:
```bash
npm view @carrier-dpx/air-react-library@latest version
# Should be 0.7.3 or higher
```

### 3. Clear Figma Make Cache
- Try refreshing the page
- Try creating a new Make project
- Check if there's a "Clear Cache" option in Figma Make settings

### 4. Check for Missing Peer Dependencies
The package requires these peer dependencies:
- `@emotion/react`: ^11.0.0
- `@emotion/styled`: ^11.0.0
- `@mui/material`: ^5.0.0
- `react`: ^18.0.0
- `react-dom`: ^18.0.0

Figma Make should install these automatically, but verify they're present.

### 5. Try Simplified Version
Start with a minimal test to isolate the issue:

```tsx
import { FleetThemeProvider } from '@carrier-dpx/air-react-library';

export default function App() {
  return (
    <FleetThemeProvider theme="AirLight">
      <div>Test</div>
    </FleetThemeProvider>
  );
}
```

If this works, gradually add components back.

### 6. Check Icon Imports
Verify icons are being imported correctly. Try this test:

```tsx
import { HomeIcon } from '@carrier-dpx/air-react-library';

export default function App() {
  return <HomeIcon />;
}
```

### 7. Common Issues

**Issue: Icons not rendering**
- Make sure icons are wrapped in `<Icon fontSize="medium">`
- Try adding explicit `variant="outlined"` prop to icons

**Issue: Typography not rendering**
- Verify variant is exactly `"body3Semibold"` (case-sensitive)

**Issue: BottomNavigation not showing**
- Check that `value` prop is a number (0, 1, 2, 3)
- Verify `onChange` handler is provided
- Make sure container has proper height/positioning

### 8. Alternative: Use Direct SVG
If icons still don't work, you can temporarily use inline SVG to test:

```tsx
icon={
  <Icon fontSize="medium">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor"/>
    </svg>
  </Icon>
}
```

## Debugging Steps

1. **Start Simple**: Test FleetThemeProvider alone
2. **Add Components**: Add BottomNavigation without icons
3. **Add Icons**: Add icons one at a time
4. **Check Console**: Look for specific error messages
5. **Verify Imports**: Make sure all imports resolve correctly

## Expected Behavior

When working correctly, you should see:
- BottomNavigation bar at the bottom of the screen
- 4 navigation items with icons and labels
- First item (Home) should be selected/highlighted
- Clicking items should update the selected state
