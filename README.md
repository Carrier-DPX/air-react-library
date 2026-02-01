# Air React Library

Air web React component library for Figma Make integration.

## Installation

```bash
npm install @carrier-dpx/air-react-library
```

## Peer Dependencies

This library requires the following peer dependencies:

```bash
npm install react react-dom @mui/material @emotion/react @emotion/styled
```

## Usage

### Quick Start with Theme

**Important:** To get the correct Carrier DPX colors and styling, wrap your app with the `FleetThemeProvider`:

```tsx
import { Button, FleetThemeProvider } from '@carrier-dpx/air-react-library';

function App() {
  return (
    <FleetThemeProvider theme="AirLight">
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => console.log('clicked')}
      >
        Get Started
      </Button>
    </FleetThemeProvider>
  );
}
```

### Available Themes

- `"AirLight"` - Light theme (default)
- `"AirDark"` - Dark theme
- `"AHP"` - AHP theme

### Button Component

```tsx
import { Button } from '@carrier-dpx/air-react-library';

function App() {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      onClick={() => console.log('clicked')}
    >
      Get Started
    </Button>
  );
}
```

### Available Props

#### Button

- `variant`: `"contained"` | `"outlined"` | `"text"` (default: `"contained"`)
- `color`: `"base"` | `"primary"` | `"secondary"` | `"error"` | `"warning"` | `"success"` | `"info"` (default: `"primary"`)
- `size`: `"xlarge"` | `"large"` | `"medium"` | `"small"` | `"xsmall"`
- `shape`: `"rounded"` | `"circular"` (default: `"rounded"`)
- `disabled`: `boolean`
- `startIcon`: `ReactNode` - Icon to display before the button text
- `endIcon`: `ReactNode` - Icon to display after the button text
- `onClick`: `() => void` - Click handler
- All standard Material-UI Button props

## Figma Integration

This library is integrated with Figma Code Connect. When using Figma Make, components from this library will be automatically suggested and used in generated code.

## Components

Currently available components:

- **Button** - Material-UI based button component with Carrier DPX design system styling

More components coming soon!

## License

MIT

## Repository

[https://github.com/Carrier-DPX/air-react-library](https://github.com/Carrier-DPX/air-react-library)
