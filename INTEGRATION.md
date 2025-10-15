# Integration Guide for GHL

This guide explains how the CC360 Sidebar integrates with GoHighLevel (GHL) and handles page layout.

## Automatic Content Adjustment

The sidebar automatically adjusts your page content to prevent overlap:

### Expanded State (320px)
```css
body.cc360-sidebar-active {
  margin-left: 320px;
}
```

### Collapsed State (64px)
```css
body.cc360-sidebar-collapsed {
  margin-left: 64px;
}
```

### Smooth Transitions
The sidebar includes smooth CSS transitions (0.2s) when toggling between states.

## Native GHL Sidebar

The CC360 Sidebar **automatically hides** the native GHL sidebar using CSS:

```css
/* These GHL elements are hidden */
.lead-connector,
aside[class*="sidebar"],
aside[class*="nav"],
nav[class*="sidebar"],
.hl_nav-header,
.hl_nav-settings {
  display: none !important;
}
```

## How It Works

1. **Initialization**: When the script loads, it adds `cc360-sidebar-active` class to the body
2. **Toggle**: When you click the collapse/expand button, the class switches between `cc360-sidebar-active` and `cc360-sidebar-collapsed`
3. **Custom Event**: The sidebar dispatches a `cc360-sidebar-state-change` event that you can listen to:

```javascript
window.addEventListener('cc360-sidebar-state-change', (event) => {
  console.log('Sidebar collapsed:', event.detail.collapsed);
  // Adjust your custom elements if needed
});
```

## Installation on GHL

### Method 1: Custom Code in GHL Settings

1. Go to **Settings** → **Business** → **Custom Code**
2. Add this to the **Header Tracking Code**:

```html
<script>
  // Set your location ID
  window.GHL_LOCATION_ID = 'YOUR_LOCATION_ID_HERE';
</script>
<link rel="stylesheet" href="https://cc360-navbar-vite.vercel.app/cc360-sidebar.css">
<script src="https://cc360-navbar-vite.vercel.app/cc360-sidebar.js"></script>
```

### Method 2: In a Specific Funnel/Website

1. Edit your funnel or website
2. Go to **Settings** → **Custom Code**
3. Add the same code to the header

### Method 3: Using GHL's Custom Menu Builder

While GHL has a custom menu builder, this sidebar provides:
- Better UX with collapse/expand
- Dark/Light mode support
- Settings menu integration
- Smooth animations
- Consistent navigation across all GHL pages

## Troubleshooting

### Content Still Overlaps

If content still overlaps, add this to your page:

```css
<style>
  /* Ensure main content area respects sidebar margin */
  #app-container,
  .main-content,
  .page-wrapper {
    margin-left: 0 !important;
  }
</style>
```

### Native Sidebar Still Showing

If the native GHL sidebar is still visible, add more specific selectors:

```css
<style>
  /* More aggressive hiding */
  aside,
  nav[role="navigation"]:not(.cc360-sidebar-nav) {
    display: none !important;
  }
</style>
```

### Sidebar Not Loading

Check browser console for errors. Common issues:
- CORS errors: Make sure the script is loaded from a public URL
- Location ID not set: Set `window.GHL_LOCATION_ID` before loading the script
- Script blocked: Check browser extensions (ad blockers, etc.)

## Advanced Configuration

### Custom Styling

Override sidebar styles by adding CSS after the sidebar stylesheet:

```html
<link rel="stylesheet" href="https://cc360-navbar-vite.vercel.app/cc360-sidebar.css">
<style>
  /* Your custom styles */
  #cc360-sidebar-root .sidebar-custom {
    background: #your-color;
  }
</style>
```

### Disable Auto-Margin

If you want to manually control the layout:

```html
<style>
  /* Disable auto-margin */
  body.cc360-sidebar-active,
  body.cc360-sidebar-collapsed {
    margin-left: 0 !important;
  }
  
  /* Apply your own layout */
  .your-content-wrapper {
    padding-left: 320px;
  }
</style>
```

### Listen to Sidebar Events

```javascript
// Listen for sidebar state changes
window.addEventListener('cc360-sidebar-state-change', (event) => {
  const isCollapsed = event.detail.collapsed;
  const width = isCollapsed ? 64 : 320;
  
  // Adjust your custom elements
  document.querySelector('.your-element').style.marginLeft = `${width}px`;
});
```

## Features

✅ **Auto-hide native GHL sidebar** - No manual CSS needed
✅ **Auto-adjust content margin** - Prevents overlap
✅ **Smooth transitions** - Professional animations
✅ **Dark/Light mode** - Auto-detects system preference
✅ **Collapsible** - Save screen space when needed
✅ **Settings menu** - Complete GHL settings integration
✅ **Mobile responsive** - Auto-collapses on mobile
✅ **Event system** - Programmatic control if needed

## Support

For issues or questions, check the GitHub repository or create an issue.

