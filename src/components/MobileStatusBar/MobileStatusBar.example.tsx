/**
 * MobileStatusBar Usage Examples
 * 
 * This file demonstrates how to use the MobileStatusBar component
 * in different scenarios.
 */

import React from "react";
import { FleetThemeProvider } from "../theme";
import MobileStatusBar from "./MobileStatusBar";
import AppBar from "../AppBar";
import Toolbar from "../Toolbar";
import Box from "../Box";
import Typography from "../Typography";

/**
 * Example 1: Basic fixed status bar at top of viewport
 * This is the default behavior - fixed position at the top
 */
export function BasicFixedStatusBar() {
  return (
    <FleetThemeProvider>
      <MobileStatusBar time="9:41" />
      {/* Add padding-top to body content to account for fixed status bar */}
      <Box sx={{ pt: "59px" }}>
        <Typography>Content below status bar</Typography>
      </Box>
    </FleetThemeProvider>
  );
}

/**
 * Example 2: Fixed status bar with AppBar below it
 * AppBar needs top offset to account for the 59px status bar
 */
export function StatusBarWithAppBar() {
  return (
    <FleetThemeProvider>
      <MobileStatusBar time="9:41" position="fixed" />
      <AppBar 
        position="fixed" 
        sx={{ top: "59px" }} // Offset by status bar height
      >
        <Toolbar>
          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </AppBar>
      {/* Add padding-top for both status bar and AppBar */}
      <Box sx={{ pt: "123px" }}> {/* 59px status bar + 64px AppBar */}
        <Typography>Content below both status bar and AppBar</Typography>
      </Box>
    </FleetThemeProvider>
  );
}

/**
 * Example 3: Relative position (inline in layout)
 * Useful when the status bar is part of a larger mobile shell component
 */
export function RelativeStatusBar() {
  return (
    <FleetThemeProvider>
      <Box sx={{ border: "1px solid #ccc", borderRadius: 1, overflow: "hidden" }}>
        <MobileStatusBar time="10:24" position="relative" />
        <Box sx={{ p: 2 }}>
          <Typography>Content inside mobile shell</Typography>
        </Box>
      </Box>
    </FleetThemeProvider>
  );
}

/**
 * Example 4: Custom time display
 * You can pass any time string to customize the display
 */
export function CustomTimeStatusBar() {
  const [currentTime, setCurrentTime] = React.useState("9:41");
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <FleetThemeProvider>
      <MobileStatusBar time={currentTime} />
      <Box sx={{ pt: "59px" }}>
        <Typography>Live updating time: {currentTime}</Typography>
      </Box>
    </FleetThemeProvider>
  );
}

/**
 * Example 5: Full mobile shell layout
 * Complete mobile interface with status bar, AppBar, and content
 */
export function FullMobileShell() {
  return (
    <FleetThemeProvider>
      {/* Fixed status bar at top */}
      <MobileStatusBar time="9:41" position="fixed" />
      
      {/* Fixed AppBar below status bar */}
      <AppBar 
        position="fixed" 
        sx={{ top: "59px" }}
        color="paper"
        divider
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Mobile App
          </Typography>
        </Toolbar>
      </AppBar>
      
      {/* Main content area */}
      <Box 
        sx={{ 
          pt: "123px", // Status bar (59px) + AppBar (64px)
          minHeight: "100vh",
          p: 2
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Welcome
        </Typography>
        <Typography>
          This is the main content area. The status bar and AppBar are fixed
          at the top, and this content scrolls below them.
        </Typography>
      </Box>
    </FleetThemeProvider>
  );
}
