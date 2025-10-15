# CC360 Sidebar - Embeddable Widget

An embeddable sidebar widget with collapsible navigation and settings menu built with React, TypeScript, and Tailwind CSS that can be added to any website with a single script tag.

## 🚀 Quick Start

### For Users (Embedding the Sidebar)

Add these two lines to any HTML page where you want the sidebar to appear:

```html
<link rel="stylesheet" href="https://your-domain.com/cc360-sidebar.css">
<script src="https://your-domain.com/cc360-sidebar.js"></script>
```

That's it! The sidebar will automatically render on the left side of your page. Make sure to add `margin-left: 320px` to your main content to prevent overlap with the sidebar (or `margin-left: 64px` when collapsed).

### For Developers (Building the Widget)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Development mode:**
   ```bash
   npm run dev
   ```
   This will start a local development server with hot reload.

3. **Build for production:**
   ```bash
   npm run build
   ```
   This creates the embeddable widget files in the `dist/` folder.

4. **Deploy:**
   Upload the following files from the `dist/` folder to your hosting service:
   - `cc360-navbar.js` - The main widget JavaScript
   - `cc360-navbar.css` - The widget styles

## 📦 What Gets Built

The build process creates:
- **cc360-sidebar.js** - A self-contained JavaScript bundle that includes React and all dependencies
- **cc360-sidebar.css** - The compiled Tailwind CSS styles for the sidebar

## 🎨 Features

- **Auto-initialization** - The sidebar automatically renders when the script loads
- **Collapsible sidebar** - Can be collapsed to a narrow icon-only view (64px)
- **Fixed positioning** - The sidebar appears on the left side of the page with a fixed position
- **Settings menu** - Complete settings interface with multiple categories
- **Dark/Light mode** - Automatically adapts to system theme preference
- **Search functionality** - Built-in search bar to find menu items
- **Smooth animations** - Powered by Framer Motion for fluid transitions
- **Collapsible menu items** - Navigation items with sub-menus can expand/collapse
- **Zero configuration** - Just include the script tag and it works

## 🛠️ Customization

To customize the sidebar:

1. Edit `src/components/Sidebar.tsx` to modify the navigation structure
2. Edit `src/components/SettingsMenu.tsx` to modify the settings menu
3. Adjust styles in `src/index.css` if needed
4. Rebuild with `npm run build`

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Sidebar.tsx        # Main sidebar component
│   │   └── SettingsMenu.tsx   # Settings menu component
│   ├── index.css              # Tailwind CSS styles
│   └── main.tsx               # Entry point with auto-initialization
├── dist/                      # Built files (after running npm run build)
├── index.html                 # Demo page
├── vite.config.ts             # Vite configuration for widget build
└── package.json
```

## 🔧 Technical Details

- **Framework:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite
- **UI Components:** Headless UI

## 📝 License

MIT

## 🤝 Contributing

Feel free to submit issues or pull requests!
